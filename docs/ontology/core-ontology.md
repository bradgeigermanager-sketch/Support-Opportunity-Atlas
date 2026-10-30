# Core Ontology and Relationship Model

## 1. Modeling rules

- Give each canonical entity a stable opaque identifier.
- Keep an entity's identity separate from its versioned descriptive payload.
- Model relationships as first-class records when they need provenance, dates, confidence, status, or qualifiers.
- Do not collapse an observed fact, a source assertion, an inference, and a recommendation into one field.
- Allow one entity to participate in multiple causes, locations, organizations, and contribution pathways.
- Use controlled vocabulary identifiers alongside human-readable labels.

## 2. Core entity definitions

| Entity | Definition | Examples of attributes |
|---|---|---|
| Cause | Broad domain of concern or public benefit | name, parent cause, scope |
| Problem | Described undesirable condition or barrier | description, affected context |
| Need | A specific gap or requirement supported by one or more assertions | requested change, urgency, scale |
| Opportunity | Actionable, bounded pathway for contributing toward a need | objective, eligibility, status, time |
| Contribution action | A type of action a participant may perform | teach, build, research, mentor |
| Skill | Learned or practiced capability | taxonomy term, proficiency framework |
| Qualification | Credential or authorization required or preferred | issuer, level, validity |
| Resource | An input that may enable action | type, quantity, availability |
| Capacity | Amount of resource or work that can be supplied | amount, unit, time window |
| Organization | An organized entity with identity and activities | name, identifiers, jurisdiction |
| Program | Coordinated set of activities operated by an organization or group | purpose, schedule |
| Project | Bounded implementation effort | scope, milestones, owners |
| Place | Geographic entity or service area | geometry, hierarchy, jurisdiction |
| Source | Origin from which information was obtained | URI, publisher, access date |
| Evidence item | Specific material supporting or challenging a claim | source, excerpt locator, date |
| Assertion | A proposition made by a source or actor | subject, predicate, object, polarity |
| Assessment | A reasoned evaluation of evidence or record quality | method, reviewer, conclusion |
| Output | Direct product or service delivered | count, unit, period |
| Outcome | Change associated with delivered outputs | indicator, baseline, result |
| Impact | Broader and longer-term effect, with attribution limits | population, duration, method |

## 3. Relationship types

Use explicit predicates, not untyped generic links.

- `addresses`: opportunity → need or problem.
- `contributes_to`: action → outcome or cause.
- `requires_skill`: opportunity/action → skill.
- `requires_qualification`: opportunity/action → qualification.
- `requires_resource`: opportunity/project → resource.
- `offers_capacity`: actor/organization → resource or skill.
- `hosted_by`: program/project/opportunity → organization.
- `operates_in`: organization/program → place.
- `serves_population`: program → population description.
- `supported_by`: assertion/assessment → evidence item.
- `derived_from`: record/version → source or prior record.
- `supersedes`: record version → prior version.
- `measures`: indicator → output/outcome/impact concept.
- `collaborates_with`: organization ↔ organization.
- `depends_on`: project/task/opportunity → prerequisite.

Each relationship may carry: `relationship_id`, `subject_id`, `predicate`, `object_id`, `valid_from`, `valid_to`, `recorded_at`, `source_refs`, `confidence`, `status`, and `qualifiers`.

## 4. Need and opportunity distinctions

A need describes a gap. An opportunity describes an actionable response. One need may have many opportunities; one opportunity may address multiple needs. An opportunity may be proposed before a need is fully verified, but its evidence state must remain visible.

Recommended need states:
- `candidate`
- `reported`
- `under_review`
- `corroborated`
- `verified`
- `disputed`
- `stale`
- `closed`

Recommended opportunity states:
- `draft`
- `submitted`
- `under_review`
- `published`
- `paused`
- `filled`
- `completed`
- `expired`
- `withdrawn`
- `rejected`

These states are not interchangeable. A published opportunity can reference a need that is reported rather than independently verified, provided the qualification is explicit and publication policy permits it.

## 5. Taxonomy strategy

Maintain separate taxonomies for:
- cause/domain;
- problem category;
- action/contribution type;
- skills and competencies;
- resource types;
- population descriptors;
- geographic levels;
- impact scales and indicator families;
- opportunity maturity.

Taxonomy terms should include stable IDs, preferred labels, definitions, synonyms, parent terms, language tags, source, version, and lifecycle status. Avoid using free text as the only machine-readable category.

## 6. Graph interpretation

The original v1.0 chain remains a useful overview:

`CAUSE → PROBLEM → OPPORTUNITY → ACTION → ORGANIZATION → IMPACT`

The v2.0 graph expands this into a network. Evidence and provenance attach to claims and edges; resources and skills attach to actions; projects connect actions to outputs; indicators connect outputs to outcomes and impacts.
