import { Building2, Award, Package, Users } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const stats = [
  {
    icon: Building2,
    value: "2019",
    label: "Year Established",
  },
  {
    icon: Award,
    value: "18,000",
    label: "Tons/Year Capacity",
  },
  {
    icon: Package,
    value: "500 KVA",
    label: "Installed Power",
  },
  {
    icon: Users,
    value: "RDSO",
    label: "Approved Quality",
  },
];

export default function StatsBar() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="bg-navy-dark rounded-2xl px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              direction="up"
              delay={index * 120}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white text-2xl md:text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
