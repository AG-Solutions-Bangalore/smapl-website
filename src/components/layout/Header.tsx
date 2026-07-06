import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import logo from "@/assets/images/logo.svg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  {
    label: "PRODUCTS",
    children: [
      { to: "/products", label: "Open Web Girders" },
      { to: "/products", label: "Composite Girders" },
      { to: "/products", label: "Bow String Bridges" },
      { to: "/products", label: "Railway ROB" },
      { to: "/products", label: "Foot Over Bridge (FOB)" },
      { to: "/products", label: "Heavy Metal Fabrication" },
      { to: "/products", label: "View All Products" },
    ],
  },
  { to: "/why-us", label: "WHY US" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/rdso-approval", label: "RDSO APPROVAL" },
  { to: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 lg:py-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="SMAPL Logo" className="h-12 md:h-14 lg:h-16" />
          <div className="flex flex-col">
            <span className="text-base md:text-lg lg:text-xl font-extrabold text-[#08182F] leading-tight tracking-tight">Sulit Metals &</span>
            <span className="text-base md:text-lg lg:text-xl font-extrabold text-[#08182F] leading-tight tracking-tight">Alloys Private Ltd.</span>
          </div>
        </Link>

        {/* Right Side Column: Contact on top, Nav at bottom */}
        <div className="hidden lg:flex flex-col items-end gap-3.5">
          
          {/* Top Row: Contact Details */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:sulitmetals@gmail.com"
              className="flex items-center gap-2 text-[#08182F] hover:text-accent transition-colors text-sm font-bold"
            >
              <Mail className="w-4.5 h-4.5 text-accent" />
              <span>sulitmetals@gmail.com</span>
            </a>

            <a
              href="tel:+919916927508"
              className="flex items-center gap-2 border-l pl-4 text-[#08182F] hover:text-accent transition-colors text-sm font-bold border-slate-200"
            >
              <Phone className="w-4.5 h-4.5 text-accent" />
              <span>+91 99169 27508</span>
            </a>
          </div>

          {/* Bottom Row: Desktop Nav */}
          <nav className="flex items-center gap-2 xl:gap-4" aria-label="Desktop navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                      location.pathname.startsWith("/products")
                        ? "text-accent"
                        : "text-navy hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
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
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                    location.pathname === link.to
                      ? "text-accent"
                      : "text-navy hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-2" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-navy hover:text-accent"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.label ? null : link.label,
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
            ),
          )}
          {/* <Button className="w-full bg-accent hover:brightness-110 text-white font-semibold mt-4">
            GET A QUOTE
          </Button> */}
          <div className="border-t border-border pt-4 mt-4 space-y-3">
            <a
              href="mailto:sulitmetals@gmail.com"
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-navy hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>sulitmetals@gmail.com</span>
            </a>
            <a
              href="tel:+919916927508"
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-navy hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>+91 99169 27508</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
