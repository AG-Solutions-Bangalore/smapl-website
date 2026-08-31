import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, Mail, Phone, ExternalLink } from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { getAssetUrl } from "@/lib/utils";

interface NavItem {
  to?: string;
  label: string;
  external?: boolean;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  { to: "/", label: "HOME" },
  {
    label: "VENDOR APPROVAL RDSO",
    to: "/rdso-approval",
    children: [
      {
        to: "/rdso-approval#directors",
        label: "OWNERSHIP BOARD OF DIRECTOR",
      },
      {
        to: "/pdf/Firm's Registration Details ( under the company act).pdf",
        label: "INCORPORATION DETAILS",
        external: true,
      },
      {
        label: "FABRICATION UNITS",
        children: [
          {
            to: "/rdso-approval#address",
            label: "ADDRESS",
          },
          {
            label: "FACILITIES INCLUDING DETAILS",
            children: [
              {
                to: "/pdf/layout N-1.pdf",
                label: "LAYOUT",
                external: true,
              },
              {
                to: "/pdf/MANCHINE LIST & PHOTOGRAPHS.pdf",
                label: "PLANT AND MACHINERY",
                external: true,
              },
            ],
          },
          {
            to: "/pdf/DETAILS OF RDSO.jpg.jpeg",
            label: "DETAILS OF RDSO APPROVAL",
            external: true,
          },
          {
            to: "/pdf/Firm's Registration Details ( under the company act).pdf",
            label: "FIRM REGISTRATION DETAILS",
            external: true,
          },
          {
            to: "/docs/approvals/Factory_License.pdf",
            label: "FACTORY LICENSE DETAILS",
            external: true,
          },
          {
            to: "/pdf/ISO Cetification from bis as per Para 6.8 of STR.pdf",
            label: "ISO CERTIFICATION (BIS)",
            external: true,
          },
          {
            to: "/docs/approvals/9001_yr_2026.pdf",
            label: "ISO CERTIFICATION (ASPL)",
            external: true,
          },
          {
            to: "/pdf/Organization chart-smapl.pdf",
            label: "ORGANISATION CHART",
            external: true,
          },
          {
            to: "/pdf/Provision related to PAUT.pdf",
            label: "DETAILS OF TESTING FACILITIES",
            external: true,
          },
          {
            to: "/pdf/ARTISAN-INVOLED IN CUTTING DRILLING WELDING WITH MAN POWER DETAILES.pdf",
            label: "MANPOWER DETAILS",
            external: true,
          },
          {
            to: "/pdf/POWER DEMAND & INSTALLED.pdf",
            label: "POWER",
            external: true,
          },
          {
            to: "/rdso-approval?tab=projects",
            label: "DETAILS OF EXECUTED WORKS / WORKING HANDS",
          },
        ],
      },
    ],
  },
  {
    label: "COMPANY",
    children: [
      { to: "/about", label: "ABOUT US" },
      { to: "/why-us", label: "WHY US & QUALITY" },
    ],
  },
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
  { to: "/projects", label: "PROJECTS" },
  { to: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState<string | null>(null);
  const [mobileActiveSubSubDropdown, setMobileActiveSubSubDropdown] = useState<string | null>(null);

  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subDropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setActiveSubSubDropdown(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash, location.search]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
      if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current);
    };
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
      setActiveSubSubDropdown(null);
    }, 180);
  };

  const handleSubDropdownEnter = (label: string) => {
    if (subDropdownTimerRef.current) {
      clearTimeout(subDropdownTimerRef.current);
      subDropdownTimerRef.current = null;
    }
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveSubDropdown(label);
  };

  const handleSubDropdownLeave = () => {
    if (subDropdownTimerRef.current) {
      clearTimeout(subDropdownTimerRef.current);
    }
    subDropdownTimerRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
      setActiveSubSubDropdown(null);
    }, 180);
  };

  const handleSubSubDropdownEnter = (label: string) => {
    if (subDropdownTimerRef.current) {
      clearTimeout(subDropdownTimerRef.current);
      subDropdownTimerRef.current = null;
    }
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveSubSubDropdown(label);
  };

  const isLinkActive = (item: NavItem): boolean => {
    if (item.to && location.pathname === item.to) return true;
    if (item.children) {
      return item.children.some((child) => isLinkActive(child));
    }
    return false;
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 lg:py-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="SMAPL Logo" className="h-12 md:h-14 lg:h-16" />
          <div className="flex flex-col">
            <span className="text-base md:text-lg lg:text-xl font-extrabold text-[#08182F] leading-tight tracking-tight">
              Sulit Metals &
            </span>
            <span className="text-base md:text-lg lg:text-xl font-extrabold text-[#08182F] leading-tight tracking-tight">
              Alloys Private Ltd.
            </span>
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
          <nav className="flex items-center gap-1 xl:gap-3" aria-label="Desktop navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (activeDropdown === link.label) {
                        setActiveDropdown(null);
                        setActiveSubDropdown(null);
                        setActiveSubSubDropdown(null);
                      } else {
                        handleDropdownEnter(link.label);
                      }
                    }}
                    className={`flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                      isLinkActive(link)
                        ? "text-accent"
                        : "text-navy hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Level 1 Dropdown - wrapper with pt-2 provides seamless hover bridge */}
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 pt-2 w-64 z-50"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white border border-border rounded-xl shadow-xl py-2 ring-1 ring-black/5">
                        {link.children.map((child) =>
                          child.children ? (
                            <div
                              key={child.label}
                              className="relative"
                              onMouseEnter={() => handleSubDropdownEnter(child.label)}
                              onMouseLeave={handleSubDropdownLeave}
                            >
                              <div
                                className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-slate-50 hover:text-accent cursor-pointer transition-colors"
                                onClick={() => {
                                  setActiveSubDropdown(
                                    activeSubDropdown === child.label ? null : child.label
                                  );
                                }}
                              >
                                <span>{child.label}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                              </div>

                              {/* Level 2 Submenu - wrapper with pl-2 provides seamless hover bridge */}
                              {activeSubDropdown === child.label && (
                                <div
                                  className="absolute left-full top-0 pl-2 -mt-2 w-72 z-50"
                                  onMouseEnter={() => handleSubDropdownEnter(child.label)}
                                  onMouseLeave={handleSubDropdownLeave}
                                >
                                  <div className="bg-white border border-border rounded-xl shadow-xl py-2 max-h-[80vh] overflow-y-auto overflow-x-hidden ring-1 ring-black/5">
                                    {child.children.map((subChild) =>
                                      subChild.children ? (
                                        <div
                                          key={subChild.label}
                                          className="border-y border-slate-100 bg-slate-50/50 my-1"
                                        >
                                          <div
                                            className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-slate-100 hover:text-accent cursor-pointer transition-colors"
                                            onClick={() => {
                                              setActiveSubSubDropdown(
                                                activeSubSubDropdown === subChild.label ? null : subChild.label
                                              );
                                            }}
                                            onMouseEnter={() => handleSubSubDropdownEnter(subChild.label)}
                                          >
                                            <span>{subChild.label}</span>
                                            <ChevronDown
                                              className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                                                activeSubSubDropdown === subChild.label ? "rotate-180 text-accent" : ""
                                              }`}
                                            />
                                          </div>

                                          {/* Sub-tabs / items rendered inline */}
                                          {activeSubSubDropdown === subChild.label && (
                                            <div className="pl-6 pr-3 pb-2 pt-1 space-y-1 bg-white/70 border-t border-slate-100/80">
                                              {subChild.children.map((thirdChild) =>
                                                thirdChild.external ? (
                                                  <a
                                                    key={thirdChild.label}
                                                    href={getAssetUrl(thirdChild.to || "")}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-accent hover:bg-slate-50 rounded-lg transition-colors"
                                                    onClick={() => {
                                                      setActiveDropdown(null);
                                                      setActiveSubDropdown(null);
                                                      setActiveSubSubDropdown(null);
                                                    }}
                                                  >
                                                    <span className="truncate pr-2">{thirdChild.label}</span>
                                                    <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                                                  </a>
                                                ) : (
                                                  <Link
                                                    key={thirdChild.label}
                                                    to={thirdChild.to || "/"}
                                                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-accent hover:bg-slate-50 rounded-lg transition-colors"
                                                    onClick={() => {
                                                      setActiveDropdown(null);
                                                      setActiveSubDropdown(null);
                                                      setActiveSubSubDropdown(null);
                                                    }}
                                                  >
                                                    {thirdChild.label}
                                                  </Link>
                                                ),
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      ) : subChild.external ? (
                                        <a
                                          key={subChild.label}
                                          href={getAssetUrl(subChild.to || "")}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center justify-between px-4 py-2 text-xs text-foreground hover:bg-slate-50 hover:text-accent transition-colors"
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setActiveSubDropdown(null);
                                            setActiveSubSubDropdown(null);
                                          }}
                                        >
                                          <span className="truncate pr-2">{subChild.label}</span>
                                          <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                                        </a>
                                      ) : (
                                        <Link
                                          key={subChild.label}
                                          to={subChild.to || "/"}
                                          className="block px-4 py-2 text-xs text-foreground hover:bg-slate-50 hover:text-accent transition-colors"
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setActiveSubDropdown(null);
                                            setActiveSubSubDropdown(null);
                                          }}
                                        >
                                          {subChild.label}
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : child.external ? (
                            <a
                              key={child.label}
                              href={getAssetUrl(child.to || "")}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-foreground hover:bg-slate-50 hover:text-accent transition-colors"
                              onMouseEnter={() => {
                                handleSubDropdownEnter("");
                              }}
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                                setActiveSubSubDropdown(null);
                              }}
                            >
                              <span className="truncate pr-2">{child.label}</span>
                              <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.to || "/"}
                              className="block px-4 py-2.5 text-xs font-medium text-foreground hover:bg-slate-50 hover:text-accent transition-colors"
                              onMouseEnter={() => {
                                handleSubDropdownEnter("");
                              }}
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubDropdown(null);
                                setActiveSubSubDropdown(null);
                              }}
                            >
                              {child.label}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to || "/"}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
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
        <nav className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-slate-100 pb-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-navy hover:text-accent"
                  onClick={() =>
                    setMobileActiveDropdown(
                      mobileActiveDropdown === link.label ? null : link.label,
                    )
                  }
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileActiveDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileActiveDropdown === link.label && (
                  <div className="pl-4 space-y-1 py-1">
                    {link.children.map((child) =>
                      child.children ? (
                        <div key={child.label}>
                          <button
                            className="flex items-center justify-between w-full px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-accent"
                            onClick={() =>
                              setMobileActiveSubDropdown(
                                mobileActiveSubDropdown === child.label ? null : child.label,
                              )
                            }
                          >
                            <span>{child.label}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                mobileActiveSubDropdown === child.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {mobileActiveSubDropdown === child.label && (
                            <div className="pl-4 space-y-1 py-1">
                              {child.children.map((subChild) =>
                                subChild.children ? (
                                  <div key={subChild.label}>
                                    <button
                                      className="flex items-center justify-between w-full px-3 py-1 text-xs font-semibold text-slate-600 hover:text-accent"
                                      onClick={() =>
                                        setMobileActiveSubSubDropdown(
                                          mobileActiveSubSubDropdown === subChild.label
                                            ? null
                                            : subChild.label
                                        )
                                      }
                                    >
                                      <span>{subChild.label}</span>
                                      <ChevronDown
                                        className={`w-3 h-3 transition-transform ${
                                          mobileActiveSubSubDropdown === subChild.label
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    {mobileActiveSubSubDropdown === subChild.label && (
                                      <div className="pl-4 space-y-1 py-1">
                                        {subChild.children.map((thirdChild) =>
                                          thirdChild.external ? (
                                            <a
                                              key={thirdChild.label}
                                              href={getAssetUrl(thirdChild.to || "")}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center justify-between px-3 py-1 text-xs text-slate-500 hover:text-accent"
                                              onClick={() => setMobileOpen(false)}
                                            >
                                              <span>{thirdChild.label}</span>
                                              <ExternalLink className="w-3 h-3 opacity-60" />
                                            </a>
                                          ) : (
                                            <Link
                                              key={thirdChild.label}
                                              to={thirdChild.to || "/"}
                                              className="block px-3 py-1 text-xs text-slate-500 hover:text-accent"
                                              onClick={() => setMobileOpen(false)}
                                            >
                                              {thirdChild.label}
                                            </Link>
                                          ),
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ) : subChild.external ? (
                                  <a
                                    key={subChild.label}
                                    href={getAssetUrl(subChild.to || "")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-1 text-xs text-slate-600 hover:text-accent"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span>{subChild.label}</span>
                                    <ExternalLink className="w-3 h-3 opacity-60" />
                                  </a>
                                ) : (
                                  <Link
                                    key={subChild.label}
                                    to={subChild.to || "/"}
                                    className="block px-3 py-1 text-xs text-slate-600 hover:text-accent"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {subChild.label}
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ) : child.external ? (
                        <a
                          key={child.label}
                          href={getAssetUrl(child.to || "")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-600 hover:text-accent"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{child.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          to={child.to || "/"}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:text-accent"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to || "/"}
                className={`block px-3 py-2 text-sm font-semibold border-b border-slate-100 ${
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
