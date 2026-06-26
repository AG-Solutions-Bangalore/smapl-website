import {
  LayoutGrid,
  Building2,
  Layers,
  Grid,
  Hammer,
  Download,
} from "lucide-react";

const categories = [
  { icon: LayoutGrid, label: "All Products", active: true },
  { icon: Grid, label: "Open Web Girders" },
  { icon: Layers, label: "Composite Girders" },
  { icon: Building2, label: "Bow String Bridges" },
  { icon: Building2, label: "Railway ROB" },
  { icon: Building2, label: "Foot Over Bridge (FOB)" },
  { icon: Hammer, label: "Heavy Metal Fabrication" },
];

export default function ProductCategories() {
  return (
    <div className="space-y-6">
      <div className="bg-accent rounded-xl overflow-hidden">
        <div className="px-5 py-3">
          <h3 className="text-white font-bold text-sm">PRODUCT CATEGORIES</h3>
        </div>
        <div className="bg-white">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                cat.active
                  ? "bg-accent/5 text-accent font-semibold border-l-3 border-accent"
                  : "text-gray-600 hover:bg-gray-50 hover:text-navy"
              }`}
            >
              <cat.icon className="w-4 h-4 shrink-0" />
              <span className="text-left">{cat.label}</span>
              {cat.active && (
                <span className="ml-auto text-accent">→</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 text-navy" />
          </div>
          <div>
            <h4 className="font-bold text-navy text-sm leading-tight">
              DOWNLOAD
              <br />
              PRODUCT CATALOG
            </h4>
          </div>
        </div>
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
          Get our complete product catalog in PDF format.
        </p>
        <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-5 py-2 rounded-xl text-xs transition-colors">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  );
}
