import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsHero() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/about-hero.jpeg')",
        }}}
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/40" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR PROJECTS
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Showcasing our precision fabrication and erection of railroad bridges, flyovers, and infrastructure projects across India.
          </p>

          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Projects</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
