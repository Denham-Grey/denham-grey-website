export type Profile = {
  name: string;
  title: string;
  initials: string;
  image?: string;
  bio?: string;
  highlights?: { value: string; label: string }[];
  expertise?: string[];
  experience?: string[];
};

export type PeopleGroup = {
  number: string;
  label: string;
  title: string;
  description: string;
  profiles: Profile[];
};

const davidChinda: Profile = {
  name: "David Chinda",
  title: "Managing Director",
  initials: "DC",
  image: "/people/david.svg",
  bio: "Development finance and banking professional specialising in credit operations, risk management and business development. Onboarded 60 financial institutions and supported the disbursement of ₦750 billion at DBN with zero defaults.",
  highlights: [
    { value: "60", label: "Financial institutions onboarded" },
    { value: "₦750bn", label: "Disbursement supported at DBN" },
    { value: "Zero", label: "Defaults recorded" },
  ],
  expertise: ["Credit operations", "Risk management", "Business development"],
  experience: ["Development Bank of Nigeria (DBN)"],
};

export const peopleGroups: PeopleGroup[] = [
  {
    number: "01",
    label: "Governance and oversight",
    title: "Board of Directors",
    description:
      "Independent oversight spanning institutional governance, investment, risk and measurable impact.",
    profiles: [
      {
        name: "Shehu Jafiya",
        title: "Chairman and Independent Director",
        initials: "SJ",
        image: "/people/shehu.svg",
      },
      davidChinda,
      {
        name: "Kazeem Abdulrasheed Olanrewaju",
        title: "Independent Non-Executive Director",
        initials: "KO",
        image: "/people/kazeem.svg",
      },
      {
        name: "Sadiya El-Rufai",
        title: "Independent Non-Executive Director",
        initials: "SE",
        image: "/people/sadiat.svg",
      },
      {
        name: "Dauda Madubu Milgwe",
        title: "Non-Executive Director",
        initials: "DM",
        image: "/people/dauda.svg",
      },
      {
        name: "Dr Babangida Yohanna Kure",
        title: "Non-Executive Director",
        initials: "BK",
        image: "/people/kure.svg",
      },
      {
        name: "Victor Onoja Victor",
        title: "Non-Executive Director",
        initials: "VV",
        image: "/people/victor.svg",
      },
    ],
  },
  {
    number: "02",
    label: "Execution and stewardship",
    title: "Management Team",
    description:
      "Leadership across development finance, investments, portfolio management, impact and partnerships.",
    profiles: [
      davidChinda,
      {
        name: "Bamidele Ibine FCA",
        title: "Chief Risk Officer",
        initials: "BI",
        image: "/people/bami.svg",
        bio: "Risk and finance professional with expertise in due diligence, financial controls and project monitoring. Oversaw more than $1.5 billion in specialised assets and assessed over 50 financial institutions.",
        highlights: [
          { value: "$1.5bn+", label: "Specialised assets overseen" },
          { value: "50+", label: "Financial institutions assessed" },
        ],
        expertise: ["Due diligence", "Financial controls", "Project monitoring"],
      },
      {
        name: "Awa Michael",
        title: "Head, Internal Audit, Control and Compliance",
        initials: "AM",
        image: "/people/awa.svg",
        bio: "Audit and compliance professional with 12 years of experience across PwC, DBN and Impact Credit Guarantee Limited. Audited over ₦500 billion in loans and strengthened internal controls, governance and regulatory compliance.",
        highlights: [
          { value: "12 yrs", label: "Audit and compliance experience" },
          { value: "₦500bn+", label: "Loans audited" },
        ],
        expertise: [
          "Internal controls",
          "Governance",
          "Regulatory compliance",
        ],
        experience: [
          "PwC",
          "Development Bank of Nigeria (DBN)",
          "Impact Credit Guarantee Limited",
        ],
      },
      {
        name: "Daniel Ijudai Denis",
        title: "Head, Human Resources and Administration",
        initials: "DD",
        image: "/people/daniel.svg",
        bio: "Business development and investment professional specialising in financial analysis, valuation, due diligence and deal structuring. Combines experience in investor relations and strategic partnerships with a master’s degree in Energy Finance and Markets.",
        highlights: [{ value: "MSc", label: "Energy Finance and Markets" }],
        expertise: [
          "Financial analysis",
          "Valuation",
          "Due diligence",
          "Deal structuring",
          "Investor relations",
          "Strategic partnerships",
        ],
      },
      {
        name: "Sunday Ojo",
        title: "Climate Change and Sustainability Specialist",
        initials: "SO",
        bio: "Sustainability specialist focused on climate finance, carbon accounting and ESG reporting. Has delivered emissions assessments, carbon management strategies and climate initiatives for projects funded by major development finance institutions.",
        expertise: [
          "Climate finance",
          "Carbon accounting",
          "ESG reporting",
          "Emissions assessment",
        ],
      },
      {
        name: "Olayinka Olaiya",
        title: "Technical Assistant",
        initials: "OO",
        image: "/people/Olayinka_Olaiya.png",
        bio: "Technical and administrative professional with experience in office operations, branding and IT support. Provides technical assistance and administrative coordination at Denham & Grey, with previous administrative experience at the Ministry of Petroleum Resources.",
        expertise: ["Office operations", "Branding", "IT support"],
        experience: ["Denham & Grey", "Ministry of Petroleum Resources"],
      },
      {
        name: "Peter Michael",
        title: "Credit Risk Analyst",
        initials: "PM",
        bio: "Credit risk professional and specialist across the finance and credit risk management framework—risk identification, monitoring, assessment and reporting across the operations of Denham & Grey. Previously served as a final account officer at the Nigerian College of Aviation Technology (NCAT), Zaria Aerodrome.",
        expertise: [
          "Risk identification",
          "Risk monitoring",
          "Risk assessment",
          "Risk reporting",
        ],
        experience: [
          "Denham & Grey",
          "Nigerian College of Aviation Technology (NCAT), Zaria",
        ],
      },
    ],
  },
];
