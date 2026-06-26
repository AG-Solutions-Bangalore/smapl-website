import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const facilitiesList = [
  {
    title: "High-Speed CNC Plate Machining & Drilling",
    category: "Machining & Cutting",
    description:
      "Advanced CNC drilling center for high-speed, high-precision processing of connection plates.",
    image: "/images/whyus/1.webp",
    tag: "CNC Drilling",
    longDescription:
      "Our high-speed CNC plate drilling and milling machines deliver precise hole placement and edge preparation. This automation eliminates manual layout errors, ensuring perfect alignment during site assembly and structural erection.",
    specs: {
      "Max Plate Size": "1500mm x 1500mm",
      "Max Drilling Dia": "50mm",
      "Control System": "Automated CNC Programming",
      "Tolerance Limit": "±0.1mm",
    },
  },
  {
    title: "Automated Multi-Torch Welding",
    category: "Welding & Fabrication",
    description:
      "Advanced automated welding systems ensuring consistent, code-compliant structural joints.",
    image: "/images/whyus/2.webp",
    tag: "Submerged Arc (SAW)",
    longDescription:
      "State-of-the-art automated welding gantry systems designed for long-seam I-beam and box-girder fabrication. The process is monitored digitally to maintain optimal heat input, ensuring maximum tensile strength and fatigue resistance.",
    specs: {
      "Welding Process": "Automatic Submerged Arc (SAW) / GMAW",
      "Weld Depth": "Up to 50mm in a single pass",
      "Speed Range": "100 - 1500 mm/min",
      "Standard Compliance": "AWS D1.1, EN ISO 15614",
    },
  },
  {
    title: "400-Ton Heavy-Duty Proof Load Press",
    category: "Assembly & Testing",
    description:
      "In-house hydraulic press for structural load testing, bending evaluation, and capacity verification.",
    image: "/images/whyus/3.webp",
    tag: "Proof Load Testing",
    longDescription:
      "A massive 400-ton hydraulic press used for structural testing and forming validation. This allows us to perform direct proof-load tests on critical components, verifying load-bearing capacities and ensuring compliance with heavy civil design standards.",
    specs: {
      "Press Capacity": "400 Metric Tons",
      "Stroke Length": "600mm",
      "Bed Size": "2000mm x 1200mm",
      "Test Method": "Deflection & Yield Strength Checking",
    },
  },
  {
    title: "CNC Multi-Torch Flame & Plasma Profiling",
    category: "Machining & Cutting",
    description:
      "High-volume precision profile cutting for steel plates of varying thicknesses.",
    image: "/images/whyus/4.webp",
    tag: "Plasma & Oxy-Fuel",
    longDescription:
      "Industrial CNC multi-torch profile cutting system that handles large-format steel sheets. Combining oxy-fuel for thick plates and high-definition plasma for thinner sections, it provides exceptionally clean edges and precise dimensions for fabrication.",
    specs: {
      "Cutting Area": "3000mm x 12000mm",
      "Plasma Capacity": "Up to 40mm (Stainless & Carbon Steel)",
      "Oxy-Fuel Capacity": "Up to 200mm (Carbon Steel)",
      Repeatability: "±0.2mm",
    },
  },
  {
    title: "Radial Arm Drilling & Tapping",
    category: "Machining & Cutting",
    description:
      "Heavy-duty radial drilling machines designed for accurate drilling on large structural steel parts.",
    image: "/images/whyus/5.webp",
    tag: "Radial Drilling",
    longDescription:
      "Our heavy radial arm drilling center allows us to perform large-diameter hole drilling, tapping, and reaming operations on assembled girders and heavy structural shapes that cannot easily be fed into automated lines.",
    specs: {
      "Arm Length": "1600mm",
      "Drill Spindle Taper": "MT5",
      "Max Drilling Capacity": "65mm (Steel)",
      "Spindle Speeds": "16 steps (25 - 2000 RPM)",
    },
  },
  {
    title: "Integrated CNC H-Beam Drilling & Sawing",
    category: "Machining & Cutting",
    description:
      "Automated structural beam line doing multi-axis drilling and mitre cutting in a single pass.",
    image: "/images/whyus/6.webp",
    tag: "H-Beam Line",
    longDescription:
      "The backbone of our structural fabrication shop, this integrated CNC line drills holes on three faces of structural beams in one pass, followed immediately by clean mitre-cut sizing. This minimizes material handling and guarantees absolute geometric precision.",
    specs: {
      "Max Beam Size": "1000mm x 500mm (Web x Flange)",
      "Drilling Axes": "3 Axes (Web and both Flanges simultaneously)",
      "Sawing Angle": "Up to 60 degrees (Mitre)",
      "Length Measuring": "Laser-guided servo encoder",
    },
  },
];

export default function TestingFacilities() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden">
      {/* Subtle grid pattern background to convey technical precision */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-navy font-bold text-xs tracking-wider uppercase bg-navy/5 px-4 py-1.5 rounded-full border border-navy/10 inline-block mb-4">
              Infrastructure & Quality
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
              STATE-OF-THE-ART FABRICATION & TESTING
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our in-house facility is equipped with heavy CNC machining and
              advanced load-testing equipment. This ensures every product
              conforms to national and international standards.
            </p>
          </div>
          {/* <div>
            <Button className="bg-navy hover:bg-navy-dark text-white px-6 py-6 rounded-xl font-semibold shadow-md transition-all duration-300 hover:shadow-lg flex items-center gap-2 group cursor-pointer">
              DOWNLOAD TECHNICAL SPECS
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>

        {/* Grid of Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((item) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-navy/20 transition-all duration-500 flex flex-col h-full relative">
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                    <div className="w-full h-full transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105">
                      <LazyLoadImage
                        src={item.image}
                        alt={item.title}
                        effect="blur"
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                    </div>
                    <span className="absolute top-4 left-4 z-20 text-[10px] font-bold text-white bg-navy/85 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] text-navy font-bold uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-navy-light transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex items-center text-xs font-bold text-navy group-hover:text-navy-light transition-colors mt-auto">
                      VIEW SPECIFICATIONS
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-2xl max-w-lg p-0 overflow-hidden border-none shadow-2xl bg-white rounded-3xl">
                {/* Modal Header/Banner */}
                <div className="relative w-full aspect-[16/7] bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent z-10" />
                  <LazyLoadImage
                    src={item.image}
                    alt={item.title}
                    effect="blur"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="text-[10px] font-bold text-white bg-navy/90 backdrop-blur px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block border border-white/10">
                      {item.category}
                    </span>
                    <DialogTitle className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {item.title}
                    </DialogTitle>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                  <DialogDescription className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.longDescription}
                  </DialogDescription>

                  <h4 className="font-bold text-navy text-xs tracking-wider uppercase mb-4 pb-2 border-b border-slate-100 flex items-center">
                    <span className="w-1.5 h-3 bg-navy rounded-sm mr-2" />
                    Technical Specifications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-60 overflow-y-auto pr-1">
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 flex flex-col"
                      >
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                          {key}
                        </span>
                        <span className="text-sm font-bold text-navy mt-1">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
