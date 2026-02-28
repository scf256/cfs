import projectHospital from "@/assets/project-hospital.webp";
import projectLobby from "@/assets/project-lobby.webp";
import projectFactory from "@/assets/project-factory.webp";
import projectStamped from "@/assets/project-stamped.webp";
import projectOffice from "@/assets/project-office.webp";
import projectDecking from "@/assets/project-decking.webp";

const projects = [
  { img: projectHospital, name: "Nsambya Hospital", desc: "Hospital Ward Flooring", type: "Terrazzo" },
  { img: projectLobby, name: "Pearl Business Park", desc: "Commercial Lobby Flooring", type: "Polished Concrete" },
  { img: projectFactory, name: "Mukwano Industries", desc: "Factory Floor Coating", type: "Epoxy" },
  { img: projectStamped, name: "Serena Hotel", desc: "Outdoor Patio Flooring", type: "Stamped Concrete" },
  { img: projectOffice, name: "Acacia Mall Offices", desc: "Office Vinyl Flooring", type: "Vinyl" },
  { img: projectDecking, name: "Garden City Terrace", desc: "Rooftop Composite Decking", type: "Composite Decking" },
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
                    alt={`${p.name} – ${p.desc} by Collings Flooring`}
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
