# Opportunity Listings Registry

## 1. Purpose

The registry is the operational collection of versioned opportunity listings. It connects the controlled vocabulary in the catalog to individual, source-backed opportunities.

The registry is not a scraped-results dump. A record must preserve where it came from, what was actually asserted, what has been independently checked, and when its availability was last confirmed.

## 2. Registry objects

- **Listing:** a specific opportunity, program intake, opening, request, award, or call for participation.
- **Listing version:** an immutable snapshot of the listing's recorded content at a point in time.
- **Publisher:** the organization or person responsible for the original offer or request.
- **Source:** a web page, feed, API, document, announcement, or direct submission from which assertions were obtained.
- **Source observation:** a dated capture of what a source stated at a particular time.
- **Verification assessment:** a review of specified claims, such as publisher identity, eligibility, deadline, or availability.
- **Availability check:** a dated check of whether the opportunity is still accepting participation.
- **Duplicate relationship:** a qualified link between records that may represent the same opportunity.
- **Correction / supersession event:** a durable record explaining what changed and why.

## 3. Registry partitions

Organize records by both opportunity type and source collection. Recommended collections:

1. Government programs and public assistance.
2. Grants, scholarships, fellowships, and awards.
3. Employment, internships, apprenticeships, and contracting.
4. Volunteer and community-service opportunities.
5. Research participation and scientific projects.
6. Nonprofit and charitable initiatives.
7. Business, procurement, and entrepreneurship.
8. Education and training.
9. Environmental and conservation projects.
10. International development and humanitarian assistance.
11. Infrastructure, housing, and community development.
12. Technology, open-source, and digital contributions.
13. Civic participation, consultation, and public calls.
14. Shared facilities, equipment, and resource access.
15. Arts, culture, media, and heritage.

These are navigation collections, not mutually exclusive categories. A listing may appear in multiple filtered views without duplicating the canonical record.

## 4. Record lifecycle

Recommended workflow:

1. **Discover** — collect a candidate source or submitted listing.
2. **Capture** — preserve source URI, publisher assertion, access timestamp, and relevant source locator.
3. **Normalize** — map the source content into the canonical listing fields without silently filling gaps.
4. **Classify** — assign primary/secondary opportunity types, domains, actions, relationship, and delivery mode.
5. **Resolve identity** — compare with existing records using publisher, external identifier, source URI, title, dates, location, and scope.
6. **Assess provenance** — evaluate source origin, authority, recency, and corroboration.
7. **Verify claims** — separately check publisher, eligibility, terms, location, deadline, and availability.
8. **Review quality** — apply the quality-assessment procedure and domain-specific checks.
9. **Publish or restrict** — publish, hold for review, reject, or retain as an unverified candidate.
10. **Monitor** — schedule rechecks based on volatility and consequence.
11. **Update additively** — create a new version and preserve prior snapshots.
12. **Close or withdraw** — record reason, date, and supporting observation.

A listing's publication state is not its verification state. A listing can be visible with explicit qualifications, if publication policy allows it, while some claims remain unverified.

## 5. Distinct state dimensions

Do not overload a single status field.

### Record workflow status
- `candidate`
- `captured`
- `normalizing`
- `under_review`
- `published`
- `restricted`
- `rejected`
- `withdrawn`
- `superseded`

### Operational status
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

### Availability
- `open`
- `waitlist`
- `limited_capacity`
- `not_accepting`
- `unknown`
- `not_applicable`

### Verification state
- `unassessed`
- `source_checked`
- `publisher_confirmed`
- `claims_partially_verified`
- `claims_verified`
- `contested`
- `stale`

A source being reachable does not mean the publisher or claims are verified. Publisher confirmation does not mean every eligibility or impact claim is true.

## 6. Source collections and source quality

Maintain source records separately from listings. One source can contain many listings; one listing can be supported by multiple sources.

Capture:
- source ID and URI;
- source type (official page, public feed, API, document, partner submission, direct confirmation, secondary directory);
- publisher identity and claimed authority;
- jurisdiction and scope;
- access restrictions and permitted reuse;
- observed-at timestamp and content fingerprint where available;
- source reliability assessment and rationale;
- last successful access and next review date.

Do not equate domain reputation with the truth of every individual claim. A source reliability assessment is contextual, time-bounded, and claim-specific.

## 7. Duplicate and identity resolution

Use a multi-signal process, not title equality alone.

Signals may include:
- publisher or host organization identity;
- external listing identifier;
- canonical source URL and redirects;
- application destination;
- normalized title similarity;
- deadline and validity period;
- geographic scope;
- program name and cycle;
- description and eligibility overlap.

Possible outcomes:
- `same_listing` — same opportunity and same cycle;
- `same_program_new_cycle` — recurring program with a new intake;
- `related_listing` — related but independently actionable;
- `possible_duplicate` — insufficient evidence;
- `not_duplicate` — distinct records.

Never merge records solely because they share an organization, title phrase, or location. Preserve original source records and relationships after a merge decision.

## 8. Freshness and recheck policy

Use risk-based review intervals. Suggested starting defaults (adjust by domain and source behavior):

| Listing characteristic | Suggested recheck |
|---|---|
| Emergency response or rapidly changing capacity | Same day or more frequently where justified |
| Short-deadline grant, job, or application | Every 1–3 days while active |
| Ordinary job, internship, or open call | Every 3–7 days |
| Recurring program with stable intake | Every 14–30 days |
| Long-term facility or partnership offer | Every 30–90 days |
| Closed or historical listing | No active recheck; retain archival status |

These are operational defaults, not guarantees. A record becomes stale when its review deadline passes or material changes are detected. Do not silently convert stale into closed; the current state is unknown until checked.

## 9. Search and discovery facets

Support filtering and full-text search across:
- opportunity type and domain;
- action and skills;
- geography, jurisdiction, and service area;
- remote / in-person / hybrid;
- participation relationship;
- compensation and fees;
- eligibility and qualification;
- schedule, duration, deadline, and start date;
- capacity and availability;
- publisher and source collection;
- verification state, freshness, and quality flags;
- language and accessibility;
- need references and expected outputs/outcomes.

Search results must display availability and last-confirmed date when known. Ranking should not hide uncertainty or elevate low-quality records merely because their text matches strongly.

## 10. Governance and audit

- Preserve immutable listing versions and source observations.
- Record actor, timestamp, reason, and ruleset for state changes.
- Preserve corrections and conflicting assertions.
- Distinguish automated extraction from human confirmation.
- Log automated matching and duplicate suggestions as recommendations until accepted.
- Provide a correction channel and review path.
- Restrict sensitive data and do not expose private contact details unnecessarily.
- Retain a public-safe view separate from internal review notes.
- Apply lawful collection, retention, and reuse policies to source material.

## 11. Minimum acceptance criteria

A registry implementation is ready for pilot use when it can:
- store listings independently from source records;
- attach multiple source observations to a listing;
- classify listings with controlled vocabulary terms;
- maintain immutable versions;
- represent unknown and stale values explicitly;
- track workflow, operational, availability, and verification states independently;
- detect possible duplicates without automatically merging them;
- schedule and record availability checks;
- expose source, last-confirmed date, and verification caveats in search results;
- preserve correction and audit history.
