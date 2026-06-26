import diamondProduct from "@/assets/images/diamond-product.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/banner.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/75 to-navy-dark/30" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-44 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal direction="up" className="text-white space-y-6">
            <p className="text-accent font-medium tracking-wide">
              Delivering Strength. Building Trust.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Steel Girders Built for Strength & Safety
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Leading manufacturer and supplier of steel girders, bridges, and
              heavy infrastructure projects across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="bg-accent hover:bg-accent/90 hover:brightness-110  rounded-md text-white font-semibold px-8 py-5 text-base">
                  EXPLORE PRODUCTS
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button className="text-black hover:bg-gray-200 bg-white rounded-md font-semibold px-8 py-5 text-base">
                DOWNLOAD CATALOG
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Diamond Images */}
          <ScrollReveal direction="right" delay={200} className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Top diamond */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product Showcase Top"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Left diamond */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product Showcase Left"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Right diamond */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product Showcase Right"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Bottom diamond */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product Showcase Bottom"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
