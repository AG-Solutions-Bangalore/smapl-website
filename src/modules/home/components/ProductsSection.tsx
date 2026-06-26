import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const products = [
  {
    name: "Open Web Girders",
    tag: "RDSO Approved",
    desc: "Truss structures built for high-span railway bridges requiring extreme structural load capacity.",
    image: "/images/Products/OPEN WEB GIRDERS.webp",
    slug: "open-web-girders",
  },
  {
    name: "Composite Girders",
    tag: "RDSO Approved",
    desc: "High-strength steel-concrete composite systems optimized for highway & railway crossings.",
    image: "/images/Products/COMPOSITE GIRDERS.webp",
    slug: "composite-girders",
  },
  {
    name: "Bow String Bridges",
    tag: "RDSO Approved",
    desc: "Aesthetically striking and structurally superior arched steel designs for modern transit corridors.",
    image: "/images/Products/BOW STRING BRIDGES.webp",
    slug: "bow-string-bridges",
  },
  {
    name: "Railway Road Over Bridge (ROB)",
    tag: "RDSO Approved",
    desc: "Heavy-duty steel girder structures built to withstand intense crossing and rail transit forces.",
    image: "/images/Products/RAILWAY ROAD OVER BRIDGE (ROB).webp",
    slug: "railway-rob",
  },
  {
    name: "Foot Over Bridge (FOB)",
    tag: "Infrastructure",
    desc: "Safe and durable pedestrian crossing steel structures for railway stations and urban areas.",
    image: "/images/Products/FOOT OVER BRIDGE (FOB).webp",
    slug: "foot-over-bridge",
  },
  {
    name: "Heavy Metal Fabrication",
    tag: "Heavy Industry",
    desc: "Custom high-capacity heavy structural fabrication for massive plants and industrial facilities.",
    image: "/images/Products/HEAVY METAL FABRICATION.webp",
    slug: "heavy-metal-fabrication",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 mt-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              OUR PRODUCTS AND SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Premium Steel Bridge Girders & Structures
            </h2>
            <div className="w-16 h-1 bg-accent mt-3" />
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors border border-navy hover:border-accent px-4 py-2 rounded-xl transition-all"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              to="/products"
              className="group relative bg-white rounded-3xl border border-slate-100 hover:border-accent/40 shadow-sm transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/[0.01] to-accent/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Padded image container with soft gradient background */}
              <div className="w-full aspect-[16/10] bg-gradient-to-b from-slate-50/80 to-slate-100/30 flex items-center justify-center transition-all duration-500 relative z-10 border-b border-slate-100/50 overflow-hidden">
                {/* Product Badge */}
                <span className={`absolute top-4 left-4 z-20 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-sm transition-all duration-300 ${
                  product.tag === "RDSO Approved" 
                    ? "bg-emerald-50/90 text-emerald-800 border-emerald-100 backdrop-blur-xs" 
                    : "bg-blue-50/90 text-blue-800 border-blue-100 backdrop-blur-xs"
                }`}>
                  {product.tag}
                </span>

                <div className="w-full h-full transition-transform duration-500 ease-out transform scale-100 group-hover:scale-105">
                  <LazyLoadImage
                    src={product.image}
                    alt={product.name}
                    effect="blur"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 flex flex-col justify-between flex-grow w-full">
                <div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors leading-snug mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs font-bold text-accent mt-5 group/btn">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent group-hover/btn:after:w-full after:transition-all after:duration-300">
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

