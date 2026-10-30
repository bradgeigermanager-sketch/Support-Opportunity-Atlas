# Opportunity Listing Patterns and Templates

## Purpose

These reusable patterns describe how different opportunity mechanisms should be listed. They are templates, not real solicitations. Each actual listing should instantiate the canonical opportunity record and use controlled terms from the Opportunity Type Catalog.

## Pattern catalog

| Pattern ID | Pattern | Typical type IDs | Details that must be captured |
|---|---|---|---|
| listing.volunteer_shift | Scheduled volunteer shift | opp.volunteer.general, opp.volunteer.event | Date, duties, supervisor, capacity, orientation, access requirements |
| listing.skilled_service | Skilled contribution | opp.volunteer.skilled, opp.tech.software, opp.research.review | Deliverables, skill level, hours, acceptance criteria, compensation |
| listing.direct_service | Direct service provision | opp.direct.*, opp.care.* | Service scope, referral route, provider qualifications, safeguarding |
| listing.goods_request | Requested goods or supplies | opp.give.goods, opp.give.food, opp.give.medical | Specifications, quantity, condition, expiration, delivery point |
| listing.cash_funding | Funding application | opp.fund.grant, opp.fund.microgrant, opp.fund.research | Amount, eligible costs, applicant criteria, match, deadlines, award terms |
| listing.scholarship | Education award | opp.learn.scholarship, opp.fund.scholarship | Study level, eligibility, covered expenses, renewal, selection criteria |
| listing.training_cohort | Training cohort | opp.learn.course, opp.learn.skills_training | Outcomes, prerequisites, duration, delivery, fees/stipend, credential |
| listing.job_vacancy | Employment vacancy | opp.work.employment | Employer, duties, pay, employment type, location, schedule, qualifications |
| listing.internship | Internship placement | opp.work.internship | Learning plan, supervisor, duration, compensation, academic credit |
| listing.contract_bid | Contract or procurement call | opp.work.contract, opp.market.procurement | Scope, bid eligibility, submission format, timeline, contract terms |
| listing.research_participation | Research study participation | opp.research.study, opp.research.recruitment | Sponsor, ethics information, consent, criteria, participant burden, compensation |
| listing.data_contribution | Data contribution | opp.research.data, opp.tech.data_cleanup | Data specification, rights, privacy, license, validation, attribution |
| listing.open_challenge | Challenge or competition | opp.call.challenge, opp.call.competition | Problem, rules, evaluation, intellectual property, prize, dates |
| listing.facility_access | Shared facility or equipment access | opp.network.facility, opp.research.instrument | Equipment, access hours, operator, fees, training, safety, booking |
| listing.space_offer | Space or venue offer | opp.give.facility, opp.network.shared_service | Location, capacity, accessibility, availability, permitted uses, costs |
| listing.partnership_call | Partner sought | opp.network.partnership, opp.network.coalition | Partner capabilities, objective, responsibilities, governance, duration |
| listing.public_consultation | Public input request | opp.civic.public_comment, opp.civic.citizen_panel | Decision owner, topic, jurisdiction, input methods, deadline, use of input |
| listing.disaster_support | Disaster response or recovery | opp.disaster.response, opp.disaster.recovery, opp.disaster.supplies | Coordinating authority, current needs, safety rules, deployment status |
| listing.community_project | Community project participation | opp.build.community, opp.env.restoration, opp.culture.public_art | Owner, milestones, tasks, permissions, materials, community review |
| listing.mentorship | Mentor or mentee placement | opp.learn.mentorship, opp.volunteer.mentoring | Goals, cadence, screening, boundaries, duration |
| listing.referral_pathway | Referral or service pathway | opp.network.referral, opp.direct.casework | Referrer, receiving service, acceptance criteria, consent, response expectations |
| listing.expression_of_interest | Early-stage expression of interest | opp.call.expression | Known facts, undecided matters, next stage, no implied commitment |

## Canonical human-readable listing form

### Identity and description
- Stable listing ID, immutable version, title, summary, full description.
- Primary and secondary opportunity types.
- Domain tags, action types, and linked need references.

### Responsible party and provenance
- Publisher, host organization, accountable contact role.
- Original source URL or source identifier.
- Publication date, access date, last-confirmed date.
- Verification method, evidence assessment, correction route.

### Participation
- What the participant will actually do or receive.
- Relationship: volunteer, employee, contractor, grantee, donor, learner, partner, member, or public participant.
- Required and preferred skills and qualifications.
- Eligibility, screening, safety, accessibility, and safeguarding requirements.
- Capacity, number of places, expected time, schedule, duration.

### Resources and terms
- Compensation: paid, unpaid, stipend, fee, in-kind, reimbursed, or unknown.
- Participant costs, if any.
- Goods, tools, equipment, connectivity, travel, or facilities supplied or expected.
- Funding amount, award terms, or procurement terms where applicable.

### Place and access
- Address or service area where publication is appropriate.
- Remote, in-person, hybrid, mobile, or place-based delivery.
- Accessibility information and available accommodations.
- Geographic and jurisdictional limits.

### Availability and next steps
- Operational status and status reason.
- Opening and closing dates, application deadline, and time zone.
- Application, referral, booking, or contact method.
- Expected response time, selection process, and next step.
- Last-confirmed date and next review date.

## Keep three lifecycle dimensions separate

**Operational status** answers the record's workflow state: draft, submitted, under review, published, paused, filled, completed, expired, withdrawn, or rejected.

**Availability** answers whether participation is possible: open, waitlist, limited capacity, not accepting, unknown, or not applicable.

**Maturity** answers how developed the opportunity is: idea, proposed, seeking partners, accepting interest, accepting applications, active delivery, recurring, or concluded.

A listing can be published while availability is unknown. A recurring program can be mature but temporarily paused. Do not collapse these into one field.

## Publication quality checklist

1. Is there a concrete action, offer, or participation route?
2. Does the primary type fit the described activity?
3. Is the responsible publisher identifiable and plausibly authoritative?
4. Are material eligibility and qualification conditions stated?
5. Are compensation, fees, and participant costs explicit or marked unknown?
6. Are schedule, duration, location, and delivery mode clear?
7. Is availability confirmed by a current source?
8. Are safety, legal, licensing, privacy, and safeguarding checks appropriate?
9. Are claims separated from assumptions and recommendations?
10. Can the listing be corrected, appealed, paused, or withdrawn?
11. Are source, accessed date, reviewer, and review due date recorded?
12. Is the listing useful without exposing unnecessary personal information?

## Illustrative listing titles

- Volunteer shift supporting a community food distribution
- Request for qualified reviewers of open educational materials
- Small grant for neighborhood heat-resilience projects
- Paid apprenticeship in building energy systems
- Shared laboratory instrument access for approved research teams
- Call for partners to expand rural broadband access
- Community science survey for local stream health
- Public consultation on a proposed transportation plan
- Donation request for specified emergency shelter supplies
- Remote translation of public-service information

These titles demonstrate listing shapes only. They are not verified or currently open opportunities.
