# Opportunity Atlas — System Architecture v2.0

## 1. Purpose

The Opportunity Atlas connects needs, problems, opportunities, contribution capabilities, resources, organizations, projects, and impact evidence. It supports discovery from multiple starting points: a cause, a problem, a place, a skill, a resource, an organization, or a desired contribution.

The Atlas is not merely a directory of organizations. Its primary unit of discovery is the relationship between a documented need and an actionable contribution pathway.

## 2. Architectural layers

| Layer | Responsibility | Primary artifacts |
|---|---|---|
| Experience | Search, exploration, record views, pathway planning | Website, forms, maps, dashboards |
| Discovery | Collect candidate needs, opportunities, and sources | Discovery jobs, source registry |
| Validation | Assess relevance, recency, authority, corroboration, and safety | Validation records, review decisions |
| Domain model | Define entities, attributes, states, and relationships | Ontology, controlled vocabularies |
| Matching | Compare requirements with capabilities and constraints | Match explanations, scores |
| Execution | Track accepted contributions, projects, tasks, and milestones | Project and activity records |
| Evaluation | Compare baselines, outputs, outcomes, and impacts | Measurement plans, results |
| Governance | Access, review, provenance, versioning, retention, audit | Policies, event logs, approvals |
| Integration | Connect external registries, APIs, maps, and knowledge sources | Adapters, API contracts |

## 3. Core information flow

`SOURCE → OBSERVATION / ASSERTION → NEED ASSESSMENT → OPPORTUNITY DEFINITION → VALIDATION → PUBLICATION → MATCH → ACCEPTANCE → ACTION → EVALUATION`

Each transition is an explicit event or decision. A source document does not automatically become a validated need; a need does not automatically become an opportunity; a match does not automatically become an accepted assignment.

## 4. System boundaries

The Atlas may:
- organize information from public and authorized sources;
- identify gaps, duplicates, contradictions, and stale records;
- suggest potential contribution matches;
- generate structured plans and referral pathways;
- record human review and measured results.

The Atlas must not:
- imply that an organization endorses a listing without evidence;
- infer consent or availability from a public mention;
- represent a model-generated estimate as an observed result;
- make high-stakes eligibility, legal, medical, or financial determinations;
- publish private contact details or sensitive personal information by default.

## 5. Data architecture

Use a hybrid relational and document model.

- PostgreSQL tables provide stable identifiers, ownership, status, temporal metadata, access control, and queryable relationships.
- JSONB stores versioned domain payloads whose fields vary by entity type.
- Join tables represent many-to-many relationships and relationship qualifiers.
- Append-only event records preserve state changes and review decisions.
- Search indexes and graph projections are derived views; they are rebuildable and do not replace canonical records.

A record's identity is distinct from its versions. Published versions are immutable; corrections create a new version that supersedes the previous one.

## 6. Canonical entity families

1. Need and problem.
2. Opportunity and contribution action.
3. Cause and domain.
4. Skill, qualification, experience, and capability.
5. Resource, capacity, and constraint.
6. Organization, program, project, and team.
7. Place, jurisdiction, and service area.
8. Source, evidence item, assertion, and assessment.
9. Output, outcome, impact indicator, and measurement.
10. Person or participant reference, with privacy minimization.

## 7. Deployment stages

- **Stage A — Documentation and static catalogue:** ontology, schemas, procedures, public explanatory website.
- **Stage B — Curated records:** reviewed records in versioned JSON files or a managed database.
- **Stage C — Search and matching:** filters, explainable compatibility, geographic and temporal constraints.
- **Stage D — Workflow integration:** submissions, moderation, organization confirmation, project tracking.
- **Stage E — Evaluation and federation:** impact reporting, partner APIs, interoperable knowledge graph.

The current repository implements Stage A and an illustrative Stage B interface only.
