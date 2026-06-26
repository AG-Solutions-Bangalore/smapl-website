import StatsBar from "@/components/common/StatsBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Award, Building2, Package, Users } from "lucide-react";
import { Link } from "react-router-dom";

// const stats = [
//   { icon: Building2, value: "2019", label: "Established" },
//   { icon: Award, value: "18,000", label: "Tons/Year Capacity" },
//   { icon: Package, value: "500 KVA", label: "Installed Power" },
//   { icon: Users, value: "RDSO", label: "Approved Quality" },
// ];

// const highlights = [
//   "ISO 9001:2015 Certified Quality Management System",
//   "Production capacity of 18,000 Tons per Year",
//   "Factory in Gowribidanur with 20-ton and 10-Ton EOT cranes",
//   "MOU with NABL-accredited KVS Metallurgical Labs",
//   "Power: 350 KVA Demand, 500 KVA Installed, 250 KVA DG Backup",
//   "Highly dedicated and committed workforce with latest equipment",
//   "Aim for continuous improvement by adopting new practices",
//   "Vision of growth and shared learning",
//   "RDSO Approved for fabrication of Open Web, Composite & Steel Plate Girders",
// ];

export default function AboutSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid pb-10 lg:grid-cols-2 gap-12 items-center">
          {/* Factory Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 w-full">
            <LazyLoadImage
              src="/images/about/about_us.webp"
              alt="SMAPL Manufacturing Facility"
              effect="blur"
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Delivering Strength. Building Trust.
            </h2>
            <div className="text-muted-foreground leading-relaxed mb-6 space-y-4 text-sm md:text-base">
              <p>
                <strong>Sulit Metals & Alloys Private Ltd. (SMAPL)</strong> is a
                leading manufacturer and supplier of steel girders, located in
                Karnataka, India.
              </p>
              <p>
                Incorporated on <strong>20th November 2019</strong> under the
                Companies Act, 2013, SMAPL undertakes contracts for fabrication,
                erection and commissioning of Bridges and Girders for Indian
                Railways and infrastructure projects across India. Our directors
                —{" "}
                <strong>
                  Abhishek Agarwal, Mukesh Tibrewal & Avinash Agarwal
                </strong>{" "}
                — bring deep expertise in Iron and Steel.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy-light transition-colors"
            >
              READ MORE ABOUT US
            </Link>
          </div>
        </div>

        {/* Two-column Points Sub-section */}
        {/* <div className="mt-16 pt-12 border-t border-slate-100">
          <h3 className="text-lg font-bold text-navy mb-6 uppercase tracking-wider">
            Our Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 bg-accent text-white shrink-0 rounded-full mt-0.5" />
                <span className="text-navy font-medium text-sm md:text-base leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Stats */}
        <StatsBar />
      </div>
    </section>
  );
}
