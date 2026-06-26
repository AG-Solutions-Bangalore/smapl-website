import { Target, Compass, Gem } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function MissionVision() {
  return (
    <section className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <ScrollReveal
            direction="up"
            delay={0}
            className="bg-white border border-slate-100 border-b-4 border-b-accent rounded-2xl p-8 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 tracking-wide uppercase">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To become one of the largest integrated railroad companies by delivering quality material and services.
            </p>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal
            direction="up"
            delay={150}
            className="bg-white border border-slate-100 border-b-4 border-b-accent rounded-2xl p-8 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 tracking-wide uppercase">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To provide superior products and services at the most competent prices.
            </p>
          </ScrollReveal>

          {/* Values Card */}
          <ScrollReveal
            direction="up"
            delay={300}
            className="bg-white border border-slate-100 border-b-4 border-b-accent rounded-2xl p-8 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Gem className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 tracking-wide uppercase">
              Our Values
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              SULIT means Value for Money. We stand by this value at all times.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
