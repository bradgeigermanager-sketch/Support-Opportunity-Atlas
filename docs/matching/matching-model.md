# Capability-to-Opportunity Matching Model

## 1. Purpose

Estimate how well a participant's available capabilities and constraints align with an opportunity's requirements. Matching is a recommendation aid, not a decision about a person's worth, eligibility, or guaranteed success.

## 2. Inputs

### Participant-side profile (opt-in)
- skills and self-assessed proficiency;
- qualifications and validity;
- relevant experience;
- interests and preferred causes;
- available time and schedule;
- location, travel radius, and remote preference;
- resources offered and capacity;
- accessibility needs or constraints, only when necessary and voluntarily supplied.

### Opportunity-side requirements
- required and preferred skills;
- mandatory qualifications;
- tasks and expected contribution;
- time, schedule, duration, and location;
- resources needed;
- eligibility and safety requirements;
- opportunity state and last-confirmed date.

## 3. Hard constraints vs soft preferences

Hard constraints are evaluated first: closed/expired status, mandatory legal or safety requirements, required qualifications, incompatible schedule, and non-negotiable location or access conditions.

Soft preferences include cause interest, preferred contribution type, optional skills, travel convenience, and desired maturity level. A hard constraint failure should not be hidden by a high weighted score.

## 4. Explainable scoring

For candidates that pass hard constraints, a configurable score may be computed:

`Match = 100 × Σ(wᵢ × sᵢ) / Σ(wᵢ)`

Where each `sᵢ` is a normalized compatibility value from 0 to 1, and `wᵢ` is a documented criterion weight. Example dimensions:
- skill coverage;
- qualification alignment;
- time availability;
- location/remote fit;
- resource contribution fit;
- cause and task preference;
- experience level fit.

Weights must be versioned and visible to administrators. Scores should be accompanied by a factor-by-factor explanation and missing-data indicators.

## 5. Missing information

Missing data is not a mismatch. Use three-valued evaluation:
- `match`
- `mismatch`
- `unknown`

If a required qualification is unknown, mark the match as needing clarification rather than treating it as satisfied. Do not impute sensitive personal attributes.

## 6. Output

A match result should contain:
- opportunity ID and version;
- participant profile version or session reference;
- evaluation timestamp;
- ruleset/version;
- hard-constraint results;
- dimension scores and weights;
- unknown/missing fields;
- overall compatibility band;
- explanation and next-step questions;
- expiry or re-evaluation trigger.

Suggested bands: Strong potential fit, Possible fit, Needs clarification, Not currently compatible. Avoid false precision such as presenting 92.37% as a probability of success.

## 7. Safeguards

- Do not rank people for public display.
- Do not use protected or sensitive attributes to infer suitability.
- Provide a way to correct inaccurate profile data.
- Explain why an opportunity was recommended.
- Permit human review and user override.
- Recalculate when opportunity status or participant availability changes.
- Do not recommend stale or unconfirmed opportunities as active.

## 8. Pseudocode

```text
function match(profile, opportunity, ruleset):
    if opportunity.status not in ruleset.active_statuses:
        return not_recommended("Opportunity not active")

    hard_results = evaluate_hard_constraints(profile, opportunity)

    if hard_results contains confirmed_mismatch:
        return not_recommended_with_explanation(hard_results)

    if hard_results contains unknown:
        return needs_clarification(hard_results)

    dimensions = evaluate_soft_compatibility(profile, opportunity, ruleset)
    score = weighted_normalized_score(dimensions, ruleset.weights)

    return explainable_match(
        score_band(score),
        dimensions,
        missing_fields(dimensions),
        ruleset.version
    )
```
