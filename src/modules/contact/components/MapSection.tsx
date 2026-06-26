import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Map Column */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-gray-100 min-h-[400px] border border-gray-100">
          <iframe
            title="SMAPL Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address Card Column */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-navy mb-1 uppercase tracking-wider">VISIT US</h3>
          <div className="w-12 h-1 bg-accent mb-6" />
          
          <h4 className="font-bold text-navy text-sm mb-2">Corporate Office & Manufacturing Unit</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            SF No. 432/1B1, 432/2B2, 433/9B,
            <br />
            S.F No. 436/2B, Arasampalayam,
            <br />
            Coimbatore - 641 407,
            <br />
            Tamil Nadu, India.
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sulit+Metals+%26+Alloys+Pvt+Ltd+Arasampalayam+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button
                variant="outline"
                className="w-full border-navy text-navy hover:bg-navy rounded-xl font-semibold py-5"
              >
                <Navigation className="w-4 h-4 mr-2" />
                GET DIRECTIONS
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
