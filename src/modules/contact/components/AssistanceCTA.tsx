import { Headphones, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AssistanceCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-navy-dark rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Headphones className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Need Immediate Assistance?</h3>
            <p className="text-gray-300 text-sm">
              Speak with our experts for quick support and product inquiries.
            </p>
          </div>
        </div>

        <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-xl font-semibold whitespace-nowrap">
          <Phone className="w-4 h-4 mr-2" />
          CALL NOW: +91 93410 41347
        </Button>
      </div>
    </section>
  );
}
