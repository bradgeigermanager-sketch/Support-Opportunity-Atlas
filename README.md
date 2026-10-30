# Support Opportunity Atlas

A structured, searchable map of needs, opportunities, skills, resources, organizations, and impact pathways.

**Website:** [GitHub Pages](https://bradgeigermanager-sketch.github.io/Support-Opportunity-Atlas/)  
**Repository:** [Support-Opportunity-Atlas](https://github.com/bradgeigermanager-sketch/Support-Opportunity-Atlas)

## Project direction

The Atlas evolves the original [Opportunity Atlas v1.0 overview](opportunity_atlas_1point0_overview.txt) into a governed, evidence-aware system for discovering needs and matching contributions to useful action.

The v1.0 overview is retained as the historical conceptual baseline. The v2.0 documents add explicit data structures, lifecycle states, validation, matching, provenance, impact measurement, and quality safeguards.

## Repository map

- `opportunity_atlas_1point0_overview.txt` — preserved original v1.0 concept.
- `docs/architecture/` — system boundaries and architecture.
- `docs/ontology/` — entities, concepts, and relationships.
- `docs/governance/` — need/opportunity states and publication safeguards.
- `docs/procedures/` — discovery and validation procedure.
- `docs/matching/` — capability-to-opportunity matching model.
- `docs/evidence/` — provenance, verification, confidence, and evidence.
- `docs/quality/` — quality dimensions, decision safeguards, review, and correction procedures.
- `docs/impact/` — impact measurement and attribution.
- `docs/data-model/` — relational and JSONB persistence model.
- `schemas/` — machine-readable JSON Schema contracts, including quality assessments.
- `examples/` — clearly labelled illustrative records.
- `site/` — site-specific supporting assets.
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow.

## Core model

`CAUSE → PROBLEM / NEED → OPPORTUNITY → CONTRIBUTION ACTION → ORGANIZATION / PROJECT → OUTPUT → OUTCOME → IMPACT`

This is a navigational model, not an assertion that every relationship is linear or already proven. The ontology permits many-to-many and qualified relationships.

## Important distinctions

- A **need** is a condition or gap that may warrant attention.
- An **opportunity** is a defined and actionable way to contribute toward a need.
- A **reported need** is an assertion from a source; it is not automatically verified.
- A **verified need** has supporting evidence assessed under a documented method.
- An **open opportunity** has an identified responsible contact or mechanism and has been checked for current status.
- A **potential match** is a compatibility estimate, not a guarantee of suitability or impact.
- A **quality assessment** evaluates defined dimensions and permitted uses; it is not itself proof that a record is true.

The site currently contains illustrative interface examples only. They are not real solicitations, endorsements, or verified local listings.

## Development principles

1. Preserve source history; expand through additive, versioned artifacts.
2. Separate observation, assertion, inference, recommendation, and measured result.
3. Record provenance and timestamps for consequential claims.
4. Never treat missing data as a negative finding.
5. Make uncertainty, conflicts, and qualification visible.
6. Do not turn a match score into an authoritative decision.
7. Preserve corrections and re-evaluate dependent recommendations.
8. Avoid publishing personal or sensitive information without a valid basis.
9. Measure outputs and outcomes separately; do not overstate attribution.
10. Keep records machine-readable and human-reviewable.

## GitHub Pages

The site is deployed from the repository root using GitHub Actions. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source if it is not already selected. The workflow deploys on pushes to `main` and can also be run manually.

See [GitHub's Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
