import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import MapSection from "../components/MapSection";
import AssistanceCTA from "../components/AssistanceCTA";
import SEO from "@/components/common/SEO";

export default function ContactPage() {
  return (
    <div>
      <SEO 
        title="Contact Us | Sulit Metals & Alloys Pvt Ltd"
        description="Contact SMAPL for business inquiries, steel bridge girder manufacturing quotes, PEB structure fabrication, and career opportunities."
        keywords="Contact SMAPL, Sulit Metals Contact, Steel Fabrication Quote, Gowribidanur Factory Address, Phone, Email"
      />
      <ContactHero />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>

      <MapSection />

      <div className="py-10">
        <AssistanceCTA />
      </div>
    </div>
  );
}
