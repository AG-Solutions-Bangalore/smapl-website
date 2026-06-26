import { Shield, Cpu, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const features = [
  {
    icon: Shield,
    title: "Superior Quality",
    description:
      "Manufactured with high grade raw materials and strict quality control.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "State-of-the-art infrastructure and latest manufacturing technology.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Committed to delivering reliable products and timely service.",
  },
  {
    icon: Award,
    title: "RDSO Approved",
    description: "RDSO Approved for fabrication of open web, composite & steel plate girders.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-16 sm:-mt-24 md:-mt-28">
      <div className="bg-white rounded-[24px] border border-gray-100 py-12 px-8 md:pb-16 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={index * 150}
              className={`flex flex-col gap-5 ${
                index === 0 ? "lg:pr-8" : index === 3 ? "lg:pl-8" : "lg:px-8"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-navy text-[17px] leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
