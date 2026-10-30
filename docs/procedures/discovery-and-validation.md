# Procedure: Opportunity Discovery and Validation

## 1. Objective

Convert candidate information into well-described, reviewable need and opportunity records without overstating evidence or losing provenance.

## 2. Inputs

- Search query, referral, public source, submission, or partner feed.
- Candidate cause, problem, location, organization, or capability.
- Applicable source and privacy policies.
- Existing Atlas records for duplicate and relationship checks.

## 3. Procedure

### Step 1 — Capture the source
Record source URI or identifier, publisher/author when known, source type, publication date, access date, language, and relevant locator (page, section, record ID). Preserve the original wording or a lawful excerpt where needed.

### Step 2 — Extract claims
Separate atomic claims:
- what condition is described;
- who is affected (at an appropriate aggregate level);
- where and when it applies;
- what response is requested;
- who is making the assertion;
- what evidence supports it.

Do not merge distinct claims into a single summary.

### Step 3 — Classify the record
Determine whether the information describes a cause, problem, need, opportunity, organization, program, resource, capability, or result. A statement such as “the region needs better STEM education” is a broad assertion, not yet a bounded opportunity.

### Step 4 — Normalize
Map terms to controlled vocabulary entries while preserving source terminology as aliases. Normalize dates, units, geographic identifiers, and organization names without discarding the original values.

### Step 5 — Resolve entities and duplicates
Compare identifiers, names, aliases, locations, source references, and temporal overlap. Candidate matches must be reviewed before records are merged. Preserve distinct branches or programs when they are not the same entity.

### Step 6 — Assess evidence
Evaluate source authority for the specific claim, proximity to the event or need, recency, independence, corroboration, conflicts, and method limitations. Do not treat source reputation as universal proof.

### Step 7 — Define the opportunity
Where a viable response exists, describe:
- objective and expected contribution;
- actions that can be taken;
- skills and qualifications;
- resources and capacity;
- time commitment and schedule;
- location and remote/onsite conditions;
- eligibility, risks, and accessibility;
- responsible organization or safe contact pathway;
- validity and recheck date.

### Step 8 — Assign states
Set the need evidence state and opportunity operational state independently. A draft may be retained internally while evidence is incomplete. Publish only when applicable gates are met.

### Step 9 — Review and publish
Record reviewer, review method, decision, rationale, confidence, unresolved questions, and version. Publish the minimum information necessary for useful discovery.

### Step 10 — Monitor
Recheck time-sensitive fields. Record status changes as new versions or events. Expire or pause records when freshness can no longer be established.

## 4. Validation checklist

- [ ] Source is traceable.
- [ ] Publication and access dates are recorded.
- [ ] Assertions are separated from inferences.
- [ ] Need and opportunity are not conflated.
- [ ] Duplicate candidates were checked.
- [ ] Contradictory evidence is preserved.
- [ ] Location and time scope are explicit.
- [ ] Responsible party or application path is identified.
- [ ] Required skills, resources, and constraints are explicit.
- [ ] Privacy and safety review is complete.
- [ ] Evidence state and operational state are assigned separately.
- [ ] Review/expiry date is set.

## 5. Pseudocode

```text
for each candidate_source:
    source_record = capture_provenance(candidate_source)
    claims = extract_atomic_claims(candidate_source)

    for claim in claims:
        entity_type = classify(claim)
        normalized_claim = normalize_without_losing_original(claim)
        candidates = find_possible_duplicates(normalized_claim)

        if candidates:
            record_candidate_links(candidates)
            request_review_before_merge()

        evidence = assess_sources_and_conflicts(claim)
        need_state = assign_need_evidence_state(evidence)

        if describes_actionable_response(claim):
            opportunity = construct_opportunity(claim)
            opportunity_state = assess_operational_readiness(opportunity)
        else:
            opportunity = null

        decision = apply_publication_gates(
            evidence, need_state, opportunity, opportunity_state
        )

        save_immutable_version(decision)
        schedule_revalidation(decision)
```

## 6. Failure handling

If source access fails, preserve the attempted URI and failure date. If a source is stale, downgrade freshness rather than silently deleting the record. If sources conflict, preserve both and mark the claim disputed. If no responsible party can be identified, do not imply that a contribution is currently solicited.
