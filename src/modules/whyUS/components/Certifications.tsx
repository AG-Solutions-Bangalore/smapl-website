import ScrollReveal from "@/components/common/ScrollReveal";

const certifications = [
  {
    label: "ISO",
    standard: "9001:2015",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
  },
  {
    label: "ISO",
    standard: "14001:2015",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
  },
  {
    label: "ISO",
    standard: "45001:2018",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety Management",
  },
  {
    label: "BIS",
    standard: "",
    title: "BIS Certified",
    subtitle: "IS Compliant Products",
  },
  {
    label: "Make in India",
    standard: "",
    title: "Make in India",
    subtitle: "Proudly Manufacturing in India",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">
            OUR CERTIFICATIONS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.title}
              direction="up"
              delay={index * 100}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                {cert.label === "ISO" ? (
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-navy tracking-tight">
                      ISO
                    </span>
                    <span className="text-xs font-bold text-navy">
                      {cert.standard}
                    </span>
                  </div>
                ) : cert.label === "BIS" ? (
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-3 border-navy flex items-center justify-center">
                      <span className="text-[10px] font-bold text-navy text-center leading-tight">
                        Bureau of
                        <br />
                        Indian Standards
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-black text-navy">Make in</span>
                    <span className="text-lg font-black text-navy">India</span>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-navy text-sm mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {cert.subtitle}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
