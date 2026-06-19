import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  {
    title: "Pole Line Hardware",
    description: "Complete range of pole line hardware for distribution and transmission lines.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Suspension Clamps",
    description: "Reliable suspension clamps for secure support of conductor lines.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Tension Clamps",
    description: "High strength tension clamps for optimal performance and durability.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Dead End Hardware",
    description: "Durable dead end hardware for safe termination of power lines.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Insulators",
    description: "High quality insulators for superior electrical insulation and strength.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Line Fittings",
    description: "Wide range of line fittings for various power line applications.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Connectors",
    description: "Robust connectors for secure and efficient electrical connections.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Earthing Hardware",
    description: "Reliable earthing solutions for safety and system protection.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Tools & Accessories",
    description: "Specialized tools and accessories for installation and maintenance.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-navy">ALL PRODUCTS</h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search products..."
            className="w-56 h-9 rounded-xl border-gray-200 bg-gray-50/50 text-sm"
          />
          <button className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 hover:bg-navy-dark transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white rounded-2xl border border-gray-100  overflow-hidden  transition-shadow"
          >
            <div className="h-44 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-navy mb-2">{product.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {product.description}
              </p>
              <button className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
