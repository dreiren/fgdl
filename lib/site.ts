export const firm = {
  name: "FGDLaw",
  legalName: "The Law Firm of Frederick G. Dedace",
  shortName: "FGDLaw",
  established: 2002,
  tagline: "Just and equitable legal counsel, built on integrity.",
  description:
    "The Law Firm of Frederick G. Dedace represents individuals and corporations across the Philippines and abroad — delivering strategic, principled representation for over two decades.",
  email: "info@fgdlaw.net",
  phoneDisplay: "(632) 727-5011-2",
  phoneTel: "+63272750112",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM",
  address: {
    line1: "Unit 316, 3rd Floor, JARS Building",
    line2: "JP Laurel Street, San Miguel",
    city: "Manila, Philippines 1008",
    short: "San Miguel, Manila",
    full: "Unit 316, 3rd Floor, JARS Building, JP Laurel Street, San Miguel, Manila, Philippines 1008",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=JARS+Building+JP+Laurel+Street+San+Miguel+Manila",
} as const;

export const navLinks = [
  { href: "/about" as const, label: "About" },
  { href: "/practice-areas" as const, label: "Practice Areas" },
  { href: "/team" as const, label: "Our Team" },
  { href: "/insights" as const, label: "Insights" },
  { href: "/contact" as const, label: "Contact" },
];

export const practiceSection = {
  title: "Areas of Practice",
  kicker: "Practical solutions. Lasting impact.",
  intro:
    "We provide strategic legal advice and practical solutions across a diverse range of practice areas.",
  footerLine: "Law • People • Progress",
  footerTag: "Your partner in a more secure tomorrow.",
} as const;

export const practiceAreas = [
  {
    slug: "intellectual-property",
    title: "Intellectual Property Law",
    eyebrow: "Ideas, brands, and innovation",
    icon: "lightbulb" as const,
    image: "/practice/intellectual-property.jpg",
    topics: ["Trademarks", "Copyright", "Patents"],
    summary:
      "Protecting ideas, brands, and innovations in a competitive world.",
    details: [
      "Trademark, copyright, and patent counsel for businesses and creators protecting brands and original work.",
      "Filing strategy, enforcement, and licensing support for intellectual property in a competitive market.",
      "Practical advice on safeguarding ideas, trade identity, and innovation.",
    ],
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    eyebrow: "Growth and sustainability",
    icon: "building" as const,
    image: "/practice/corporate-commercial.jpg",
    topics: [
      "Corporate Advisory",
      "Contracts",
      "Civil & Commercial Transactions",
    ],
    summary:
      "Supporting businesses with sound legal solutions for growth and sustainability.",
    details: [
      "Corporate advisory for entities at every stage of growth, from formation through governance.",
      "Drafting and review of commercial contracts and civil and commercial transactions.",
      "Sound legal solutions that support sustainable business operations in the Philippines and abroad.",
    ],
  },
  {
    slug: "labor-employment",
    title: "Labor & Employment Law",
    eyebrow: "Fair and productive workplaces",
    icon: "hardhat" as const,
    image: "/practice/labor-employment.jpg",
    topics: [
      "Labor Relations",
      "Employment Compliance",
      "Social Legislation",
    ],
    summary:
      "Helping organizations and employees build fair, lawful, and productive workplaces.",
    details: [
      "Labor relations, employment contracts, and workplace policies for local and cross-border operations.",
      "Employment compliance and social legislation, including labor standards and disciplinary processes.",
      "Dispute resolution before administrative and judicial forums.",
    ],
  },
  {
    slug: "military-administrative",
    title: "Military & Administrative Law",
    eyebrow: "Military justice and public law",
    icon: "shield" as const,
    image: "/practice/military-administrative.jpg",
    topics: ["Military Justice", "Administrative Proceedings"],
    summary:
      "Providing legal guidance on military, security, and administrative matters with a thorough understanding of applicable laws and regulations.",
    details: [
      "Counsel in military justice matters, informed by courtroom practice and AFP-related experience.",
      "Representation and advisory work in administrative proceedings and regulatory forums.",
      "Guidance on military, security, and administrative issues with a careful reading of applicable laws and regulations.",
    ],
  },
  {
    slug: "family-special",
    title: "Family Law & Special Proceedings",
    eyebrow: "Handled with discretion",
    icon: "heart" as const,
    image: "/practice/family-special.jpg",
    topics: ["Family Relations", "Adoption", "Guardianship"],
    summary:
      "Assisting families in life's most important matters with compassion and legal expertise.",
    details: [
      "Representation in family relations, adoption, and guardianship matters, with attention to family circumstances and court requirements.",
      "Counsel in related special civil proceedings that call for careful, confidential handling.",
      "Clear communication with clients throughout filing, hearing, and post-judgment steps.",
    ],
  },
  {
    slug: "education-law",
    title: "Education Law",
    eyebrow: "Institutions, students, and stakeholders",
    icon: "graduation" as const,
    image: "/practice/education-law.jpg",
    topics: [],
    summary:
      "Assisting educational institutions, students, and stakeholders on legal, regulatory, and governance matters in the education sector.",
    details: [
      "Counsel for educational institutions on governance, regulation, and institutional policies.",
      "Guidance for students, families, and stakeholders on education-sector legal issues.",
      "Practical support on compliance matters that arise in schools, universities, and related organizations.",
    ],
  },
  {
    slug: "data-privacy",
    title: "Data Privacy & Information Protection",
    eyebrow: "Certified DPO on staff",
    icon: "lock" as const,
    image: "/practice/data-privacy.jpg",
    topics: [],
    summary:
      "Guiding organizations on compliance with data privacy laws and best practices in information security.",
    details: [
      "Privacy program design aligned with the Data Privacy Act of 2012 and related issuances.",
      "Compliance audits, incident-response planning, and counsel for data-sharing and vendor arrangements.",
      "Training and practical guidance for management, HR, and information-security teams, led by a Certified Data Protection Officer.",
    ],
  },
  {
    slug: "human-resources-advisory",
    title: "Human Resources & Management Advisory",
    eyebrow: "People, organization, and compliance",
    icon: "users" as const,
    image: "/practice/human-resources-advisory.jpg",
    topics: [],
    summary:
      "Providing strategic advice on human resource management, organizational development, and workplace compliance.",
    details: [
      "Strategic advice on human resource management and organizational development.",
      "Workplace compliance programs, policies, and retained advisory support for management teams.",
      "Coordination with labor, privacy, and corporate counsel when a matter calls for additional depth.",
    ],
  },
] as const;

export type PracticeArea = (typeof practiceAreas)[number];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export const attorneys = [
  {
    slug: "frederick-g-dedace",
    name: "Atty. Frederick G. Dedace, PhD",
    role: "Founder & General Counsel",
    cardSummary:
      "PhD in Peace & Security Administration; admitted to the Bar in 1999. IBP, ABA, PMAP member.",
    bio: [
      "Atty. Frederick G. Dedace, PhD, graduated in 1990 at Arellano University magna cum laude with the degree of Bachelor of Arts major in Political Science and cum laude Juris Doctor in 1998 at Jose Rizal University. He was admitted to the Philippine Bar in 1999.",
      "In 2017 he earned his Master’s degree in Public Management major in Development and Security at the Development Academy of the Philippines and in 2023 completed and obtained his PhD in Peace and Security Administration at Bicol University. He completed the Executive Course in National Security at the National Defense College of the Philippines, Certificate in Strategic Officers Civil Military Operations Course at the AFP Civil Military Operations School as well as the Command and General Staff Course in 2015 at the AFP Command and General Staff College (AFPCGSC).",
      "In 2002 he formally established The Law Firm of Frederick G. Dedace (FGDLaw) and in 2014 incorporated Fortitude Global Dimensions, Inc., a human resources consultancy firm, where he sits as Chairman of the Board.",
      "A Bar Reviewer in Political and Labor Laws, his professional memberships to date include the Integrated Bar of the Philippines (IBP), previously with the American Bar Association (ABA), People Management Association of the Philippines (PMAP), Asian Schools HRMD Practitioners (ASHPI), and the Philippine Institute of Arbitrators (PIArb) among others.",
    ],
  },
  {
    slug: "carl-ericson-john-r-dedace",
    name: "Atty. Carl Ericson John R. Dedace",
    role: "Managing Counsel",
    cardSummary:
      "MPA, CSP, CSMS. President, Fortitude Global Dimensions Inc. Faculty, Arellano University Law.",
    bio: [
      "Atty. Carl Ericson John R. Dedace, JD, MPA, CSP earned his Bachelor of Science in Business Administration major in Human Resources (BSBA) at the De La Salle College of Saint Benilde and his Juris Doctor from Arellano University School of Law. He obtained his Master’s degree in Public Administration (MPA) at Jose Rizal University, where he was cited with academic distinction, and is currently pursuing doctorate studies in Public Administration.",
      "Atty. Carl is the President of Fortitude Global Dimensions, Inc., a human resources management consultancy company with which the firm is affiliated, and teaches Labor Laws and Social Legislation as a faculty member of Arellano University School of Law.",
      "He likewise completed the Executive Course in National Security at the National Defense College of the Philippines and the Certificate in Strategic Officers Civil Military Operations Course at the AFP Civil Military Operations School.",
      "His professional memberships include the Integrated Bar of the Philippines (IBP), People Management Association of the Philippines (PMAP), Business Continuity Managers Association of the Philippines (BCMAP), and Philippine Society for Industrial Security (PSIS). His areas of focus include human resources, labor and employment, data privacy, and corporate law.",
    ],
  },
  {
    slug: "joan-don-a-napay",
    name: "Atty. Joan Don A. Napay",
    role: "Affiliated Counsel",
    cardSummary:
      "Focus on adoption, guardianship, and special proceedings. Magna cum laude graduate.",
    bio: [
      "Atty. Joan obtained the degree of Bachelor of Science in Psychology magna cum laude from the Divine Word College of Legazpi, Albay, and her Juris Doctor from the Arellano University School of Law.",
      "She is affiliated with the Armed Forces of the Philippines, Medical Service. Her focus areas of practice center on adoption, guardianship, and other special proceedings.",
    ],
  },
  {
    slug: "mary-rose-c-reyes",
    name: "Atty. Mary Rose C. Reyes",
    role: "Junior Counsel",
    cardSummary:
      "Litigation, civil & criminal law. Certified Data Protection Officer and university professor.",
    bio: [
      "Atty. Mary Rose C. Reyes is a licensed lawyer and educator dedicated to the pursuit of justice, academic excellence, and professional integrity. She earned her Bachelor of Arts in Legal Management from the University of Saint Louis, Tuguegarao, and her Juris Doctor degree from the Arellano University School of Law. She was admitted to the Philippine Bar in December 2023.",
      "With a strong background in litigation, civil law, criminal law, and military justice, Atty. Rose provides legal insight grounded in both practical experience and academic depth. As a Certified Data Protection Officer, she also offers expertise in data privacy compliance and information security.",
      "Currently, she is a Professor at Arellano University, where she mentors Political Science students. Alongside her teaching career, she is pursuing her Master of Laws (LL.M.) at Saint Louis University, Baguio City.",
    ],
  },
] as const;

export type Attorney = (typeof attorneys)[number];

export function getAttorney(slug: string) {
  return attorneys.find((attorney) => attorney.slug === slug);
}

export const lawyersRoster = [
  {
    slug: "carl-ericson-john-r-dedace",
    name: "Atty. Carl Ericson John R. Dedace, JD, MPA, CSP, CSMS",
    title: "Managing Counsel",
    focusAreas: [
      "Labor and Employment Law",
      "Human Resources",
      "Corporate Law",
      "Data Privacy",
      "Regulatory Compliance",
    ],
  },
  {
    slug: "mary-rose-c-reyes",
    name: "Atty. Mary Rose C. Reyes, JD",
    title: "Associate Counsel",
    focusAreas: [
      "Litigation",
      "Civil Law",
      "Criminal Law",
      "Military Justice",
      "Legal Research",
      "Data Privacy",
    ],
  },
  {
    slug: "frederick-g-dedace",
    name: "Atty. Frederick G. Dedace, PhD",
    title: "Founder",
    focusAreas: [
      "Political Law",
      "Labor Law",
      "Public Management",
      "National Security",
      "Human Resources",
      "Institutional Leadership",
    ],
  },
  {
    slug: "joan-don-a-napay",
    name: "Atty. Joan Don A. Napay, JD",
    title: "Affiliated Counsel",
    focusAreas: [
      "Family Law",
      "Adoption",
      "Guardianship",
      "Special Proceedings",
      "Psychology and Law",
      "Public Service",
    ],
  },
] as const;

export const insights = [
  {
    slug: "labor-compliance-across-borders",
    title: "Labor compliance for companies operating in the Philippines and abroad",
    date: "2026-03-12",
    category: "Corporate & Labor",
    excerpt:
      "Growing organizations need employment counsel that can travel with the business — from workplace policies at home to cross-border HR questions.",
    paragraphs: [
      "Philippine employers are expected to keep workplace rules, contracts, and disciplinary processes consistent with the Labor Code and related issuances. When a company also has people, vendors, or operations overseas, those local rules sit beside a second set of practical questions: which law governs a given worker, how policies are rolled out, and how disputes are contained early.",
      "FGDLaw’s labor and corporate practice is built for that overlap. The firm advises on employment documentation, HR compliance, and dispute resolution for corporations operating in the Philippines and abroad — work that benefits from both courtroom discipline and human-resources experience inside the affiliated consultancy, Fortitude Global Dimensions, Inc.",
      "A sound program usually starts with the ordinary: clear contracts, documented policies, and managers who understand the process before a conflict hardens. From there, retained counsel can help the organization respond to inspections, claims, and governance issues without treating every question as a one-off emergency.",
      "This article is general information about the kinds of matters the firm handles. It is not legal advice and does not create a lawyer-client relationship. For guidance on a specific situation, schedule a confidential consultation.",
    ],
  },
  {
    slug: "data-privacy-as-an-operating-discipline",
    title: "Treating data privacy as an operating discipline, not a one-time filing",
    date: "2026-01-20",
    category: "Data Privacy",
    excerpt:
      "The Data Privacy Act is not only a registration exercise. It is a standing obligation that touches HR files, vendors, and incident response.",
    paragraphs: [
      "Philippine organizations that collect personal data — employee records, customer information, visitor logs, or health-related files — operate under the Data Privacy Act of 2012 and the rules of the National Privacy Commission. Registration and documentation matter, but they are not the whole of compliance.",
      "A working privacy program typically includes a lawful basis for each processing activity, contracts that allocate responsibility with vendors, access controls, and a plan for what happens if a breach is suspected. Certified Data Protection Officer experience on staff helps translate those requirements into steps operations and HR teams can actually follow.",
      "FGDLaw advises on information security, compliance audits, and breach response. That work is most useful when it is connected to the firm’s labor and corporate practice: the same employee files and vendor relationships that raise privacy questions often raise employment and contract questions as well.",
      "This article is general information about the kinds of matters the firm handles. It is not legal advice and does not create a lawyer-client relationship. For guidance on a specific situation, schedule a confidential consultation.",
    ],
  },
  {
    slug: "discretion-in-special-proceedings",
    title: "Discretion in special proceedings: adoption, guardianship, and the work around them",
    date: "2025-11-04",
    category: "Family & Special Proceedings",
    excerpt:
      "Special civil proceedings ask the court to rearrange family and personal status. They also ask counsel to move with care.",
    paragraphs: [
      "Adoption, guardianship, and related special proceedings are not ordinary commercial disputes. They involve family history, the welfare of children or persons who need protection, and court processes that are exacting about documents, notice, and proof.",
      "Clients in these matters usually want two things at once: a path that the court can grant, and a manner of handling that does not turn a private difficulty into a public spectacle. That is why FGDLaw describes this work as counsel handled with discretion and compassion — and why affiliated counsel focused on special proceedings is part of the firm’s offering.",
      "Preparation still decides outcomes. Complete records, realistic timelines, and frank advice about what a petition can and cannot accomplish are more useful than optimism. When military or public-service affiliations are part of a family’s circumstances, they should be accounted for early rather than discovered late.",
      "This article is general information about the kinds of matters the firm handles. It is not legal advice and does not create a lawyer-client relationship. For guidance on a specific situation, schedule a confidential consultation.",
    ],
  },
] as const;

export type Insight = (typeof insights)[number];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export const heroStats = [
  { value: "23+", label: "Years in Practice" },
  { value: "500+", label: "Clients Represented" },
  { value: "5", label: "Attorneys & Counsel" },
  { value: "IBP", label: "Registered Member Firm" },
] as const;

export const firmStats = [
  { value: "2002", label: "Firm established" },
  { value: "4+", label: "Areas of specialization" },
  { value: "PhD", label: "Led by doctorate holder" },
  { value: "100%", label: "Client-first commitment" },
] as const;
