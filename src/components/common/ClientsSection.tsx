import ScrollReveal from "@/components/common/ScrollReveal";

const clients = [
  "Indian Railways (SWR)",
  "BMRCL (Bangalore Metro)",
  "BDA",
  "KRDCL",
  "NCC Limited",
  "JSW Severfield",
  "L&T Construction",
  "ITC Limited",
  "Prestige Group (PBPPL)",
  "Varindera Constructions",
  "BWSSB",
  "PJB Engineers",
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-slate-50/30 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy uppercase tracking-wider">
            Our Clients
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded"></div>
        </ScrollReveal>

        {/* Clients Flex Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <ScrollReveal
              key={client}
              direction="up"
              delay={(index % 6) * 75}
              className="bg-white border border-slate-100 rounded-full px-6 py-3.5 text-center shadow-xs text-navy font-bold text-xs md:text-sm tracking-wide select-none hover:-translate-y-0.5 hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300"
            >
              {client}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
