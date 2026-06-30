import ScrollReveal from "@/components/common/ScrollReveal";

export default function MapSection() {
  return (
    <ScrollReveal direction="up">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-[350px] border border-gray-100 shadow-sm">
        <iframe
          title="SMAPL Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.711202868953!2d77.62534577508688!3d13.633512986684728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb17b6204555555%3A0x7d9451152a562d55!2sKIADB%20Industrial%20Area%2C%20Gowribidanur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719396000000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </ScrollReveal>
  );
}
