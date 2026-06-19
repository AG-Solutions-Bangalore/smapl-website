import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 min-h-[400px]">
        <iframe
          title="SMAPL Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-2xl shadow-xl p-8 max-w-xs">
          <h3 className="text-xl font-bold text-navy mb-1">VISIT US</h3>
          <div className="w-12 h-1 bg-accent mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            We are strategically located in Coimbatore, with excellent connectivity to serve our
            customers across India and worldwide.
          </p>
          <Button
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-white rounded-xl font-semibold"
          >
            <Navigation className="w-4 h-4 mr-2" />
            GET DIRECTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}
