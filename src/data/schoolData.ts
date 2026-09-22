export interface SchoolInfo {
  name: string;
  hindiName?: string;
  tagline: string;
  motto: string;
  affiliation: string;
  affiliationNumber: string;
  schoolCode: string;
  established: string;
  logoUrl: string;
  address: {
    street: string;
    village: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  phones: string[];
  emails: string[];
  officeHours: string;
  visitingHours: string;
  principalName: string;
  managerName: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Examination' | 'Event' | 'Holiday';
  isNew?: boolean;
  description: string;
  attachmentName?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  photoUrl: string;
  department: 'Administration' | 'Science' | 'Mathematics' | 'Humanities' | 'Languages' | 'Primary' | 'Sports & Arts';
}

export interface Facility {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classroom' | 'Events' | 'Activities' | 'Sports';
  imageUrl: string;
  caption: string;
  isOriginal?: boolean;
}

export interface AcademicProgram {
  id: string;
  level: string;
  grades: string;
  ageGroup: string;
  description: string;
  keyFeatures: string[];
  subjects: string[];
}

export type EnquiryStatus = 'Pending' | 'Contacted' | 'Admitted' | 'Rejected';

export interface AdmissionEnquiry {
  id: string;
  referenceId: string;
  studentName: string;
  parentName: string;
  grade: string;
  phone: string;
  email?: string;
  address?: string;
  message?: string;
  status: EnquiryStatus;
  createdAt: string;
  adminNotes?: string;
}

export const SCHOOL_INFO: SchoolInfo = {
  name: "Shri Durga Ji Public School",
  hindiName: "श्री दुर्गा जी पब्लिक स्कूल, सेहदा, आज़मगढ़",
  tagline: "Discipline and Justice • Excellence in Education",
  motto: "Discipline and Justice",
  affiliation: "Affiliated to Central Board of Secondary Education (CBSE), New Delhi",
  affiliationNumber: "CBSE/AFF/70171",
  schoolCode: "70171",
  established: "2002",
  logoUrl: "/images/school_logo.jpg",
  address: {
    street: "Sehada-Bilariaganj Road",
    village: "Sehada",
    district: "Azamgarh",
    state: "Uttar Pradesh",
    pincode: "276125",
    fullAddress: "Shri Durga Ji Public School, Sehada, Azamgarh, Uttar Pradesh - 276125"
  },
  phones: ["+91 94526 17188", "9452617188"],
  emails: ["sdjic118@gmail.com"],
  officeHours: "Monday to Saturday: 8:00 AM – 3:30 PM",
  visitingHours: "Parent Visiting Hours: 1:30 PM – 3:00 PM",
  principalName: "Dr. R. K. Mishra",
  managerName: "Sri Shambhu Nath Rai"
};

export const NOTICES: Notice[] = [
  {
    id: "not-01",
    title: "Admissions Open for Academic Session 2025-26 (Nursery to Class IX & XI)",
    date: "15 Sep 2026",
    category: "Admission",
    isNew: true,
    description: "Online and offline registration forms for admission into Nursery, KG, and Grades 1 to 9 & 11 are now available at the school administrative counter and website.",
    attachmentName: "Admission_Guidelines_2025_26.pdf"
  },
  {
    id: "not-02",
    title: "Schedule for Half-Yearly / Mid-Term Examinations 2026-27",
    date: "10 Sep 2026",
    category: "Examination",
    isNew: true,
    description: "The date sheet and syllabus guidelines for the upcoming Half-Yearly Examinations for classes I to XII have been published. Parents are advised to monitor study preparations.",
    attachmentName: "Date_Sheet_Mid_Term_2026.pdf"
  },
  {
    id: "not-03",
    title: "Parent-Teacher Meeting (PTM) for Grades VI to X",
    date: "02 Sep 2026",
    category: "Academic",
    isNew: false,
    description: "The Parent-Teacher Interaction meeting will be held on Saturday from 9:00 AM to 1:00 PM in respective classrooms to review student academic progress.",
    attachmentName: "PTM_Circular_Sept2026.pdf"
  },
  {
    id: "not-04",
    title: "Annual Sports Meet & Inter-House Athletics Trials Announcement",
    date: "24 Aug 2026",
    category: "Event",
    isNew: false,
    description: "Selection trials for Track and Field events, Cricket, Football, Volleyball, and Kho-Kho will commence next week under the Physical Education Department.",
    attachmentName: "Sports_Trials_Schedule.pdf"
  },
  {
    id: "not-05",
    title: "Autumn Break / Gandhi Jayanti Holiday Notice",
    date: "18 Aug 2026",
    category: "Holiday",
    isNew: false,
    description: "The school will remain closed for students on the occasion of Gandhi Jayanti and Dussehra break as per the official district academic calendar.",
    attachmentName: "Holiday_List_2026.pdf"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-classrooms",
    title: "Smart & Spacious Classrooms",
    shortDesc: "Well-ventilated, technologically equipped digital classrooms with interactive display panels and ergonomic furniture.",
    fullDesc: "Our classrooms are designed to foster active learning with ample natural daylight, proper cross-ventilation, digital smart boards, projector setups, and comfortable seating tailored for each age group.",
    iconName: "MonitorCheck",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    highlights: ["Interactive Touch Boards & Projectors", "Ergonomic age-appropriate desk seating", "CCTV surveillance & public address speakers", "Low student-to-teacher ratio (1:30)"]
  },
  {
    id: "fac-library",
    title: "Modern Resource Library",
    shortDesc: "Extensive collection of over 10,000 curriculum textbooks, reference guides, encyclopedias, journals, and digital reading materials.",
    fullDesc: "The school library serves as a tranquil haven of knowledge. Featuring curated fiction, non-fiction, competitive examination resources (JEE, NEET, Olympiads), and digital e-readers to cultivate lifelong reading habits.",
    iconName: "BookOpen",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    highlights: ["10,000+ Titles & Reference encyclopedias", "Dedicated quiet reading and research corners", "National periodicals and science magazines", "E-library terminals with high-speed internet"]
  },
  {
    id: "fac-science-lab",
    title: "Composite Science Laboratories",
    shortDesc: "Advanced, safety-compliant Physics, Chemistry, and Biology laboratories enabling hands-on experimental learning.",
    fullDesc: "Equipped with state-of-the-art apparatus, microscopes, chemicals, and demonstration kits where students verify theoretical concepts under direct supervision of faculty and lab assistants.",
    iconName: "FlaskConical",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Separate Physics, Chemistry & Biology workstations", "Strict eye-wash & fire-safety compliance", "Digital precision balances and optical benches", "Regular weekly practical periods for secondary classes"]
  },
  {
    id: "fac-computer-lab",
    title: "High-Tech Computer & IT Lab",
    shortDesc: "60+ networked multimedia computers with broadband internet, coding software, and robotics kits.",
    fullDesc: "Dedicated computing center preparing students for the 21st-century digital landscape. Students learn basic digital literacy, typing, Python programming, web development, and educational simulations.",
    iconName: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    highlights: ["1:1 Computer-to-student access ratio", "High-speed optical fiber connectivity", "Curriculum covers Scratch, Python, HTML & Office", "Surge-protected UPS power backup"]
  },
  {
    id: "fac-playground",
    title: "Expansive Sports Grounds & Playground",
    shortDesc: "Multi-sport outdoor grounds for Cricket, Football, Volleyball, Badminton, and dedicated primary play area.",
    fullDesc: "Physical fitness is integral to education. Our vast campus boasts specialized pitches, athletic running tracks, and trained Physical Education instructors organizing inter-house tournaments and yoga sessions.",
    iconName: "Trophy",
    imageUrl: "/images/school_sports.jpg",
    highlights: ["Volleyball & Badminton court enclosures", "Full-size athletic grounds and playground", "Morning PT drill, yoga, and team sports", "Trained Physical Education faculty coaches"]
  },
  {
    id: "fac-transport",
    title: "Safe GPS-Enabled School Transport",
    shortDesc: "Fleet of modern school buses and vans covering Sehada, Bilariaganj, Azamgarh town, and surrounding rural areas.",
    fullDesc: "Our reliable transportation service ensures safe daily commuting. Every vehicle is fitted with GPS tracking, speed governors, emergency first-aid kits, and accompanied by trained drivers and female attendants.",
    iconName: "Bus",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    highlights: ["GPS real-time bus tracking system", "Experienced, verified drivers and bus conductors", "Female attendants on primary school routes", "Connecting 25+ surrounding localities and villages"]
  },
  {
    id: "fac-water",
    title: "RO Purified Clean Drinking Water",
    shortDesc: "Centralized commercial Reverse Osmosis (RO) filtration plant with UV sanitization and chilled water coolers.",
    fullDesc: "Student health and hygiene are paramount. The school operates high-capacity RO filtration plants tested routinely to guarantee pure, safe, and mineral-balanced drinking water across all floor water stations.",
    iconName: "Droplets",
    imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    highlights: ["Commercial multi-stage RO + UV purification", "Multiple stainless steel water dispensing stations", "Chilled water facilities during summer months", "Periodic certified water quality testing"]
  },
  {
    id: "fac-safety",
    title: "Campus Safety & 24x7 Security",
    shortDesc: "Complete boundary walls, round-the-clock security guards, CCTV surveillance, and sound emergency protocols.",
    fullDesc: "A secure environment allows learning without anxiety. The entire campus is monitored through high-definition CCTV cameras, manned gates with visitor registers, and comprehensive fire-safety measures.",
    iconName: "ShieldCheck",
    imageUrl: "/images/school_campus_front.jpg",
    highlights: ["Over 48 CCTV cameras covering all corridors and gates", "Trained round-the-clock security personnel", "Strict visitor check-in & gate-pass system", "Boundary wall enclosed secure 5-acre campus"]
  },
  {
    id: "fac-solar-green",
    title: "Green Campus & Solar Power Infrastructure",
    shortDesc: "Eco-friendly campus with lush palm gardens, flowering courtyards, and clean rooftop solar energy systems.",
    fullDesc: "Shri Durga Ji Public School champions environmental consciousness. Our premises feature lush tree-lined lawns, open-air assembly spaces, and a heavy-duty rooftop solar panel system providing clean, renewable electricity across all classrooms.",
    iconName: "Sparkles",
    imageUrl: "/images/school_garden.jpg",
    highlights: ["Rooftop grid-connected solar power array", "Lush manicured central lawns and palm avenues", "Eco-club tree plantation and recycling initiatives", "Open-air morning assembly amphitheater grounds"]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-01",
    name: "Dr. R. K. Mishra",
    designation: "Principal & Academic Director",
    subject: "Physics & Educational Leadership",
    qualification: "M.Sc. (Physics), Ph.D., B.Ed.",
    experience: "24+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    department: "Administration"
  },
  {
    id: "fac-02",
    name: "Sri Anup Kumar Singh",
    designation: "Vice Principal & Senior Faculty",
    subject: "Mathematics",
    qualification: "M.Sc. (Mathematics), B.Ed.",
    experience: "18+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    department: "Mathematics"
  },
  {
    id: "fac-03",
    name: "Mrs. Vandana Srivastava",
    designation: "Head of Science Department",
    subject: "Chemistry & General Science",
    qualification: "M.Sc. (Chemistry), B.Ed.",
    experience: "15+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    department: "Science"
  },
  {
    id: "fac-04",
    name: "Sri Manoj Sharma",
    designation: "Senior PGT Teacher",
    subject: "Biology & Environmental Studies",
    qualification: "M.Sc. (Zoology), B.Ed., CTET",
    experience: "12+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    department: "Science"
  },
  {
    id: "fac-05",
    name: "Ms. Shalini Gupta",
    designation: "Head of English Department",
    subject: "English Literature & Communication",
    qualification: "M.A. (English), B.Ed.",
    experience: "11+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    department: "Languages"
  },
  {
    id: "fac-06",
    name: "Pt. Rameshwar Prasad Tiwari",
    designation: "Senior TGT Faculty",
    subject: "Hindi Literature & Sanskrit",
    qualification: "M.A. (Hindi, Sanskrit), B.Ed.",
    experience: "20+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    department: "Languages"
  },
  {
    id: "fac-07",
    name: "Sri Deepak Yadav",
    designation: "Computer Science & IT Incharge",
    subject: "Computer Applications & Coding",
    qualification: "MCA, B.Sc. (Comp Sci)",
    experience: "9+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    department: "Science"
  },
  {
    id: "fac-08",
    name: "Mrs. Pooja Verma",
    designation: "Social Studies Coordinator",
    subject: "History, Geography & Civics",
    qualification: "M.A. (History), B.Ed.",
    experience: "10+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    department: "Humanities"
  },
  {
    id: "fac-09",
    name: "Sri Virendra Pratap",
    designation: "Physical Education Director (PTI)",
    subject: "Physical Education & Sports",
    qualification: "M.P.Ed., NIS Coach",
    experience: "14+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    department: "Sports & Arts"
  },
  {
    id: "fac-10",
    name: "Mrs. Sunita Pandey",
    designation: "Primary Wing Coordinator",
    subject: "Foundation Learning & Activity Coordinator",
    qualification: "M.A., B.Ed., NTT Certified",
    experience: "13+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80",
    department: "Primary"
  },
  {
    id: "fac-11",
    name: "Sri Rajesh Kumar Maurya",
    designation: "TGT Mathematics",
    subject: "Mathematics & Reasoning",
    qualification: "M.Sc., B.Ed.",
    experience: "8+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    department: "Mathematics"
  },
  {
    id: "fac-12",
    name: "Ms. Neha Singh",
    designation: "Art & Cultural Incharge",
    subject: "Fine Arts, Music & Dance",
    qualification: "BFA, Prabhakar (Music)",
    experience: "7+ Years Experience",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    department: "Sports & Arts"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Campus Building & Playgrounds",
    category: "Campus",
    imageUrl: "/images/school_campus_front.jpg",
    caption: "Authentic view of Sri Durga Ji Public School, Sehada, Azamgarh, showcasing the signature two-storey arched colonnades and spacious open sports ground.",
    isOriginal: true
  },
  {
    id: "gal-sports-volleyball",
    title: "Students Playing Volleyball on School Ground",
    category: "Sports",
    imageUrl: "/images/school_sports.jpg",
    caption: "Students in school uniform playing volleyball with physical education teachers refereeing on the expansive front playground.",
    isOriginal: true
  },
  {
    id: "gal-campus-garden",
    title: "Campus Garden Courtyard & Solar Rooftop",
    category: "Campus",
    imageUrl: "/images/school_garden.jpg",
    caption: "Aerial view of the lush green campus lawn, ornamental palm trees, prayer assembly area, and rooftop solar power panels.",
    isOriginal: true
  },
  {
    id: "gal-2",
    title: "Digital Smart Classroom in Session",
    category: "Classroom",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    caption: "Students actively engaged during an interactive smart board lesson with audio-visual learning."
  },
  {
    id: "gal-3",
    title: "Annual Day Cultural Dance Performance",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Students dressed in traditional attire presenting vibrant cultural dances during the Annual Function."
  },
  {
    id: "gal-4",
    title: "Annual Sports Day Track Events",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    caption: "High spirits and competitive enthusiasm at the school athletic ground during 100m sprint finals."
  },
  {
    id: "gal-5",
    title: "Science Exhibition & Student Inventions",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    caption: "Budding young scientists demonstrating working models of solar energy and rainwater harvesting."
  },
  {
    id: "gal-6",
    title: "Modern Computer & Coding Lab",
    category: "Classroom",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    caption: "Students receiving hands-on guidance on basic programming and digital skills."
  },
  {
    id: "gal-7",
    title: "Independence Day & Republic Day Celebrations",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    caption: "National Tricolor flag hoisting ceremony, parade march-past, and patriotic songs by students."
  },
  {
    id: "gal-8",
    title: "Inter-House Cricket Tournament",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    caption: "The championship trophy match between Ganga House and Yamuna House on the main pitch."
  },
  {
    id: "gal-9",
    title: "Yoga & Physical Conditioning Camp",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    caption: "Daily morning assembly yoga sessions instilling mindfulness and physical vitality in children."
  },
  {
    id: "gal-10",
    title: "Peaceful Central School Library",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    caption: "Students browsing reference books, literature, and educational magazines during reading hour."
  },
  {
    id: "gal-11",
    title: "Art, Craft & Drawing Workshop",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    caption: "Children exploring creativity with watercolors, clay modeling, and paper craft."
  },
  {
    id: "gal-12",
    title: "Fleet of Safe School Transport Buses",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    caption: "School buses lined up safely in the campus parking bay ready for student boarding."
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "prog-pre-primary",
    level: "Pre-Primary Wing",
    grades: "Nursery, LKG & UKG",
    ageGroup: "3 to 5 Years",
    description: "A joyful, activity-based Montessori foundation where young children develop curiosity, fine motor skills, social interaction, and language love through play.",
    keyFeatures: [
      "Play-way and hands-on sensorial methodology",
      "Phonics-based early reading and speaking drills",
      "Colorful child-friendly classrooms and toy corners",
      "Dedicated caring female teachers and motherly attendants"
    ],
    subjects: ["English Language & Rhymes", "Hindi Varnamala & Stories", "Foundational Numeracy & Shapes", "General Awareness & Nature Study", "Art, Craft & Clay Work", "Motor & Physical Play"]
  },
  {
    id: "prog-primary",
    level: "Primary Section",
    grades: "Grade I to Grade V",
    ageGroup: "6 to 10 Years",
    description: "Building strong foundational competencies in languages, arithmetic reasoning, scientific temper, moral values, and cooperative teamwork.",
    keyFeatures: [
      "NCERT aligned experiential learning pedagogy",
      "Interactive audio-visual smart board lessons",
      "Special focus on neat handwriting and mental math",
      "Regular co-curricular clubs, sports, and music"
    ],
    subjects: ["English (Grammar & Reading)", "Hindi", "Mathematics", "Environmental Studies (EVS)", "Computer Basics & Coding", "General Knowledge", "Art & Moral Education"]
  },
  {
    id: "prog-middle",
    level: "Middle School Section",
    grades: "Grade VI to Grade VIII",
    ageGroup: "11 to 13 Years",
    description: "Transitioning students toward critical thinking, independent inquiry, laboratory experiments, and structured analytical problem-solving.",
    keyFeatures: [
      "Introduction to dedicated science lab experiments",
      "Sanskrit as third language integration",
      "Computer applications, Scratch coding, and office tools",
      "House system participation, debates, and athletics"
    ],
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics (Algebra & Geometry)", "Integrated Science (Physics, Chem, Bio)", "Social Science (History, Civics, Geog)", "Information Technology", "Physical & Health Education"]
  },
  {
    id: "prog-secondary",
    level: "Secondary School",
    grades: "Grade IX to Grade X",
    ageGroup: "14 to 15 Years",
    description: "Rigorous academic preparation based on the CBSE curriculum with continuous assessment, Olympiad training, and comprehensive board preparation.",
    keyFeatures: [
      "Regular unit tests, doubt-clearing sessions, and mock boards",
      "Laboratory practicals under trained science faculty",
      "Career counseling and aptitude evaluation",
      "Personality development and communication workshops"
    ],
    subjects: ["English Language & Literature", "Hindi Course-A", "Mathematics (Standard / Basic)", "Science with Practicals", "Social Science", "Information Technology (Code 402)"]
  },
  {
    id: "prog-senior-secondary",
    level: "Senior Secondary (Proposed / XI & XII)",
    grades: "Grade XI & Grade XII",
    ageGroup: "16 to 18 Years",
    description: "Specialized academic streams designed for career readiness, board excellence, and competitive examinations like JEE, NEET, and CUET.",
    keyFeatures: [
      "Science Stream (PCM & PCB) and Commerce Stream",
      "Dedicated subject specialists with proven board track records",
      "Separate advanced laboratory modules",
      "Special guidance for national entrance exams"
    ],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Business Studies", "Economics", "Computer Science", "Physical Education", "English Core"]
  }
];

export const SCHOOL_STATS = [
  { label: "Years of Educational Service", value: "22+", icon: "Award" },
  { label: "Enrolled Students", value: "1,500+", icon: "Users" },
  { label: "Qualified Faculty & Staff", value: "48+", icon: "GraduationCap" },
  { label: "Board Exam Pass Rate", value: "100%", icon: "CheckCircle2" },
  { label: "Campus Area (Acres)", value: "5+", icon: "MapPin" },
  { label: "Smart Digital Classrooms", value: "24+", icon: "Monitor" }
];
