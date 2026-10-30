# Quality Assurance, Decision Safeguards, and Review

## 1. Purpose

The Support Opportunity Atlas is a decision-support and discovery system. It helps people and organizations identify needs, discover potentially relevant resources and opportunities, evaluate evidence, and coordinate action.

It must not turn incomplete records, weak evidence, automated classifications, or numerical scores into authoritative conclusions. This document defines controls that keep the Atlas transparent, correctable, proportionate, and accountable.

The Atlas should distinguish:

- **Observed information** — what a source or participant actually reported.
- **Normalized information** — structured values derived from reported information.
- **Inferences** — interpretations or conclusions drawn from one or more records.
- **Recommendations** — suggested next steps based on stated criteria.
- **Decisions** — actions taken by an authorized person or organization.

These are different information types and must remain distinguishable in records, interfaces, exports, and audit history.

## 2. Core safeguards

### 2.1 No unsupported certainty

1. Do not represent an unverified report as a verified fact.
2. Do not infer that a person or organization is eligible, ineligible, trustworthy, untrustworthy, available, or unavailable solely from missing data.
3. Do not treat a failed lookup, absent record, stale source, or unanswered request as proof that something does not exist.
4. Do not convert a match score into a probability unless the score has been calibrated and validated for that specific interpretation.
5. Display the evidence, assumptions, date, and limitations behind consequential recommendations.

### 2.2 Preserve competing information

When records conflict, preserve each assertion with its source, timestamp, scope, and status. Do not silently overwrite an earlier assertion or choose the newest assertion as automatically correct.

A conflict should create a review condition with:
- the affected entities and fields;
- each competing value;
- source identity and source type;
- observation and retrieval timestamps;
- provenance and verification status;
- the rule, if any, that could resolve the conflict;
- the unresolved questions and review outcome.

### 2.3 Separate identity from association

A shared name, address, logo, contact detail, location, or keyword is not sufficient by itself to establish that two records refer to the same entity or that an entity is affiliated with a program.

Represent entity resolution and relationship assertions separately. Record the matching basis, alternatives considered, confidence, and review status. Avoid propagating a disputed association into downstream recommendations as if it were established.

### 2.4 Missingness is not a negative finding

Use explicit states such as `unknown`, `not_collected`, `not_applicable`, `withheld`, `not_found_in_source`, and `not_verified`. Do not collapse them into a single null or false value where the distinction matters.

## 3. Quality dimensions

Evaluate records and recommendations across separate dimensions rather than hiding them in one opaque quality score.

| Dimension | Review question | Example indicators |
|---|---|---|
| Completeness | Are required fields present for this use? | Missing critical fields, coverage |
| Validity | Do values conform to defined rules? | Schema and constraint checks |
| Accuracy | Is the information supported by reliable evidence? | Corroboration, correction history |
| Freshness | Is the information current enough for this decision? | Last verified date, expiry |
| Provenance | Can the origin and transformation history be traced? | Source links, lineage, actor |
| Consistency | Do related records agree where they should? | Contradictions, duplicate candidates |
| Relevance | Does the record apply to this need and context? | Population, geography, time |
| Accessibility | Can intended users understand and use the information? | Plain-language, accessible format |
| Fairness | Do criteria create unjustified exclusion or disparate effects? | Outcome review, proxy-variable review |
| Actionability | Is there a feasible next step? | Contact path, requirements, capacity |

A dimension may be `pass`, `warning`, `fail`, or `not_assessed`. Preserve the underlying observations and rules that produced each result.

## 4. Validation pipeline

Apply validation in stages. A failure at one stage should not erase the record; it should limit which downstream uses are permitted.

1. **Structural validation** — schema, data types, required fields, controlled vocabularies.
2. **Semantic validation** — definitions, units, date ranges, geographic scope, entity types.
3. **Reference validation** — linked entities, source identifiers, URLs, and relationship integrity.
4. **Provenance validation** — source origin, retrieval time, transformation history, and attribution.
5. **Evidence validation** — source quality, corroboration, directness, recency, and contradictions.
6. **Context validation** — applicability to the stated population, place, time, and circumstances.
7. **Operational validation** — contact route, capacity, eligibility requirements, deadlines, and current availability.
8. **Human review** — required for high-impact, ambiguous, contested, or policy-sensitive outcomes.

Automated checks may flag, route, or restrict records. They must not claim to have performed a human review.

## 5. Recommendation safeguards

Every recommendation should expose a compact explanation containing:

- the need or objective being addressed;
- the opportunity or resource proposed;
- the criteria used and their relative importance;
- the evidence supporting each material criterion;
- unmet, unknown, or conflicting criteria;
- geographic and temporal assumptions;
- practical constraints, including capacity and eligibility;
- alternatives considered;
- reasons for exclusion or lower ranking, where appropriate;
- the model, rule-set, and data version used;
- the date generated and the date by which revalidation is recommended.

### 5.1 Hard constraints and preferences

Separate non-negotiable constraints from preferences. A missing value for a hard constraint should normally produce `needs_review` or `insufficient_information`, not an assumed pass or fail.

A preference mismatch may reduce suitability without making an opportunity categorically ineligible.

### 5.2 No single-score decision rule

A weighted score can help sort candidates, but it must not be the sole basis for consequential decisions. Keep dimension-level results visible and support configurable thresholds, minimum-evidence requirements, and human review.

Do not compare scores across unrelated populations, domains, or model versions unless comparability has been demonstrated.

### 5.3 Fairness and proxy review

Review whether criteria or proxies could unjustifiably disadvantage groups or locations. Use only attributes necessary for the stated purpose, document the rationale for sensitive or proxy variables, and evaluate outcomes before operational deployment. Where lawful and appropriate, perform aggregate fairness analysis without exposing individual sensitive information.

## 6. Governance and review triggers

Route a record or recommendation for review when any of the following occurs:

- material evidence conflicts;
- a source is withdrawn, corrected, or found unreliable;
- a required field is missing or stale;
- entity identity or affiliation is disputed;
- a match depends on a weak or indirect association;
- eligibility or capacity cannot be confirmed;
- a high-impact recommendation is generated;
- a user challenges a record or recommendation;
- a fairness, privacy, security, or safety concern is raised;
- the governing policy, schema, or matching model changes.

Suggested review states:

`not_required`, `queued`, `in_review`, `needs_information`, `resolved`, `escalated`, `appealed`.

Each review should identify the responsible role, scope, start time, due date where applicable, evidence considered, outcome, rationale, and any follow-up actions.

## 7. Correction, appeal, and audit

Corrections should be additive and traceable. Preserve the previous value, correction reason, source, actor, timestamp, and affected downstream records. A correction must trigger re-evaluation of recommendations that depended on the corrected information.

Provide a clear route for users and source owners to:
- report an error;
- submit supporting evidence;
- dispute an entity match or relationship;
- request review of a recommendation;
- request correction or removal where applicable;
- receive a status and outcome where disclosure is permitted.

Maintain an append-only audit history for material changes. Access to personal or restricted information must be role-limited and logged. Retention and deletion rules should be defined by applicable policy and law; auditability does not justify retaining information indefinitely.

## 8. Freshness and revalidation

Information can become stale even when it was accurate when collected. Each time-sensitive record should define an appropriate review interval or expiry rule.

Revalidation priority should consider:
- how quickly the information can change;
- the consequences of relying on stale information;
- source reliability and update frequency;
- the last successful verification;
- whether the record is currently being used in a recommendation.

When a record expires, retain its history but mark it as stale and prevent it from appearing as currently available or verified until rechecked.

## 9. Operational procedure

```text
FOR each incoming record:
    preserve_original_assertion_and_source()
    validate_structure_and_semantics()
    identify_entities_and_relationship_candidates()
    check_provenance_and_source_status()
    detect_missing_values_and_conflicts()
    assess_freshness_and_context()

    IF critical validation fails:
        mark_record("needs_review")
        restrict_consequential_use()
    ELSE:
        assign_dimension_level_quality_results()
        assign_permitted_use_scope()

    IF user_challenge OR material_conflict OR high_impact_use:
        create_review_case()

FOR each generated recommendation:
    record_need_and_candidate_opportunity()
    evaluate_hard_constraints_separately_from_preferences()
    calculate_dimension_level_fit()
    identify_unknowns_and_alternatives()
    generate_explanation_and_model_version()

    IF evidence_insufficient OR material_conflict:
        mark_recommendation("insufficient_information")
        require_review_before_consequential_use()
    ELSE:
        publish_as_recommendation_not_as_decision()

ON correction_or_source_withdrawal:
    append_correction_event()
    identify_dependent_records_and_recommendations()
    invalidate_or_recalculate_affected_outputs()
    preserve_audit_trail()
```

## 10. Machine-readable quality result

A quality result should be stored independently from the record it evaluates so that different checks, policies, and versions can coexist.

Illustrative shape:

```json
{
  "quality_assessment_id": "qa-example-001",
  "subject_type": "opportunity",
  "subject_id": "opp-example-001",
  "assessment_version": "1.0.0",
  "assessed_at": "2026-10-29T18:00:00Z",
  "assessor": {
    "type": "automated_rule_set",
    "id": "atlas-quality-rules-1"
  },
  "dimensions": {
    "completeness": "pass",
    "validity": "pass",
    "accuracy": "warning",
    "freshness": "warning",
    "provenance": "pass",
    "consistency": "not_assessed",
    "relevance": "pass",
    "accessibility": "not_assessed",
    "fairness": "not_assessed",
    "actionability": "warning"
  },
  "issues": [
    {
      "code": "CAPACITY_NOT_RECENTLY_CONFIRMED",
      "severity": "warning",
      "field": "capacity",
      "description": "Current capacity has not been confirmed.",
      "required_action": "request_source_revalidation"
    }
  ],
  "permitted_use": "discovery_only",
  "review_status": "queued",
  "ruleset_reference": "atlas-quality-rules-1"
}
```

This is an illustrative record, not a verified live opportunity. Identifiers, timestamps, and findings must be replaced with real values before operational use.

## 11. Acceptance criteria

The quality layer is ready for implementation when:

- [ ] Reported facts, normalized values, inferences, recommendations, and decisions are distinguishable.
- [ ] Missing, unknown, stale, withheld, and negative findings are not conflated.
- [ ] Conflicting assertions can coexist without silent overwrites.
- [ ] Entity matching records its basis and preserves plausible alternatives.
- [ ] Quality dimensions are independently inspectable.
- [ ] Recommendations expose criteria, evidence, assumptions, and limitations.
- [ ] Hard constraints are not silently treated as preferences.
- [ ] High-impact and disputed cases can be routed to human review.
- [ ] Corrections trigger downstream impact analysis.
- [ ] Users have a documented challenge and correction route.
- [ ] Access, retention, and audit controls are defined.
- [ ] Automated validation is not misrepresented as human verification.

## 12. Relationship to other Atlas components

This layer complements rather than replaces:

- the core ontology and record schemas;
- provenance and confidence tracking;
- need and opportunity lifecycle states;
- matching and analysis;
- impact measurement;
- access control and publication.

The quality assessment should be reusable by ingestion, search, matching, reporting, and publication. Each component should consume the quality state appropriate to its use rather than independently inventing a new interpretation of evidence quality.
