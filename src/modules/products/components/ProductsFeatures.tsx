import { Shield, BadgeCheck, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Superior Quality",
    description:
      "Manufactured using high grade raw materials and advanced technology.",
  },
  {
    icon: BadgeCheck,
    title: "Tested & Certified",
    description:
      "All products are rigorously tested and comply with international standards.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Efficient logistics and supply chain to ensure timely delivery.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our team is always ready to help you with the right product solutions.",
  },
];

export default function ProductsFeatures() {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 bg-[#F6F7FC] p-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-accent text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
