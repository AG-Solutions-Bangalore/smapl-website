import diamondProduct from "@/assets/images/diamond-product.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1662958656945-746c5758f62d?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-44 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <p className="text-accent font-medium tracking-wide">
              Powering Connections. Empowering Tomorrow.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Products Built for Safety & Reliability
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Manufacturer & Supplier of premium quality Power Line Hardware &
              Pole Line Hardware for a stronger tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent hover:bg-accent/90 hover:brightness-110  rounded-md text-white font-semibold px-8 py-5 text-base">
                EXPLORE PRODUCTS
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className="text-black hover:bg-gray-200 bg-white rounded-md font-semibold px-8 py-5 text-base">
                DOWNLOAD CATALOG
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Diamond Images */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Top diamond */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Left diamond */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Right diamond */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
              {/* Bottom diamond */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-45 w-36 h-36 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                <img
                  src={diamondProduct}
                  alt="Product"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
