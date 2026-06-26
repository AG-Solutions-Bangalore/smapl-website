import QualityHero from "../components/QualityHero";
import QualityCommitment from "../components/QualityCommitment";
import Certifications from "../components/Certifications";
import TestingFacilities from "../components/TestingFacilities";
import SEO from "@/components/common/SEO";

export default function QualityPage() {
  return (
    <div>
      <SEO 
        title="Quality & Testing Facilities | Sulit Metals & Alloys Pvt Ltd"
        description="Discover SMAPL's quality standards, NABL laboratory alliances, ultrasonic testing, physical test facilities, and ISO certifications."
        keywords="Steel Quality Control, Ultrasonic Testing, Physical Lab, NABL, CNC Plate Drilling, RDSO Approved Quality Standards"
      />
      <QualityHero />
      <QualityCommitment />
      <Certifications />
      <TestingFacilities />
    </div>
  );
}
