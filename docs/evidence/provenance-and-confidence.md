# Provenance, Evidence, and Confidence Model

## 1. Separate provenance from confidence

Provenance answers: where did this information come from, who supplied it, when was it obtained, and how was it transformed?

Confidence answers: how strongly does the available evidence support this specific claim under a stated method?

A source can be authoritative for one field and weak for another. A confidence value must therefore attach to a claim or assessment, not automatically to an entire organization or document.

## 2. Provenance record

Recommended fields:
- `source_id`
- `source_type` (official page, report, dataset, submission, interview, registry, observation)
- `publisher_or_asserting_agent`
- `source_uri` or stable locator
- `published_at`
- `accessed_at`
- `language`
- `content_version_or_hash` where lawful and useful
- `locator` (page, section, record key)
- `collection_method`
- `license_or_use_constraints`
- `transformation_history`

## 3. Evidence assessment dimensions

Evaluate, where relevant:
- authority for the particular claim;
- directness/proximity;
- recency and temporal fit;
- methodological transparency;
- corroboration and source independence;
- consistency with other evidence;
- known limitations or conflicts;
- reproducibility.

Do not count copied press releases or syndicated text as independent corroboration.

## 4. Confidence representation

Use a categorical label plus rationale:
- `unassessed`
- `low`
- `moderate`
- `high`
- `contested`

A numeric score may be stored only when its scale, method, and calibration are documented. It must not imply statistical probability unless it is actually calibrated as such.

## 5. Claim structure

Represent important facts as assertions:
- subject;
- predicate;
- object/value;
- polarity (supports/denies);
- scope and valid time;
- source references;
- asserted by;
- recorded at;
- assessment status;
- reviewer and rationale.

This supports conflicting assertions without overwriting one with another.

## 6. Version and audit rules

- Published versions are immutable.
- Corrections create a successor version and a supersedes link.
- Record who or what performed an update.
- Record the reason and supporting evidence.
- Preserve previous values for audit where retention policy permits.
- Keep source access dates separate from source publication dates.

## 7. Public display

Expose enough provenance to let readers evaluate claims: source name, source link, date, evidence label, last reviewed date, and limitations. Do not expose private submitter identities or internal moderation notes unless authorized.
