import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Corporate Office & Manufacturing Unit",
    lines: [
      "SF No. 432/1B1, 432/2B2, 433/9B,",
      "S.F No. 436/2B, Arasampalayam,",
      "Coimbatore - 641 407, Tamil Nadu, India.",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 93410 41347"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@smapl.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri : 8:30 AM - 5:30 PM", "Sat & Sun : Closed"],
  },
];

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy mb-1">CONTACT INFORMATION</h2>
      <div className="w-16 h-1 bg-accent mb-6" />

      <div className="space-y-6">
        {contactItems.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-navy text-sm">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
