import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import StatsBar from "../../../components/common/StatsBar";
import MissionVision from "../components/MissionVision";
import ClientsSection from "@/components/common/ClientsSection";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <StatsBar />
      <MissionVision />
      <ClientsSection />
    </div>
  );
}
