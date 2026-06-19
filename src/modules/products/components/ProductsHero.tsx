import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsHero() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1399&auto=format&fit=crop)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-navy-dark/50" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR PRODUCTS
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            High quality power line hardware and pole line
            <br />
            hardware engineered for safety, reliability
            <br />
            and long-lasting performance.
          </p>

          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Products</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
