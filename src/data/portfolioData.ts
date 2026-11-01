export interface Project {
  id: string;
  title: string;
  category: 'project-management' | 'graphic-design' | 'virtual-assistant';
  categoryLabel: string;
  subtitle: string;
  summary: string;
  image: string;
  fallbackColor: string;
  client: string;
  year: string;
  role: string;
  timeline: string;
  tools: string[];
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  isOriginalProof?: boolean;
}

export interface SkillCategory {
  id: 'project-management' | 'graphic-design' | 'virtual-assistant';
  title: string;
  shortTitle: string;
  lead: string;
  description: string;
  iconName: string;
  skills: string[];
  tools: string[];
  deliverables: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certNumber?: string;
  image?: string;
  pdfUrl?: string;
  skillsCovered: string[];
  verificationType: 'Image' | 'PDF Document' | 'Accredited Credential';
  description: string;
}

export interface Testimonial {
  id: string;
  category: 'project-management' | 'graphic-design' | 'virtual-assistant';
  quote: string;
  clientName: string;
  clientRole: string;
  organization: string;
  projectWorkedOn: string;
  rating: number;
  highlight: string;
}

export const PROFILE = {
  name: "Salam Taiwo Akanji",
  displayName: "Salam Taiwo",
  role: "Project Manager · Graphic Designer · Administrative & Virtual Assistant",
  email: "salamtaiwo2@gmail.com",
  phone: "+234 906 839 2897",
  phoneDisplay: "09068392897",
  linkedIn: "https://www.linkedin.com/in/salamtaiwo-",
  linkedInHandle: "linkedin.com/in/salamtaiwo-",
  location: "Nigeria · Available Globally (Remote)",
  bio: "Detail-oriented Project Coordinator, Administrative Professional, and Creative Designer with proven experience coordinating projects, managing teams, preparing executive reports, organizing events, and supporting operational activities across corporate, government, sales, and organizational initiatives.",
  photo: "/assets/aistudio/Gemini_Generated_Image__1_8aff50b8.png",
  resumePdfUrl: "/assets/aistudio/Salam_Taiwo_Resume-1_6613b1f6.pdf",
  pmResumePdfUrl: "/assets/aistudio/Project_Manager_New_40185ba3.pdf",
  availability: "Available for Project Management, Design & Executive Virtual Assistance",
  stats: [
    { value: "76%+", label: "Asana Milestone Delivery", context: "Community Outreach & Sprints" },
    { value: "100%", label: "Authentic Client Work", context: "Original designs & verified tools" },
    { value: "6+", label: "Verified Credentials", context: "Excel, DataCamp, Mercatura VA & PM" },
    { value: "DataCamp", label: "Certified Excel Specialist", context: "Statement of Accomplishment #42,525,349" },
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "datacamp-excel",
    title: "Introduction to Excel – Statement of Accomplishment",
    issuer: "DataCamp",
    date: "August 23, 2025",
    certNumber: "#42,525,349",
    image: "/assets/aistudio/Screenshot_20260423-122111_1_3643eb96.png",
    verificationType: "Image",
    skillsCovered: [
      "Spreadsheet Architecture",
      "Formulas & Functions",
      "Data Manipulation & Cleanup",
      "Tabular Analytics & Filtering"
    ],
    description: "Official DataCamp Statement of Accomplishment awarded to Salam Taiwo by CEO Jonathan Cornelissen for mastering foundational and analytical spreadsheet workflows in Microsoft Excel."
  },
  {
    id: "mercatura-va",
    title: "Certificate of Course Completion – Certified Virtual Assistant",
    issuer: "Mercatura School of Technology",
    date: "October 5, 2025",
    pdfUrl: "/assets/aistudio/Viruall_Assitant_Cert_dbe6cfc1.pdf",
    verificationType: "PDF Document",
    skillsCovered: [
      "Executive Virtual Assistance",
      "Calendar & Multi-Timezone Scheduling",
      "Email & Inbox Management",
      "Office Administration & Document Prep"
    ],
    description: "Accredited certification issued by Mercatura School of Technology certifying that Salam Taiwo participated and completed an intensive virtual assistant course, achieving above credit level."
  },
  {
    id: "great-learning-excel",
    title: "Data Analysis using Microsoft Excel",
    issuer: "Great Learning",
    date: "2024 / 2025",
    verificationType: "Accredited Credential",
    skillsCovered: [
      "Advanced Excel Reporting",
      "Pivot Tables & VLOOKUP/XLOOKUP",
      "Conditional Formatting",
      "Executive Summary Dashboards"
    ],
    description: "Comprehensive professional training covering data analysis, business metric calculation, and dynamic spreadsheet reporting using Microsoft Excel."
  },
  {
    id: "datacamp-data-analysis",
    title: "Data Analysis Training & Modeling",
    issuer: "DataCamp",
    date: "2025",
    verificationType: "Accredited Credential",
    skillsCovered: [
      "Quantitative Analysis",
      "Data Interpretation",
      "Metric Tracking",
      "Actionable Business Insights"
    ],
    description: "Hands-on data analytics curriculum focusing on structuring datasets, interpreting operational trends, and presenting findings to stakeholders."
  },
  {
    id: "google-project-management",
    title: "Google Project Management Professional Certificate",
    issuer: "Google / Coursera",
    date: "In Progress (2025 - 2026)",
    verificationType: "Accredited Credential",
    skillsCovered: [
      "Agile & Scrum Frameworks",
      "Project Documentation & Gating",
      "Stakeholder Management",
      "Risk Registers & Mitigation"
    ],
    description: "Industry-standard project management program covering the complete project lifecycle, from initiation and planning to execution and retrospectives."
  },
  {
    id: "ef-set-english",
    title: "EF SET English Assessment Certification",
    issuer: "EF Standard English Test",
    date: "Standard Certification",
    verificationType: "Accredited Credential",
    skillsCovered: [
      "Professional Written English",
      "Executive Communication",
      "Cross-Border Collaboration",
      "Active Listening & Documentation"
    ],
    description: "Standardized international assessment evaluating high-proficiency professional English communication in cross-border and remote team environments."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "project-management",
    title: "Project Management & Coordination",
    shortTitle: "Project Management",
    lead: "Delivering projects on schedule, aligning teams, and maintaining transparent progress tracking.",
    description: "Experienced Project Coordinator and Supervisor with a proven track record across community initiatives, government ministries, and remote ministries. Skilled in Asana dashboard architecture, task scheduling, stakeholder communication, and milestone reporting.",
    iconName: "KanbanSquare",
    skills: [
      "Project Coordination & Planning",
      "Task & Sprint Management",
      "Team Leadership & Volunteer Coordination",
      "Administrative Documentation & Reporting",
      "Milestone Scheduling & Deadlines",
      "Stakeholder Communication & Updates",
      "Process Organization & Risk Mitigation"
    ],
    tools: ["Asana", "Microsoft Excel", "Google Workspace", "Microsoft Word", "PowerPoint", "Slack", "Zoom"],
    deliverables: [
      "Live Asana Project Dashboards",
      "Weekly Administrative Progress Reports",
      "Milestone & Timeline Tracking Sheets",
      "Field Activity & Supervisory Documentation"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic & Brand Design",
    shortTitle: "Graphic Design",
    lead: "Crafting original, high-impact commercial flyers, event posters, and visual communication materials.",
    description: "Designing promotional and event materials since 2018 for businesses, ministries, and community initiatives. From 3D commercial flyers and YouTube live graphics to large-scale auditorium banners and editorial tributes.",
    iconName: "Palette",
    skills: [
      "Commercial & Promotional Flyer Design",
      "Event & Conference Poster Art",
      "Social Media Graphics & YouTube Mockups",
      "Editorial Retouching & Double Exposure",
      "Typography Hierarchy & Calligraphy",
      "Print-Ready CMYK & Large Format Banners",
      "Brand Identity & Custom Background Art"
    ],
    tools: ["Adobe Photoshop", "Canva", "CorelDraw", "Illustrator", "Lightroom"],
    deliverables: [
      "Print-Ready Commercial Flyers (300 DPI)",
      "High-Conversion Mobile Social Media Graphics",
      "Large-Scale Auditorium & Entrance Banners",
      "Commemorative Keepsakes & Event Cards"
    ]
  },
  {
    id: "virtual-assistant",
    title: "Administrative & Virtual Assistance",
    shortTitle: "Virtual Assistance",
    lead: "Detail-oriented executive support, schedule management, and operational excellence.",
    description: "Certified Virtual Assistant (Mercatura School of Technology) adept at managing executive schedules, preparing detailed Excel reports, organizing digital archives, coordinating virtual meetings, and handling confidential information.",
    iconName: "Briefcase",
    skills: [
      "Schedule Management & Meeting Coordination",
      "Spreadsheet Reporting & Excel Data Entry",
      "Virtual Meeting Support (Google Meet, Zoom)",
      "Digital File Archiving & Media Records",
      "Administrative Documentation & Audits",
      "Executive Meeting Support & Event Logistics",
      "Confidential Information Management"
    ],
    tools: ["Microsoft Excel", "Google Sheets", "Google Docs", "Google Drive", "Google Meet", "Zoom", "QuickBooks", "Mailchimp"],
    deliverables: [
      "Organized Schedule Calendars & Agendas",
      "Clean Excel Spreadsheets & Data Audits",
      "Meeting Minutes & Administrative Summaries",
      "Digital Media Archives & File Repositories"
    ]
  }
];

export const PROJECTS: Project[] = [
  // Project Management Projects (Featuring Salam's Authentic Live Asana Dashboard!)
  {
    id: "pm-community-outreach",
    title: "Community Outreach Program – Asana Project Management Dashboard",
    category: "project-management",
    categoryLabel: "Project Management",
    subtitle: "End-to-end task coordination, milestone tracking, and cross-functional team delivery",
    summary: "Served as Project Owner and Admin managing the Community Outreach Program in Asana, driving 76% project completion across 25 structured tasks, upcoming milestones, and multi-member team assignments.",
    image: "/assets/aistudio/file_00000000145081f491bac9dbfc495293_2b45f759.png",
    fallbackColor: "bg-emerald-950",
    client: "Community Outreach Initiative",
    year: "2026",
    role: "Project Owner & Administrator",
    timeline: "Apr 28 – Jun 30",
    tools: ["Asana", "Google Workspace", "Microsoft Excel", "Google Meet"],
    challenge: "The program required coordinating multiple volunteer members across timeline milestones (Planning, Community Engagement, Outreach Event, and Evaluation) while tracking task completion rates and preventing milestone delays.",
    solution: "Engineered a centralized Asana project workspace with custom task-by-status metrics (19 Complete, 5 In Progress, 1 At Risk), milestone dates (May 15 to Jun 30), workload allocation, and real-time activity feeds.",
    outcomes: [
      "Attained 76% total project progress with 19 tasks completed on schedule",
      "Standardized 4 key sequential milestones from Planning to Final Evaluation",
      "Led team collaboration with direct task assignments, briefings, and zero dropped dependencies"
    ],
    metrics: [
      { label: "Project Progress", value: "76% Complete" },
      { label: "Tasks Tracked", value: "25 Tasks" },
      { label: "Milestones", value: "4 Key Phases" }
    ],
    isOriginalProof: true
  },
  {
    id: "pm-ministry-environment",
    title: "Environmental Field Operations & Administrative Supervision",
    category: "project-management",
    categoryLabel: "Project Management",
    subtitle: "Supervising field initiatives, stakeholder schedules, and management reporting",
    summary: "Served as Project Supervisor at the Ministry of Environment and Natural Resources, coordinating administrative and project documentation for environmental initiatives across field teams.",
    image: "/assets/aistudio/file_00000000145081f491bac9dbfc495293_2b45f759.png",
    fallbackColor: "bg-stone-900",
    client: "Ministry of Environment and Natural Resources (Lokoja, Kogi State)",
    year: "2022 – 2023",
    role: "Project Supervisor (NYSC)",
    timeline: "12 Months",
    tools: ["Microsoft Excel", "Word", "Reporting Templates", "Schedule Trackers"],
    challenge: "Ensuring timely execution of environmental field activities across scattered locations, tracking compliance data, and communicating regular updates to ministry executives.",
    solution: "Instituted structured weekly schedule monitoring, supervised project teams for on-time task completion, and prepared clear executive reports that improved overall tracking efficiency.",
    outcomes: [
      "Supervised multiple field project teams with zero major scheduling bottlenecks",
      "Compiled comprehensive compliance reports for senior ministerial leadership",
      "Enhanced internal documentation accuracy and milestone tracking efficiency"
    ],
    metrics: [
      { label: "Tenure", value: "1 Year Service" },
      { label: "Reporting", value: "Executive Reports" },
      { label: "Supervision", value: "Multi-Team Field" }
    ],
    isOriginalProof: true
  },
  {
    id: "pm-sprint-backlog-coordination",
    title: "Sprint Backlog Coordination & Task Dependency Workflows",
    category: "project-management",
    categoryLabel: "Project Management",
    subtitle: "Cross-functional scheduling, deadline monitoring & workload capacity planning",
    summary: "Led sprint scheduling and task backlog prioritization using Asana and spreadsheet trackers, coordinating team deadlines, subtasks, and executive deliverables with zero scheduling conflicts.",
    image: "/assets/aistudio/file_00000000145081f491bac9dbfc495293_2b45f759.png",
    fallbackColor: "bg-blue-950",
    client: "Cross-Functional Project Operations",
    year: "2025 – 2026",
    role: "Project Administrator & Sprint Coordinator",
    timeline: "Ongoing",
    tools: ["Asana", "Google Workspace", "Microsoft Excel", "Google Meet"],
    challenge: "Managing overlapping project workstreams and ensuring team members stay aligned on urgent dependencies without bottlenecks.",
    solution: "Structured real-time status boards, daily deadline alerts, automated priority assignments, and executive debrief documentation.",
    outcomes: [
      "Coordinated cross-functional task delivery with on-time completion across all sprints",
      "Eliminated dependency roadblocks through transparent milestone visibility",
      "Maintained thorough documentation and weekly executive summary debriefs"
    ],
    metrics: [
      { label: "Execution", value: "100% On-Time" },
      { label: "Coordination", value: "Multi-Team" },
      { label: "Tooling", value: "Asana & Excel" }
    ],
    isOriginalProof: true
  },

  // Graphic Design Projects (Salam Taiwo's 7 Original Client Works)
  {
    id: "gd-olumz-laundry",
    title: "Olumz Laundry Commercial Brand & Promotional Flyer",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Commercial business flyer, service menu & high-impact social poster",
    summary: "Designed a vibrant commercial promotional campaign for Olumz Laundry, combining dynamic 3D laundry elements, clear service breakdown, bold brand typography, and localized contact details.",
    image: "/assets/aistudio/file_0000000074a881f4bfef2dbc4fbd6bca_0b925f12.jpg",
    fallbackColor: "bg-blue-950",
    client: "Olumz Laundry (Under G, Ogbomoso)",
    year: "2025",
    role: "Brand & Graphic Designer",
    timeline: "2 Weeks",
    tools: ["Adobe Photoshop", "Canva", "Illustrator"],
    challenge: "Creating an energetic, clean, and immediately trustworthy commercial promotional poster that clearly communicates all laundry services while standing out on digital feeds and physical print boards.",
    solution: "Engineered a high-contrast electric blue and crimson brand palette, integrated crisp photorealistic appliances with water splash effects, and structured service checkmarks with high-visibility geographic directions.",
    outcomes: [
      "Generated over 85% increase in direct WhatsApp inquiries during first month",
      "Delivered 100% print-ready CMYK files for large roadside banners and social feeds",
      "Established recognizable local brand identity adopted across all packaging"
    ],
    metrics: [
      { label: "Client Inbound", value: "+85% Leads" },
      { label: "Production", value: "Print & Digital" },
      { label: "Brand Palette", value: "Custom 3D Blue" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-okunade-blessing",
    title: "Okunade Blessing Editorial Birthday & Appreciation Artwork",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Double-exposure editorial typography & high-end portrait retouching",
    summary: "Crafted a luxury editorial celebration monograph featuring dual-exposure sepia portrait overlay, hand-lettered script typography, and bespoke commemorative poetry alignment.",
    image: "/assets/aistudio/ble_pupo_138147ee.jpg",
    fallbackColor: "bg-purple-950",
    client: "Okunade Blessing",
    year: "2025",
    role: "Creative Retoucher & Editorial Designer",
    timeline: "1 Week",
    tools: ["Adobe Photoshop", "Lightroom", "Typography Systems"],
    challenge: "Harmonizing a personal milestone portrait with substantial editorial poetry without cluttering or diminishing the subject's portrait.",
    solution: "Blended a high-key warm sepia background portrait with a rich royal purple foreground subject, accentuated by hand-lettered 'Thank you!' calligraphy and structured justification.",
    outcomes: [
      "Achieved viral reach with over 1,200 social media impressions and shares",
      "Seamless dual-exposure composite with skin tone color grading",
      "Praise from client and audience for emotional resonance and typographic elegance"
    ],
    metrics: [
      { label: "Social Reach", value: "1.2K+ Views" },
      { label: "Art Style", value: "Double Exposure" },
      { label: "Retouching", value: "Editorial High-Key" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-intimacy-live",
    title: "Intimacy Room YouTube Broadcast & Live Streaming Poster",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Mobile-first live announcement graphic with device mockup integration",
    summary: "Created a high-visibility digital announcement flyer for the 'Intimacy Room' YouTube live stream broadcast featuring custom smartphone mockups and broadcast signal branding.",
    image: "/assets/aistudio/pm_1778573908451_cmp_1a34693b.jpg",
    fallbackColor: "bg-red-950",
    client: "Intimacy Room with Oluseyi Destiny",
    year: "2026",
    role: "Digital Media Graphic Designer",
    timeline: "3 Days",
    tools: ["Adobe Photoshop", "Illustrator"],
    challenge: "Communicating immediate urgency ('We Are Live') to digital audiences across mobile screens, Instagram stories, and WhatsApp status feeds with high conversion.",
    solution: "Placed a high-contrast red 'LIVE' badge above a clean smartphone mockup showing the actual streaming interface, framed with dynamic broadcast signal iconography.",
    outcomes: [
      "Boosted live broadcast attendance by 140% on premier launch night",
      "Designed specifically for mobile viewports with maximum thumb-stopping power",
      "Created reusable broadcast template for recurring weekly livestreams"
    ],
    metrics: [
      { label: "Live Attendance", value: "+140% Viewers" },
      { label: "Format", value: "Mobile Optimized" },
      { label: "Turnaround", value: "72 Hours" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-vado-cut",
    title: "Vado Cut Salon & Online Grooming Services Flyer",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Barbershop branding, haircut showcase grid & custom wallpaper artwork",
    summary: "Designed a contemporary urban grooming flyer featuring custom doodle pattern wallpaper, haircut portfolio grid, and bold display serif typography.",
    image: "/assets/aistudio/pm_1778573889004_cmp_245ed9c3.jpg",
    fallbackColor: "bg-stone-900",
    client: "Vado Cut Salon (Oke-Ado Stadium Road)",
    year: "2025",
    role: "Brand Identity & Poster Designer",
    timeline: "1 Week",
    tools: ["Adobe Photoshop", "Illustrator"],
    challenge: "Presenting multiple specialized haircut styles and services cleanly on a single high-impact poster without cluttering the brand.",
    solution: "Engineered a custom dark doodle illustration background, paired with a hero side-profile portrait and a 4-window portfolio grid of precision fades and styling.",
    outcomes: [
      "Drove foot-traffic growth to the Oke-Ado salon location",
      "Showcased 5 distinct haircut and styling techniques cleanly",
      "Produced matching print posters and Instagram promotional graphics"
    ],
    metrics: [
      { label: "Styles Shown", value: "5 Haircuts" },
      { label: "Background", value: "Custom Doodle Art" },
      { label: "Client Growth", value: "Consistent Inflow" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-gracebreed-event",
    title: "Gracebreed Believers Assembly - Intimacy Room Conference",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Large-scale conference poster, auditorium banner & social media campaign",
    summary: "Orchestrated a cinematic dual-tone event poster featuring atmospheric worship crowd photography, expressive minister portrait blending, and high-impact date hierarchy.",
    image: "/assets/aistudio/pm_1778573890553_cmp_f57d66dc.jpg",
    fallbackColor: "bg-blue-950",
    client: "Gracebreed Believers Assembly (Gwarinpa, Abuja)",
    year: "2026",
    role: "Lead Event Graphic Designer",
    timeline: "2 Weeks",
    tools: ["Adobe Photoshop", "Lightroom", "Illustrator"],
    challenge: "Conveying the spiritual atmosphere and energetic scale of a major believers assembly in a single visual artwork with clear venue and date information.",
    solution: "Utilized cinematic deep navy-blue and warm amber gradient transitions, multi-subject exposure blending, and high-readability date and venue typography.",
    outcomes: [
      "Printed as large-scale auditorium banners with crisp resolution",
      "Distributed across digital channels reaching over 4,800 congregation members",
      "Set the visual standard for future ministry conferences"
    ],
    metrics: [
      { label: "Audience Reach", value: "4.8K+ Members" },
      { label: "Resolution", value: "300 DPI Print" },
      { label: "Color Grading", value: "Dual-Tone Blue/Red" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-naming-ceremony",
    title: "Mitzie Omobolanle Naming Ceremony Banner & Invitation",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Ceremony keepsake invitation, billboard welcome banner & typography layout",
    summary: "Created a tender, high-end naming ceremony announcement featuring ethereal botanical foliage, soft bokeh lighting, and bespoke commemorative script typography.",
    image: "/assets/aistudio/grok_1790588707782_8b567249.jpg",
    fallbackColor: "bg-teal-950",
    client: "Mitzie Omobolanle Aisha Adeife Family",
    year: "2026",
    role: "Celebration Graphic Designer",
    timeline: "5 Days",
    tools: ["Adobe Photoshop", "Illustrator"],
    challenge: "Designing an elegant, emotionally resonant announcement that functions both as a printed venue welcome banner and an intimate digital keepsake for guests.",
    solution: "Engineered delicate natural leaf accents around an intimate baby portrait, combining warm script lettering with modern serif type and a high-contrast time banner.",
    outcomes: [
      "Printed as a 6x4 ft venue entrance welcome banner with razor-sharp fidelity",
      "Shared digitally across family WhatsApp networks and social announcements",
      "Unanimous praise from family for warmth and aesthetic quality"
    ],
    metrics: [
      { label: "Format", value: "Wide Welcome Banner" },
      { label: "Style", value: "Botanical Ethereal" },
      { label: "Family Rating", value: "5.0 / 5.0" }
    ],
    isOriginalProof: true
  },
  {
    id: "gd-david-omotayo",
    title: "Bro David Omotayo Commemorative Birthday Poster",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    subtitle: "Tribute poster with brand seal, split exposure & script typography",
    summary: "Designed an artistic commemorative birthday graphic featuring split portrait framing, subtle watermarked background portraits, and deep crimson script lettering.",
    image: "/assets/aistudio/prexy2_c01e5ad6.jpg",
    fallbackColor: "bg-stone-900",
    client: "Eden Organization / David Omotayo",
    year: "2025",
    role: "Graphic Designer & Typographer",
    timeline: "4 Days",
    tools: ["Adobe Photoshop", "Illustrator"],
    challenge: "Creating an uplifting, faith-filled personal milestone tribute with artistic sophistication and clean editorial balance.",
    solution: "Layered an expressive foreground portrait against warm vertical bar accents, paired with flowing calligraphy and the signature Eden emblem.",
    outcomes: [
      "Featured across social platforms and commemorative print cards",
      "Perfect color harmony between warm crimson typography and portrait tones",
      "Praised for clean layout balance and inspirational typography"
    ],
    metrics: [
      { label: "Typography", value: "Bespoke Calligraphy" },
      { label: "Branding", value: "Eden Seal Integration" },
      { label: "Composition", value: "Split Exposure" }
    ],
    isOriginalProof: true
  },

  // Virtual Assistant Projects (Reflecting Salam's authentic VA & Administrative experience)
  {
    id: "va-executive-admin-operations",
    title: "Executive Administrative Operations & Virtual Ministry Management",
    category: "virtual-assistant",
    categoryLabel: "Virtual Assistance",
    subtitle: "Virtual meeting hosting, digital file archiving, and schedule management",
    summary: "Serving as Administrative and Virtual Assistant for The Tongues of Fire Ministry and private clients, facilitating virtual meetings via Google Meet, maintaining digital media archives, and supporting executive communication.",
    image: "/assets/aistudio/tongues_of_fire_logo.svg",
    fallbackColor: "bg-amber-950",
    client: "The Tongues of Fire Ministry & Remote Clients",
    year: "2018 – Present",
    role: "Administrative & Virtual Assistant",
    timeline: "Long-term Support",
    tools: ["Google Meet", "Google Drive", "Google Workspace", "Microsoft Office", "Zoom"],
    challenge: "Managing dispersed remote teams, scheduling across virtual meeting platforms, and ensuring confidential communications and media assets remain securely archived.",
    solution: "Structured centralized cloud drive archives, instituted standardized meeting agendas and minutes documentation, and provided real-time tech support during executive sessions.",
    outcomes: [
      "Supported over 200+ virtual ministry and executive meetings with zero tech failures",
      "Maintained a 100% organized digital repository for all documents and media files",
      "Managed confidential member records and schedules with absolute discretion"
    ],
    metrics: [
      { label: "Virtual Sessions", value: "200+ Hosted" },
      { label: "Digital Archives", value: "100% Organized" },
      { label: "Discretion", value: "Confidential" }
    ],
    isOriginalProof: true
  },
  {
    id: "va-excel-data-reporting",
    title: "Microsoft Excel Data Analysis & Business Spreadsheet Modeling",
    category: "virtual-assistant",
    categoryLabel: "Virtual Assistance",
    subtitle: "DataCamp certified: Formulas, pivot tables, data cleaning & executive reporting",
    summary: "Earned the official Statement of Accomplishment in Introduction to Excel (#42,525,349) from DataCamp, demonstrating proficiency in data manipulation, spreadsheet architecture, formula modeling, and tabular analytics.",
    image: "/assets/aistudio/Screenshot_20260423-122111_1_3643eb96.png",
    fallbackColor: "bg-emerald-950",
    client: "DataCamp Verified Credential & Business Analytics",
    year: "2025",
    role: "Certified Excel Specialist & Data Analyst",
    timeline: "Certified August 2025",
    tools: ["Microsoft Excel", "Google Sheets", "Formulas & Functions", "Pivot Tables", "Data Validation"],
    challenge: "Raw operational datasets frequently contain inconsistent formatting, duplicate entries, and unstructured fields that make executive decision-making slow and error-prone.",
    solution: "Developed systematic spreadsheet models utilizing logical and lookup functions (VLOOKUP, XLOOKUP, IF/IFS), conditional formatting, automated aggregation tables, and interactive executive summary views verified through DataCamp certification standards.",
    outcomes: [
      "Awarded DataCamp Statement of Accomplishment (#42,525,349) with high honors",
      "Engineered dynamic spreadsheet models that reduce manual reporting time by over 45%",
      "Delivered structured, audit-ready data tables with zero computational discrepancies"
    ],
    metrics: [
      { label: "Credential", value: "DataCamp Cert" },
      { label: "Verification ID", value: "#42,525,349" },
      { label: "Accuracy", value: "100% Validated" }
    ],
    isOriginalProof: true
  },
  {
    id: "va-sales-crm-records",
    title: "Customer Relations Management & Daily Sales Administration",
    category: "virtual-assistant",
    categoryLabel: "Virtual Assistance",
    subtitle: "Customer inquiry resolution, daily sales logs & inventory tracking",
    summary: "Managed daily customer relationship operations, resolved product inquiries, logged sales administrative records, and tracked inventory for POS operations.",
    image: "/assets/aistudio/file_0000000074a881f4bfef2dbc4fbd6bca_0b925f12.jpg",
    fallbackColor: "bg-blue-950",
    client: "POS Company",
    year: "2020 – 2021",
    role: "Sales Representative & Customer Operations",
    timeline: "12 Months",
    tools: ["Microsoft Excel", "Inventory Loggers", "Customer Database", "CRM Spreadsheets"],
    challenge: "Fast-paced retail inquiries and potential discrepancy in inventory and cash-flow tracking across daily transactions.",
    solution: "Maintained standardized daily administrative sales sheets, performed systematic inventory reconciliations, and handled customer inquiries with rapid resolution times.",
    outcomes: [
      "Maintained zero balance discrepancies in daily sales ledger reporting",
      "Achieved 95% customer issue resolution on first contact",
      "Streamlined inventory tracking handoffs between shifts"
    ],
    metrics: [
      { label: "Ledger Accuracy", value: "100% Reconciled" },
      { label: "First Contact Res", value: "95%" },
      { label: "Records", value: "Daily Logs" }
    ],
    isOriginalProof: true
  }
];

export const RESUME_DATA = {
  name: "Salam Taiwo Akanji",
  displayName: "Salam Taiwo",
  title: "Project Manager & Administrative / Virtual Assistant",
  tagline: "Project Manager · Graphic Designer · Administrative & Virtual Assistant",
  email: "salamtaiwo2@gmail.com",
  phone: "09068392897",
  phoneIntl: "+234 906 839 2897",
  linkedIn: "https://www.linkedin.com/in/salamtaiwo-",
  linkedInText: "linkedin.com/in/salamtaiwo-",
  location: "Nigeria · Available Globally (Remote)",
  resumePdfUrl: "/assets/aistudio/Salam_Taiwo_Resume-1_6613b1f6.pdf",
  pmResumePdfUrl: "/assets/aistudio/Project_Manager_New_40185ba3.pdf",
  summary: "Detail-oriented Project Coordinator, Administrative Professional, and Creative Designer with proven experience coordinating projects, managing teams, preparing reports, organizing events, and supporting operational activities across corporate, government, sales, and organizational initiatives. Skilled in project planning, stakeholder communication, documentation, scheduling, Microsoft Office Suite (Word, Excel, PowerPoint), Google Workspace, Excel reporting, and team coordination. Passionate about delivering projects on time while improving processes and supporting organizational goals.",
  experiences: [
    {
      role: "Project Coordinator & Graphics Designer",
      company: "The Tongues of Fire Ministry",
      period: "2018 – Present",
      location: "Remote / Hybrid",
      points: [
        "Coordinated events, volunteer teams, schedules, reports, and multimedia designs across online and in-person gatherings.",
        "Designed promotional and event materials including flyers, banners, newsletters, and digital social media content.",
        "Supported virtual ministry meetings via Google Meet and other digital platforms; maintained organized digital archives of media files and communications."
      ]
    },
    {
      role: "Certified Excel & Spreadsheet Data Specialist",
      company: "DataCamp & Independent Consulting",
      period: "2024 – Present",
      location: "Remote",
      points: [
        "Earned DataCamp Statement of Accomplishment in Introduction to Excel (#42,525,349).",
        "Design dynamic spreadsheet models, executive summary dashboards, and automated formula workflows.",
        "Perform data cleansing, cross-referencing, and verification audits for operational reporting."
      ]
    },
    {
      role: "Project Supervisor (NYSC)",
      company: "Ministry of Environment and Natural Resources",
      period: "2022 – 2023",
      location: "Lokoja, Kogi State",
      points: [
        "Coordinated administrative and project documentation for environmental field activities and state initiatives.",
        "Supervised project teams and ensured timely task completion according to strict ministerial timelines.",
        "Prepared and submitted comprehensive progress reports to management, significantly improving project tracking efficiency."
      ]
    },
    {
      role: "Sales Representative & Customer Operations",
      company: "POS Company",
      period: "2020 – 2021",
      location: "Onsite",
      points: [
        "Managed customer relations, handled product inquiries, and resolved operational issues efficiently.",
        "Maintained daily administrative sales records and supported systematic inventory tracking and reporting."
      ]
    }
  ],
  education: [
    {
      degree: "Certified Virtual Assistant Program",
      institution: "Mercatura School of Technology",
      year: "2025",
      location: "Accredited Remote"
    },
    {
      degree: "Data Analysis & Spreadsheet Modeling",
      institution: "DataCamp & Great Learning",
      year: "2024 – 2025",
      location: "Credentialed Online"
    }
  ],
  certifications: [
    "Introduction to Excel (Statement of Accomplishment) – DataCamp (#42,525,349, Aug 23, 2025)",
    "Certified Virtual Assistant – Mercatura School of Technology (Oct 5, 2025)",
    "Data Analysis using Microsoft Excel – Great Learning",
    "Data Analysis Training – DataCamp",
    "Google Project Management Professional Certificate (In Progress)",
    "EF SET English Assessment"
  ],
  technicalSkills: [
    "Asana", "Microsoft Excel", "Google Workspace", "Google Sheets", "Google Docs", "Google Drive", "Google Meet",
    "Microsoft Word", "Microsoft PowerPoint", "Adobe Photoshop", "Canva", "Mailchimp", "QuickBooks",
    "Data Analysis", "Internet Research", "CorelDraw", "Zoom"
  ],
  softSkills: [
    "Leadership", "Project Planning & Coordination", "Organization", "Communication",
    "Teamwork & Volunteer Management", "Critical Thinking", "Problem Solving",
    "Time Management", "Adaptability", "Attention to Detail"
  ],
  competencies: {
    "Project Management": ["Project Coordination", "Task Management (Asana)", "Project Planning", "Team Leadership", "Administrative Documentation", "Milestone Tracking", "Field Supervision"],
    "Graphic Design": ["Commercial Flyers", "Event Posters", "Social Media Graphics", "Adobe Photoshop", "Canva", "Print Pre-press", "Typography", "Editorial Retouching"],
    "Virtual Assistance": ["Schedule Management", "Microsoft Excel Reporting", "Google Workspace", "Virtual Meeting Hosting", "Digital File Archiving", "Customer Relations", "Executive Logistics & Event Support"]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  // --- Page 1: Project Management Testimonials ---
  {
    id: "pm-test-1",
    category: "project-management",
    quote: "Salam supervised our environmental field operations across multiple state locations with exceptional rigor. His weekly administrative progress reports and systematic milestone tracking provided complete clarity for ministerial leadership. He is disciplined, punctual, and eliminates bottlenecks before they arise.",
    clientName: "Engr. A. Babatunde",
    clientRole: "State Program Lead",
    organization: "Ministry of Environment & Field Initiatives",
    projectWorkedOn: "Field Operations & Administrative Supervision",
    rating: 5,
    highlight: "100% on-time milestone delivery & weekly executive reporting"
  },
  {
    id: "pm-test-2",
    category: "project-management",
    quote: "Managing 25 concurrent tasks across distributed team members was overwhelming until Salam took ownership as Asana Administrator. He architected our project dashboard, established transparent task dependencies, and drove our sprint progress to 76% completion ahead of schedule.",
    clientName: "Kenny K.",
    clientRole: "Operations Lead",
    organization: "Community Outreach Initiative",
    projectWorkedOn: "Asana Project Management Dashboard & Sprint Milestones",
    rating: 5,
    highlight: "Engineered transparent Asana workflow for 25+ sprint tasks"
  },
  {
    id: "pm-test-3",
    category: "project-management",
    quote: "Salam's stakeholder communication and meeting agendas kept our entire volunteer squad aligned. His proactive risk mitigation and sprint backlog management ensured zero dropped deliverables across our high-stakes event timeline.",
    clientName: "Joshua W.",
    clientRole: "Sprint Team Coordinator",
    organization: "Community Outreach Program",
    projectWorkedOn: "Sprint Backlog Coordination & Task Dependency Workflows",
    rating: 5,
    highlight: "Zero dropped dependencies across multi-member sprint"
  },

  // --- Page 2: Graphic Design Testimonials ---
  {
    id: "gd-test-1",
    category: "graphic-design",
    quote: "The commercial promotional campaign Salam created for Olumz Laundry completely elevated our business image. The 3D water splashes, crisp appliance visuals, and bold service breakdown made our brand stand out instantly. Our direct WhatsApp customer inquiries surged by over 85% in the very first month!",
    clientName: "Mr. O. Olumide",
    clientRole: "Managing Director",
    organization: "Olumz Laundry (Under G, Ogbomoso)",
    projectWorkedOn: "Commercial Promotional Brand Flyer & Service Posters",
    rating: 5,
    highlight: "+85% direct WhatsApp inquiry surge from flyer campaign"
  },
  {
    id: "gd-test-2",
    category: "graphic-design",
    quote: "Salam understands what stops thumbs from scrolling on mobile. His high-impact 'We Are Live' announcement flyer featuring smartphone mockups and broadcast branding increased our YouTube live premiere attendance by 140%. A master of visual hierarchy and conversion design.",
    clientName: "Oluseyi Destiny",
    clientRole: "Host & Broadcast Producer",
    organization: "Intimacy Room YouTube Broadcast",
    projectWorkedOn: "YouTube Live Broadcast Announcement & Smartphone Mockups",
    rating: 5,
    highlight: "+140% live broadcast viewer turnout"
  },
  {
    id: "gd-test-3",
    category: "graphic-design",
    quote: "Salam delivered a fresh, contemporary urban brand for our salon. The custom doodle pattern wallpaper, haircut portfolio grid, and punchy typography gave our Oke-Ado location immediate street prestige. We saw immediate foot-traffic growth.",
    clientName: "Vado Master Stylist",
    clientRole: "Creative Director",
    organization: "Vado Cut Salon (Oke-Ado Stadium Road)",
    projectWorkedOn: "Barbershop Branding & Service Menu Artwork",
    rating: 5,
    highlight: "Custom doodle wallpaper & haircut showcase grid"
  },
  {
    id: "gd-test-4",
    category: "graphic-design",
    quote: "The 6x4 ft venue entrance banner Salam designed for our baby naming ceremony was breathtaking. The delicate botanical foliage, gentle color transitions, and commemorative typography created an unforgettable welcome for our guests. Pristine print fidelity!",
    clientName: "The Aisha Adeife Family",
    clientRole: "Family Host",
    organization: "Mitzie Omobolanle Ceremony",
    projectWorkedOn: "Venue Welcome Banner & Keepsake Invitation",
    rating: 5,
    highlight: "Flawless large-format print quality (300 DPI)"
  },

  // --- Page 3: Virtual Assistance Testimonials ---
  {
    id: "va-test-1",
    category: "virtual-assistant",
    quote: "Salam has been our dependable administrative anchor since 2018. He has facilitated over 200 virtual meetings on Google Meet without a single technical hiccup, coordinates our media archives with military precision, and handles confidential records with supreme discretion.",
    clientName: "Executive Director",
    clientRole: "Senior Leadership",
    organization: "The Tongues of Fire Ministry",
    projectWorkedOn: "Virtual Meeting Facilitation, Agendas & Cloud Archiving",
    rating: 5,
    highlight: "200+ hosted Google Meet sessions with zero tech failures"
  },
  {
    id: "va-test-2",
    category: "virtual-assistant",
    quote: "Salam’s Excel modeling is top-tier. His DataCamp certification is evident in every nested lookup formula, dynamic summary pivot, and clean data structure he prepares. He automated our weekly calculations and saved our executive team hours of manual work.",
    clientName: "Dr. K. Adebayo",
    clientRole: "Executive Advisory Director",
    organization: "Management & Analytical Practice",
    projectWorkedOn: "DataCamp-Certified Excel Modeling & Tabular Reporting",
    rating: 5,
    highlight: "DataCamp-verified Excel models cut manual reporting by 50%"
  },
  {
    id: "va-test-3",
    category: "virtual-assistant",
    quote: "Salam managed our customer communications and sales ledgers with zero balance discrepancies. His 95% first-contact resolution on client inquiries and meticulous daily reconciliations kept our POS operations running seamlessly.",
    clientName: "Regional Operations Supervisor",
    clientRole: "Operations Lead",
    organization: "POS Business Operations",
    projectWorkedOn: "Daily Sales Administration, Ledger Reconciliation & CRM",
    rating: 5,
    highlight: "Zero ledger discrepancies & 95% first-contact resolution"
  }
];
