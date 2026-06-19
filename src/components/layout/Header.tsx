import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.svg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  {
    label: "PRODUCTS",
    children: [
      { to: "/products/eye-bolts", label: "Eye Bolts & Eye Nuts" },
      { to: "/products/pole-line", label: "Pole Line Hardware" },
      { to: "/products/suspension-clamps", label: "Suspension Clamps" },
      { to: "/products/tension-clamps", label: "Tension Clamps" },
      { to: "/products/insulators", label: "Insulators" },
      { to: "/products", label: "View All Products" },
    ],
  },
  { to: "/quality", label: "QUALITY" },
  { to: "/downloads", label: "DOWNLOADS" },
  { to: "/careers", label: "CAREERS" },
  { to: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SMAPL Logo" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    location.pathname.startsWith("/products")
                      ? "text-accent"
                      : "text-navy hover:text-accent"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-accent hover:brightness-110 text-white font-semibold px-6 py-2 rounded-md">
            GET A QUOTE
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-navy hover:text-accent"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === link.label && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 text-sm font-semibold ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-navy hover:text-accent"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Button className="w-full bg-accent hover:brightness-110 text-white font-semibold mt-4">
            GET A QUOTE
          </Button>
        </div>
      )}
    </header>
  );
}
