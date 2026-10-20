export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  highlights: string[];
  skills: string[];
  location: string;
  type: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  category: string;
  overview: string;
  objective: string;
  myContribution: string[];
  skillsUsed: string[];
  outcomes: string[];
  methodology?: string[];
  tags: string[];
  featured: boolean;
}

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  year: string;
  type: 'training' | 'workshop';
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  year?: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    editorialName: string;
    monogram: string;
    headline: string;
    subheading: string;
    title: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
    linkedin: string;
    github: string;
    livePortfolio: string;
    whatsappUrl: string;
    summary: string;
    storyParagraphs: string[];
    values: { title: string; desc: string }[];
    careerVision: {
      headline: string;
      statement: string;
      milestones: { phase: string; title: string; focus: string }[];
    };
  };
  education: Education[];
  experience: WorkExperience[];
  projects: Project[];
  skills: {
    category: string;
    description: string;
    skills: { name: string; level: string; note?: string }[];
  }[];
  trainingAndWorkshops: TrainingItem[];
  achievements: AchievementItem[];
  interests: {
    title: string;
    subtitle: string;
    description: string;
    focusAreas: string[];
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Mohd. Arhan Ansari",
    editorialName: "ARHAN",
    monogram: "AA",
    headline: "Where Business Meets Creativity.",
    subheading: "HR | Marketing | Business & Management",
    title: "BBA Student | HR & Marketing Enthusiast",
    email: "mohdarhanansari760@gmail.com",
    phone: "6389052675",
    phoneDisplay: "+91 63890 52675",
    location: "Kanpur, Uttar Pradesh, India",
    linkedin: "https://linkedin.com/in/Mohd-Arhan-Ansari",
    github: "https://github.com/arhan760",
    livePortfolio: "https://arhan760.github.io/my-personal-portfolio/",
    whatsappUrl: "https://wa.me/916389052675?text=Hello%20Arhan,%20I%20am%20reaching%20out%20via%20your%20executive%20portfolio.",
    summary: "A motivated and enthusiastic BBA student with practical exposure to Marketing and Sales Operations through internships at Reliance Retail Ltd. Possesses an understanding of customer relationship management, sales operations, teamwork, communication and business activities. Interested in Human Resource Management, Marketing and business operations, with a willingness to learn, adapt and contribute to organisational growth. Eager to gain professional experience and develop practical business skills through internship and entry-level opportunities.",
    storyParagraphs: [
      "I believe business reaches its greatest potential when analytical precision converges with creative intuition. As a Bachelor of Business Administration (BBA) candidate at Allenhouse Business School, my academic and practical exploration revolves around understanding people, consumer dynamics, and operational efficiency.",
      "My frontline exposure at Reliance Retail Ltd. provided an invaluable lens into the heartbeat of commercial enterprise: understanding real customer pain points, orchestrating floor promotions, and recognizing how team harmony directly dictates store performance and customer satisfaction.",
      "Driven by a strong curiosity for Human Resource Management, Strategic Marketing, and modern digital tools, I approach every project with adaptability, discipline, and an executive mindset. My ambition is to contribute meaningfully to forward-thinking organizations while continually developing real-world business acumen."
    ],
    values: [
      {
        title: "Integrity & Transparency",
        desc: "Conducting every business interaction, report, and team engagement with complete honesty and grounded realism."
      },
      {
        title: "Customer & People Centricity",
        desc: "Recognizing that behind every metric, sale, or workplace process is human emotion and genuine need."
      },
      {
        title: "Relentless Adaptability",
        desc: "Embracing emerging business paradigms, technological tools like AI in business, and evolving market trends with agility."
      },
      {
        title: "Operational Excellence",
        desc: "Commitment to consistency, clear communication, and high standards in day-to-day business operations."
      }
    ],
    careerVision: {
      headline: "Building Bridges Between People, Brand, and Performance",
      statement: "To evolve into an impactful Business and HR leader who leverages data-informed insights, empathetic management, and innovative marketing strategies to accelerate organizational growth.",
      milestones: [
        {
          phase: "Foundation (2025–2026)",
          title: "Academic Rigor & Operational Traineeships",
          focus: "Deepen management fundamentals at Allenhouse, complete retail operations stints at Reliance Retail Ltd., and master key analytical tools."
        },
        {
          phase: "Advancement (2026–2028)",
          title: "Specialized HR & Marketing Research",
          focus: "Lead academic business projects, participate in collegiate business symposiums, and execute targeted strategic internships."
        },
        {
          phase: "Leadership (2028+)",
          title: "Enterprise Contribution & Organizational Impact",
          focus: "Step into corporate HR, talent management, or brand operations, driving sustainable business growth through teamwork and disciplined execution."
        }
      ]
    }
  },

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Business Administration (BBA)",
      institution: "Allenhouse Business School",
      period: "2025 – 2028",
      status: "Currently Pursuing",
      location: "Rooma, Kanpur, Uttar Pradesh",
      details: [
        "Specializing in Human Resource Management, Marketing, and Business Management disciplines.",
        "Active participant in collegiate seminars, corporate workshops, and business presentations.",
        "Engaged in in-house practical training across AI in Business, Advanced MS Excel, and Office productivity."
      ]
    },
    {
      id: "edu-2",
      degree: "Intermediate (Class XII)",
      institution: "B.N.S.D. Inter College",
      period: "Completed",
      status: "Graduated",
      location: "Chunniganj, Kanpur, Uttar Pradesh",
      details: [
        "Built core foundational discipline in academic studies, analytical reasoning, and communication.",
        "Cultivated early leadership, team participation, and institutional involvement."
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      company: "Reliance Retail Ltd.",
      role: "Marketing & Sales Operations Trainee",
      period: "January 2026",
      duration: "10 Days",
      location: "Kanpur, Uttar Pradesh",
      type: "Traineeship / Practical Fieldwork",
      skills: ["Customer Interaction", "Sales Activities", "Product Promotion", "Customer Engagement", "Teamwork"],
      highlights: [
        "Gained additional practical experience in customer interaction and retail sales activities.",
        "Participated actively in product promotion campaigns and shopper engagement on the retail sales floor.",
        "Strengthened communication, teamwork, and customer-handling capabilities through real-time store scenarios."
      ]
    },
    {
      id: "exp-2",
      company: "Reliance Retail Ltd.",
      role: "Marketing & Sales Operations Trainee",
      period: "August 2025",
      duration: "7 Days",
      location: "Kanpur, Uttar Pradesh",
      type: "Traineeship / Practical Fieldwork",
      skills: ["Customer Relationship Management", "Sales Operations", "Product Information", "Retail Operations"],
      highlights: [
        "Interacted directly with retail shoppers to identify requirements and communicate accurate product features and benefits.",
        "Supported day-to-day sales floor operations, inventory shelf readiness, and promotional displays.",
        "Acquired hands-on exposure to fast-paced retail workflows and modern customer relationship management principles."
      ]
    }
  ],

  projects: [
    {
      id: "proj-reliance-ops",
      title: "Operational Excellence & Customer Experience",
      subtitle: "Retail Store Dynamics and Customer Engagement Study",
      organization: "Reliance Retail Ltd.",
      category: "Operations & Marketing Research",
      overview: "An observational and practical field project conducted during retail operations at Reliance Retail Ltd., investigating the direct interplay between front-end store workflows and consumer satisfaction.",
      objective: "To examine real-world customer-facing processes, identify factors influencing on-floor customer decisions, and understand how operational discipline enhances overall shopper experience.",
      myContribution: [
        "Conducted on-floor customer interactions to understand shopping preferences and product inquiry patterns.",
        "Observed daily retail store operations including display arrangement, promotional visibility, and point-of-sale customer flows.",
        "Assisted store staff in customer engagement and delivering product clarifications.",
        "Analyzed operational pain points that impact shopper satisfaction during peak floor hours."
      ],
      skillsUsed: [
        "Customer Relationship Management",
        "Retail Store Operations",
        "Customer Interaction",
        "Sales Engagement",
        "Product Promotion",
        "Operational Analysis"
      ],
      outcomes: [
        "Studied customer experience and day-to-day retail store operations systematically.",
        "Explored customer-facing processes and evaluated their role in retail business performance.",
        "Developed a grounded understanding of the direct relationship between operational efficiency and customer satisfaction."
      ],
      methodology: [
        "Observation of in-store customer traffic and navigation behavior.",
        "Direct engagement and real-time query resolution with consumers.",
        "Daily operational debriefing with retail store floor supervisors.",
        "Synthesizing observations into actionable customer experience insights."
      ],
      tags: ["Retail Operations", "Customer Experience", "Reliance Retail", "Sales", "BBA Project"],
      featured: true
    },
    {
      id: "proj-hr-marketing",
      title: "Marketing & HR Operations Academic Studies",
      subtitle: "Coursework and Practical Field Projects",
      organization: "Allenhouse Business School",
      category: "Academic & Management Research",
      overview: "Curriculum-aligned academic projects investigating modern Human Resource management workflows, organizational behavior, and integrated marketing communication principles.",
      objective: "To connect theoretical business models with real-world corporate case studies in human capital and market positioning.",
      myContribution: [
        "Researched organizational structures and strategic decision-making in Human Resource Management.",
        "Prepared presentations on consumer engagement strategies and sales operation pipelines.",
        "Collaborated in group presentations analyzing management practices and business case studies."
      ],
      skillsUsed: [
        "Human Resource Management",
        "Digital Marketing",
        "Market Research",
        "Group Presentation",
        "Team Collaboration",
        "Analytical Thinking"
      ],
      outcomes: [
        "Completed academic projects related to Marketing and Human Resource operations.",
        "Delivered group business presentations with faculty and peer evaluation.",
        "Strengthened interpersonal and strategic synthesis capabilities."
      ],
      tags: ["Human Resources", "Marketing Strategy", "Allenhouse Business School", "Academic Project"],
      featured: true
    }
  ],

  skills: [
    {
      category: "Human Resource Management",
      description: "People operations, organizational dynamics, and strategic talent perspectives.",
      skills: [
        { name: "Human Resource Management", level: "Academic & Workshop Focus", note: "Strategic decision-making & organizational structures" },
        { name: "Customer Relationship Management", level: "Practical Field Application", note: "Frontline customer engagement & retention insight" },
        { name: "Teamwork & Collaboration", level: "Demonstrated Competency", note: "Cross-functional team coordination in retail & group projects" },
        { name: "Interpersonal Communication", level: "Demonstrated Competency", note: "Clear, empathetic communication with diverse audiences" }
      ]
    },
    {
      category: "Marketing & Sales Operations",
      description: "Direct customer interaction, product advocacy, and sales execution.",
      skills: [
        { name: "Digital Marketing", level: "Foundational & Academic", note: "Channel awareness, brand positioning, and online presence" },
        { name: "Sales Operations", level: "Practical Store Experience", note: "Floor operations, merchandise visibility, customer assistance" },
        { name: "Market Research", level: "Academic Focus", note: "Consumer behavior observation and data interpretation" },
        { name: "Retail Operations", level: "Practical Field Experience", note: "Reliance Retail store procedures and customer touchpoints" },
        { name: "Product Promotion", level: "Practical Experience", note: "Communicating product benefits to prospective retail buyers" }
      ]
    },
    {
      category: "Technical & Digital Tools",
      description: "Business analytics, digital workspace productivity, and visual presentations.",
      skills: [
        { name: "MS Excel", level: "In-house Certified Training", note: "Formulas, data sorting, analysis, and business reporting" },
        { name: "PowerPoint", level: "Proficient", note: "Executive decks, visual presentations, business pitches" },
        { name: "Power BI", level: "Business Analytics", note: "Data visualization dashboards and trend exploration" },
        { name: "Canva", level: "Creative Design", note: "Promotional graphics, flyers, and professional documents" },
        { name: "Google Workspace", level: "Proficient", note: "Docs, Sheets, Slides, Drive, Forms, and cloud collaboration" },
        { name: "MS Office", level: "In-house Certified Training", note: "Comprehensive desktop productivity suite" }
      ]
    },
    {
      category: "Soft & Leadership Skills",
      description: "Essential behavioral competencies for high-performing business environments.",
      skills: [
        { name: "Communication & Interpersonal Skills", level: "Core Strength" },
        { name: "Leadership", level: "Academic & Project Lead" },
        { name: "Time Management", level: "Demonstrated" },
        { name: "Customer Interaction", level: "Hands-on Practical" },
        { name: "Adaptability", level: "Core Trait" },
        { name: "Group Presentations", level: "Active Collegiate Participant" }
      ]
    }
  ],

  trainingAndWorkshops: [
    {
      id: "train-ai",
      title: "AI in Business",
      provider: "Allenhouse Business School",
      year: "2026",
      type: "training",
      description: "In-house institutional training on the impact, implementation, and productivity enhancements of artificial intelligence in contemporary business management."
    },
    {
      id: "train-excel",
      title: "MS Excel Training",
      provider: "Allenhouse Business School",
      year: "2026",
      type: "training",
      description: "Intensive in-house training covering spreadsheet architecture, data management, business calculation formulas, and corporate reporting."
    },
    {
      id: "work-hr-strat",
      title: "The Changing Face of Strategic Decision-Making (HR)",
      provider: "Allenhouse Business School, Rooma, Kanpur",
      year: "2026",
      type: "workshop",
      description: "Specialized executive workshop analyzing strategic human resource paradigms, modern workforce management, and decision dynamics."
    },
    {
      id: "work-allenhouse",
      title: "Management Seminar & Workshop Series",
      provider: "Organized by Allenhouse Business School, Rooma, Kanpur",
      year: "2026",
      type: "workshop",
      description: "Participated in academic and corporate workshop sessions focused on contemporary business problem-solving and professional skills."
    },
    {
      id: "train-office",
      title: "MS Office Productivity Suite",
      provider: "Allenhouse Business School",
      year: "2025",
      type: "training",
      description: "Comprehensive foundational training in Microsoft Office tools for business communication, documentation, and executive presentations."
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Exuberance-26 Participation",
      category: "College Annual Fest",
      year: "2026",
      description: "Participated in Exuberance-26, the prestigious annual festival of Allenhouse Business School, engaging in institutional events."
    },
    {
      id: "ach-2",
      title: "Collegiate Competitions & Seminars",
      category: "Academic & Co-Curricular",
      year: "2025 – 2026",
      description: "Actively participated in campus business competitions, academic seminars, and professional enrichment workshops."
    },
    {
      id: "ach-3",
      title: "Marketing & HR Academic Project Completion",
      category: "Academic Excellence",
      year: "2025 – 2026",
      description: "Successfully researched and completed coursework projects centered on retail customer dynamics and human resource practices."
    },
    {
      id: "ach-4",
      title: "Business Presentations & Group Activities",
      category: "Leadership & Collaboration",
      year: "2025 – 2026",
      description: "Delivered business presentations as part of collegiate team projects, demonstrating public speaking and teamwork capability."
    }
  ],

  interests: [
    {
      title: "Human Resource Strategy",
      subtitle: "People, Culture & Organizational Harmony",
      description: "Fascinated by how talent acquisition, employee motivation, and continuous development drive long-term business resilience.",
      focusAreas: ["Strategic Decision Making", "Talent Development", "Workplace Culture", "Team Dynamics"]
    },
    {
      title: "Brand Marketing & Consumer Psychology",
      subtitle: "Creative Storytelling & Customer Connection",
      description: "Passionate about understanding why consumers make choices and crafting authentic narratives that turn products into trusted brands.",
      focusAreas: ["Retail Consumer Behavior", "Digital Channels", "Product Promotion", "Campaign Strategy"]
    },
    {
      title: "Retail Operations & Customer Journey",
      subtitle: "Frontline Efficiency & Service Quality",
      description: "Keen interest in retail floor mechanics, inventory touchpoints, and elevating direct customer satisfaction in fast-paced environments.",
      focusAreas: ["Store Operations", "Customer Experience (CX)", "Floor Coordination", "Service Standards"]
    },
    {
      title: "Business Analytics & Emerging Tech",
      subtitle: "Data-Informed Decision Making",
      description: "Exploring how Power BI, Excel analytics, and AI in business empower management to identify trends and optimize operations.",
      focusAreas: ["Power BI Dashboards", "Spreadsheet Analytics", "AI Workflow Integration", "Data-Driven Strategy"]
    }
  ]
};
