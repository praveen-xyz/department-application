import {
  Mentor,
  Faculty,
  CampusEvent,
  ScheduleItem,
  MentorStudent,
  Subject,
} from "./types";

// --- BATCH DATA: MENTOR STREAM A (001 - 029) ---
const STREAM_A_STUDENTS: MentorStudent[] = [
  {
    id: "s1",
    name: "Abitha Ramani C",
    rollNo: "583224205001",
    email: "abitha.r@nprcolleges.org",
    phone: "9440100001",
    busRoute: "R-01",
  },
  {
    id: "s2",
    name: "Angaleswari K",
    rollNo: "583224205002",
    email: "angaleswari.k@nprcolleges.org",
    phone: "9440100002",
    busRoute: "R-01",
  },
  {
    id: "s3",
    name: "Aravindan S",
    rollNo: "583224205003",
    email: "aravindan.s@nprcolleges.org",
    phone: "9440100003",
    busRoute: "R-12",
  },
  {
    id: "s4",
    name: "Archana B",
    rollNo: "583224205004",
    email: "archana.b@nprcolleges.org",
    phone: "9440100004",
    busRoute: "R-05",
  },
  {
    id: "s5",
    name: "Aswath Kris K R",
    rollNo: "583224205005",
    email: "aswath.k@nprcolleges.org",
    phone: "9440100005",
    busRoute: "R-02",
  },
  {
    id: "s6",
    name: "Baladharani B",
    rollNo: "583224205006",
    email: "baladharani.b@nprcolleges.org",
    phone: "9440100006",
    busRoute: "R-08",
  },
  {
    id: "s7",
    name: "Baskaran S",
    rollNo: "583224205007",
    email: "baskaran.s@nprcolleges.org",
    phone: "9440100007",
    busRoute: "R-10",
  },
  {
    id: "s8",
    name: "Bhavaneeshwari M",
    rollNo: "583224205008",
    email: "bhavaneesh.m@nprcolleges.org",
    phone: "9440100008",
    busRoute: "R-15",
  },
  {
    id: "s9",
    name: "Biravi M",
    rollNo: "583224205009",
    email: "biravi.m@nprcolleges.org",
    phone: "9440100009",
    busRoute: "R-01",
  },
  {
    id: "s10",
    name: "Deepika M",
    rollNo: "583224205010",
    email: "deepika.m@nprcolleges.org",
    phone: "9440100010",
    busRoute: "R-04",
  },
  {
    id: "s11",
    name: "Eniya R",
    rollNo: "583224205011",
    email: "eniya.r@nprcolleges.org",
    phone: "9440100011",
    busRoute: "R-04",
  },
  {
    id: "s12",
    name: "Guru Priyan S M",
    rollNo: "583224205012",
    email: "gurupriyan.s@nprcolleges.org",
    phone: "9440100012",
    busRoute: "R-22",
  },
  {
    id: "s13",
    name: "Hariprasanth K",
    rollNo: "583224205013",
    email: "hariprasanth.k@nprcolleges.org",
    phone: "9440100013",
    busRoute: "R-09",
  },
  {
    id: "s14",
    name: "Hariramrenga P",
    rollNo: "583224205014",
    email: "hariram.p@nprcolleges.org",
    phone: "9440100014",
    busRoute: "R-09",
  },
  {
    id: "s15",
    name: "Harishwaran P",
    rollNo: "583224205015",
    email: "harishwaran.p@nprcolleges.org",
    phone: "9440100015",
    busRoute: "R-02",
  },
  {
    id: "s16",
    name: "Haritha R",
    rollNo: "583224205016",
    email: "haritha.r@nprcolleges.org",
    phone: "9440100016",
    busRoute: "R-01",
  },
  {
    id: "s17",
    name: "Ishwarya S P",
    rollNo: "583224205017",
    email: "ishwarya.sp@nprcolleges.org",
    phone: "9440100017",
    busRoute: "R-11",
  },
  {
    id: "s18",
    name: "Janagiraman B",
    rollNo: "583224205018",
    email: "janagi.b@nprcolleges.org",
    phone: "9440100018",
    busRoute: "R-12",
  },
  {
    id: "s19",
    name: "Janani J",
    rollNo: "583224205019",
    email: "janani.j@nprcolleges.org",
    phone: "9440100019",
    busRoute: "R-03",
  },
  {
    id: "s20",
    name: "Janani R",
    rollNo: "583224205020",
    email: "janani.r@nprcolleges.org",
    phone: "9440100020",
    busRoute: "R-03",
  },
  {
    id: "s21",
    name: "Jeyaprakash C",
    rollNo: "583224205021",
    email: "jeyaprakash.c@nprcolleges.org",
    phone: "9440100021",
    busRoute: "R-06",
  },
  {
    id: "s22",
    name: "Joshni J",
    rollNo: "583224205022",
    email: "joshni.j@nprcolleges.org",
    phone: "9440100022",
    busRoute: "R-06",
  },
  {
    id: "s23",
    name: "Kamalini S",
    rollNo: "583224205023",
    email: "kamalini.s@nprcolleges.org",
    phone: "9440100023",
    busRoute: "R-05",
  },
  {
    id: "s24",
    name: "Kasi Prasath K",
    rollNo: "583224205024",
    email: "kasi.prasath@nprcolleges.org",
    phone: "9440100024",
    busRoute: "R-02",
  },
  {
    id: "s25",
    name: "Kavinbharathi M",
    rollNo: "583224205025",
    email: "kavin.m@nprcolleges.org",
    phone: "9440100025",
    busRoute: "R-02",
  },
  {
    id: "s26",
    name: "Kaviya Priya S",
    rollNo: "583224205026",
    email: "kaviya.s@nprcolleges.org",
    phone: "9440100026",
    busRoute: "R-02",
  },
  {
    id: "s27",
    name: "Keerthana S",
    rollNo: "583224205027",
    email: "keerthana.s@nprcolleges.org",
    phone: "9440100027",
    busRoute: "R-02",
  },
  {
    id: "s28",
    name: "Keerthana S",
    rollNo: "583224205028",
    email: "keerthana.s2@nprcolleges.org",
    phone: "9440100028",
    busRoute: "R-02",
  },
  {
    id: "s29",
    name: "Kokilavani C",
    rollNo: "583224205029",
    email: "kokila.c@nprcolleges.org",
    phone: "9440100029",
    busRoute: "R-02",
  },
];

// --- BATCH DATA: MENTOR STREAM B (030 - 060) ---
const STREAM_B_STUDENTS: MentorStudent[] = [
  {
    id: "s30",
    name: "Kuppuraj P",
    rollNo: "583224205030",
    email: "kuppuraj.p@nprcolleges.org",
    phone: "9440100030",
    busRoute: "R-10",
  },
  {
    id: "s31",
    name: "Lathika Sri V",
    rollNo: "583224205031",
    email: "lathika.v@nprcolleges.org",
    phone: "9440100031",
    busRoute: "R-10",
  },
  {
    id: "s32",
    name: "Libiya Berthil A",
    rollNo: "583224205032",
    email: "libiya.a@nprcolleges.org",
    phone: "9440100032",
    busRoute: "R-12",
  },
  {
    id: "s33",
    name: "Madhan K",
    rollNo: "583224205033",
    email: "madhan.k@nprcolleges.org",
    phone: "9440100033",
    busRoute: "R-10",
  },
  {
    id: "s34",
    name: "Mallika M",
    rollNo: "583224205034",
    email: "mallika.m@nprcolleges.org",
    phone: "9440100034",
    busRoute: "R-10",
  },
  {
    id: "s35",
    name: "Manikandan S",
    rollNo: "583224205035",
    email: "mani.s@nprcolleges.org",
    phone: "9440100035",
    busRoute: "R-10",
  },
  {
    id: "s36",
    name: "Mathumitha P",
    rollNo: "583224205036",
    email: "mathumitha.p@nprcolleges.org",
    phone: "9440100036",
    busRoute: "R-10",
  },
  {
    id: "s37",
    name: "Mohamed Umar Nihal M",
    rollNo: "583224205037",
    email: "umar.nihal@nprcolleges.org",
    phone: "9440100037",
    busRoute: "R-10",
  },
  {
    id: "s38",
    name: "Naveen Narayanan N",
    rollNo: "583224205038",
    email: "naveen.n@nprcolleges.org",
    phone: "9440100038",
    busRoute: "R-10",
  },
  {
    id: "s39",
    name: "Nilofar Nisha M",
    rollNo: "583224205039",
    email: "nilofar.m@nprcolleges.org",
    phone: "9440100039",
    busRoute: "R-10",
  },
  {
    id: "s40",
    name: "Niranjhana U",
    rollNo: "583224205040",
    email: "niran.u@nprcolleges.org",
    phone: "9440100040",
    busRoute: "R-10",
  },
  {
    id: "s41",
    name: "Nirmala Jackulin Mercy M",
    rollNo: "583224205041",
    email: "nirmala.m@nprcolleges.org",
    phone: "9440100041",
    busRoute: "R-10",
  },
  {
    id: "s42",
    name: "Pavithra M",
    rollNo: "583224205042",
    email: "pavithra.m@nprcolleges.org",
    phone: "9440100042",
    busRoute: "R-10",
  },
  {
    id: "s43",
    name: "Praveen Raj M",
    rollNo: "583224205043",
    email: "praveen.m@nprcolleges.org",
    phone: "9440100043",
    busRoute: "R-12",
  },
  {
    id: "s44",
    name: "Rithick R",
    rollNo: "583224205044",
    email: "rithick.r@nprcolleges.org",
    phone: "9440100044",
    busRoute: "R-10",
  },
  {
    id: "s45",
    name: "Rithishwaran K",
    rollNo: "583224205045",
    email: "rithish.k@nprcolleges.org",
    phone: "9440100045",
    busRoute: "R-10",
  },
  {
    id: "s46",
    name: "Sabari R C",
    rollNo: "583224205046",
    email: "sabari.rc@nprcolleges.org",
    phone: "9440100046",
    busRoute: "R-10",
  },
  {
    id: "s47",
    name: "Sabarinathan K",
    rollNo: "583224205047",
    email: "sabari.k@nprcolleges.org",
    phone: "9440100047",
    busRoute: "R-10",
  },
  {
    id: "s48",
    name: "Saranya S",
    rollNo: "583224205049",
    email: "saranya.s@nprcolleges.org",
    phone: "9440100049",
    busRoute: "R-10",
  },
  {
    id: "s49",
    name: "Sastha K",
    rollNo: "583224205050",
    email: "sastha.k@nprcolleges.org",
    phone: "9440100050",
    busRoute: "R-10",
  },
  {
    id: "s50",
    name: "Shofya J",
    rollNo: "583224205051",
    email: "shofya.j@nprcolleges.org",
    phone: "9440100051",
    busRoute: "R-10",
  },
  {
    id: "s51",
    name: "Sivaranjani S",
    rollNo: "583224205053",
    email: "siva.s@nprcolleges.org",
    phone: "9440100053",
    busRoute: "R-10",
  },
  {
    id: "s52",
    name: "Sriram K",
    rollNo: "583224205054",
    email: "sriram.k@nprcolleges.org",
    phone: "9440100054",
    busRoute: "R-10",
  },
  {
    id: "s53",
    name: "Sudharshini S",
    rollNo: "583224205055",
    email: "sudha.s@nprcolleges.org",
    phone: "9440100055",
    busRoute: "R-10",
  },
  {
    id: "s54",
    name: "Suganya S",
    rollNo: "583224205056",
    email: "suganya.s@nprcolleges.org",
    phone: "9440100056",
    busRoute: "R-10",
  },
  {
    id: "s55",
    name: "Swetha J",
    rollNo: "583224205057",
    email: "swetha.j@nprcolleges.org",
    phone: "9440100057",
    busRoute: "R-10",
  },
  {
    id: "s56",
    name: "Vidhya S",
    rollNo: "583224205058",
    email: "vidhya.s@nprcolleges.org",
    phone: "9440100058",
    busRoute: "R-10",
  },
  {
    id: "s57",
    name: "Vignesh M",
    rollNo: "583224205059",
    email: "vignesh.m@nprcolleges.org",
    phone: "9440100059",
    busRoute: "R-10",
  },
  {
    id: "s58",
    name: "Yuvasri C",
    rollNo: "583224205060",
    email: "yuvasri.c@nprcolleges.org",
    phone: "9440100060",
    busRoute: "R-10",
  },
  {
    id: "s59",
    name: "Arulselvi A",
    rollNo: "583224205061",
    email: "arulselvi.a@nprcolleges.org",
    phone: "9440100061",
    busRoute: "R-10",
  },
  {
    id: "s60",
    name: "Dhivya Bharathi K",
    rollNo: "583224205062",
    email: "dhivya.k@nprcolleges.org",
    phone: "9440100062",
    busRoute: "R-10",
  },
];

export const MOCK_MENTORS: Mentor[] = [
  {
    id: "m1",
    name: "Mrs. Nagalakshmi M.",
    department: "Information Technology",
    email: "nagalakshmim@nprcolleges.org",
    students: STREAM_A_STUDENTS,
  },
  {
    id: "m2",
    name: "Mrs. Dhahagani K.",
    department: "Information Technology",
    email: "dhahaganik@nprcolleges.org",
    students: STREAM_B_STUDENTS,
  },
];

export const MOCK_FACULTY: Faculty[] = [
  {
    id: "f1",
    name: "Mrs. Kalpana C",
    role: "Professor & HOD",
    department: "Information Technology",
    experience: "15+ Years",
    email: "hodit@nprcolleges.org",
    phone: "9876543210",
    avatarInitials: "KD",
    imageUrl: "/kalpana.jpeg",
  },
  {
    id: "f2",
    name: "Ms. Nagalakshmi M.",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "5+ Years",
    email: "nagalakshmim@nprcolleges.org",
    phone: "9876543211",
    avatarInitials: "NM",
    imageUrl: "/nagalakhsmi.jpeg",
  },
  {
    id: "f3",
    name: "Mr. Dhahagani K.",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "10+ Years",
    email: "dhahaganik@nprcolleges.org",
    phone: "9876543212",
    avatarInitials: "DK",
    imageUrl: "/dhahagani.jpeg",
  },
  {
    id: "f4",
    name: "Mrs.Kanimozhi",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "6+ Years",
    email: "pravin@nprcolleges.org",
    phone: "9876543213",
    avatarInitials: "PK",
    imageUrl: "/kanimozhi.jpeg",
  },
  {
    id: "f5",
    name: "Mrs.Janet Vidya Nancy",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "6+ Years",
    email: "pravin@nprcolleges.org",
    phone: "9876543213",
    avatarInitials: "PK",
    imageUrl: "/janet.jpeg",
  },
  {
    id: "f6",
    name: "Ms.Arokia Rubi",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "6+ Years",
    email: "pravin@nprcolleges.org",
    phone: "9876543213",
    avatarInitials: "PK",
    imageUrl: "/rubi.jpeg",
  },
  {
    id: "f7",
    name: "Dr. M. Sankaralagu",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "6+ Years",
    email: "pravin@nprcolleges.org",
    phone: "9876543213",
    avatarInitials: "PK",
    imageUrl: "/sankaralagu.jpeg",
  },
  {
    id: "f8",
    name: "Mrs.Archana",
    role: "Assistant Professor",
    department: "Information Technology",
    experience: "6+ Years",
    email: "pravin@nprcolleges.org",
    phone: "9876543213",
    avatarInitials: "PK",
    imageUrl: "/archana.jpeg",
  },
];

export const SUBJECTS_INITIAL: Subject[] = [
  {
    id: "sub1",
    name: "Theory of Computation",
    code: "IT3401",
    attended: 0,
    total: 45,
  },
  {
    id: "sub2",
    name: "Operating Systems",
    code: "CS3451",
    attended: 0,
    total: 45,
  },
  { id: "sub3", name: "DBMS", code: "CS3401", attended: 0, total: 45 },
];

export const MOCK_EVENTS: CampusEvent[] = [
  {
    id: "e1",
    title: "Technical Symposium 2K26",
    date: "22 FEB",
    time: "09:30 AM",
    venue: "Auditorium",
    description: "Inter-college Tech Fest",
  },
];

export const ICONS = {
  Dashboard: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  Attendance: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Admin: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  AIChat: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Users: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  ToDo: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  ),
  Schedule: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Calendar: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z"
      />
    </svg>
  ),
  Vault: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  Info: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  Settings: (props: any) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};
