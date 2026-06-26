import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function QualityHero() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      <img
        src="/images/about/about-hero.jpeg"
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/50" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <ScrollReveal direction="up" className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHY US
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Committed to delivering superior quality
            <br />
            products that ensure safety, reliability
            <br />
            and long-term performance.
          </p>

          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Why Us</span>
          </nav>
        </ScrollReveal>
      </div>
    </section>
  );
}