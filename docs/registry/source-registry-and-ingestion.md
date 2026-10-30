# Source Registry and Ingestion Procedure

## 1. Purpose

This procedure governs discovery and ingestion of opportunity sources. It separates a source's identity and collection behavior from the individual listings extracted from it.

## 2. Source categories

- Official government program and agency pages.
- Official grantmaker, foundation, university, employer, nonprofit, and program pages.
- Public procurement and tender portals.
- Research registries and institutional study pages.
- Public APIs, RSS/Atom feeds, and structured data endpoints.
- Partner-submitted listings.
- Direct confirmations from accountable publishers.
- Secondary directories and aggregators.

Secondary directories are discovery aids. Prefer the responsible publisher's original page for status, terms, and application instructions.

## 3. Source registration fields

Each source record should include:
- stable source ID and source URI;
- source type and publisher entity reference;
- claimed jurisdiction and topical scope;
- access method (manual, API, feed, permitted crawler, partner submission);
- terms / license / reuse constraints;
- authentication requirement, if any (never store secrets in the registry);
- expected update frequency;
- last checked, last successful retrieval, and next scheduled check;
- extraction method and parser version;
- source reliability assessment with rationale;
- contact or correction route;
- lifecycle status (proposed, active, degraded, blocked, retired).

## 4. Ingestion pipeline

```text
discover_source
  -> register_source_candidate
  -> assess_authority_and_reuse
  -> approve_collection_method
  -> retrieve_source_observation
  -> preserve_timestamp_and_locator
  -> extract_candidate_listings
  -> normalize_without_guessing
  -> classify_opportunity_types
  -> resolve_possible_duplicates
  -> assess_claims_and_quality
  -> human_review_when_required
  -> publish_or_restrict
  -> schedule_recheck
```

## 5. Source observation

Every retrieval or direct confirmation creates an observation with:
- source ID;
- observed-at timestamp;
- retrieval result and status code where applicable;
- canonical URI and final URI where available;
- content hash or version marker where lawful and practical;
- extraction/parser version;
- relevant page section, API object, document page, or feed item locator;
- captured assertions and extraction confidence;
- retrieval errors or partial-content warnings.

Store only the content needed for evidence, audit, and lawful reuse. A link and locator may be preferable to copying an entire source.

## 6. Extraction rules

- Preserve the source's original title and wording in the observation.
- Store normalized title and summary separately.
- Do not infer missing pay, eligibility, deadline, location, or availability.
- Preserve dates exactly as stated and record timezone or ambiguity.
- Separate publisher assertions from extracted model interpretations.
- Capture the application URL separately from the source page URL.
- Identify recurring programs and cycles; do not collapse separate application rounds.
- Flag pay-to-apply, unusual payment instructions, credential requests, and sensitive-data requests for review.
- Do not bypass access controls, authentication, rate limits, or source terms.

## 7. Reconciliation

On each new observation:
1. Resolve the source record.
2. Identify candidate listings using external identifiers and matching signals.
3. Compare against the latest listing version.
4. Record changed fields and source evidence.
5. Decide whether the change is a correction, new version, new cycle, or separate listing.
6. Keep the prior version intact.
7. Reassess availability and review due date.
8. Trigger human review when a material or consequential claim changes.

## 8. Source health states

- `active`: retrieval or confirmation is operating normally.
- `degraded`: intermittent failures or incomplete content.
- `blocked`: access is unavailable or disallowed; do not retry in ways that bypass restrictions.
- `retired`: source is no longer monitored.
- `proposed`: not yet approved for ingestion.

A source failure does not prove its listings have closed. Mark listing availability unknown or stale when appropriate.

## 9. Human review triggers

Require review when:
- source authority is unclear;
- a listing involves health, legal, financial, housing, emergency, child-facing, or other high-consequence services;
- publisher identity is disputed;
- compensation or fees are ambiguous;
- eligibility terms conflict across sources;
- source material appears fraudulent, manipulated, or materially inconsistent;
- a possible duplicate would change the cycle or terms;
- automated extraction confidence is low;
- personal or sensitive information appears in the captured content.

## 10. Output events

Emit auditable events such as:
- `source.registered`
- `source.observation.created`
- `listing.candidate.extracted`
- `listing.normalized`
- `listing.classified`
- `listing.duplicate.suspected`
- `listing.claim.assessed`
- `listing.review.required`
- `listing.published`
- `listing.availability.checked`
- `listing.version.created`
- `source.health.changed`

Events describe what the system did; they do not themselves prove the truth of the underlying listing.
