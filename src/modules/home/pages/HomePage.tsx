import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ClientsSection from "@/components/common/ClientsSection";
import CtaBanner from "../components/CtaBanner";
import SEO from "@/components/common/SEO";

export default function HomePage() {
  return (
    <div>
      <SEO 
        title="Sulit Metals & Alloys Pvt Ltd | RDSO Approved Steel Bridge Girder Manufacturers"
        description="SMAPL – Sulit Metals & Alloys Pvt Ltd, leading manufacturer and supplier of steel bridge girders, composite girders, and heavy steel fabrication in Karnataka, India. RDSO approved."
        keywords="Sulit Metals, SMAPL, Steel Bridge Girders, Open Web Girders, Composite Girders, RDSO Approved, Steel Fabrication, Karnataka, India"
      />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <AboutSection />
      <ClientsSection />
      <CtaBanner />
    </div>
  );
}
