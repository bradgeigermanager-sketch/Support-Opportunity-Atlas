# Relational + JSONB Persistence Model

## 1. Design choice

Use PostgreSQL as the canonical store:
- relational columns for identity, ownership, state, timestamps, governance, and frequently queried keys;
- JSONB for versioned type-specific payloads;
- relationship tables for graph edges;
- append-only event tables for audit and state transitions.

This is a proposed logical model, not a migration-ready production schema. Constraints, indexes, RLS policies, retention, and tenancy rules require implementation review.

## 2. Core tables

### process-style entity registry

```sql
CREATE TABLE atlas_entities (
  entity_id UUID PRIMARY KEY,
  entity_type TEXT NOT NULL,
  canonical_name TEXT,
  current_version_id UUID,
  lifecycle_status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by TEXT
);

CREATE TABLE atlas_entity_versions (
  entity_version_id UUID PRIMARY KEY,
  entity_id UUID NOT NULL REFERENCES atlas_entities(entity_id),
  version_number INTEGER NOT NULL,
  schema_version TEXT NOT NULL,
  payload JSONB NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  recorded_by TEXT,
  change_reason TEXT,
  supersedes_version_id UUID REFERENCES atlas_entity_versions(entity_version_id),
  UNIQUE(entity_id, version_number)
);
```

### relationships

```sql
CREATE TABLE atlas_relationships (
  relationship_id UUID PRIMARY KEY,
  subject_entity_id UUID NOT NULL REFERENCES atlas_entities(entity_id),
  predicate TEXT NOT NULL,
  object_entity_id UUID NOT NULL REFERENCES atlas_entities(entity_id),
  qualifiers JSONB NOT NULL DEFAULT '{}'::jsonb,
  valid_from TIMESTAMPTZ,
  valid_to TIMESTAMPTZ,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  relationship_status TEXT NOT NULL DEFAULT 'active'
);
```

### sources and evidence

```sql
CREATE TABLE atlas_sources (
  source_id UUID PRIMARY KEY,
  source_type TEXT NOT NULL,
  source_uri TEXT,
  publisher TEXT,
  published_at TIMESTAMPTZ,
  accessed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE atlas_assertions (
  assertion_id UUID PRIMARY KEY,
  subject_entity_id UUID REFERENCES atlas_entities(entity_id),
  predicate TEXT NOT NULL,
  object_value JSONB,
  polarity TEXT NOT NULL,
  valid_from TIMESTAMPTZ,
  valid_to TIMESTAMPTZ,
  source_id UUID REFERENCES atlas_sources(source_id),
  assessment_state TEXT NOT NULL DEFAULT 'unassessed',
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

## 3. Indexing suggestions

- B-tree indexes on entity type, lifecycle status, canonical name, timestamps.
- GIN indexes on JSONB fields used in filters.
- Full-text indexes for descriptive content and aliases.
- GiST indexes for geographic geometry and temporal ranges where applicable.
- Composite indexes based on measured query patterns, not speculative indexing.

## 4. Versioning and current-version pointer

A new version is inserted; prior versions are not updated. Updating `current_version_id` is a controlled pointer change on the entity registry. The version row should be immutable through application permissions or database triggers.

## 5. Governance and access

Apply row-level security for private submissions, partner workspaces, and internal moderation. Public read views should expose only approved fields. Keep secrets and credentials out of the database payloads and repository.

## 6. Derived projections

Search documents, graph projections, cached match results, and aggregate impact views are derived. Each projection should record its source version(s), build timestamp, and ruleset version so it can be rebuilt and audited.
