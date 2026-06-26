import SEO from "@/components/common/SEO";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="Our Services | Sulit Metals & Alloys Pvt Ltd"
        description="Explore the structural steel services offered by SMAPL, including high-precision metal fabrication, steel bridge girder manufacturing, peb engineering, and testing facilities."
        keywords="Steel Girder Services, Custom Metal Fabrication, Structural Steel Erection, Commissioning Bridges, PEB Engineering Services"
      />
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        We offer a wide range of services tailored to meet your needs.
      </p>
    </div>
  );
}
