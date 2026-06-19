import { Link } from "react-router-dom";
import { Building2, Award, Package, Users } from "lucide-react";
import factoryImg from "@/assets/images/factory-placeholder.svg";

const stats = [
  { icon: Building2, value: "1994", label: "Established" },
  { icon: Award, value: "25+", label: "Years of Experience" },
  { icon: Package, value: "500+", label: "Products" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Factory Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={factoryImg}
              alt="SMAPL Factory"
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Delivering Strength. Building Trust.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sai Moulded Appliances Pvt. Ltd. (SMAPL) established in 1994, is a
              leading manufacturer and supplier of Power Line Hardware & Pole Line
              Hardware. With modern infrastructure, skilled workforce and commitment
              to quality, we deliver products that ensure safety, durability and
              reliability in every connection.
            </p>
            <Link
              to="/about"
              className="inline-block bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy-light transition-colors"
            >
              READ MORE ABOUT US
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6 text-navy" />
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
