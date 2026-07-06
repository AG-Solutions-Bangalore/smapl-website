import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-end">
        <div className="flex items-center gap-6">
          <a
            href="mailto:sulitmetals@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>sulitmetals@gmail.com</span>
          </a>

          <a
            href="tel:+919916927508"
            className="flex items-center gap-2 border-l border-white/20 pl-4 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>+91 99169 27508</span>
          </a>
        </div>
      </div>
    </div>
  );
}
