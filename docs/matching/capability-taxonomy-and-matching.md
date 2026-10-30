# Capability Taxonomy and Capability-to-Opportunity Matching

## Purpose

This specification describes the resources, skills, qualifications, permissions, time, experience, and other conditions that can make participation possible. It supports two-way discovery:

- **Capability-led:** a person, team, organization, community, or asset describes what it can contribute and discovers suitable opportunities.
- **Need-led:** an opportunity describes required capabilities and discovers possible contributors or missing resources.

A capability profile is not a résumé, identity record, credential registry, or proof of competence. It is a structured matching input whose assertions retain their evidence state and permitted use.

## 1. Capability dimensions

| Dimension | What it describes | Examples |
|---|---|---|
| Skills and competencies | Work a participant can perform | Translation, repair, analysis, facilitation |
| Qualifications and authorization | Formal or role-specific permission | License, safety training, equipment authorization |
| Material and financial resources | Assets that can be contributed or accessed | Tools, funding, vehicles, space, compute |
| Time and scheduling | Temporal capacity | Hours, shifts, seasonal windows, deadlines |
| Access and permissions | Rights to enter, use, or administer resources | Facility, data, system, land-use access |
| Geographic and mobility | Where participation can occur | Service area, travel, remote access |
| Experience and track record | Relevant prior activity | Projects, portfolio, domain experience |
| Organizational and social capacity | Collective ability and relationships | Team capacity, partner network, referral path |
| Preferences | Desired or acceptable participation conditions | Paid work, remote work, learning goals |

The machine-readable vocabulary is in `data/capability-taxonomy.v1.json`.

## 2. Capability assertion structure

Each capability assertion should record:

- stable capability identifier and family;
- proficiency or capacity level, including `unknown`;
- evidence state: self-reported, source-reported, documented, independently verified, disputed, or unknown;
- evidence references and validity dates where available;
- quantity and unit for measurable resources or capacity;
- concise scope notes, including exclusions.

Do not treat a self-reported skill as a verified credential. Do not infer that possession of equipment implies authorization to operate it. A qualification may be time-limited, jurisdiction-specific, or restricted in scope.

## 3. Opportunity requirement model

Each opportunity should express requirements using the same capability identifiers where possible. A requirement should include:

- `capability_id` and family;
- requirement strength: mandatory, preferred, trainable, or informational;
- minimum level or quantity, with unit;
- whether equivalency or supervised participation is acceptable;
- evidence requirement and verification method;
- timing, location, and delivery constraints;
- whether the requirement is individual or can be satisfied by a team;
- acceptable substitutes and dependencies.

A capability gap is not automatically disqualifying. A trainable requirement may produce a learning pathway or a team-composition recommendation.

## 4. Matching sequence

1. **Normalize:** map synonymous terms to canonical capability identifiers without discarding original wording.
2. **Scope:** determine whether each assertion applies to an individual, team, organization, asset, or facility.
3. **Check hard constraints:** test mandatory legal authorization, safety, eligibility, timing, geography, access, and explicit participant constraints.
4. **Compare requirements:** classify each as met, partially met, trainable, unmet, conflicting, or unknown.
5. **Assess evidence:** retain the evidence state; apply stricter requirements for high-consequence roles.
6. **Identify dependencies:** detect combinations such as skill + license + equipment + facility access.
7. **Build options:** direct match, supervised match, training pathway, team assembly, resource acquisition, or no current match.
8. **Explain:** show matched requirements, gaps, constraints, evidence quality, and why the result was produced.
9. **Review:** allow human review, correction, appeal, and re-evaluation when source data changes.

## 5. Hard gates and soft preferences

Hard gates must not be compensated for by a high score elsewhere. Examples include a legally required license, required consent, mandatory safety training, a hard deadline, or an explicit geographic restriction. If a hard gate is unknown, the result is **needs verification**, not automatically pass or fail.

Soft preferences may influence ranking after hard gates are evaluated. Examples include preferred subject domain, remote preference, additional experience, or a nonessential skill.

## 6. Explainable match outcomes

Use explicit outcome labels rather than a single opaque score:

- `eligible_candidate` — all known mandatory requirements met; evidence conditions satisfied;
- `provisional_candidate` — likely fit but one or more facts need confirmation;
- `trainable_candidate` — gap can be addressed through an identified training or supervision pathway;
- `team_composition_candidate` — requirements can be met by a proposed group, not the individual alone;
- `resource_gap` — relevant capability exists but a required asset, permission, or resource is missing;
- `constraint_blocked` — a confirmed hard constraint prevents the match;
- `insufficient_information` — required information is missing or contradictory.

Optional ranking scores must expose their components, weights, missing-data treatment, and version. Scores must never override hard constraints or imply certainty.

## 7. Privacy and fairness safeguards

- Collect only information needed for a defined matching purpose.
- Prefer private matching and publish only user-approved summaries.
- Do not expose personal contact details, sensitive characteristics, or raw credential documents in public profiles.
- Do not infer protected or sensitive traits from proxies.
- Provide equivalent ways to demonstrate capability where appropriate; avoid assuming one credential pathway is the only valid evidence unless legally required.
- Record why a requirement is necessary and who defined it.
- Never use disability, age, family status, or other sensitive personal information as a proxy for reliability or worth.
- Do not automatically reject based on missing data; distinguish unknown from unmet.

## 8. Example dependency patterns

| Opportunity need | Potential requirement set | Matching note |
|---|---|---|
| Community repair clinic | Repair skill + tools + safe workspace + scope boundary | Regulated repairs require appropriately authorized personnel |
| Public-data translation | Language proficiency + source-language comprehension + editorial review | Machine translation alone is not evidence of quality |
| Research instrument session | Method training + instrument authorization + facility access | Booking access does not imply authorization |
| Grant administration | Budgeting + reporting capacity + eligible applicant status | Applicant eligibility is a separate hard gate |
| Heat-response outreach | Outreach skill + accessible communication + local coordination | Clinical claims or care tasks require appropriate qualifications |

## 9. Lifecycle and maintenance

Capability profiles and requirement sets are versioned. Preserve prior assertions, source references, verification dates, and corrections. Expired or disputed evidence should trigger reassessment of dependent matches. A match should record the profile versions, opportunity version, taxonomy version, ruleset version, and assessment time used to produce it.

## 10. Machine-readable artifacts

- `data/capability-taxonomy.v1.json` — proposed controlled vocabulary.
- `schemas/capability-profile.schema.json` — capability profile contract.
- `examples/capability-profile.example.json` — synthetic example only.

Opportunity requirement schemas and a persisted match-assessment schema should be added as the next implementation layer.
