import { Factory, Home, Phone, Mail, Globe } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-[#08182F] text-white rounded-2xl p-6 md:p-8 shadow-xl border border-white/5 h-full flex flex-col">
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        We'd love to hear from you. Send us an inquiry and our team will get back to you within 24 hours.
      </p>

      <div className="space-y-4 lg:space-y-0 flex-grow flex flex-col justify-between pt-2">
        {/* Factory / Works */}
        <div className="flex items-start gap-3 pb-4 border-b border-white/10">
          <div className="shrink-0 mt-0.5">
            <Factory className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-0.5">Factory / Works</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              19-P2, Gowribidanur Industrial Area, 2nd Phase
              <br />
              Kudumalakunte Village, Kasaba Hobli
              <br />
              Gowribidanur, Chikkaballapura District
              <br />
              Karnataka – 561208, India
            </p>
          </div>
        </div>

        {/* Registered Office */}
        <div className="flex items-start gap-3 pb-4 border-b border-white/10">
          <div className="shrink-0 mt-0.5">
            <Home className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-0.5">Registered Office</h3>
            <p className="text-gray-300 text-xs leading-relaxed">
              No. 8, 2nd Floor, 100 Feet Road, 15th Cross
              <br />
              Sarakki, J P Nagar, 6th Phase
              <br />
              Bengaluru – 560078, Karnataka, India
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 pb-4 border-b border-white/10">
          <div className="shrink-0 mt-0.5">
            <Phone className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-0.5">Phone</h3>
            <a
              href="tel:+919916927508"
              className="text-gray-300 text-xs font-semibold hover:text-white transition-colors duration-200"
            >
              +91 99169 27508
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 pb-4 border-b border-white/10">
          <div className="shrink-0 mt-0.5">
            <Mail className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-0.5">Email</h3>
            <a
              href="mailto:sulitmetals@gmail.com"
              className="text-gray-300 text-xs font-semibold hover:text-white transition-colors duration-200"
            >
              sulitmetals@gmail.com
            </a>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <Globe className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-0.5">Website</h3>
            <a
              href="https://www.sulitmetals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xs font-semibold hover:text-white transition-colors duration-200"
            >
              www.sulitmetals.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
