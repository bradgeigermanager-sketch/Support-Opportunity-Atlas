# Opportunity Type Expansion: Additional Mechanisms

## Purpose and status

This additive expansion broadens the controlled vocabulary beyond the initial catalog. It includes opportunity mechanisms for which the Atlas may not yet have a concrete, linkable example. These are **type definitions only**: they do not assert that an offer exists, that a provider is legitimate, or that participation is currently available.

The expansion is designed to complement, not replace, the [core opportunity type catalog](opportunity-type-catalog.md). Existing type identifiers remain unchanged. New identifiers use the same `opp.<family>.<term>` convention and should be assigned stable, versioned records before production ingestion.

## New families

### R. Access to assets, facilities, and infrastructure

Access rights or temporary use of existing assets rather than transfer of ownership.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.access.land` | Land access | Use of land for cultivation, conservation, testing, temporary use, or community activity. |
| `opp.access.facility` | Facility access | Use of buildings, rooms, workshops, classrooms, or specialist spaces. |
| `opp.access.equipment` | Equipment access | Borrowing, leasing, booking, or supervised use of tools and equipment. |
| `opp.access.infrastructure` | Infrastructure access | Use of networks, utilities, transport infrastructure, or shared physical systems. |
| `opp.access.compute` | Computing resource access | Access to compute, storage, cloud credits, or specialized computing environments. |
| `opp.access.collection` | Collection and archive access | Access to collections, archives, specimens, records, or research materials under defined conditions. |
| `opp.access.transport` | Mobility and fleet access | Access to vehicles, shared mobility, fleet capacity, or transport services. |
| `opp.access.workspace` | Workspace access | Use of desks, studios, maker spaces, laboratories, or coworking environments. |

### S. Rights, licenses, permissions, and intellectual property

Opportunities created by permission to use, adapt, distribute, or steward rights and knowledge assets.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.rights.license` | License opportunity | Obtain or provide a license to use intellectual property, software, content, data, or technology. |
| `opp.rights.permission` | Permission or authorization | Seek or grant permission for a defined activity, use, study, installation, or access. |
| `opp.rights.open_content` | Open content contribution | Publish, adapt, translate, or maintain reusable content under stated terms. |
| `opp.rights.patent_transfer` | Technology transfer | Transfer, license, or commercialize technology or intellectual property. |
| `opp.rights.data_use` | Data-use agreement | Obtain governed access to data for a defined purpose with privacy and security conditions. |
| `opp.rights.stewardship` | Stewardship or custodianship | Take responsibility for maintaining, protecting, or administering an asset or resource. |

### T. Data, information, and knowledge access

Opportunities centered on access to information resources, records, datasets, or expertise.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.info.open_data` | Open data access | Access or reuse publicly released datasets and documented information resources. |
| `opp.info.records_access` | Records access | Request or obtain access to records under applicable disclosure, privacy, and retention rules. |
| `opp.info.knowledge_exchange` | Knowledge exchange session | Participate in structured expert briefings, peer exchange, or communities of practice. |
| `opp.info.expert_access` | Expert consultation access | Obtain time-limited access to specialist advice, office hours, or technical consultation. |
| `opp.info.library_access` | Library and repository access | Use collections, repositories, databases, or information services. |
| `opp.info.translation_review` | Information validation and review | Review, correct, contextualize, or validate public information and reference material. |

### U. Shared ownership, membership, and collective economic participation

Participation through ownership, membership, cooperative governance, or pooled assets.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.collective.cooperative_membership` | Cooperative membership | Join a member-owned organization with defined rights, duties, and governance. |
| `opp.collective.shared_ownership` | Shared ownership participation | Acquire or contribute a defined ownership interest in a shared asset or enterprise. |
| `opp.collective.community_ownership` | Community ownership initiative | Participate in community acquisition, stewardship, or governance of an asset. |
| `opp.collective.timebank` | Time-bank exchange | Exchange services through a time-credit or reciprocal contribution system. |
| `opp.collective.resource_pool` | Pooled resource participation | Contribute to or draw from a governed pool of money, equipment, labor, or supplies. |
| `opp.collective.membership` | Association or network membership | Join an association, professional body, community group, or membership network. |

### V. Standards, evaluation, assurance, and governance work

Contribute to rules, quality systems, evaluation, certification, or oversight.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.assurance.standards` | Standards development | Draft, review, comment on, or maintain technical, professional, or community standards. |
| `opp.assurance.conformity` | Conformity assessment | Assess whether a product, process, service, or system meets stated requirements. |
| `opp.assurance.certification` | Certification pathway | Pursue or provide a recognized assessment and certification process. |
| `opp.assurance.audit` | Audit and assurance engagement | Conduct or participate in a defined audit, inspection, or assurance review. |
| `opp.assurance.evaluation` | Program evaluation | Evaluate a program, service, intervention, or project against stated criteria. |
| `opp.assurance.governance` | Governance participation | Participate in oversight, ethics review, fiduciary governance, or accountable decision structures. |
| `opp.assurance.testing` | Testing and validation | Test products, systems, methods, or prototypes against defined requirements. |

### W. Testbeds, pilots, demonstrations, and implementation trials

Opportunities to host, join, or contribute to controlled trials and real-world demonstrations.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.pilot.host` | Pilot host site | Provide a site, facility, population context, or operational setting for a bounded pilot. |
| `opp.pilot.participant` | Pilot participant | Participate in a trial or demonstration with clear consent and risk information. |
| `opp.pilot.prototype` | Prototype testing | Test or provide feedback on a prototype, service, or proposed design. |
| `opp.pilot.demonstration` | Demonstration project | Host or contribute to a demonstration of a technology, method, or service. |
| `opp.pilot.implementation` | Implementation partnership | Help implement and assess a new system or practice in an operational setting. |
| `opp.pilot.sandbox` | Regulatory or technical sandbox | Participate in a supervised environment for testing novel approaches under defined controls. |

### X. Caregiving, household, and interpersonal support exchanges

Structured support and reciprocal assistance at household or interpersonal scale.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.household.childcare` | Childcare support exchange | Provide, receive, or coordinate childcare through appropriately safeguarded arrangements. |
| `opp.household.respite` | Respite exchange | Arrange temporary relief for caregivers with clear qualifications and safeguards. |
| `opp.household.home_support` | Household support | Coordinate practical household tasks, maintenance, or daily-living assistance. |
| `opp.household.companionship` | Companionship participation | Provide or receive structured companionship and social connection. |
| `opp.household.peer_support` | Peer support exchange | Exchange experience-based support within defined boundaries and referral pathways. |
| `opp.household.accessibility` | Personal accessibility support | Coordinate communication, navigation, or practical accessibility assistance. |

### Y. Mobility, relocation, and geographic transition

Opportunities involving movement between places, access to destinations, or relocation support.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.mobility.relocation` | Relocation support | Support or receive assistance with a move, resettlement, or geographic transition. |
| `opp.mobility.travel_support` | Travel support | Access travel assistance for education, work, care, participation, or essential services. |
| `opp.mobility.exchange` | Place-based exchange | Participate in a temporary exchange, residency, field placement, or stay in another location. |
| `opp.mobility.accessible_route` | Accessible mobility planning | Contribute to or use accessible route planning, navigation, and mobility information. |
| `opp.mobility.host` | Host or placement opportunity | Host a person, team, project, or visiting participant under defined arrangements. |

### Z. Voice, testimony, lived experience, and public-interest input

Contribute knowledge, testimony, feedback, or experience to research, services, policy, or accountability.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.voice.testimony` | Testimony or evidence submission | Submit testimony, evidence, or a statement to an authorized inquiry or process. |
| `opp.voice.lived_experience` | Lived-experience participation | Contribute experience to service design, research, evaluation, or policy with consent and compensation terms clear. |
| `opp.voice.user_testing` | User research and usability participation | Participate in interviews, usability studies, or structured feedback sessions. |
| `opp.voice.community_review` | Community review panel | Review proposals, plans, services, or materials from a community perspective. |
| `opp.voice.grievance` | Complaint or remedy pathway | Use a defined process to report a concern, seek review, or request remedy. |
| `opp.voice.information_request` | Information request opportunity | Submit a formal request for public or organizational information under applicable rules. |

### AA. Land, environmental, and resource stewardship rights

Longer-term stewardship, access, or management arrangements for land and natural resources.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.stewardship.conservation_agreement` | Conservation agreement | Enter a defined agreement to conserve land, habitat, or natural resources. |
| `opp.stewardship.land_lease` | Land-use lease or license | Access land under a lease, license, easement, or other defined use arrangement. |
| `opp.stewardship.water_rights` | Water access or allocation | Participate in a governed water access, allocation, or stewardship arrangement. |
| `opp.stewardship.seed_genetic` | Seed and genetic resource exchange | Access, conserve, or exchange seeds or genetic resources under applicable rules. |
| `opp.stewardship.monitoring_custodian` | Environmental data custodian | Maintain monitoring equipment, records, or environmental observations over time. |

### AB. Market discovery, demand aggregation, and collective purchasing

Coordinate demand, supply, procurement, and market participation without assuming a conventional job or grant.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.market.demand` | Demand aggregation | Combine purchasing or service demand to improve access, affordability, or coordination. |
| `opp.market.group_purchase` | Group purchasing | Participate in a collective purchase with transparent terms and allocation rules. |
| `opp.market.preorder` | Preorder or advance commitment | Commit to a future purchase or delivery subject to stated conditions. |
| `opp.market.offtake` | Offtake or purchase commitment | Offer or secure a defined future purchase of goods, energy, or services. |
| `opp.market.distribution` | Distribution channel access | Access or provide routes to distribute, sell, or deliver goods and services. |
| `opp.market.barter` | Barter or non-cash exchange | Exchange goods or services under explicit valuation and agreement terms. |

### AC. Time-limited placements, residencies, and immersion

Temporary placements that provide access, experience, or focused participation.

| Type ID | Preferred label | Definition |
|---|---|---|
| `opp.placement.residency` | Residency | Undertake a time-limited placement in an artistic, research, professional, or community setting. |
| `opp.placement.job_shadow` | Job shadowing | Observe a role or workplace for structured career exploration. |
| `opp.placement.field_placement` | Field placement | Complete supervised practical work in a defined field setting. |
| `opp.placement.exchange` | Exchange placement | Temporarily exchange roles, locations, expertise, or institutional settings. |
| `opp.placement.secondment` | Secondment | Undertake a temporary assignment within another team or organization. |
| `opp.placement.visiting` | Visiting appointment | Participate through a temporary visiting scholar, expert, practitioner, or professional role. |


## Cross-family classification rules

- These families describe the **mechanism** of participation or access, not the subject domain.
- Keep domain, participant relationship, contribution mode, action, delivery mode, eligibility, compensation, and availability as separate fields.
- Access is not ownership; a license is not a transfer of title; membership is not employment; testimony is not endorsement; a pilot is not proof of effectiveness.
- Where legal rights, personal data, health, childcare, research participation, financial commitments, or safety are involved, require appropriate authorization, consent, qualification, safeguards, and review.
- Use `unknown` rather than inferring missing terms, costs, eligibility, safety, compensation, or availability.
- A type can exist in the vocabulary before a listing pattern, provider, source, or live opportunity exists.

## Suggested adoption lifecycle

1. **Proposed** — candidate term added for review.
2. **Reviewed** — definition, scope, overlaps, and non-examples checked.
3. **Active** — approved for new records.
4. **Deprecated** — retained for historical interpretation but not preferred for new records.
5. **Retired** — no longer used; replacement mapping retained where applicable.

## Machine-readable companion

See [the expansion term set](../../data/opportunity-type-expansion.v1.json). It is a vocabulary seed, not a live listings feed. Validate terms against [opportunity-type.schema.json](../../schemas/opportunity-type.schema.json) when materializing individual governed term records.
