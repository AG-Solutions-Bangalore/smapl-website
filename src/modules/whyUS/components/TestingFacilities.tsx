import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tests = [
  {
    title: "Tensile Strength Test",
    description: "Ensures high tensile strength and durability.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Salt Spray Test",
    description: "Checks corrosion resistance and product life.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Hardness Test",
    description: "Ensures proper hardness and material strength.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Proof Load Test",
    description: "Verifies load bearing capacity and performance.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TestingFacilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">
            QUALITY TESTING FACILITIES
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our in-house testing laboratory is equipped with advanced testing
              machines and instruments to ensure that every product conforms to
              national and international standards.
            </p>
            <Button className="bg-navy hover:bg-navy-dark text-white px-6 py-2.5 rounded-xl font-semibold">
              VIEW TESTING EQUIPMENT
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {tests.map((test) => (
              <div
                key={test.title}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy mb-1">{test.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
