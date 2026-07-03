export interface SearchItem {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // Navigation
  {
    title: "Home / Welcome Page",
    href: "/",
    category: "Navigation",
    description: "SCP College Mahalingpur home page featuring highlights, updates, and virtual campus tour.",
    keywords: ["home", "main", "welcome", "scp", "mahalingpur", "college"]
  },
  {
    title: "Contact Us",
    href: "/contact",
    category: "Navigation",
    description: "Find college phone numbers, administrative email addresses, location maps, and contact forms.",
    keywords: ["contact", "address", "phone", "email", "map", "location", "help", "support"]
  },

  // About KLE
  {
    title: "KLE History & Centenary Journey",
    href: "/about-kle/history",
    category: "About KLE",
    description: "Learn about the history of Karnatak Lingayat Education Society, established in 1916 by the Saptarshis.",
    keywords: ["kle", "history", "society", "centenary", "belagavi", "saptarshis", "sages", "1916"]
  },
  {
    title: "KLE Society Emblem Meaning",
    href: "/about-kle/emblem",
    category: "About KLE",
    description: "Detailed symbolism of the Sacred Bull, Flying Bird, Hexagon, and Ishtalinga inside the official KLE logo.",
    keywords: ["emblem", "sacred bull", "flying bird", "hexagon", "ishtalinga", "logo", "symbol"]
  },
  {
    title: "KLE Society Vision & Mission",
    href: "/about-kle/vision-mission",
    category: "About KLE",
    description: "Read the 12 core mission items and the global excellence vision statement of the KLE Society.",
    keywords: ["vision", "mission", "goals", "excellence", "standards", "values", "philanthropy"]
  },
  {
    title: "KLE Society Founders (The Saptarshis)",
    href: "/about-kle/founders",
    category: "About KLE",
    description: "Dedicated profiles of the seven saintly teachers who dedicated their lives to establish the KLE Society.",
    keywords: ["founders", "saptarshis", "sages", "teachers", "history", "chikodi", "basavanal", "sakhare"]
  },
  {
    title: "Board of Management Members",
    href: "/about-kle/board-management",
    category: "About KLE",
    description: "Explore the names and designations of the President, Vice-President, Chairman, and Board Members of KLE.",
    keywords: ["board", "management", "directors", "office bearers", "amit kore", "sunil jalalpure", "members", "life members"]
  },
  {
    title: "Chairman's Message - Shri Amit Kore",
    href: "/about-kle/chairman-message",
    category: "About KLE",
    description: "Read profile notes and statements from the active Chairman Shri Amit Kore and Honorary Chairman Dr. Prabhakar Kore.",
    keywords: ["chairman", "message", "amit kore", "prabhakar kore", "padma shri", "senate", "mp"]
  },
  {
    title: "Local Governing Body (LGB)",
    href: "/about-kle/lgb",
    category: "About KLE",
    description: "List of Local Governing Body members governing SCP College Mahalingpur.",
    keywords: ["lgb", "governing body", "local", "munavalli", "ambi", "members", "secretary"]
  },

  // About Us (College)
  {
    title: "About College (History & Details)",
    href: "/about",
    category: "About College",
    description: "Overview of SCP Arts, Science & D.D. Shirol Commerce College, founded in 1987 in Mahalingpur.",
    keywords: ["college", "about", "scp", "mahalingpur", "establishment", "1987", "bagalkot"]
  },
  {
    title: "Our Donor - Dr. D. D. Shirol",
    href: "/about/donors",
    category: "About College",
    description: "Learn about the donors and philanthropists who contributed to the construction of SCP College.",
    keywords: ["donor", "shirol", "donation", "philanthropy", "d d shirol"]
  },
  {
    title: "College Vision & Mission",
    href: "/about/vision",
    category: "About College",
    description: "Explore the academic vision, mission statements, and quality policies of SCP College.",
    keywords: ["vision", "mission", "college vision", "motto", "objectives"]
  },
  {
    title: "Principal's Message - Shri N. B. Patil",
    href: "/about/principal",
    category: "About College",
    description: "Welcome statement, career achievements, and academic goals from Principal Shri N. B. Patil.",
    keywords: ["principal", "message", "patil", "commerce", "n b patil", "welcome"]
  },
  {
    title: "Our Staff Directory (Faculty & Support)",
    href: "/about/staff",
    category: "About College",
    description: "Complete list of UG & PG teaching staff, library assistants, administrators, and menial support staff.",
    keywords: ["staff", "faculty", "teachers", "lecturer", "non-teaching", "menial", "directory", "office", "patil", "soraganvi"]
  },
  {
    title: "College Achievements & Awards",
    href: "/about/achievements",
    category: "About College",
    description: "Showcase of university ranks, sports championships, NSS laurels, and cultural trophies.",
    keywords: ["achievements", "awards", "records", "sports", "rank", "gold medal", "university rank"]
  },

  // Programs / Academic Courses
  {
    title: "Bachelor of Arts (B.A.) Syllabus",
    href: "/programs/ba",
    category: "Programs",
    description: "Syllabus details for B.A. with combinations like Kannada, History, Economics, Political Science, and Sociology.",
    keywords: ["ba", "bachelor of arts", "arts", "history", "economics", "sociology", "political science", "journalism", "marketing"]
  },
  {
    title: "Bachelor of Science (B.Sc.) Syllabus",
    href: "/programs/bsc",
    category: "Programs",
    description: "Curriculum for B.Sc. with combinations: Physics-Chemistry-Mathematics (PCM) & Chemistry-Botany-Zoology (CBZ).",
    keywords: ["bsc", "bachelor of science", "science", "physics", "chemistry", "mathematics", "botany", "zoology"]
  },
  {
    title: "Bachelor of Commerce (B.Com.) Syllabus",
    href: "/programs/bcom",
    category: "Programs",
    description: "B.Com. course overview featuring Financial Accounting, Corporate Law, Cost Accounting, and Retail Marketing.",
    keywords: ["bcom", "commerce", "bachelor of commerce", "accounting", "marketing", "startups", "finance", "gst"]
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    href: "/programs/bca",
    category: "Programs",
    description: "AICTE-approved BCA syllabus including C programming, Java, Python, .NET, Machine Learning, Web Tech, and Power BI.",
    keywords: ["bca", "computer", "programming", "c", "java", "python", "networks", "web", "machine learning", "angular", "aicte", "power bi"]
  },
  {
    title: "Master of Commerce (M.Com.) Syllabus",
    href: "/programs/mcom",
    category: "Programs",
    description: "M.Com postgraduate syllabus with financial reporting, international business, and advanced costing.",
    keywords: ["mcom", "postgraduate", "master of commerce", "taxation", "finance", "accounting", "auditing", "gst"]
  },
  {
    title: "Integrated Teacher Education Programme (ITEP)",
    href: "/itep",
    category: "Programs",
    description: "NCTE recognized 4-year dual-degree ITEp (B.A. B.Ed / B.Sc. B.Ed) curriculum.",
    keywords: ["itep", "teacher", "education", "integrated", "b.a.b.ed", "b.sc.b.ed", "ncte", "bed"]
  },
  {
    title: "Program & Course Outcomes (POs, COs)",
    href: "/programs/outcomes",
    category: "Programs",
    description: "Evaluation metrics for POs, PSOs, and COs defined for all undergraduate and postgraduate programs.",
    keywords: ["outcomes", "po", "co", "pso", "curriculum", "attainment"]
  },
  {
    title: "Best Practices of College",
    href: "/programs/best-practice",
    category: "Programs",
    description: "Details on institutional quality procedures, student mentorship, and green practices.",
    keywords: ["best practice", "practices", "excellence", "mentorship", "green campus"]
  },
  {
    title: "Institutional Distinctiveness",
    href: "/programs/distinctiveness",
    category: "Programs",
    description: "Unique identity of the college, centering on rural youth empowerment and affordable higher education.",
    keywords: ["distinctiveness", "institutional", "unique", "rural", "empowerment"]
  },
  {
    title: "Student Satisfaction Survey (S.S.S.)",
    href: "/programs/sss",
    category: "Programs",
    description: "Summary results and question feedback reports of student satisfaction surveys.",
    keywords: ["sss", "survey", "student satisfaction", "feedback", "questionnaire"]
  },

  // IQAC
  {
    title: "IQAC Composition",
    href: "/iqac/composition",
    category: "IQAC",
    description: "Official listing of the IQAC committee chairperson, coordinators, and external experts.",
    keywords: ["iqac", "composition", "members", "quality assurance", "coordinator", "expert"]
  },
  {
    title: "IQAC Steering Committee",
    href: "/iqac/steering-committee",
    category: "IQAC",
    description: "Members of the IQAC steering committee driving internal quality benchmarks.",
    keywords: ["steering committee", "iqac steering", "quality assurance"]
  },
  {
    title: "Code of Conduct",
    href: "/iqac/code-of-conduct",
    category: "IQAC",
    description: "Guidelines and rules of conduct for students, faculty, and administrative heads.",
    keywords: ["code of conduct", "conduct", "rules", "ethics", "discipline", "ragging"]
  },
  {
    title: "Code of Ethics in Research",
    href: "/iqac/code-of-ethics",
    category: "IQAC",
    description: "Ethical guidelines regulating academic research, plagiarism checks, and publication rules.",
    keywords: ["code of ethics", "ethics", "research", "plagiarism", "publication"]
  },
  {
    title: "Academic Plan of Action",
    href: "/iqac/academic-plan",
    category: "IQAC",
    description: "Action plan reports and targets achieved under the IQAC.",
    keywords: ["plan of action", "academic plan", "targets", "achieved"]
  },
  {
    title: "IQAC Meeting Minutes",
    href: "/iqac/minutes-of-meeting",
    category: "IQAC",
    description: "Detailed PDF logs of IQAC meetings and resolution reports.",
    keywords: ["minutes", "meeting", "action taken", "resolutions"]
  },
  {
    title: "University Affiliation Details",
    href: "/iqac/affiliation-details",
    category: "IQAC",
    description: "Accreditation and permanent affiliation documents from Bagalkot University.",
    keywords: ["affiliation", "university", "recognition", "bagalkot", "permanant", "certificate"]
  },
  {
    title: "Quality Policy Statement",
    href: "/iqac/quality-policy",
    category: "IQAC",
    description: "Institutional policy on imparting value-based quality education to rural students.",
    keywords: ["quality policy", "policy", "goals"]
  },

  // NAAC
  {
    title: "NAAC Certificates",
    href: "/naac/certificates",
    category: "NAAC",
    description: "NAAC Peer Team reports and official grading accreditation certificates.",
    keywords: ["naac", "certificates", "accreditation", "cycle", "grade", "peer team"]
  },
  {
    title: "Self Study Report (SSR)",
    href: "/naac/ssr",
    category: "NAAC",
    description: "SSR compilation documents and support metrics for NAAC submission.",
    keywords: ["ssr", "self study", "naac ssr", "metrics"]
  },
  {
    title: "AQAR Reports (Annual Quality Reports)",
    href: "/naac/aqar",
    category: "NAAC",
    description: "Access Year-wise AQAR sheets from 2020-21, 2021-22, 2022-23, and 2023-24.",
    keywords: ["aqar", "annual quality", "report", "2020-21", "2021-22", "2022-23", "2023-24"]
  },
  {
    title: "AISHE Certifications",
    href: "/naac/aishe",
    category: "NAAC",
    description: "All India Survey on Higher Education annual certification uploads.",
    keywords: ["aishe", "higher education", "survey", "certificate", "mhrd"]
  },
  {
    title: "NAAC Criteria Wise Details",
    href: "/naac/criterion-details",
    category: "NAAC",
    description: "Criterion 1 to 7 documentation portals for NAAC verification.",
    keywords: ["criterion", "naac criteria", "criteria 1", "criteria 2", "metric docs"]
  },
  {
    title: "RTI Act Disclosures",
    href: "/naac/rti-act",
    category: "NAAC",
    description: "RTI declaration board and public information officer designations.",
    keywords: ["rti", "right to information", "disclosures", "compliance", "act"]
  },
  {
    title: "Accreditation Undertaking",
    href: "/naac/undertaking",
    category: "NAAC",
    description: "College undertaking declarations for NAAC processes.",
    keywords: ["undertaking", "naac undertaking", "declaration"]
  },

  // Infrastructure
  {
    title: "Administrative Office Infrastructure",
    href: "/infrastructure/office",
    category: "Infrastructure",
    description: "Overview of principal cabin, reception counter, academic section, and records systems.",
    keywords: ["office", "infrastructure", "administration", "counter", "fees"]
  },
  {
    title: "Campus Support Facilities",
    href: "/infrastructure/support-facilities",
    category: "Infrastructure",
    description: "Details on RO drinking water units, generator back-ups, vehicle parking, and cafeteria.",
    keywords: ["support", "facilities", "canteen", "generator", "water", "ro plant", "parking"]
  },
  {
    title: "College Library Reference & Reading Rooms",
    href: "/infrastructure/library",
    category: "Infrastructure",
    description: "Explore the print repository, e-library portals, reading cabins, and stack areas.",
    keywords: ["library", "books", "reference", "digital library", "stack area", "e-resources", "reading room"]
  },
  {
    title: "Hostel Facilities",
    href: "/infrastructure/hostel",
    category: "Infrastructure",
    description: "Hostel rooms, dining mess, security, and medical options for girl students.",
    keywords: ["hostel", "girls", "ladies hostel", "boarding", "accommodation", "mess"]
  },
  {
    title: "Classrooms & ICT Facilities",
    href: "/infrastructure/classrooms",
    category: "Infrastructure",
    description: "Description of spacious lecture rooms, smart classrooms, and teaching aids.",
    keywords: ["classrooms", "ict", "lecture halls", "benches", "projectors", "smartboards"]
  },
  {
    title: "Multi-Purpose Gymnasium",
    href: "/infrastructure/gymnasium",
    category: "Infrastructure",
    description: "Fitness facilities, weight training sets, treadmills, and dynamic workout areas.",
    keywords: ["gym", "gymnasium", "sports", "fitness", "workout", "dumbbells", "health"]
  },
  {
    title: "Science Laboratories",
    href: "/infrastructure/labs",
    category: "Infrastructure",
    description: "State-of-the-art labs for Physics, Chemistry, Botany, Zoology, and Computer applications.",
    keywords: ["labs", "science lab", "computer lab", "chemistry lab", "botany lab", "zoology lab", "specimens"]
  },

  // Supporting Sections
  {
    title: "Sports & Cultural Activities",
    href: "/supporting-sections/sports-culture",
    category: "Supporting Sections",
    description: "Outdoor sports courts, indoor sports arenas, and annual youth festivals.",
    keywords: ["sports", "culture", "gymkhana", "games", "athletics", "dance", "music", "youth festival", "volleyball", "kabaddi"]
  },
  {
    title: "Scholarships & Fee Concessions",
    href: "/supporting-sections/scholarships",
    category: "Supporting Sections",
    description: "Government post-metric aid, minority scholarships, and institutional endowments.",
    keywords: ["scholarships", "fees", "aid", "fee concession", "minority", "sc/st", "e-pass", "concession"]
  },
  {
    title: "Research Policy & Ethics",
    href: "/supporting-sections/research-policy",
    category: "Supporting Sections",
    description: "Guidelines and ethical rules governing faculty projects and research publication.",
    keywords: ["research", "policy", "publications", "ethics", "minor project"]
  },

  // Student Corner
  {
    title: "Admission Criteria & Reservations",
    href: "/student-corner/admissions",
    category: "Student Corner",
    description: "Detailed enrollment guidelines, fee structures, and government reservation seat matrices.",
    keywords: ["admission", "intake", "eligibility", "registration", "seats", "reservation"]
  },
  {
    title: "Enrollment Strength Logs",
    href: "/student-corner/strength",
    category: "Student Corner",
    description: "Statistical records of total student strength and gender ratios across streams.",
    keywords: ["strength", "students", "enrollment", "number", "gender ratio", "count"]
  },
  {
    title: "Academic Syllabus Repositories",
    href: "/student-corner/syllabus",
    category: "Student Corner",
    description: "Retrieve links to syllabus files prescribed by Bagalkot University.",
    keywords: ["syllabus", "curriculum", "courses", "university syllabus"]
  },
  {
    title: "Academic Calendar of Events",
    href: "/student-corner/academic-calendar",
    category: "Student Corner",
    description: "Annual planning charts, internal exam cycles, and vacation schedules.",
    keywords: ["calendar", "schedule", "academic calendar", "events", "exams", "holidays"]
  },
  {
    title: "Student Research Publications",
    href: "/student-corner/student-research",
    category: "Student Corner",
    description: "Research papers published and presentations made by students in conferences.",
    keywords: ["student research", "projects", "papers", "presentations", "seminars"]
  },
  {
    title: "Student Support Facilities",
    href: "/student-corner/student-support",
    category: "Student Corner",
    description: "Explore the health center, placement cell, career guidance, and anti-ragging support systems.",
    keywords: ["support", "health", "placement", "anti-ragging", "career", "counseling", "grievance"]
  },
  {
    title: "NSS Activities & Camps",
    href: "/student-corner/nss",
    category: "Student Corner",
    description: "Review annual special camps, clean-up drives, and community welfare initiatives by NSS units.",
    keywords: ["nss", "camps", "social service", "volunteers", "national service"]
  },

  // Media
  {
    title: "Photo Gallery & Events",
    href: "/gallery/photo-gallery",
    category: "Media",
    description: "Dynamic catalog of pictures showing campus life, seminars, sports, and cultural festivals.",
    keywords: ["photos", "gallery", "images", "events", "pictures", "campus life"]
  },
  {
    title: "Seminars, Conferences & Workshops",
    href: "/gallery/seminars",
    category: "Media",
    description: "Details of national and state-level seminars funded by UGC and self-managed streams.",
    keywords: ["seminars", "conferences", "ugc", "workshop", "keynote", "papers"]
  },
  {
    title: "Notifications & News Announcements",
    href: "/gallery/notifications",
    category: "Media",
    description: "Read announcements regarding admissions, exams, holidays, and campus news.",
    keywords: ["notifications", "news", "announcements", "updates", "circulars"]
  }
];
