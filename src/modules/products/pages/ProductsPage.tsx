import ProductsHero from "../components/ProductsHero";
import ProductCategories from "../components/ProductCategories";
import ProductGrid from "../components/ProductGrid";
import ProductsFeatures from "../components/ProductsFeatures";

export default function ProductsPage() {
  return (
    <div>
      <ProductsHero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 shrink-0">
            <ProductCategories />
          </div>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </section>

      <ProductsFeatures />
    </div>
  );
}
