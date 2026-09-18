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
    role: "Founder",
    image: "/team/frederick-g-dedace.jpg",
    tagline:
      "Lawyer • Educator • Management Consultant • Peace and Security Practitioner",
    cardSummary:
      "Lawyer, educator, management consultant, and peace and security practitioner spanning law, human resource management, public administration, and national security.",
    intro: [
      "Atty. Frederick G. Dedace, PhD, is a lawyer, educator, management consultant, and peace and security practitioner whose professional career spans law, human resource management, public administration, national security, and organizational leadership.",
      "He graduated magna cum laude from Arellano University in 1990 with a Bachelor of Arts, Major in Political Science. He later earned his Juris Doctor, cum laude, from Jose Rizal University in 1998 and was admitted to the Philippine Bar in 1999.",
      "Driven by a commitment to continuing professional development, he pursued advanced studies in governance, development, and security. In 2017, he earned his Master’s degree in Public Management, Major in Development and Security, from the Development Academy of the Philippines. In 2023, he completed his Doctor of Philosophy in Peace and Security Administration at Bicol University.",
      "His executive and professional military education includes the Executive Course in National Security at the National Defense College of the Philippines, the Strategic Officers Civil-Military Operations Course at the AFP Civil-Military Operations School, and the Command and General Staff Course at the AFP Command and General Staff College (AFPCGSC), which he completed in 2015.",
    ],
    sections: [
      {
        title: "Legal Practice and Corporate Leadership",
        paragraphs: [
          "In 2002, Atty. Dedace formally established The Law Firm of Frederick G. Dedace (FGDLaw), through which he has pursued his professional legal practice.",
          "In 2014, he incorporated Fortitude Global Dimensions, Inc., a human resources and management consultancy firm, where he serves as Chairman of the Board. Through his work in law and consultancy, he has developed a multidisciplinary perspective on legal compliance, organizational governance, human resource management, leadership, and institutional development.",
        ],
      },
      {
        title: "Academic and Professional Engagement",
        paragraphs: [
          "Atty. Dedace also serves as a Bar Reviewer in Political Law and Labor Law, combining legal practice with professional and academic instruction.",
          "His professional affiliations include the Integrated Bar of the Philippines (IBP), People Management Association of the Philippines (PMAP), Asian Schools HRMD Practitioners, Inc. (ASHPI), and the Philippine Institute of Arbitrators (PIArb). He was also previously affiliated with the American Bar Association (ABA), among other professional organizations.",
        ],
      },
      {
        title: "A Multidisciplinary Professional Career",
        paragraphs: [
          "His academic preparation and professional experience bring together the disciplines of law, public management, human resource management, development, national security, and peace and security administration.",
          "Across his work as a lawyer, educator, consultant, and organizational leader, Atty. Dedace continues to advocate professional competence, institutional integrity, responsible leadership, and the effective application of law and management principles in both public and private organizations.",
        ],
      },
    ],
  },
  {
    slug: "carl-ericson-john-r-dedace",
    name: "Atty. Carl Ericson John R. Dedace, JD, MPA, CSP, CSMS",
    role: "Managing Counsel",
    image: "/team/carl-ericson-john-r-dedace.jpg",
    tagline:
      "Lawyer • Educator • Human Resources Professional • Corporate and Labor Law Practitioner",
    cardSummary:
      "Lawyer, educator, and human resources professional in labor and employment, human resource management, data privacy, and corporate law.",
    intro: [
      "Atty. Carl Ericson John R. Dedace is a lawyer, educator, and human resources professional whose practice and professional experience encompass labor and employment law, human resource management, data privacy, corporate law, and organizational management.",
      "He earned his Bachelor of Science in Business Administration, Major in Human Resources, from De La Salle–College of Saint Benilde and his Juris Doctor from the Arellano University School of Law. He subsequently obtained his Master in Public Administration (MPA) from Jose Rizal University, where he was recognized with academic distinction. He is currently pursuing doctoral studies in Public Administration.",
    ],
    sections: [
      {
        title: "Legal Practice and Corporate Leadership",
        paragraphs: [
          "As Managing Counsel, Atty. Dedace brings together legal practice and management expertise in advising clients on matters involving labor and employment, human resources, corporate governance, regulatory compliance, and data privacy.",
          "He is also the President of Fortitude Global Dimensions, Inc., a human resources management consultancy firm affiliated with the Firm. His leadership role provides him with practical experience at the intersection of law, human resource management, organizational development, and corporate administration.",
        ],
      },
      {
        title: "Academic and Professional Engagement",
        paragraphs: [
          "Alongside his legal and corporate practice, Atty. Dedace is a faculty member of the Arellano University School of Law, where he teaches Labor Laws and Social Legislation. His academic work complements his professional practice by allowing him to contribute to the education and development of future members of the legal profession.",
          "His professional development also extends to national security and civil-military affairs. He completed the Executive Course in National Security at the National Defense College of the Philippines and the Strategic Officers Civil-Military Operations Course at the AFP Civil-Military Operations School.",
        ],
      },
      {
        title: "Professional Affiliations",
        paragraphs: [
          "Atty. Dedace maintains professional affiliations with the Integrated Bar of the Philippines (IBP), People Management Association of the Philippines (PMAP), Business Continuity Managers Association of the Philippines (BCMAP), and the Philippine Society for Industrial Security (PSIS).",
        ],
      },
      {
        title: "Areas of Practice",
        paragraphs: [
          "His principal areas of professional focus include Human Resources, Labor and Employment, Data Privacy, and Corporate Law, reflecting a multidisciplinary practice that combines legal expertise with hands-on experience in organizational and human resource management.",
          "Through his work in legal practice, corporate leadership, and legal education, Atty. Dedace brings a practical and integrated approach to addressing the legal, regulatory, and organizational concerns of both employers and business organizations.",
        ],
      },
    ],
  },
  {
    slug: "joan-don-a-napay",
    name: "Atty. Joan Don A. Napay, JD",
    role: "Affiliated Counsel",
    image: "/team/joan-don-a-napay.jpg",
    tagline: "Lawyer • Psychology Graduate • Special Proceedings Practitioner",
    cardSummary:
      "Affiliated counsel whose practice combines law, psychology, and public service in adoption, guardianship, and special proceedings.",
    intro: [
      "Atty. Joan Don A. Napay is an affiliated counsel whose academic and professional background combines law, psychology, and public service.",
      "She earned her Bachelor of Science in Psychology, magna cum laude, from Divine Word College of Legazpi, Albay, and subsequently obtained her Juris Doctor from the Arellano University School of Law.",
    ],
    sections: [
      {
        title: "Professional Affiliation",
        paragraphs: [
          "Atty. Napay is affiliated with the Armed Forces of the Philippines Medical Service, an experience that complements her legal training with exposure to institutional service, discipline, and professional responsibility.",
        ],
      },
      {
        title: "Areas of Practice",
        paragraphs: [
          "Her practice primarily focuses on adoption, guardianship, and other special proceedings, where her background in psychology provides an additional perspective in matters involving family relations, personal welfare, and the protection of vulnerable individuals.",
          "Through her legal practice, Atty. Napay brings a careful and client-centered approach to matters that often require not only sound legal judgment, but also sensitivity to the personal and familial circumstances involved.",
        ],
      },
    ],
  },
  {
    slug: "mary-rose-c-reyes",
    name: "Atty. Mary Rose C. Reyes, JD",
    role: "Associate Counsel",
    image: "/team/mary-rose-c-reyes.jpg",
    tagline: "Lawyer • Educator • Litigation and Data Privacy Practitioner",
    cardSummary:
      "Licensed lawyer and educator in litigation, civil and criminal law, military justice, and data privacy.",
    intro: [
      "Atty. Mary Rose C. Reyes is a licensed lawyer and educator whose professional interests span litigation, civil law, criminal law, military justice, and data privacy. Her work reflects a commitment to professional integrity, legal competence, and continuing academic development.",
      "She earned her Bachelor of Arts in Legal Management from the University of Saint Louis, Tuguegarao, and her Juris Doctor from the Arellano University School of Law. She was admitted to the Philippine Bar in December 2023.",
    ],
    sections: [
      {
        title: "Legal Practice and Professional Focus",
        paragraphs: [
          "As Associate Counsel, Atty. Reyes assists in matters involving civil and criminal litigation, military justice, legal research, and regulatory compliance.",
          "She is also a Certified Data Protection Officer, providing her with additional expertise in data privacy compliance, information governance, and the protection of personal and organizational data.",
        ],
      },
      {
        title: "Academic Engagement",
        paragraphs: [
          "Alongside her legal practice, Atty. Reyes is engaged in the academe as a Professor at Arellano University, where she mentors and teaches students in the field of Political Science.",
          "Her academic work complements her legal practice by strengthening her research, analytical, and instructional capabilities while allowing her to contribute to the development of future professionals and public servants.",
        ],
      },
      {
        title: "Continuing Legal Education",
        paragraphs: [
          "Atty. Reyes continues to advance her legal education and is currently pursuing her Master of Laws (LL.M.) at Saint Louis University in Baguio City.",
          "Her combination of legal practice, teaching experience, and continuing graduate studies provides her with a well-rounded perspective in addressing contemporary legal issues and client concerns.",
        ],
      },
    ],
  },
] as const;

export type Attorney = (typeof attorneys)[number];

export function getAttorney(slug: string) {
  return attorneys.find((attorney) => attorney.slug === slug);
}

export const supportManager = {
  name: "Ruby R. Sta. Ana",
  role: "Administrative & Legal Support Manager",
  image: "/team/ruby-r-sta-ana.jpg",
} as const;

export const supportAssociates = [
  
  { name: "Hannah M. Sarmiento", image: "/team/hannah-m-sarmiento.jpg" },
  { name: "Natalie A. Troncales", image: "/team/natalie-a-troncales.jpg" },
  { name: "Merickall Maetrix P. Javillo", image: "/team/merickall-maetrix-p-javillo.jpg" },
] as const;

export const supportTeam = {
  title: "Professional Legal Support Team",
  paragraphs: [
    "Behind the legal services of the Firm is a dedicated team of administrative and support professionals who help ensure that its day-to-day operations are efficient, organized, and responsive to the needs of both clients and counsel.",
    "The Firm’s administrative support staff assists in client coordination, records and document management, scheduling, case and office administration, communications, and other essential support functions that contribute to the orderly delivery of legal services.",
    "Working closely with the Firm’s lawyers, the team helps maintain the flow of information, documents, and appointments necessary for effective case management and client service. Their work supports the Firm’s commitment to professionalism, confidentiality, efficiency, and responsive service.",
    "Recognizing that the practice of law depends not only on legal expertise but also on strong administrative systems, the Firm values the important role of its support personnel in maintaining an organized and professional working environment.",
    "Through their diligence, coordination, and attention to detail, the administrative support staff contributes to the Firm’s continuing objective of providing clients with reliable, efficient, and professionally managed legal services.",
  ],
} as const;

export const lawyersRoster = [
  {
    slug: "carl-ericson-john-r-dedace",
    name: "Atty. Carl Ericson John R. Dedace, JD, MPA, CSP, CSMS",
    title: "Managing Counsel",
    image: "/team/carl-ericson-john-r-dedace.jpg",
    tagline:
      "Lawyer • Educator • Human Resources Professional • Corporate and Labor Law Practitioner",
    focusAreas: [
      "Human Resources",
      "Labor and Employment",
      "Data Privacy",
      "Corporate Law",
    ],
  },
  {
    slug: "mary-rose-c-reyes",
    name: "Atty. Mary Rose C. Reyes",
    title: "Associate Counsel",
    image: "/team/mary-rose-c-reyes.jpg",
    tagline: "Lawyer • Educator • Litigation and Data Privacy Practitioner",
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
    image: "/team/frederick-g-dedace.jpg",
    tagline:
      "Lawyer • Educator • Management Consultant • Peace and Security Practitioner",
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
    name: "Atty. Joan Don A. Napay",
    title: "Affiliated Counsel",
    image: "/team/joan-don-a-napay.jpg",
    tagline: "Lawyer • Psychology Graduate • Special Proceedings Practitioner",
    focusAreas: [
      "Adoption",
      "Guardianship",
      "Special Proceedings",
      "Family Relations",
    ],
  },
] as const;

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
