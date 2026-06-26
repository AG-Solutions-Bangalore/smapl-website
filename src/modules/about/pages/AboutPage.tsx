import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import StatsBar from "../../../components/common/StatsBar";
import MissionVision from "../components/MissionVision";
import ClientsSection from "@/components/common/ClientsSection";
import SEO from "@/components/common/SEO";

export default function AboutPage() {
  return (
    <div>
      <SEO 
        title="About Us | Sulit Metals & Alloys Pvt Ltd"
        description="Learn about Sulit Metals & Alloys Private Ltd (SMAPL). Established in 2019, we fabricate high-quality steel bridge girders and PEB structures under ISO 9001:2015 standards."
        keywords="About Sulit Metals, Abhishek Agarwal, Gowribidanur Factory, Steel Fabrication Capacity, ISO 9001:2015, Indian Railways Steel Manufacturer"
      />
      <AboutHero />
      <WhoWeAre />
      <StatsBar />
      <MissionVision />
      <ClientsSection />
    </div>
  );
}
