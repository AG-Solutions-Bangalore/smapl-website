import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productPlaceholder from "@/assets/images/product-placeholder.svg";

const products = [
  { name: "Eye Bolts & Eye Nuts", slug: "eye-bolts" },
  { name: "Pole Line Hardware", slug: "pole-line" },
  { name: "Suspension Clamps", slug: "suspension-clamps" },
  { name: "Tension Clamps", slug: "tension-clamps" },
  { name: "Insulators", slug: "insulators" },
];

export default function ProductsSection() {
  return (
    <section className="py-20 mt-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              OUR PRODUCTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Premium Power Line Hardware
            </h2>
            <div className="w-16 h-1 bg-accent mt-3" />
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-navy font-semibold hover:text-accent transition-colors border border-navy hover:border-accent px-4 py-2 rounded"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-accent"
            >
              <div className="aspect-square bg-gray-100 p-4">
                <img
                  src={productPlaceholder}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                  {product.name}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
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
