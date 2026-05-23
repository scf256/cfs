import polishedConcrete1 from "@/assets/Polished Concrete floors/polished-concrete-1.jpeg";
import polishedConcrete4 from "@/assets/Polished Concrete floors/polished-concrete-4.jpeg";
import terrazzo2 from "@/assets/Terrazo concrete floors/terrazzo-2.jpeg";
import terrazzo4 from "@/assets/Terrazo concrete floors/terrazzo-4.jpeg";
import stampedConcrete1 from "@/assets/Stamped Concrete/stamped-concrete-1.jpeg";
import stampedConcrete3 from "@/assets/Stamped Concrete/stamped-concrete-3.jpeg";
import dm1img1 from "@/assets/Dm1/dm1-1.jpeg";
import dm1img3 from "@/assets/Dm1/dm1-3.jpeg";
import epoxy1 from "@/assets/self leveling epoxy/self-leveling-epoxy-1.jpeg";
import epoxy3 from "@/assets/self leveling epoxy/self-leveling-epoxy-3.jpeg";
import cushionVinyl1 from "@/assets/Cushion vinly/cushion-vinyl-1.jpeg";
import homogeneousVinyl2 from "@/assets/homegenous vinly floor/homogeneous-vinyl-2.jpeg";

const projects = [
  { img: terrazzo2, name: "Commercial Building", desc: "Terrazzo Flooring Installation", type: "Terrazzo" },
  { img: polishedConcrete1, name: "Modern Office Space", desc: "Polished Concrete Floors", type: "Polished Concrete" },
  { img: epoxy1, name: "Industrial Warehouse", desc: "Self-Leveling Epoxy Coating", type: "Epoxy" },
  { img: stampedConcrete1, name: "Residential Patio", desc: "Decorative Stamped Concrete", type: "Stamped Concrete" },
  { img: dm1img1, name: "Distribution Center", desc: "DM1 Superflat Warehouse Floor", type: "Industrial" },
  { img: homogeneousVinyl2, name: "Healthcare Facility", desc: "Homogeneous Vinyl Flooring", type: "Vinyl" },
  { img: polishedConcrete4, name: "Retail Store", desc: "High-Gloss Polished Concrete", type: "Polished Concrete" },
  { img: stampedConcrete3, name: "Outdoor Walkway", desc: "Stamped Concrete Pathway", type: "Stamped Concrete" },
  { img: terrazzo4, name: "Shopping Mall", desc: "Terrazzo Floor Restoration", type: "Terrazzo" },
  { img: dm1img3, name: "Logistics Hub", desc: "VNA Warehouse Flooring", type: "Industrial" },
  { img: epoxy3, name: "Manufacturing Plant", desc: "Chemical-Resistant Epoxy", type: "Epoxy" },
  { img: cushionVinyl1, name: "Residential Project", desc: "Cushion Vinyl Installation", type: "Vinyl" },
];

const Projects = () => {
  return (
    <>
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4 animate-fade-in">
            Our Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.15s" }}>
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Explore a selection of flooring projects we've delivered across Uganda.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="group rounded-lg overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} – ${p.desc} by Collins Flooring Solutions`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 bg-background">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary mb-2">{p.type}</span>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
