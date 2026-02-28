const services = [
  { name: "EM2 Industrial Flooring", desc: "Heavy-duty resin flooring for extreme industrial environments." },
  { name: "DMI Industrial Flooring", desc: "High-performance floor systems for demanding facilities." },
  { name: "Stamped Concrete", desc: "Decorative concrete with patterns that mimic natural materials." },
  { name: "Polished Concrete", desc: "Sleek, reflective concrete for modern commercial spaces." },
  { name: "Terrazzo Flooring", desc: "Classic mosaic flooring for hospitals, malls, and airports." },
  { name: "Self-Leveling Epoxy", desc: "Seamless, chemical-resistant floors for labs and factories." },
  { name: "Homogeneous Vinyl Flooring", desc: "Durable, hygienic vinyl ideal for healthcare and education." },
  { name: "Cushion Vinyl Flooring", desc: "Comfortable underfoot vinyl for offices and retail spaces." },
  { name: "SPC Flooring", desc: "Waterproof stone polymer composite for any interior." },
  { name: "Composite Decking", desc: "Weather-resistant decking for terraces and outdoor spaces." },
  { name: "Micro Topping Flooring", desc: "Ultra-thin decorative overlay for modern interiors." },
  { name: "Laminate Flooring", desc: "Affordable wood-look flooring with easy installation." },
  { name: "Hardwood Flooring", desc: "Premium natural timber floors for elegant spaces." },
  { name: "Marmoleum Flooring", desc: "Sustainable linoleum flooring made from natural materials." },
  { name: "Bare Concrete Flooring", desc: "Minimal, industrial-chic exposed concrete finish." },
];

const Services = () => {
  return (
    <>
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4 animate-fade-in">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.15s" }}>
            Flooring <span className="text-primary">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            We offer 15+ specialized flooring systems for every industry and environment.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="glass-card rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group hover-scale animate-fade-up opacity-0"
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
