import { Shield, Cpu, FlaskConical, RefreshCw, Users } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const commitments = [
  {
    icon: Shield,
    title: "High Quality Raw Materials",
    description:
      "We use high grade raw materials from trusted and approved vendors.",
  },
  {
    icon: Cpu,
    title: "Advanced Manufacturing",
    description:
      "State-of-the-art infrastructure and latest technologies ensure precision.",
  },
  {
    icon: FlaskConical,
    title: "Rigorous Testing",
    description:
      "Each product is tested on various parameters to ensure strength, durability and safety.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We continuously upgrade our processes to deliver better quality and performance.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Our quality commitment helps us build long-term relationships with our customers.",
  },
];

export default function QualityCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">
            OUR QUALITY COMMITMENT
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At SMAPL, quality is at the core of everything we do. From raw material selection to
            final dispatch, every product undergoes stringent quality checks to ensure it meets
            international standards and exceeds customer expectations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {commitments.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 100} className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-navy text-sm mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
