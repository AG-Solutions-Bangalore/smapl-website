import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  Play, 
  Award, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  X,
  Video,
  FileCheck,
  Zap,
  Users,
  Settings,
  History,
  TrendingUp
} from "lucide-react";
import SEO from "@/components/common/SEO";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/button";

// Directors Data
const boardMembers = [
  {
    name: "Mr. Mukesh Tibrewala",
    role: "Director",
    experience: "25 years in Steel Supply & Structural Steel Project Execution",
    expertise: "Strategic Planning, Large-Scale Steel Procurement",
    bio: "Mr. Mukesh Tibrewala has been driving the strategic direction of Sulit Metals & Alloys for over two decades. His vast experience in procurement and execution of large-scale infrastructure projects has positioned the company as a key player in structural steel supply across the nation.",
    image: "/images/director/mukesh.webp",
    color: "from-[#042D61] to-[#0B2545]",
    initials: "MT"
  },
  {
    name: "Mr. Avinash Agarwal",
    role: "Director",
    experience: "18 years in Steel Supply and Fabrication",
    expertise: "Business Development, Operational Leadership",
    bio: "Mr. Avinash Agarwal brings 18 years of operations expertise. He leads the company's business development strategies, fostering partnerships and managing critical fabrication workflows that ensure client requirements are met on time with highest precision.",
    image: "/images/director/avinash.webp",
    color: "from-[#042D61] to-[#0B2545]",
    initials: "AA"
  },
  {
    name: "Mr. Abhishek Agarwal",
    role: "CEO & Joint Managing Director",
    experience: "18 years in Steel Supply and Fabrication",
    expertise:
      "Project Execution, Quality Control, Advanced Fabrication Processes, Complex Infrastructure Projects Delivery",
    bio: "Mr. Abhishek Agarwal oversees technological advancements and quality control at the manufacturing plants. Under his leadership, the company has integrated state-of-the-art CNC processes to manufacture critical bridge girders and heavy structural components.",
    image: "/images/director/abhishek.webp",
    color: "from-[#042D61] to-[#0B2545]",
    initials: "AA"
  }
];

// Gallery Images
const galleryImages = [
  {
    src: "/images/Projects/cantonment fob/cantonment fob (1).webp",
    alt: "Cantonment Foot Over Bridge (FOB)",
    tag: "Foot Over Bridge"
  },
  {
    src: "/images/Projects/cantonment fob/cantonment fob (2).webp",
    alt: "Structural Steel Joint Assembly",
    tag: "Heavy Fabrication"
  },
  {
    src: "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (1).webp",
    alt: "Hebbal Flyover Railway Over Bridge (ROB)",
    tag: "Railway ROB"
  },
  {
    src: "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (2).webp",
    alt: "Steel Girder Assembly & Inspection",
    tag: "Testing & Erection"
  }
];

// Video Showcase
const videos = [
  {
    id: "video1",
    title: "Corporate Overview & Production Facility Walkthrough",
    description: "Take a virtual tour of our state-of-the-art heavy steel fabrication facility and production capacity.",
    thumbnail: "/images/Projects/cantonment fob/cantonment fob (3).webp",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "video2",
    title: "RDSO Quality Testing Standards & Fabrication Process",
    description: "Deep dive into our NABL allied laboratory testing, ultrasonic examinations, and CNC plate drilling processes.",
    thumbnail: "/images/Projects/hebbal flyover ROB/hebbal flyover ROB (3).webp",
    duration: "6:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Official Documents List
const approvalsAndRegistrations = [
  {
    title: "RDSO Approval Letter",
    fileName: "RDSO Approved Letter.pdf",
    path: "/docs/sulit website documents/RDSO Approved Letter.pdf",
    size: "91 KB",
    type: "Approval",
    details: "Research Designs and Standards Organisation (RDSO) official approval letter for structural steel fabrication."
  },
  {
    title: "ISO 9001 Certificate",
    fileName: "ISO Certificate.pdf",
    path: "/docs/sulit website documents/ISO Certificate.pdf",
    size: "152 KB",
    type: "Compliance",
    details: "ISO 9001:2015 Certification validating our Quality Management System (QMS)."
  },
  {
    title: "Factory License (2026-2040)",
    fileName: "Renewed License 2026-2040 .pdf",
    path: "/docs/sulit website documents/Renewed License 2026-2040 .pdf",
    size: "83 KB",
    type: "License",
    details: "Officially renewed factory operating license valid from 2026 up to 2040."
  },
  {
    title: "Certificate of Incorporation",
    fileName: "CERTIFICATE OF INCORPORATION.PDF",
    path: "/docs/CERTIFICATE OF INCORPORATION.PDF",
    size: "537 KB",
    type: "Registration",
    details: "Official Certificate of Incorporation for Sulit Metals & Alloys Private Ltd."
  },
  {
    title: "Memorandum of Association (MOA)",
    fileName: "MOA.pdf",
    path: "/docs/MOA.pdf",
    size: "5.9 MB",
    type: "Constitutional",
    details: "Memorandum of Association detailing the company's constitution and scope."
  },
  {
    title: "Articles of Association (AOA)",
    fileName: "AOA.pdf",
    path: "/docs/AOA.pdf",
    size: "9.6 MB",
    type: "Constitutional",
    details: "Articles of Association governing the internal management of the company."
  },
  {
    title: "Firm GST Registration Certificate",
    fileName: "Sulit Gst Cetificate.pdf",
    path: "/docs/sulit website documents/Sulit Gst Cetificate.pdf",
    size: "603 KB",
    type: "Registration",
    details: "Sulit Metals & Alloys Private Ltd. Goods and Services Tax registration credentials."
  },
  {
    title: "Board of Directors Registration",
    fileName: "Board_of_Directors_Registration.pdf",
    path: "/docs/Board_of_Directors_Registration.pdf",
    size: "309 KB",
    type: "Registration",
    details: "Official Board of Directors registry and corporate governance details."
  },
  {
    title: "Partnership Deed",
    fileName: "Partnership_Deed.pdf",
    path: "/docs/Partnership_Deed.pdf",
    size: "297 KB",
    type: "Agreement",
    details: "Partnership deed agreement credentials of Sulit Metals & Alloys."
  },
  {
    title: "Corporate MoU",
    fileName: "MOU- SMAPL s.pdf",
    path: "/docs/sulit website documents/MOU- SMAPL s.pdf",
    size: "802 KB",
    type: "Agreement",
    details: "Memorandum of Understanding (MoU) defining corporate and partnership guidelines."
  }
];

// Infrastructure Assets
const infrastructureAssets = {
  powerDemand: "Power demand & installed power supply fully optimized for massive automated machinery and CNC drilling operations.",
  shops: [
    { name: "Template Layout Area", desc: "Dedicated precision marking and templating zone for layout accuracy." },
    { name: "Fabrication Shop", desc: "Equipped for cutting, CNC drilling, welding, straightening, and end milling." },
    { name: "Blasting Shop", desc: "Heavy-duty shot/sand blasting area for structural steel surface preparation." },
    { name: "Metalizing & Painting Shop", desc: "Climate-controlled corrosion control and high-performance painting zone." },
    { name: "Assembly & Stacking Areas", desc: "Systematic layout for component trial-assembly and structural storage." }
  ],
  documents: [
    {
      title: "Machinery & Plants List",
      fileName: "Sulit Machinery.pdf",
      path: "/docs/sulit website documents/Sulit Machinery.pdf",
      size: "670 KB"
    },
    {
      title: "Factory Layout Blueprint",
      fileName: "FACTORY LAYOUT (2).pdf",
      path: "/docs/sulit website documents/FACTORY LAYOUT (2).pdf",
      size: "88 KB"
    }
  ]
};

// Welders & Artisans Certifications
const artisansCertifications = [
  {
    name: "Abhisek Chaubey",
    role: "Welder / Inspector",
    details: "Qualified under RDSO guidelines. Certified training inspector.",
    fileName: "Abhisek chaubey.pdf",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/Abhisek chaubey.pdf",
    size: "975 KB"
  },
  {
    name: "Dheeraj Kumar",
    role: "Welder / Inspector",
    details: "RDSO-compliant welder training and certification records.",
    fileName: "Dheeraj Kumar.pdf",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/Dheeraj Kumar.pdf",
    size: "1.9 MB"
  },
  {
    name: "Ramesh Ray",
    role: "Welding Operator",
    details: "Weld qualification test certification according to structural bridge norms.",
    fileName: "Ramesh Ray.pdf",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/Ramesh Ray.pdf",
    size: "948 KB"
  },
  {
    name: "Ravi Chauhan",
    role: "Welding Operator",
    details: "Heavy metal welding qualification records.",
    fileName: "Ravi Chauhan.pdf",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/Ravi Chauhan.pdf",
    size: "959 KB"
  },
  {
    name: "SurajBhan Singh",
    role: "Welder",
    details: "Certified structural steel welder, specialized in sub-arc welding.",
    fileName: "SurajBhan singh.pdf",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/SurajBhan singh.pdf",
    size: "971 KB"
  },
  {
    name: "Yashveer",
    role: "CNC Drilling Operator",
    details: "4 Years of Experience in high-capacity plate drilling operations.",
    fileName: "YASHVEER CNC DRILLING OPERATOR EXPERIENCE 4 YEARS.jpeg",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/YASHVEER CNC DRILLING OPERATOR EXPERIENCE 4 YEARS.jpeg",
    size: "468 KB"
  },
  {
    name: "Blasting & Painting Specialist",
    role: "Blaster & Painter",
    details: "7 Years of Experience in surface blasting and high-durability metalizing.",
    fileName: "BLASTING PERSON 7 YEARS EXPERIENCE AS  A PAINTER & BLASTER.jpeg",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/BLASTING PERSON 7 YEARS EXPERIENCE AS  A PAINTER & BLASTER.jpeg",
    size: "182 KB"
  },
  {
    name: "CNC Cutting Specialist",
    role: "CNC Operator",
    details: "Certified CNC profile plate cutting specialist.",
    fileName: "CNC CUTTING OPERATOR.jpeg",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/CNC CUTTING OPERATOR.jpeg",
    size: "172 KB"
  },
  {
    name: "Painting Specialist",
    role: "Industrial Painter",
    details: "Expertise in metal protective coatings and paint inspections.",
    fileName: "PAINTER.jpeg",
    path: "/docs/sulit website documents/WELDER & WELDING INSPECTOR TRAINING CERTIFICATE/PAINTER.jpeg",
    size: "107 KB"
  }
];

// Project Track Record Documents
const projectTrackRecord = [
  {
    title: "Executed Works & Supplies (Last 5 Years)",
    description: "Detailed spreadsheet showing completed structural contracts, tonnages, and client verifications.",
    fileName: "EXECUTED PROJECT revised .xlsx",
    path: "/docs/sulit website documents/EXECUTED PROJECT revised .xlsx",
    size: "15 KB"
  },
  {
    title: "Projects in Hand Details",
    description: "List of active fabrication and erection works currently under execution.",
    fileName: "IN HAND  PROJECT DETAILS .xlsx",
    path: "/docs/sulit website documents/IN HAND  PROJECT DETAILS .xlsx",
    size: "13 KB"
  }
];

export default function RDSOPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("approvals");

  // Find the selected video data
  const selectedVideo = videos.find(v => v.id === activeVideo);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO 
        title="Government Vendor Approval (RDSO) Portal | SMAPL"
        description="Official RDSO Vendor Approval repository and Board of Directors directory for Sulit Metals & Alloys Private Ltd. Access official certificates, layout, welder credentials, and audits."
        keywords="RDSO Approval, Government Steel Vendor, Sulit Metals, Mukesh Tibrewala, Abhishek Agarwal, Railway ROB, Steel Girders, Welder Training Certificate, Factory License, ISO Certificate, GST, Executed Projects"
      />

      {/* Hero Banner Section */}
      <section className="relative bg-[#08182F] text-white overflow-hidden py-16 md:py-24">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08182F] via-[#0B2545]/90 to-transparent" />
        
        {/* Abstract shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#C5A880]/10 blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30 mb-6 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Official Vendor Credentials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              RDSO Vendor Approval <br />
              <span className="text-[#C5A880]">Portal & Governance</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Sulit Metals & Alloys Private Ltd. is committed to upholding strict compliance, state-of-the-art infrastructure standards, and official government verifications.
            </p>

            <nav className="flex items-center gap-2 mt-8 text-sm text-slate-400">
              <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">RDSO Approval</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Authority Overview Bar */}
      <section className="bg-white border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="py-2 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Approved Authority</span>
              <span className="text-slate-900 font-extrabold text-lg md:text-xl">RDSO (Ministry of Railways)</span>
            </div>
            <div className="py-2 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Status</span>
              <span className="text-green-600 font-extrabold text-lg md:text-xl inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> Verified Vendor
              </span>
            </div>
            <div className="py-2 md:py-0">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">Quality Certification</span>
              <span className="text-slate-900 font-extrabold text-lg md:text-xl">ISO 9001:2015 Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabbed Portal Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#042D61] uppercase tracking-widest block mb-2">Compliance Dashboard</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#08182F]">Official RDSO Vendor Audit Files</h2>
          <div className="h-1.5 w-24 bg-[#C5A880] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm">
            Access structural blueprints, licenses, welder certifications, NABL testing alliance records, and project sheets required for government vendor inspections.
          </p>
        </ScrollReveal>

        {/* Tabs Headers */}
        <ScrollReveal direction="up" className="mb-10 overflow-x-auto pb-2">
          <div className="flex border-b border-slate-200 min-w-max">
            <button
              onClick={() => setActiveTab("approvals")}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "approvals"
                  ? "border-[#042D61] text-[#042D61]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <FileCheck className="w-4 h-4" /> Approvals & Registrations
            </button>
            <button
              onClick={() => setActiveTab("infrastructure")}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "infrastructure"
                  ? "border-[#042D61] text-[#042D61]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Settings className="w-4 h-4" /> Plant & Machinery
            </button>
            <button
              onClick={() => setActiveTab("artisans")}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "artisans"
                  ? "border-[#042D61] text-[#042D61]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4" /> Welders & Artisans
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "projects"
                  ? "border-[#042D61] text-[#042D61]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <History className="w-4 h-4" /> Executed & In-Hand Works
            </button>
          </div>
        </ScrollReveal>

        {/* Tab 1: Approvals & Registrations */}
        {activeTab === "approvals" && (
          <ScrollReveal direction="none" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvalsAndRegistrations.map((doc) => (
              <div key={doc.title} className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#042D61] hover:shadow-md transition-all h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:bg-red-100 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-slate-400 text-xs font-semibold">{doc.size}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">{doc.type}</span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#042D61] transition-colors leading-snug mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{doc.details}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 truncate max-w-[130px]">{doc.fileName}</span>
                  <Button variant="outline" size="sm" className="border-[#042D61] text-[#042D61] hover:bg-[#042D61] hover:text-white rounded-xl gap-1 font-semibold text-xs" asChild>
                    <a href={doc.path} target="_blank" rel="noopener noreferrer">
                      <Download className="w-3.5 h-3.5" /> View File
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </ScrollReveal>
        )}

        {/* Tab 2: Infrastructure & Plant */}
        {activeTab === "infrastructure" && (
          <ScrollReveal direction="none" className="space-y-8">
            {/* Quick stats on Power and Shops */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left detail Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-[#08182F] mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C5A880]" /> Power Demand & Installed Capacity
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {infrastructureAssets.powerDemand}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Our manufacturing unit maintains an independent substation linkage ensuring zero disruption during heavy high-amp structural sub-arc welding.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-[#08182F] mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#C5A880]" /> Fabrication Shops Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {infrastructureAssets.shops.map((shop) => (
                      <div key={shop.name} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-bold text-sm text-slate-800 mb-1">{shop.name}</h4>
                        <p className="text-xs text-slate-500 leading-normal">{shop.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right file download column */}
              <div className="lg:col-span-4 space-y-6">
                {infrastructureAssets.documents.map((doc) => (
                  <div key={doc.title} className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between h-[180px] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-slate-400 text-xs">{doc.size}</span>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-bold text-[#08182F] text-base">{doc.title}</h4>
                      <span className="text-[10px] text-slate-400 truncate block mt-0.5">{doc.fileName}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 border-[#042D61] text-[#042D61] hover:bg-[#042D61] hover:text-white rounded-xl gap-1.5 font-semibold text-xs" asChild>
                      <a href={doc.path} target="_blank" rel="noopener noreferrer">
                        <Download className="w-3.5 h-3.5" /> Download / View Layout
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 3: Welders & Artisans */}
        {activeTab === "artisans" && (
          <ScrollReveal direction="none" className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C5A880]" /> Organisation Chart Qualification
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-3xl mb-4">
                We maintain active qualification logs and training credentials of all artisans, weld operators, and safety supervisors in full compliance with RDSO vendor guidelines.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Button variant="outline" className="border-[#042D61] text-[#042D61] hover:bg-[#042D61] hover:text-white rounded-xl font-semibold text-xs" asChild>
                  <a href="/docs/sulit website documents/organization chart.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-3.5 h-3.5" /> View Official Organisation Chart (PDF)
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisansCertifications.map((artisan) => (
                <div key={artisan.name} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="inline-block text-[9px] font-extrabold text-[#C5A880] uppercase tracking-wider bg-[#C5A880]/15 px-2 py-0.5 rounded border border-[#C5A880]/20 mb-2">
                      {artisan.role}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900">{artisan.name}</h4>
                    <p className="text-xs text-slate-500 leading-normal mt-1 mb-4">{artisan.details}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-400 truncate max-w-[140px]">{artisan.fileName}</span>
                    <Button variant="outline" size="sm" className="border-[#042D61] text-[#042D61] hover:bg-[#042D61] hover:text-white rounded-xl gap-1 text-[11px] font-semibold h-7 px-2.5" asChild>
                      <a href={artisan.path} target="_blank" rel="noopener noreferrer">
                        <Download className="w-3 h-3" /> View Credentials
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Tab 4: Executed & In-Hand Works */}
        {activeTab === "projects" && (
          <ScrollReveal direction="none" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectTrackRecord.map((track) => (
              <div key={track.title} className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col justify-between h-[200px] hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-slate-400 text-xs font-semibold">{track.size}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 leading-snug">{track.title}</h3>
                  <p className="text-slate-500 text-xs leading-normal">{track.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">{track.fileName}</span>
                  <Button variant="outline" size="sm" className="border-[#042D61] text-[#042D61] hover:bg-[#042D61] hover:text-white rounded-xl gap-1.5 font-semibold text-xs" asChild>
                    <a href={track.path} target="_blank" rel="noopener noreferrer">
                      <Download className="w-3.5 h-3.5" /> Open Spreadsheet (Excel)
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </ScrollReveal>
        )}
      </section>

      {/* Directors Profile Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200">
        <ScrollReveal
          direction="up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold text-[#042D61] uppercase tracking-widest block mb-2">
            Leadership Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#08182F]">
            Board of Directors & Key Management
          </h2>
          <div className="h-1.5 w-24 bg-[#C5A880] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 leading-relaxed">
            Meet the visionaries directing Sulit Metals & Alloys Private Ltd.
            towards engineering excellence and trusted partnerships in
            government sector works.
          </p>
        </ScrollReveal>

        {/* Directors Stack */}
        <div className="space-y-8 mb-12">
          {boardMembers.map((member, index) => (
            <ScrollReveal direction="up" delay={index * 150} key={member.name}>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Profile Image Column */}
                  <div className={`lg:col-span-4 bg-gradient-to-br ${member.color} text-white flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden min-h-[300px]`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Stylized monogram avatar or Director image */}
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-48 h-48 rounded-full object-cover border-4 border-white/25 shadow-lg mb-4 relative z-10 shrink-0"
                      />
                    ) : (
                      <div className="w-48 h-48 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 relative z-10 shrink-0">
                        {member.initials}
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold relative z-10 text-center">{member.name}</h3>
                    <span className="text-[#C5A880] font-semibold text-xs mt-1 px-3.5 py-1 bg-white/10 rounded-full relative z-10 uppercase tracking-wider text-center leading-normal">
                      {member.role}
                    </span>
                  </div>

                  {/* Bio and Experience Column */}
                  <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-6 flex items-center gap-2">
                        <Award className="text-[#C5A880] w-5 h-5 shrink-0" /> Executive Profile
                      </h4>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          <Briefcase className="w-4 h-4 text-[#C5A880]" /> Track Record
                        </span>
                        <p className="text-sm font-semibold text-slate-800 leading-normal">
                          {member.experience}
                        </p>
                      </div>
                      <div>
                        <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          <Building2 className="w-4 h-4 text-[#C5A880]" /> Key Expertise
                        </span>
                        <p className="text-sm font-semibold text-slate-800 leading-normal text-wrap">
                          {member.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal
            direction="up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
              Visual Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Company & Infrastructure Projects Gallery
            </h2>
            <div className="h-1.5 w-24 bg-[#C5A880] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-400 leading-relaxed">
              Browse professional photographs of our steel fabrication works,
              site executions, and completed heavy structures.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <ScrollReveal direction="up" delay={index * 100} key={index}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-4/3 bg-slate-800 shadow-lg hover:border-[#C5A880]/50 transition-colors">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="inline-block text-[10px] font-bold text-[#C5A880] uppercase tracking-wider bg-[#C5A880]/15 px-2 py-0.5 rounded-md border border-[#C5A880]/20 mb-1">
                      {image.tag}
                    </span>
                    <h3 className="font-bold text-sm text-white line-clamp-1 group-hover:text-[#C5A880] transition-colors">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Integration Section */}
      <section className="bg-slate-100 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-[#042D61] uppercase tracking-widest block mb-2">Video Presentations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#08182F]">Corporate Video Integration</h2>
            <div className="h-1.5 w-24 bg-[#C5A880] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-600 leading-relaxed">
              Watch our manufacturing plant in action, see our advanced welding machinery, and review our heavy steel girder fabrication protocols.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((vid, index) => (
              <ScrollReveal direction="up" delay={index * 150} key={vid.id}>
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Thumbnail / Branded Video Trigger */}
                  <div 
                    className="relative aspect-16/9 bg-slate-950 group cursor-pointer overflow-hidden border-b border-slate-100"
                    onClick={() => setActiveVideo(vid.id)}
                  >
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-85"
                    />
                    
                    {/* Branded Overlay & Logo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                    
                    {/* Floating Branding Badge */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">SMAPL Corporate</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#C5A880] text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                      {vid.duration} MIN
                    </div>

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 text-[#042D61] flex items-center justify-center shadow-lg group-hover:bg-[#C5A880] group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#042D61] transition-colors leading-snug">
                        {vid.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {vid.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-[#C5A880]" /> HD 1080p Format
                      </span>
                      <button 
                        className="text-[#042D61] hover:underline flex items-center gap-1 font-bold"
                        onClick={() => setActiveVideo(vid.id)}
                      >
                        Watch Now Play Video
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Contacts Section */}
      <section className="bg-[#0B2545] text-white py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal
            direction="up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
              Locations & Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Registered Establishments
            </h2>
            <div className="h-1.5 w-24 bg-[#C5A880] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-300 leading-relaxed font-light">
              Official addresses and direct contacts of Sulit Metals & Alloys
              Private Ltd. for vendor operations, government liaisons, and
              correspondence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registered Office */}
            <ScrollReveal direction="up" className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between h-full hover:border-[#C5A880]/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#C5A880] flex items-center justify-center border border-white/10 mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Registered Office Address
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    No. 8, 2nd Floor, 100 Feet Road, 15th Cross, <br />
                    Sarakki, J P Nagar, 6th Phase, <br />
                    Bengaluru – 560078, Karnataka, India
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" /> Head Office Location
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Registered Factory */}
            <ScrollReveal direction="up" delay={150} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between h-full hover:border-[#C5A880]/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#C5A880] flex items-center justify-center border border-white/10 mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Registered Factory Address
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    19-P2, Gowribidanur Industrial Area, 2nd Phase, <br />
                    Kudumalakunte Village, Kasaba Hobli, <br />
                    Gowribidanur, Chikkaballapura District, <br />
                    Karnataka – 561208, India
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" /> Factory & Works Location
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Direct Contacts */}
            <ScrollReveal direction="up" delay={300} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between h-full hover:border-[#C5A880]/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#C5A880] flex items-center justify-center border border-white/10 mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Direct Contact Details
                  </h3>

                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Phone className="w-4 h-4 text-[#C5A880]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                          Phone Lines
                        </span>
                        <a
                          href="tel:+919916927508"
                          className="text-slate-200 hover:text-[#C5A880] text-sm font-semibold transition-colors"
                        >
                          +91 99169 27508
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Mail className="w-4 h-4 text-[#C5A880]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                          Official Email
                        </span>
                        <a
                          href="mailto:sulitmetals@gmail.com"
                          className="text-slate-200 hover:text-[#C5A880] text-sm font-semibold transition-colors"
                        >
                          sulitmetals@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Modal Backdrop & Dialog */}
      {activeVideo && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#C5A880]" />
                <h3 className="font-bold text-base md:text-lg line-clamp-1">
                  {selectedVideo.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative aspect-16/9 bg-black flex-1">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-4 bg-slate-950 text-slate-400 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <span className="font-semibold text-[#C5A880]">Sulit Metals & Alloys Private Ltd.</span>
              <span>HD Streaming Presentation &bull; {selectedVideo.duration} mins</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
