import { Building2, Award, Package, Users } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "1994",
    label: "Year Established",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Experience",
  },
  {
    icon: Package,
    value: "500+",
    label: "Products",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
  },
];

export default function StatsBar() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="bg-navy-dark rounded-2xl px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white text-2xl md:text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
