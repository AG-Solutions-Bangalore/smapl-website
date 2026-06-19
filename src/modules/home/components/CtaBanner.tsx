import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1662958656945-746c5758f62d?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8, 41, 85, 1) 70%, rgba(8, 41, 85, 0.1) 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-bold">
                Looking for Reliable <br /> Power Line Solutions?
              </h3>
            </div>
          </div>

          <div className="w-px h-12 bg-white/20 hidden md:block" />

          <div className="flex items-center justify-center gap-6">
            <p className="text-gray-300 text-[1.1rem] hidden md:block">
              Get in touch with our experts today
              <br />
              for the best products and services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap"
            >
              CONTACT US NOW
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
