export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">OUR MISSION</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver innovative, reliable and quality products that empower the power
              infrastructure and contribute to a stronger tomorrow.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L12 8" />
                <path d="M8 5L16 5" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 15L12 22" />
                <path d="M8 18L16 18" />
                <path d="M5 8L2 11" />
                <path d="M19 8L22 11" />
                <path d="M5 16L2 13" />
                <path d="M19 16L22 13" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">OUR VISION</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a globally recognized leader in the power line hardware industry
              known for our quality, innovation and customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
