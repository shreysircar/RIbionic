import { Offering } from "@/types/offering";

export const offerings: Offering[] = [
  {
    id: "1",
    slug: "data-dynamics",
    title: "Data Dynamics",
    shortDescription:
      "End-to-end data analytics, architecture, governance, and automation via DataZone©.",
    sections: [
      {
        heading: "Data Analytics",
        paragraphs: [""],
        bulletPoints: [
          "Static and Streaming analytics",
          "OLAP cubes implementation",
          "Data visualization",
          "Business intelligence, insights",
          "Any Technology stack (ERP, Commercial or Native)",
          "Tools Expertise",
        ],
        images: [{ imageUrl: "/offerings/image1.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Data Architecture",
        paragraphs: [""],
        bulletPoints: [
          "Topology based architectures (Centralized, Distributed)",
          "Velocity based architectures (Lambda, Kappa)",
          "Conceptual, Logical design",
          "Integration and Governance",
        ],
        images: [{ imageUrl: "/offerings/image2.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Data Organization",
        paragraphs: [""],
        bulletPoints: [
          "Data schema, data lakes, lakehouses",
          "Data ontologies, graphs, state machines",
          "Tools expertise",
          "Security and Access",
          "AI readiness"
        ],
        images: [{ imageUrl: "/offerings/image3.png", layout: "image-left", caption: "" }],
      },
        {
        heading: "Data Processing and Automation",
        paragraphs: [""],
        bulletPoints: [
          "Data mapping and cleansing",
          "ETL, ELT and other transformations",
          "Data and business rules migration",
          "Data validation that ensures quality",
          "Data Quality and Compliances",
          "Automation through tools using our DataZone© solution"
        ],
        images: [{ imageUrl: "/offerings/image4.png", layout: "image-right", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "2",
    slug: "digital-delivery",
    title: "Digital Delivery Services",
    shortDescription:
      "Digital delivery platform with real-time dashboards, AI/ML Ops, and flexible engagement models.",
    sections: [
      {
        heading: "Digital Delivery Platform",
        paragraphs: [""],
        bulletPoints: [
          "On-prem or cloud hosting",
          "Real time Program dashboard (resources, milestones, timelines, tasks, risks, budget etc)",
          "Online metrics and analytics",
          "Productivity, Financials dashboard",
          "Integration with Excel, Tools"
        ],
        images: [{ imageUrl: "/offerings/image5.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Digital Operations",
        paragraphs: ["Application development lifecycle (SDLC) support with:"],
        bulletPoints: [
          "DevOps builds and dashboards",
          "AIOps and metrics",
          "Agile dashboards, integrations",
        ],
        images: [{ imageUrl: "/offerings/image6.png", layout: "image-right", caption: "" }],
      },
            {
        heading: "",
        paragraphs: ["Application maintenance and support:"],
        bulletPoints: [
          "Ticket analytics and resolution SLAs",
          "MLOps",
          "AI/ML based ticket resolutions, over 30% productivity gains",
        ],
        images: [],
      },
    ],
    features: [],
  },

  {
    id: "3",
    slug: "application-lifecycle-services",
    title: "Application Lifecycle Services",
    shortDescription:
      "Full-stack, cloud-ready development, legacy modernization, and AI-assisted maintenance with SLAs.",
    sections: [
      {
        heading: "Full Stack development",
        paragraphs: [""],
        bulletPoints: [
          "Containerized, cloud ready, cross platform development and deployment",
          "Application architecture design in tune with current and future requirements",
          "Modular design for front end, backend and middleware with seamless integration and optimal performance ",
          "Mobile, OTT, Wearables and embedded software development",
          "Technology stacks include .Net, Java, Angular, React, Vue, Node.js, MongoDB,  MySQL, PostgreSQL among others for full stack",
          "Sitecore, Drupal, Sharepoint, Adobe Experience Manager for eCommerce and CMS "
        ],
        images: [{ imageUrl: "/offerings/image7.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Application Modernization",
        paragraphs: [""],
        bulletPoints: [
          "We upgrade legacy systems with better performance and reduced maintenance costs",
          "We do application portfolio rationalization reducing redundancy and streamlining workflows with resultant cost savings and improved customer satisfaction",
          "UX improvement for better end user experience",
          " Architecture changes to support cloud readiness and interoperability"
        ],
        images: [{ imageUrl: "/offerings/image8.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Application Maintenance and Support",
        paragraphs: ["We offer ongoing application optimization and support for uninterrupted performance in tune with ITIL and other standards"],
        bulletPoints: [
          "SLA compliance and proactive resolution of issues",
          "AI/ML assisted resolutions",
          "Modularization of application components for better maintenance",
          "Effective problem management",
          "Improved security and efficiency"
        ],
        images: [{ imageUrl: "/offerings/image9.png", layout: "image-left", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "4",
    slug: "artificial-intelligence-value-chain",
    title: "Artificial Intelligence Value Chain",
    shortDescription:
      "AI-powered small action models, requirements generation, ambiguity analysis, data migration, fault prediction, and accelerated SDLC with AIOps/MLOps.",
    sections: [
      {
        heading: "Small Action Models leveraging genAI",
        paragraphs: [""],
        bulletPoints: [
          "Leverage LLM models to drive UI based applications through knowledge graphs or state machines as quasi-RAG inputs delivering SAMs (small action models)",
          "Drive automated customer support using SAMs",
          "Automate both systems integration / flow testing as well as UAT (user acceptance testing)",
          "Drastically reduce ticket lifecycles as well as reduce test cycle times while delivering high quality",
        ],
        images: [{ imageUrl: "/offerings/image10.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Automated requirements generation using genAI",
        paragraphs: ["AI based automated software requirements generation using:"],
        bulletPoints: [
          "inputs from client, business and tech team",
          "ticketing / bugs system(s)",
          "field inputs from social user groups and marketing teams",
          "User journeys analysis to streamline requirements",
          "Market analysis for technology trends and revenue potential",
          "Feature adoption analysis to influence prioritization of functionality",
          "Sprint velocity analysis to help plan requirements per sprint / epic / release timelines or in MVP"
        ],
        images: [{ imageUrl: "/offerings/image11.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "AI Based Ambiguity Analysis",
        paragraphs: [""],
        bulletPoints: [
          "Well defined software requirements are the biggest contributors to successful project completion",
          "We have an NLP based solution to analyzing ambiguity and defining clear requirements",
          "The success rates have increased by over 30% by deploying the solution with our clients and in our own software products design",
          "Requirements overlap and / or dependency analysis",
        ],
        images: [{ imageUrl: "/offerings/image12.png", layout: "image-left", caption: "" }],
      },
            {
        heading: "AI based automated Data migration",
        paragraphs: [""],
        bulletPoints: [
          "Automated schema discovery and mapping leveraging AI",
          "Rules bank for data transformation and data cleansing",
          "Solution operability across database types",
          "Huge productivity gain in finishing migration projects well before time and with high quality",
          "Works well for small setups or large enterprises across technology stacks"
        ],
        images: [{ imageUrl: "/offerings/image13.png", layout: "image-left", caption: "" }],
      },
                  {
        heading: "Leverage AI to predict faults",
        paragraphs: [""],
        bulletPoints: [
          "Decipher patterns and anti-patterns in data (server logs etc)",
          "Correlate to fault conditions based on ML from past data",
          "Predict faults that may happen in future",
          "Proactively rectify so that faults do not happen, contributing to high availability (~99.9%)",
        ],
        images: [{ imageUrl: "/offerings/image14.png", layout: "image-left", caption: "" }],
      },
                        {
        heading: "AI powered accelerated SDLC cycle",
        paragraphs: [""],
        bulletPoints: [
          "Enforce coding standards that go beyond rules-based reviews through AI",
          "Analyze code for potential errors ",
          "Use AI algorithms to intelligently orchestrate CI/CD pipelines, optimizing build, test and deployment process",
          "AI for vulnerability detection and security",
          "Predictive analytics for infrastructure or environment management"
        ],
        images: [{ imageUrl: "/offerings/image15.png", layout: "image-left", caption: "" }],
      },
                        {
        heading: "AIOps and MLOps",
        paragraphs: [""],
        bulletPoints: [
          "Dynamically deploy ML models in operations based on need, monitoring alerts or goal definitions",
          "Dynamically interpret SDLC metrics to bolster speed to deployment through AI co-relations",
          "Identify process optimization opportunities",
          "Synchronize systems of record for SDLC (bug tracking) and Operations (ticketing system)",
        ],
        images: [{ imageUrl: "/offerings/image16.png", layout: "image-left", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "5",
    slug: "business-assurance-testing",
    title: "Business Assurance Testing",
    shortDescription:
      "AI-driven automation-first testing with SAMs, LAMs, business assurance, TestOps, and quality metrics via AutoZone© and DataZone©.",
    sections: [
      {
        heading: "Automation First leveraging AI",
        paragraphs: ["Automate functional testing at requirements design stage itself for apps under development (Automation First):"],
        bulletPoints: [
          "Conformance to requirements is ensured",
          "Huge productivity gains in test cycles, becoming a virtually dev to deploy release cycle with quality @ source",
          "Use NLP with simple text inputs and avoid programming overheads. Empower anyone to automate anytime!",
          "Leverage self-heal capabilities to identify and fix regress issues for test iterations",
          "Alternatively use AI tools with self-discovery of user flows and functionality through video recordings and then deliver auto automation"
        ],
        images: [{ imageUrl: "/offerings/image17.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Use genAI SAMs to automate app business flows",
        paragraphs: [""],
        bulletPoints: [
          "Create SAMs (small action models) to automate legacy or existing apps testing through self-discovery of user flows using app UIs",
          "Generate finite state machines or knowledge graphs for reusability",
          "Use any LLM to run these action models",
          "Achieve huge benefits with applications roll out in waves instead of sequential",
          "Achieve business assurance with AI agents providing 100% functional coverage and measure of end user performance response for every application"
        ],
        images: [{ imageUrl: "/offerings/image18.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Hyper Automation through tools and LAMs",
        paragraphs: [""],
        bulletPoints: [
          "Achieve end to end automation of business processes across applications using AI tools and LAMs architecture at Ribionic",
          "Drastically reduce maintenance costs for your applications landscape",
          "Ensure business agility with aggressive build to deploy timelines",
          "Exercise time journeys for alternate and negative flows",
          "Enable full coverage through availability of aging data on demand through-> exercise of data flow sequence execution within the application or a dependent application which is usually a small set of actions within the LAMs and specifically labelled as such"
        ],
        images: [{ imageUrl: "/offerings/image19.png", layout: "image-left", caption: "" }],
      },
            {
        heading: "Business Assurance Testing on business apps, ERP, CRM",
        paragraphs: [""],
        bulletPoints: [
          "Testing done by domain experts in BFSI, Energy, Healthcare, Manufacturing, HiTech, Telecom and VLSI for full end-to-end coverage and efficiency of business flows including time journeys",
          "Automation experts provide anytime repeatability by providing 100% functional coverage in automation including interfaces through flat files",
          "Performance testers ensure end to end business flows work in expected timelines with peak load simulation with special focus on the critical / core flows",
          "We cover all standard processes – Lead to Customer, Quote to Cash, Order to Cash, Procure to Pay, Record to Report, Design to Operate, Hire to Retire, business processes on native or commercial business apps etc",
          "We do global roll outs (ERP – SAP S4/B4/C4, Oracle Fusion Cloud, CRM – Salesforce)"
        ],
        images: [{ imageUrl: "/offerings/image20.png", layout: "image-right", caption: "" }],
      },
            {
        heading: "TestOps for Business Agility",
        paragraphs: [""],
        bulletPoints: [
          "Leverage our AutoZone© solution",
          "TestOps integrated with DevOps to drastically reduce build to deploy cycles with automated test cycles and reports (Jenkins, ADO, Bamboo etc)",
          "Automation frameworks suite to choose from – AI based, hybrid, data driven, keyword based",
          "Automation tools based suites – Cypress, Selenium, Autonomiq, UFT, LoadRunner, Tosca, Appium, Postman, TestNG etc",
          "Test Management tool suites – Quality Center / ALM, Jira, Tosca, SAP Solution Manager etc",
          "Reliability and Resiliency testing for apps along with API testing"
        ],
        images: [{ imageUrl: "/offerings/image21.png", layout: "image-left", caption: "" }],
      },
            {
        heading: "Quality Metrics that redefine delivery",
        paragraphs: [""],
        bulletPoints: [
          "Active lead metrics on digital delivery platform",
          "Test velocity delivering more story points per release / sprint",
          "Code coverage up to 70% through automation for product companies with 100% functional coverage",
          "Redundant and dead code identification",
          "Defect removal efficiency over 99%",
          "Automation first facilitating faster time to market championing business agility with minimal test cycles",
          "First Time Right delivery (test plans, test runs, test environments, test data)",
          "BDD and TDD with frameworks for unit and functional testing reports "
        ],
        images: [{ imageUrl: "/offerings/image22.png", layout: "image-right", caption: "" }],
      },
            {
        heading: "Data and Security Testing",
        paragraphs: [""],
        bulletPoints: [
          "Automated Data testing for data quality, data transformations, data analytics, AI insights and interpretation using our DataZone© solution",
          "Security compliance with OWASP, SIEM standards, end point security, coding guidelines implementation for security",
          "Roles, access, MFA, intranet and cloud security",
          "Compliance with standards like GDPR, regulatory authorities for domain specific requirements",
          "Testing for shape of data – topological data analysis"
        ],
        images: [{ imageUrl: "/offerings/image23.png", layout: "image-left", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "6",
    slug: "consulting-that-delivers",
    title: "Consulting that delivers",
    shortDescription:
      "Operations problem management, digital transformation, continuous improvement, RFP modeling, and technology consulting via Probix©, TransFix©, Improvix©, and DataZone©.",
    sections: [
      {
        heading: "Problem Management in Operations",
        paragraphs: ["Detailed analysis in five areas"],
        bulletPoints: [
          "People",
          "Processes",
          "Technology",
          "Environment",
          "Related Areas",
          "Leverage Ribionic’s Probix© framework to analyze, identify gaps and recommend roadmaps",
          "Insights into industry benchmarks co-relation to ticket volumes and positioning with respect to maturity index",
          "Comprehensive study to fine tune action items in tune with the organization’s business and technology roadmap, and current maturity level",
        ],
        images: [{ imageUrl: "/offerings/image24.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Digital Transformation",
        paragraphs: [""],
        bulletPoints: [
          "Our TransFix© framework gives an index of digital maturity at four levels – Foundation, Adoption, Accelerate, Invent",
          "It captures your current business state, assesses your maturity level and maps the gaps in attaining your aspired target state",
          "At another level of engagement, the framework also gives you an actionable maturity roadmap which is a journey our clients undertake based on their priorities and their own future roadmaps.",
          "The framework essentially evaluates various EnA parameters helping deliver on the following–> 1) Efficiency, Effectiveness, Experience,  Environment, 2) Enlighten, Envision, 3) Agility, Awareness, Automation",
          "Leverage technology that ties up with your transformational goals"
        ],
        images: [{ imageUrl: "/offerings/image25.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Improve your Services",
        paragraphs: [""],
        bulletPoints: [
          "Leverage Ribionic’s Improvix© framework to strategically analyze and recommend roadmaps to achieve continuous improvement",
          "Hexagonal dimensions seeking inputs in concerning areas: 1) People, 2) Processes, 3) Reviews, 4) Measures, 5) Initiatives, 6) Tools",
          "Comprehensive analysis to fine tune action items in tune with the organization’s business and technology roadmap, and current maturity level "
        ],
        images: [{ imageUrl: "/offerings/image26.png", layout: "image-left", caption: "" }],
      },
            {
        heading: "RFP Modelling to catalyze growth",
        paragraphs: [""],
        bulletPoints: [
          "Differentiated analysis of services for AMS projects using our DataZone© solution",
          "Obtain interesting insights to give you an edge in crafting your solutions",
          "Model works across technology stacks with standard parameters which can be changed as per your need",
          "Obtain projections for potential optimizations to increase productivity which can be passed on to your client",
          "Leverage AI and statistical models"
        ],
        images: [{ imageUrl: "/offerings/image27.png", layout: "image-right", caption: "" }],
      },
            {
        heading: "Technology Consulting",
        paragraphs: ["We offer services of experts with decades of experience in different technology areas to guide you through:"],
        bulletPoints: [
          "complexities and peculiarities of architecture",
          "design and implementations",
          "data patterns and process elements",
          "vertical oriented nuances",
          "Define optimum yet achievable goals",
          "Delineate the right path to achieve success",
          "We also walk the talk – going beyond consulting to even implement the chartered course agreed to by clients"
        ],
        images: [{ imageUrl: "/offerings/image28.png", layout: "image-left", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "7",
    slug: "accelerate-erp-apps-roll-outs",
    title: "Accelerate ERP, Apps Roll Outs",
    shortDescription:
      "ERP consulting, implementation, rollouts, data hubs, analytics, and lead-to-customer experience with AI/ML integration.",
    sections: [
      {
        heading: "ERP Consulting Services",
        paragraphs: [""],
        bulletPoints: [
          "Expertise in delivering out-of-the-box, custom or hybrid ERP solutions",
          "Technology and business upgrades evaluation and planning ",
          "M&A or demerger impact assessment during integration planning",
          "Business analysis and ERP selection, implementation strategy and planning",
          "Cloud or on-premise considerations in transitioning or implementation",
          "Integration planning for a digital landscape",
          "Systems of record vs systems of engagement analysis"
        ],
        images: [{ imageUrl: "/offerings/image29.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "ERP Implementation, Roll out to lead business",
        paragraphs: [""],
        bulletPoints: [
          "Requirements analysis and design after assessing business processes and IT landscape including opportunities for optimization",
          "Workflow designs and integrations using domain experts",
          "Project planning, phases alongside org change and risk management",
          "Org setup and Configurations with future view to M&A/demergers as well",
          "Development including customizations, interfaces – ADF, ASAP and other dev frameworks including devOps",
          "Testing and validation of end-to-end integrated workflows and performance",
          "Automation test suite for core workflows",
          "UAT Support and user training, onboarding",
          "Roll out – geo based or global",
          "Post implementation support"
        ],
        images: [{ imageUrl: "/offerings/image30.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Data Hub, Analytics, Data Intelligence",
        paragraphs: [""],
        bulletPoints: [
          "Data Hubs in ERP or custom hubs using point solutions to enable business agility with quick releases to suite your business ",
          "Integration with datalakes, lakehouses, data warehouse or legacy data sources",
          "Enable domain and financial custom or native reports with extended data insights leveraging AI/ML for ERP / SCM / HCM / CX analytics",
          "Visually explore data using natural language and AI-driven automatic insights",
          "Implementation and roll outs with performance measures assured",
          "End to end support from data sourcing, cleansing, transforming, migration, automated validation, reports, visualization and actionable analytics"
        ],
        images: [{ imageUrl: "/offerings/image31.png", layout: "image-left", caption: "" }],
      },
            {
        heading: "From Leads to Customer experience",
        paragraphs: [""],
        bulletPoints: [
          "Implement sales and marketing cloud on leading technology stacks",
          "Integrate with ERP and Account management systems",
          "Design and run marketing campaigns with specialized reports on leads acquisition and conversion with acquisition journeys flow",
          "Stay engaged with customers leveraging experience workflows that suit your needs",
          "Get deeper insights to acquiring or retaining your clients"
        ],
        images: [{ imageUrl: "/offerings/image32.png", layout: "image-right", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "8",
    slug: "virtuous-infrastructure",
    title: "Virtuous Infrastructure",
    shortDescription:
      "Global 24/7 field, network, data center, application, container, and SOC services with AI-driven SIEM, ITIL compliance, and DevSecOps.",
    sections: [
      {
        heading: "Field End User Services",
        paragraphs: [""],
        bulletPoints: [
          "Global 24/7 Field Support Services: HelpDesk, Service Desk",
          "Application Infra Management Services",
          "Legacy Platform Infra Transformation Services",
          "Desktop Virtualization Services",
          "Enterprise Mobility Management",
          "Directory Services",
          "Messaging and Collaboration Services"
        ],
        images: [{ imageUrl: "/offerings/image33.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "Network Management Services",
        paragraphs: [""],
        bulletPoints: [
          "Network virtualization separating logical groups like users, services, and applications within the network for security and other business requirements",
          "NOC management",
          "Accelerated network and optimization Services",
          "Campus network services for more control over network resources",
          "Converged wired and wireless networks",
          "Software defined network services",
          "Network security services",
          "Unified Communication and Collaboration Services"
        ],
        images: [{ imageUrl: "/offerings/image34.png", layout: "image-right", caption: "" }],
      },
      {
        heading: "Data Center Services",
        paragraphs: [""],
        bulletPoints: [
          "Data center Managed Services",
          "Data center consolidation and optimization Services",
          "Data center transformation services",
          "BCP and DR services",
          "Data Center Security Services",
          "Workload Migration Services",
          "Core Infrastructure Transformation Services",
          "Open Compute Services",
          "Data Center Migration"
        ],
        images: [{ imageUrl: "/offerings/image35.png", layout: "image-left", caption: "" }],
      },
        {
        heading: "Application and Infra Support and Services",
        paragraphs: [""],
        bulletPoints: [
          "ITSM, ITOM, ITAM services",
          "CMDB implementation",
          "Configuration management of deployed infrastructure leveraging tools",
          "Service Integration and Command Center Services",
          "DevSecOps Services",
          "Mainframe, database and middleware Services",
          "Compliance with standards like ITIL-> 1) Problem management, 2) Continual improvement",
          "Cloud migration, support and provisioning services: 1) Bare metal or VMs on demand, 2) Cost optimization, 3)Troubleshooting",
          "App and infra monitoring, alerts, resiliency and tools"
        ],
        images: [{ imageUrl: "/offerings/image36.png", layout: "image-right", caption: "" }],
      },
        {
        heading: "Container Services",
        paragraphs: [""],
        bulletPoints: [
          "Build apps images and dockerize",
          "Deploy application containers",
          "Make dockers portable for enhanced agility",
          "Secure containers against vulnerabilities and cyber threats",
          "Seamless kubernetes deployment at scale with high availability and performance",
          "Streamline deployment by orchestrating containers",
          "Optimize kubernetes clusters for optimal resource utilization and cost reduction",
        ],
        images: [{ imageUrl: "/offerings/image37.png", layout: "image-left", caption: "" }],
      },
        {
        heading: "SOC Services",
        paragraphs: [""],
        bulletPoints: [
          "Next-gen SOC built on advanced AI based SIEM platform",
          "External & internal vulnerability scanning on agreed intervals",
          "Round-the-clock incident monitoring",
          "Threat Detection Services: 1) Event investigation, 2) Correlate events, 3) Alert prioritization, 4) Threat Intelligence and Threat Hunting",
          "24/7 Support : 1)Managed security with monitoring, incident & event reporting, 2) Centralized dashboards",
          "Expert Investigation Services: 1) Root cause analysis, 2) Analysis and traige of malware " ,
          "Compliance Monitoring such as PCI, HIPAA, SOX, etc.",
        ],
        images: [{ imageUrl: "/offerings/image38.png", layout: "image-right", caption: "" }],
      },
    ],
    features: [],
  },

  {
    id: "9",
    slug: "experience-first-services",
    title: "Experience First Services",
    shortDescription:
      "UX and CX design services using design thinking, behavioral & attitudinal metrics, AIDA framework, and journey automation.",
    sections: [
      {
        heading: "UX Design Services",
        paragraphs: [""],
        bulletPoints: [
          "Design thinking approach to UX design through interactions with end users and their use perspectives with good sample coverage of end users",
          "Simple and intuitive workflows and UI design",
          "FUX (first time right), Features adoption, Navigation ease metrics for UX design ",
          "Ease of workflow recall",
          "Behavioral metrics like time spent on features",
          "Attitudinal metrics like surveys, CSAT",
          "UAT by end users along with business",
          "UX and Time journeys test automation for regression and drift"
        ],
        images: [{ imageUrl: "/offerings/image39.png", layout: "image-left", caption: "" }],
      },
      {
        heading: "CX Design Services",
        paragraphs: [""],
        bulletPoints: [
          "Design system of engagement for customers (brand, product or service)",
          "Delineate customer experience with your team, your product or service before, during and after the purchase",
          "Capture customer personas and their journeys with your brand, product or service",
          "AIDA (attention, interest, desire, action) approach for customer acquisition and retention",
          "All touchpoints, channels (sales, delivery, service), products or services to consider and deliver on an enjoyable customer experience",
          "First call resolutions emphasis for customer support service",
          "Timely outreach to client for incidents or services requested",
          "Satisfaction surveys to gauge engagement level with brand or its product or services"
        ],
        images: [{ imageUrl: "/offerings/image40.png", layout: "image-right", caption: "" }],
      },
    ],
    features: [],
  },
];