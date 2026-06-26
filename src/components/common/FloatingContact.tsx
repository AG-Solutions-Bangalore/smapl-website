import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  CallIcon,
  Mail02Icon,
  Add01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-8 right-6 z-50 flex items-center gap-3">
      {/* Expanded Actions Container */}
      <div className="flex items-center gap-3">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/919341041347"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Support"
          aria-label="Contact us via WhatsApp"
          className={`w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto rotate-0 delay-150"
              : "opacity-0 translate-x-24 scale-50 pointer-events-none -rotate-45 delay-0"
          }`}
        >
          <HugeiconsIcon icon={WhatsappIcon} strokeWidth={2} className="size-7" />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+919341041347"
          title="Call Us"
          aria-label="Call us"
          className={`w-14 h-14 rounded-2xl bg-[#ED243B] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto rotate-0 delay-75"
              : "opacity-0 translate-x-16 scale-50 pointer-events-none -rotate-45 delay-75"
          }`}
        >
          <HugeiconsIcon icon={CallIcon} strokeWidth={2} className="size-6" />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:info@smapl.com"
          title="Email Us"
          aria-label="Email us"
          className={`w-14 h-14 rounded-2xl bg-[#08182F] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto rotate-0 delay-0"
              : "opacity-0 translate-x-8 scale-50 pointer-events-none -rotate-45 delay-150"
          }`}
        >
          <HugeiconsIcon icon={Mail02Icon} strokeWidth={2} className="size-6" />
        </a>
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={toggleOpen}
        title={isOpen ? "Close Menu" : "Contact Options"}
        aria-label={isOpen ? "Close contact options menu" : "Open contact options menu"}
        className={`w-14 h-14 rounded-2xl bg-[#ED243B] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
          isOpen ? "rotate-90 bg-slate-800" : "rotate-0"
        }`}
      >
        {isOpen ? (
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2.5} className="size-7" />
        ) : (
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2.5} className="size-7" />
        )}
      </button>
    </div>
  );
}
