import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  {
    title: "Open Web Girders",
    description: "RDSO-approved high-quality open web girders for railway bridges, manufactured to precision standards.",
    image: "/images/Products/OPEN WEB GIRDERS.webp",
  },
  {
    title: "Composite Girders",
    description: "Strong and durable composite girders combining steel and concrete for highway and railway bridges.",
    image: "/images/Products/COMPOSITE GIRDERS.webp",
  },
  {
    title: "Bow String Bridges",
    description: "Aesthetically designed and structurally robust bow string steel bridges for modern infrastructure.",
    image: "/images/Products/BOW STRING BRIDGES.webp",
  },
  {
    title: "Railway Road Over Bridge (ROB)",
    description: "Custom fabricated steel structures for railway road over bridges ensuring safety and long-term durability.",
    image: "/images/Products/RAILWAY ROAD OVER BRIDGE (ROB).webp",
  },
  {
    title: "Foot Over Bridge (FOB)",
    description: "Pedestrian foot over bridges designed for public transit areas, railway stations, and urban environments.",
    image: "/images/Products/FOOT OVER BRIDGE (FOB).webp",
  },
  {
    title: "Heavy Metal Fabrication",
    description: "Heavy structural steel fabrication services for industrial applications and massive engineering projects.",
    image: "/images/Products/HEAVY METAL FABRICATION.webp",
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
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-navy mb-2">{product.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <button className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
