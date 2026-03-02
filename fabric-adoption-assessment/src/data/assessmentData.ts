export interface LevelOption {
  level: number;
  label: string;
  description: string;
}

export interface AssessmentArea {
  id: string;
  title: string;
  icon: string;
  question: string;
  helpText: string;
  options: LevelOption[];
  actionItems: Record<number, string[]>;
}

export const assessmentAreas: AssessmentArea[] = [
  // ─────────────────────────────────────────────
  // 1. Data Culture
  // ─────────────────────────────────────────────
  {
    id: 'data-culture',
    title: 'Data Culture',
    icon: '🏛️',
    question: 'How does your organization use data to make decisions?',
    helpText:
      'Think about how widespread and structured data usage is. Are teams using tools like Power BI or Microsoft Fabric? Is OneLake (Fabric\'s built-in data lake) being used? Are there documented processes, or do people rely on tribal knowledge?',
    options: [
      {
        level: 100,
        label: 'Ad-hoc and uncoordinated',
        description:
          'Some teams use Power BI or Fabric, but without coordination. Quick wins may exist in isolated pockets. There are no documented processes — teams rely on tribal knowledge. OneLake is not yet in use.',
      },
      {
        level: 200,
        label: 'Foundations emerging',
        description:
          'At least one Fabric solution is business-critical. OneLake is being adopted as a central data lake. Data discovery mechanisms exist (OneLake catalog). Direct Lake semantic models are starting to be used. Adoption KPIs are being discussed.',
      },
      {
        level: 300,
        label: 'Scaling intentionally',
        description:
          'Reproducible practices are standardized across teams. Data culture goals are measurable with defined KPIs. OneLake is the central platform for multiple workloads. Successful practices are actively shared organization-wide.',
      },
      {
        level: 400,
        label: 'Embedded in operations',
        description:
          'A data literacy program is established. Fabric is used for real-time intelligence and proactive decision-making. Data is treated as a strategic asset. Executive leadership actively drives data culture. Business value is measured regularly.',
      },
      {
        level: 500,
        label: 'Continuously optimizing',
        description:
          'Predictive analytics are used proactively (e.g., Data Activator for alerts). Continuous improvement cycles drive analytics forward. Advanced capabilities (AI, ML) are embedded in daily operations. Data culture is inseparable from business culture.',
      },
    ],
    actionItems: {
      100: [
        'Enable OneLake for initial teams — Provision Fabric capacity and activate OneLake as the unified data lake',
        'Identify and document business-critical Fabric solutions — Create inventory of existing Power BI reports and Fabric items that are business-critical',
        'Enable basic data discovery with OneLake catalog — Configure catalog settings to allow users to discover available data',
        'Implement Direct Lake semantic models — Create semantic models using Direct Lake mode on lakehouse tables',
        'Deploy OneLake across all business units — Migrate departmental data sources to OneLake lakehouses and warehouses',
        'Define and track adoption KPIs — Implement usage metrics dashboards tracking active users, workspace growth, and content creation',
      ],
      200: [
        'Standardize on lakehouse/warehouse architecture — Make OneLake lakehouses and warehouses the standard for all analytical storage',
        'Implement data classification — Apply sensitivity labels to Fabric items using Microsoft Information Protection',
        'Define reproducible practices across teams — Document and distribute standardized approaches for common analytics tasks',
        'Establish value measurement capability — Define KPIs that measure business value of analytics, not just usage',
        'Deploy OneLake across all workloads — Ensure SQL, Spark, and real-time workloads all use OneLake',
      ],
      300: [
        'Implement data literacy training program — Develop and deliver organization-wide data literacy curriculum',
        'Deploy real-time intelligence for streaming scenarios — Implement Fabric Real-Time Intelligence for event streaming and KQL analytics',
        'Standardize on lakehouse/warehouse architecture — Make OneLake the single source of truth for all analytical data storage',
        'Continuous improvement of analytics practices — Embed analytics improvement in organizational culture',
      ],
      400: [
        'Deploy Data Activator for proactive alerting — Implement Data Activator to trigger actions based on data conditions',
        'Implement continuous improvement cycles — Establish regular retrospectives and improvement initiatives for analytics practices',
        'Achieve data-as-strategic-asset recognition — Formalize data as a strategic asset in corporate strategy documents',
        'Embed advanced analytics (AI, ML) into standard business operations and decision-making',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 2. Executive Sponsorship
  // ─────────────────────────────────────────────
  {
    id: 'executive-sponsorship',
    title: 'Executive Sponsorship',
    icon: '👔',
    question:
      'Does your organization have a senior leader who actively champions data & analytics?',
    helpText:
      'An executive sponsor is a senior leader (VP, CDO, CIO) who advocates for data projects, removes roadblocks, provides funding, and leads by example. Think about whether someone at the top is formally responsible for driving Fabric adoption.',
    options: [
      {
        level: 100,
        label: 'No sponsor identified',
        description:
          'There is no formally identified executive sponsor for Fabric adoption. Some executives may be aware of analytics, but no one is responsible for championing it. Formal executive-level communication about data is lacking.',
      },
      {
        level: 200,
        label: 'Informal support exists',
        description:
          'Executives occasionally use Fabric reports for decision-making. Some projects are aligned to department-level objectives. Support happens through personal relationships rather than a formal role.',
      },
      {
        level: 300,
        label: 'Formally established',
        description:
          'The executive sponsor is formally identified with documented roles and expectations. The sponsor regularly communicates about Fabric to the organization. A documented data strategy is aligned with business strategy.',
      },
      {
        level: 400,
        label: 'Cross-organizational influence',
        description:
          'The sponsor has authority across organizational boundaries. Healthy partnerships exist between the sponsor, COE, business units, and IT. The sponsor participates actively in governance decision-making.',
      },
      {
        level: 500,
        label: 'Driving transformation',
        description:
          'The sponsor is a key driver of data culture vision. KPIs/OKRs track data culture goals and analytics results. The sponsor drives ongoing organizational adoption improvements and is involved in strategic planning.',
      },
    ],
    actionItems: {
      100: [
        'Identify potential executive sponsor — Create a business case showing Fabric ROI and present to C-level executives',
        'Build executive awareness — Demonstrate quick wins and business value from existing Fabric or Power BI usage',
        'Document the cost of no sponsorship — Capture delays, misalignment, and missed opportunities caused by lack of leadership',
        'Find bottom-up champions — Identify business unit leaders who already champion data and could grow into the role',
      ],
      200: [
        'Formalize executive sponsor role — Document executive sponsor responsibilities and expectations in a charter',
        'Establish regular sponsor communication cadence — Schedule monthly sponsor updates and quarterly org-wide communications',
        'Clarify sponsor\'s roles and expectations — Ensure the sponsor\'s responsibilities are documented and visible to all stakeholders',
        'Ensure the sponsor regularly communicates about Fabric to the organization',
        'Align a documented data strategy with business strategy and have the sponsor endorse it',
      ],
      300: [
        'Establish sponsor partnerships across org boundaries — Facilitate sponsor relationships with all major business unit leaders',
        'Implement sponsor participation in governance — Include sponsor in governance board and key policy decisions',
        'Formalize collaboration structures — Ensure healthy partnerships between the sponsor, COE, business units, and IT',
        'Expand the sponsor\'s active involvement in cross-organizational adoption initiatives',
      ],
      400: [
        'Establish sponsor as change leader — Position sponsor as primary champion driving data culture transformation',
        'Implement KPIs/OKRs for data culture — Define and track key performance indicators for data culture maturity',
        'Engage sponsor in continuous improvement — Include sponsor in regular adoption maturity reviews and improvement planning',
        'Ensure the sponsor drives ongoing organizational adoption improvements and strategic planning',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 3. Business Alignment
  // ─────────────────────────────────────────────
  {
    id: 'business-alignment',
    title: 'Business Alignment',
    icon: '🎯',
    question:
      'How well is your data/analytics strategy connected to your business goals?',
    helpText:
      'Business alignment means data and analytics directly support business objectives — like increasing revenue, reducing costs, or improving customer experience. Consider whether analytics initiatives are prioritized based on business value.',
    options: [
      {
        level: 100,
        label: 'No clear connection',
        description:
          'Fabric solutions are created without alignment to documented business objectives. There\'s no formal process to evaluate analytics ROI. Data initiatives lack regular communication with stakeholders.',
      },
      {
        level: 200,
        label: 'Some alignment efforts',
        description:
          'Some Fabric projects are aligned to department-level objectives. There\'s discussion about analytics KPIs, even if not formally measured. Analytics initiatives are starting to be prioritized based on business value.',
      },
      {
        level: 300,
        label: 'Strategy documented',
        description:
          'A documented data strategy is aligned with business strategy. Analytics investments are prioritized based on business value. Key stakeholders are involved in analytics planning.',
      },
      {
        level: 400,
        label: 'Strong alignment',
        description:
          'Analytics investments are directly tied to strategic business initiatives. Analytics ROI is measured and reported to leadership quarterly. Executive dashboards track business value realization.',
      },
      {
        level: 500,
        label: 'Fully integrated',
        description:
          'Analytics is embedded in all strategic planning processes. Advanced analytics (ML, AI) is used for strategic decisions. Data strategy and business strategy are inseparable.',
      },
    ],
    actionItems: {
      100: [
        'Identify Fabric projects aligned to business objectives — Interview business leaders to understand top priorities and pain points',
        'Begin tracking analytics ROI informally — Map existing data projects to business outcomes and identify gaps',
        'Start documenting a basic data strategy — Write a simple document connecting analytics goals to business goals',
        'Identify quick wins — Find opportunities where analytics can directly address a business problem',
        'Create a prioritization framework — Rank data projects based on business impact and feasibility',
      ],
      200: [
        'Create a formal data strategy document — Develop a formal data strategy aligned with business objectives',
        'Implement value-driven prioritization — Prioritize analytics investments based on documented business value',
        'Establish regular meetings between data/IT teams and business leaders to maintain alignment',
        'Define success metrics for data initiatives tied to business KPIs',
        'Ensure analytics work is connected to department and organizational strategic goals',
      ],
      300: [
        'Link analytics investments to strategic initiatives — Map all major Fabric projects to strategic business initiatives',
        'Implement capacity ROI reporting — Create executive dashboards tracking analytics ROI and business value',
        'Ensure analytics ROI is measured and reported to leadership quarterly',
        'Align resource allocation and funding with business-priority data projects',
      ],
      400: [
        'Embed analytics in strategic planning — Make analytics integral to all strategic planning processes',
        'Implement advanced analytics for strategic decisions — Deploy predictive and prescriptive analytics for key decisions',
        'Continuously optimize the alignment between data investments and business value',
        'Ensure data strategy evolution is part of every business strategy review cycle',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 4. Content Ownership & Management
  // ─────────────────────────────────────────────
  {
    id: 'content-ownership',
    title: 'Content Ownership & Management',
    icon: '📊',
    question:
      'How are reports, dashboards, and data models created and managed?',
    helpText:
      'This is about who builds and maintains data content. Is it only IT? Do business users build their own reports? Think about workspace administrators, naming conventions, semantic model reuse, and whether ownership responsibilities are clear.',
    options: [
      {
        level: 100,
        label: 'No clear ownership',
        description:
          'Workspace ownership responsibilities are unclear or undocumented. Multiple semantic models exist with duplicate data and no coordination. There\'s no use of contact lists for ownership identification.',
      },
      {
        level: 200,
        label: 'Basic ownership assigned',
        description:
          'Workspace administrators are assigned (2-4 per critical workspace). Contact lists are configured on some workspaces. Internal Fabric experts are identified. Naming conventions are inconsistent across teams.',
      },
      {
        level: 300,
        label: 'Managed self-service',
        description:
          'Workspace naming conventions are consistently applied. Reusable semantic models are created for common domains. Workspace ownership is audited regularly. Power BI Apps are the standard for distribution.',
      },
      {
        level: 400,
        label: 'Domain ownership',
        description:
          'Domain owners are assigned for each Fabric domain. Certified semantic model reuse is mandated over duplication. Co-development projects run between the COE and business units.',
      },
      {
        level: 500,
        label: 'Data mesh maturity',
        description:
          'A data mesh architecture is established with federated domain ownership. Ownership roles are mature across all domains with active data stewards, SMEs, and technical owners.',
      },
    ],
    actionItems: {
      100: [
        'Assign workspace administrators — Assign 2-4 workspace admins for each critical workspace',
        'Configure workspace contact lists — Set contact property for all workspaces to indicate ownership',
        'Identify internal Fabric experts — Survey organization to find power users and early adopters',
        'Create a workspace inventory — Document all existing workspaces, their owners, and their purpose',
        'Define basic naming conventions — Establish initial standards for workspace and content naming',
      ],
      200: [
        'Implement workspace naming conventions — Define and enforce standard workspace naming for all workspaces',
        'Create reusable semantic models — Build centralized semantic models for common data domains (finance, sales, etc.)',
        'Audit workspace ownership bi-annually — Schedule regular audits to verify workspace admins are still appropriate',
        'Standardize Power BI App distribution — Make Power BI Apps the standard method for distributing reports to consumers',
        'Implement appropriate licensing model — Purchase Pro, PPU, or Fabric capacity licenses based on use case and scope',
      ],
      300: [
        'Assign domain owners for each Fabric domain — Designate business owners responsible for each Fabric domain',
        'Standardize semantic model reuse — Mandate use of certified semantic models rather than creating duplicates',
        'Launch co-development program — Offer COE-led co-development for strategic solutions',
        'Implement enterprise-scope solutions — Deliver organizational solutions using Fabric enterprise features',
      ],
      400: [
        'Implement data mesh architecture — Establish federated data ownership with domain-oriented approach',
        'Mature ownership roles across domains — Ensure all domains have active data stewards, SMEs, and technical owners',
        'Ensure ownership and stewardship roles are clearly defined and functioning across all domains',
        'Implement continuous improvement for content lifecycle management',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 5. Content Delivery Scope
  // ─────────────────────────────────────────────
  {
    id: 'content-delivery-scope',
    title: 'Content Delivery Scope',
    icon: '📡',
    question:
      'How is data content shared and distributed across your organization?',
    helpText:
      'Content can be personal, team-level, departmental, or enterprise-wide. Think about how reports and data reach their audiences — through workspaces, Power BI Apps, email subscriptions, Teams integration, or embedded in business applications.',
    options: [
      {
        level: 100,
        label: 'Mostly personal scope',
        description:
          'Most solutions are created for personal use. Content sharing happens ad-hoc without formal distribution. Team workspaces are not yet in use. There\'s no differentiation between personal and shared content.',
      },
      {
        level: 200,
        label: 'Team scope emerging',
        description:
          'Team workspaces are being used (not just personal). Power BI Apps are starting to be used to distribute content to larger audiences. Initial content endorsement processes are forming.',
      },
      {
        level: 300,
        label: 'Departmental scope',
        description:
          'Departmental-scope solutions are being delivered. Formal distribution practices exist (Apps, endorsed content). Appropriate licensing models align content scope to governance needs. Content scaling is managed.',
      },
      {
        level: 400,
        label: 'Enterprise scope',
        description:
          'Enterprise-scope solutions are delivered using Fabric capabilities. Multiple delivery methods are used (apps, subscriptions, embedding). Diverse delivery options ensure content reaches all users effectively.',
      },
      {
        level: 500,
        label: 'Personalized at scale',
        description:
          'Personalized analytics are delivered at scale. Embedded analytics are integrated into business applications. Advanced delivery sophistication ensures the right content reaches the right person at the right time.',
      },
    ],
    actionItems: {
      100: [
        'Set up team workspaces — Create shared workspaces for teams that currently only use personal workspaces',
        'Introduce Power BI Apps — Configure Power BI Apps for distributing content to broader audiences',
        'Define content scope categories — Clarify what personal, team, departmental, and enterprise content means for your organization',
        'Establish basic content sharing guidelines — Document how and where to share content at each scope level',
        'Separate personal from shared content — Move shared content out of personal workspaces into team workspaces',
      ],
      200: [
        'Standardize Power BI App distribution — Make Power BI Apps the standard method for report distribution',
        'Implement content endorsement — Use promoted and certified endorsement to guide users to trusted content',
        'Define governance per scope — Set lighter governance for personal content, stricter for departmental/enterprise',
        'Deploy departmental-scope solutions — Create departmental workspaces with proper access controls',
        'Implement appropriate licensing by scope — Align license assignments to content delivery scope needs',
      ],
      300: [
        'Deploy enterprise-scope solutions — Deliver organizational solutions using Fabric enterprise features',
        'Implement multiple delivery methods — Deploy apps, email subscriptions, Teams integration, and embedded analytics',
        'Validate diverse delivery capability — Ensure content reaches users via their preferred channels',
        'Define content lifecycle management per scope — Establish refresh, archival, and retirement processes',
      ],
      400: [
        'Deploy personalized analytics at scale — Implement dynamic content personalization based on user context',
        'Embed analytics in business applications — Integrate Fabric analytics into line-of-business apps via embedding',
        'Achieve advanced delivery sophistication — Ensure seamless, right-time, right-person content delivery',
        'Continuously optimize delivery based on usage analytics and user feedback',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 6. Center of Excellence
  // ─────────────────────────────────────────────
  {
    id: 'center-of-excellence',
    title: 'Center of Excellence',
    icon: '⭐',
    question:
      'Does your organization have an expert team that helps others work with data?',
    helpText:
      'A Center of Excellence (COE) is an internal team of data experts who mentor, guide, and set standards. They might be called a "data team", "BI team", or "analytics team". The key question is whether this team formally exists, has clear goals, and actively helps the broader organization.',
    options: [
      {
        level: 100,
        label: 'No formal team',
        description:
          'There\'s no formally established Center of Excellence for Fabric. Users learn capabilities independently without centralized guidance. There\'s no defined team responsible for Fabric best practices.',
      },
      {
        level: 200,
        label: 'Informal experts',
        description:
          '1-2 people have been informally designated as Fabric experts. They help colleagues on an ad-hoc basis. There\'s recognition that a COE could deliver value, but it\'s not yet formalized.',
      },
      {
        level: 300,
        label: 'Formally established COE',
        description:
          'A formal COE is established with a charter and documented goals. COE members have clear responsibilities and allocated time. Office hours, support channels, and best practice reviews are operational.',
      },
      {
        level: 400,
        label: 'Cross-functional COE',
        description:
          'The COE includes representatives from multiple business units. COE effectiveness is tracked with KPIs (attendance, reviews completed, etc.). Proactive best practice identification and scaling is active.',
      },
      {
        level: 500,
        label: 'Innovation catalyst',
        description:
          'The COE drives innovation and exploration of emerging Fabric capabilities. It\'s recognized organization-wide as the center of analytics excellence. The COE contributes to Fabric product feedback and engages with Microsoft.',
      },
    ],
    actionItems: {
      100: [
        'Designate 1-2 informal Fabric experts — Identify internal power users who can help others on an ad-hoc basis',
        'Begin building the case for a COE — Document the need for centralized guidance and best practices',
        'Create a basic FAQ or guidance document — Help users find answers to common Fabric questions',
        'Identify skills gaps — Assess what expertise is needed and who has it in the organization',
        'Explore COE models — Research centralized, unified, and federated COE structures',
      ],
      200: [
        'Formally establish the COE — Create a COE charter, assign members, and allocate dedicated time for COE activities',
        'Launch bi-weekly office hours — Schedule recurring COE office hours for community support',
        'Create COE email and support channel — Establish a formal channel for COE requests and escalations',
        'Define clear COE responsibilities — Document what the COE does and does not handle',
        'Launch best practice review service — Offer COE-led reviews of semantic models and solutions before deployment',
      ],
      300: [
        'Expand COE with business unit representatives — Recruit COE members from each major business unit',
        'Track and measure COE effectiveness — Implement KPIs for COE activities (office hours attendance, reviews completed, etc.)',
        'Establish proactive best practice scaling — Create a process for the COE to identify and replicate successful patterns',
        'Confirm resource commitment — Ensure COE members have protected time for COE activities',
      ],
      400: [
        'Position COE as innovation catalyst — Task COE with piloting emerging Fabric capabilities and innovations',
        'Establish COE brand organization-wide — Market COE as the recognized center of analytics excellence',
        'Engage with Microsoft product teams — Participate in Fabric preview programs and provide product feedback',
        'Continuously optimize COE operations based on metrics and user feedback',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 7. Governance
  // ─────────────────────────────────────────────
  {
    id: 'governance',
    title: 'Governance',
    icon: '🔒',
    question:
      'How does your organization manage data rules, security, and quality?',
    helpText:
      'Governance includes policies about data access, security, quality, and compliance. In Fabric, this covers tenant settings, sensitivity labels, data loss prevention (DLP), content endorsement, and workspace organization through Fabric domains.',
    options: [
      {
        level: 100,
        label: 'Default settings, no policies',
        description:
          'Tenant settings are at their default configuration without customization. There\'s no documented data governance policy. Sensitivity labels are not being applied. No content endorsement (promotion/certification) is in use.',
      },
      {
        level: 200,
        label: 'Basic customization',
        description:
          'Initial governance planning is underway. Some tenant settings have been customized from defaults. Capacity licenses (P or F SKU) are in use for some workspaces. A data gateway is configured for on-premises data.',
      },
      {
        level: 300,
        label: 'Governance model documented',
        description:
          'A documented governance policy covers data management, security, and compliance. Sensitivity labels are applied. Semantic model endorsement is in place. Fabric domains organize workspaces by business area.',
      },
      {
        level: 400,
        label: 'Cross-organizational governance',
        description:
          'An established governance model has cooperation from all key business units. Data Loss Prevention (DLP) policies are implemented. Row-level security (RLS) is deployed for sensitive data. Capacity is optimized based on workload analysis.',
      },
      {
        level: 500,
        label: 'Automated governance',
        description:
          'Automated governance controls handle data classification, policy enforcement, and access reviews. Microsoft Purview is integrated for cross-platform data governance and compliance.',
      },
    ],
    actionItems: {
      100: [
        'Review and customize tenant settings — Audit current Fabric tenant settings and adjust based on organizational needs',
        'Acquire Fabric capacity licenses — Purchase F SKU or Power BI Premium capacity for critical workloads',
        'Configure data gateway for enterprise data sources — Install and configure on-premises data gateway for accessing corporate data',
        'Document basic governance policies — Write initial rules for data access, sharing, and security',
        'Assign initial governance roles — Designate data owners and stewards for critical data',
      ],
      200: [
        'Document governance policies — Create a governance policy document covering data management, security, and compliance',
        'Create sensitivity labels — Configure Microsoft Information Protection labels and apply to Fabric items',
        'Implement semantic model endorsement — Define criteria and process for promoting and certifying semantic models',
        'Create Fabric domains — Create Fabric domains to organize workspaces by business unit or function',
        'Implement workspace templates — Create workspace templates available for consistent setup',
      ],
      300: [
        'Achieve cross-organizational governance adoption — Gain commitment from all major business units to the governance model',
        'Implement Data Loss Prevention policies — Configure DLP to prevent unauthorized data sharing',
        'Deploy row-level security for sensitive data — Implement RLS in semantic models containing sensitive or confidential data',
        'Optimize capacity purchases based on workload analysis — Analyze workload patterns and right-size Fabric capacity purchases',
      ],
      400: [
        'Deploy automated governance controls — Implement automated data classification, policy enforcement, and access reviews',
        'Integrate Microsoft Purview for unified governance — Deploy Purview for cross-platform data governance and compliance',
        'Implement governance continuously optimized based on metrics and feedback',
        'Achieve adaptive governance — Ensure governance evolves with business needs and new Fabric capabilities',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 8. Mentoring & User Enablement
  // ─────────────────────────────────────────────
  {
    id: 'mentoring-enablement',
    title: 'Mentoring & User Enablement',
    icon: '🎓',
    question:
      'How does your organization help people learn and improve their data skills?',
    helpText:
      'Think about training programs, documentation, templates, office hours, and onboarding. Are there dedicated resources (SharePoint portals, template files, learning paths) to help users be productive with Fabric and Power BI?',
    options: [
      {
        level: 100,
        label: 'No formal support',
        description:
          'There are no office hours or scheduled COE support sessions. Internal training content for Fabric is non-existent. Users rely solely on external resources (Microsoft Learn, YouTube) for learning.',
      },
      {
        level: 200,
        label: 'Initial resources available',
        description:
          'Internal training materials are available (documentation, videos). An initial centralized portal (SharePoint/wiki) is available for Fabric resources. Template files (.pbit, notebooks) are provided to users.',
      },
      {
        level: 300,
        label: 'Structured enablement',
        description:
          'A centralized knowledge repository is regularly updated. Best practice reviews are offered by the COE. Learning resources are validated for quality assurance. Enablement resources are readily available.',
      },
      {
        level: 400,
        label: 'Role-based learning paths',
        description:
          'Structured learning curricula exist for different Fabric roles. A standardized onboarding program is in place for new users. Training content is reviewed and updated quarterly. Mentoring activities support quality and adherence.',
      },
      {
        level: 500,
        label: 'Personalized & certified',
        description:
          'Individualized learning recommendations are based on user roles and skill levels. An internal Fabric certification program exists for different expertise levels. Professional development programs promote continuous growth.',
      },
    ],
    actionItems: {
      100: [
        'Create Teams channel for Fabric community — Establish Microsoft Teams channel as central hub for user discussions',
        'Create initial SharePoint site for documentation — Set up a SharePoint site for storing guides and resources',
        'Develop basic template library — Create .pbit templates, notebook templates, and pipeline templates for common tasks',
        'Document getting-started guides — Write beginner-friendly guides for common Fabric tasks',
        'Identify internal experts who can share knowledge — Find potential mentors among existing users',
      ],
      200: [
        'Develop template library — Create .pbit templates, notebook templates, and pipeline templates',
        'Launch best practice review service — Offer COE-led reviews of semantic models and solutions before deployment',
        'Ensure quality of learning resources — Validate training materials for accuracy and relevance',
        'Create a centralized knowledge repository — Build a well-organized portal with search capabilities',
        'Begin regular knowledge sharing sessions — Schedule recurring training events for different skill levels',
      ],
      300: [
        'Create role-based learning paths — Develop structured learning curricula for different Fabric roles',
        'Implement user onboarding program — Create standardized onboarding for new Fabric users',
        'Establish regular training updates — Schedule quarterly reviews and updates of training materials',
        'Track resource usage — Monitor which resources are most/least used and improve accordingly',
      ],
      400: [
        'Personalize enablement by role and skill — Deliver individualized learning recommendations based on user profiles',
        'Launch internal certification program — Create internal Fabric certification for different expertise levels',
        'Implement continuous learning improvement — Use feedback to evolve training and enablement programs',
        'Measure training impact — Track how training affects user productivity and data quality',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 9. Community of Practice
  // ─────────────────────────────────────────────
  {
    id: 'community-of-practice',
    title: 'Community of Practice',
    icon: '👥',
    question:
      'Do people in your organization voluntarily help each other with data?',
    helpText:
      'A community of practice is a group of people who share interest in data and analytics and help each other. Think about internal Teams channels, regular meetups, "champions" who go above and beyond, and whether knowledge sharing is recognized and encouraged.',
    options: [
      {
        level: 100,
        label: 'No community exists',
        description:
          'There\'s no internal Teams channel or forum for Fabric users. Champions are not formally recognized or engaged. Knowledge sharing across teams is rare and unstructured.',
      },
      {
        level: 200,
        label: 'Starting to form',
        description:
          'A Teams channel exists with at least 10 active members. Questions are being asked and answered in the channel. Initial champions are being identified. First knowledge-sharing activities are happening.',
      },
      {
        level: 300,
        label: 'Active and growing',
        description:
          'The community is actively growing with 50+ members. Champions are formally recognized with defined roles and expectations. Regular lunch-and-learn sessions are scheduled. Knowledge sharing is part of the culture.',
      },
      {
        level: 400,
        label: 'Champions in every area',
        description:
          'The community has 100+ active participants. Champions have defined benefits, responsibilities, and recognition. Annual analytics events are hosted. Major events combine workshops, demos, and networking.',
      },
      {
        level: 500,
        label: 'Self-sustaining community',
        description:
          'The community is self-organizing with light COE oversight. Members contribute externally (blogging, speaking, thought leadership). Community-driven initiatives drive improvement. Knowledge sharing is self-sustaining.',
      },
    ],
    actionItems: {
      100: [
        'Create a Teams channel for Fabric users — Establish a dedicated space where people can ask questions and share tips',
        'Identify potential champions — Look for people already helping others with data across the organization',
        'Run a pilot lunch-and-learn — Have someone share a data success story or useful technique',
        'Define community goals — Document what a community of practice could look like for your organization',
        'Start recognizing people who share knowledge — Even informal recognition encourages participation',
      ],
      200: [
        'Formally recognize champions — Identify and announce champions network with defined roles and expectations',
        'Launch monthly lunch-and-learn — Schedule regular sessions for users to share solutions and learnings',
        'Establish communication plan — Keep the community informed about updates, events, and new resources',
        'Connect champions with the COE — Provide mentoring and support for champions',
        'Track community engagement — Monitor channel activity, session attendance, and participation trends',
      ],
      300: [
        'Grow community to 100+ active participants — Actively recruit and engage users across the organization',
        'Formalize champions program — Define champion benefits, responsibilities, and recognition',
        'Host annual internal analytics conference — Organize a major annual event with workshops, demos, and networking',
        'Create multiple sharing formats — Blog posts, user groups, recorded sessions, newsletters',
      ],
      400: [
        'Enable community self-organization — Empower community to drive own initiatives with light COE oversight',
        'Encourage external community contribution — Support community members in blogging, speaking, and thought leadership',
        'Implement community KPIs — Measure engagement, satisfaction, and impact systematically',
        'Make the community self-sustaining with minimal dependency on specific individuals',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 10. User Support
  // ─────────────────────────────────────────────
  {
    id: 'user-support',
    title: 'User Support',
    icon: '🛟',
    question:
      'How do people get help when they have data or analytics problems?',
    helpText:
      'Support can be informal (asking a colleague) or formal (help desk tickets). Think about all the ways people can get help: team members, community, help desk, the expert team, or extended support from Microsoft.',
    options: [
      {
        level: 100,
        label: 'Self-service only',
        description:
          'Users resolve issues independently without a support channel. There\'s no defined escalation path. People ask nearby colleagues or search the internet for answers.',
      },
      {
        level: 200,
        label: 'Basic support exists',
        description:
          'Users can submit Fabric-related tickets to a help desk. There\'s a defined escalation path for complex issues. Community channels help with some peer-to-peer support.',
      },
      {
        level: 300,
        label: 'Multi-tier support model',
        description:
          'A multi-tier support model is implemented (community, help desk, COE escalation). Support tickets are tracked in a system. Support metrics and response times are measured.',
      },
      {
        level: 400,
        label: 'SLA-driven support',
        description:
          'Support SLAs are defined and monitored. Support data is analyzed to identify training gaps and product issues. Quality standards ensure consistent support.',
      },
      {
        level: 500,
        label: 'Community-driven & AI-powered',
        description:
          'Community is the primary support source with minimal escalations needed. AI-powered support tools (chatbots, knowledge bases) automate routine support. Support is self-sustaining and scalable.',
      },
    ],
    actionItems: {
      100: [
        'Implement help desk support for Fabric — Train the IT help desk to accept and handle Fabric-related tickets',
        'Define an escalation path — Document how complex issues escalate from user → community → help desk → COE',
        'Create a basic knowledge base — Document solutions to common Fabric issues and questions',
        'Set up a peer-support channel — Create a Teams channel where users can help each other',
        'Establish basic tracking — Log support requests even informally to understand common needs',
      ],
      200: [
        'Implement multi-tier support model — Define support tiers: community, help desk, COE escalation',
        'Track support tickets in system — Use a ticketing system to log, track, and measure Fabric support requests',
        'Implement monthly activity log reviews — Schedule regular analysis of support patterns for usage insights',
        'Document and publish escalation procedures — Ensure all users know how to get help at each tier',
        'Measure response times — Establish baselines for how quickly issues are resolved at each tier',
      ],
      300: [
        'Define and monitor support SLAs — Establish response time SLAs and track compliance',
        'Analyze support data for improvement — Review support tickets to identify training gaps and product issues',
        'Implement proactive support — Use activity log analysis to identify issues before users report them',
        'Create feedback loops — Ensure support insights flow back to training and enablement programs',
      ],
      400: [
        'Achieve community-driven support model — Make community the primary support source with minimal escalations',
        'Deploy AI-powered support tools — Implement chatbots and knowledge bases for automated support',
        'Continuously improve based on support analytics — Use data to drive support quality improvements',
        'Scale support sustainably — Ensure support model handles growth without proportional cost increase',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 11. System Oversight
  // ─────────────────────────────────────────────
  {
    id: 'system-oversight',
    title: 'System Oversight',
    icon: '⚙️',
    question:
      'How well is the day-to-day administration of your data platform managed?',
    helpText:
      'System oversight includes managing tenant settings, licenses, workspaces, gateways, capacity, security, monitoring usage, and auditing. Think of it as the operational side: how many Fabric admins do you have? Are activity logs reviewed? Is capacity monitored?',
    options: [
      {
        level: 100,
        label: 'Minimal management',
        description:
          'More than 4 Fabric administrators may be assigned (or none formally). Fabric capacity usage is not monitored. Activity logs are not being reviewed regularly. Administration is reactive.',
      },
      {
        level: 200,
        label: 'Basic administration',
        description:
          '2-4 Fabric administrators are formally assigned. Basic capacity monitoring is in place (Capacity Metrics app). Workspace usage is reviewed at least quarterly. A backup admin is designated.',
      },
      {
        level: 300,
        label: 'Structured oversight',
        description:
          'Monthly activity log reviews are scheduled. Automated capacity threshold alerts are configured. Standardized monitoring covers all critical workspaces. Administration processes are documented.',
      },
      {
        level: 400,
        label: 'Proactive management',
        description:
          'Standardized monitoring is deployed for all workspaces. Automated capacity alerts catch issues proactively. Data-driven usage analysis regularly optimizes the environment. Gateway administrators are assigned per gateway.',
      },
      {
        level: 500,
        label: 'AI-driven automation',
        description:
          'System oversight is automated with AI/ML monitoring, alerting, and anomaly detection. Predictive analytics forecast capacity needs using historical patterns. Continuous deployment maturity is achieved.',
      },
    ],
    actionItems: {
      100: [
        'Assign 2-4 Fabric administrators — Formally designate appropriate Fabric admin roles (not more than 4)',
        'Implement basic capacity monitoring — Configure the Fabric Capacity Metrics app to track capacity usage',
        'Review tenant settings — Audit and document current settings, adjust based on organizational needs',
        'Begin activity log reviews — Start reviewing Fabric activity logs at least monthly',
        'Create an inventory of workspaces, gateways, and licenses — Document your current Fabric footprint',
      ],
      200: [
        'Implement monthly activity log reviews — Schedule regular analysis of Fabric activity logs for usage insights',
        'Configure capacity monitoring and alerts — Set up automated alerts for capacity threshold exceedances',
        'Assign backup Fabric administrator — Designate a backup admin for coverage during absences',
        'Document administration procedures — Create runbooks for common admin tasks for consistency',
        'Establish workspace monitoring — Deploy consistent monitoring across all critical workspaces',
      ],
      300: [
        'Implement standardized monitoring for all workspaces — Deploy consistent monitoring approach across all critical workspaces',
        'Configure automated capacity alerts — Set up proactive alerting for capacity thresholds and anomalies',
        'Conduct data-driven usage analysis — Regularly analyze activity logs to optimize usage and identify opportunities',
        'Assign gateway administrators — Ensure each gateway has a designated admin for management and troubleshooting',
      ],
      400: [
        'Automate system oversight with AI/ML — Implement automated monitoring, alerting, and anomaly detection',
        'Use predictive analytics for capacity planning — Forecast capacity needs using historical usage patterns',
        'Achieve continuous deployment maturity — Implement fully automated CI/CD with continuous deployment',
        'Continuously optimize based on operational data and feedback',
      ],
      500: [],
    },
  },

  // ─────────────────────────────────────────────
  // 12. Change Management
  // ─────────────────────────────────────────────
  {
    id: 'change-management',
    title: 'Change Management',
    icon: '🔄',
    question:
      'How does your organization handle changes to data solutions and processes?',
    helpText:
      'Change management is about how updates to reports, data models, and processes are handled. Think about: Are Fabric deployment pipelines used? Are changes communicated in advance? Is there testing before changes go live? Can you rollback if something breaks?',
    options: [
      {
        level: 100,
        label: 'No process exists',
        description:
          'There is no change management process for Fabric solution updates. Changes happen without planning or communication. Deployments are ad-hoc. Users are sometimes surprised by breaking changes.',
      },
      {
        level: 200,
        label: 'Basic communication',
        description:
          'Major Fabric changes are communicated to users in advance. There\'s some awareness of the need for structured change processes. Testing is inconsistent but starting.',
      },
      {
        level: 300,
        label: 'Deployment pipelines in use',
        description:
          'Fabric deployment pipelines are used for dev/test/prod promotion. A documented change management process exists. Change control procedures cover critical Fabric content. Stakeholders are informed of changes.',
      },
      {
        level: 400,
        label: 'Mandatory pipelines',
        description:
          'Deployment pipelines are mandatory for all production solutions. A formal change approval process exists (change approval board). CI/CD standardization is achieved for critical solutions.',
      },
      {
        level: 500,
        label: 'Fully automated CI/CD',
        description:
          'Fully automated CI/CD with continuous deployment is achieved. Automated rollback procedures are tested regularly. Changes are practically seamless with minimal disruption.',
      },
    ],
    actionItems: {
      100: [
        'Start communicating changes in advance — Even a simple Teams or email announcement before major changes helps',
        'Separate development from production — Stop editing live reports directly; create separate dev workspaces',
        'Create a basic testing checklist — Verify changes before publishing to production',
        'Document who approves changes — Define who is responsible for approving and deploying changes to critical content',
        'Set up basic version control — Use Fabric Git integration or manual backups so changes can be undone',
      ],
      200: [
        'Implement deployment pipelines — Configure Fabric deployment pipelines for dev/test/prod promotion',
        'Document change management process — Create change control procedures for critical Fabric content',
        'Establish testing procedures — Define what testing is required before promoting changes',
        'Formalize communication process — Create a standard template for announcing upcoming changes',
        'Implement version control — Use Fabric Git integration for data models and important reports',
      ],
      300: [
        'Mandate deployment pipelines for production — Require all production solutions to use deployment pipelines',
        'Implement formal change approval process — Create a change approval board for enterprise solution changes',
        'Standardize CI/CD practices — Establish consistent CI/CD processes across all critical solutions',
        'Track change success/failure rates — Measure and improve the reliability of changes',
      ],
      400: [
        'Achieve continuous deployment maturity — Implement fully automated CI/CD with continuous deployment',
        'Automate rollback procedures — Implement automated rollback with regular testing',
        'Ensure changes are seamless — Minimize disruption through automation and proactive communication',
        'Continuously improve change processes based on deployment data and feedback',
      ],
      500: [],
    },
  },
];
