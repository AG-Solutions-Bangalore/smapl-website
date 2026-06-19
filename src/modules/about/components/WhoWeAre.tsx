import { CheckCircle2 } from "lucide-react";

const highlights = [
  "30+ Years of Experience",
  "Advanced Manufacturing Facility",
  "Quality & Customer Satisfaction",
  "Wide Range of Products",
];

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              WHO WE ARE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
              Leading Manufacturer & Supplier of
              <br />
              Power Line Hardware
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sai Moulded Appliances Pvt. Ltd. (SMAPL) established in 1994, is a
              leading manufacturer and supplier of Power Line Hardware & Pole Line
              Hardware. With modern infrastructure, skilled workforce and
              commitment to quality, we deliver products that ensure safety,
              durability and reliability in every connection.
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 bg-accent text-white shrink-0 rounded-full" />
                  <span className="text-navy font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1399&auto=format&fit=crop"
                alt="SMAPL Manufacturing Facility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
