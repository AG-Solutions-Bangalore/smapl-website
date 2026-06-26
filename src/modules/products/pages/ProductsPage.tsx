import ProductsHero from "../components/ProductsHero";
import ProductCategories from "../components/ProductCategories";
import ProductGrid from "../components/ProductGrid";
import ProductsFeatures from "../components/ProductsFeatures";
import SEO from "@/components/common/SEO";

export default function ProductsPage() {
  return (
    <div>
      <SEO 
        title="Products & Fabrication Services | Sulit Metals & Alloys Pvt Ltd"
        description="Browse SMAPL's structural steel products: RDSO-approved Open Web Girders, Composite Girders, Bow String Bridges, FOBs, and Heavy Metal Fabrication."
        keywords="Steel Girders, Bow String Arch Bridge, Open Web Truss, Road Over Bridge, PEB Buildings, Industrial Fabrication Products"
      />
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
