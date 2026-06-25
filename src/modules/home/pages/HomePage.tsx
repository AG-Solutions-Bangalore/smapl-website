import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ClientsSection from "@/components/common/ClientsSection";
import CtaBanner from "../components/CtaBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <AboutSection />
      <ClientsSection />
      <CtaBanner />
    </div>
  );
}
