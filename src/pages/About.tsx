import { Shield, Users, MapPin, Award, CheckCircle, Target } from "lucide-react";
import dm1img1 from "@/assets/Dm1/dm1-1.jpeg";
import fm2img2 from "@/assets/Fm2/fm2-2.jpeg";
import polishedConcrete3 from "@/assets/Polished Concrete floors/polished-concrete-3.jpeg";
import stampedConcrete3 from "@/assets/Stamped Concrete/stamped-concrete-3.jpeg";
import terrazzo4 from "@/assets/Terrazo concrete floors/terrazzo-4.jpeg";
import selfLevelingEpoxy3 from "@/assets/self leveling epoxy/self-leveling-epoxy-3.jpeg";

const values = [
  { icon: Shield, title: "Quality First", desc: "We use only premium materials and proven techniques." },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with years of hands-on experience." },
  { icon: MapPin, title: "Nationwide Reach", desc: "We serve every corner of Uganda with no exceptions." },
  { icon: Award, title: "Certified Standards", desc: "All our work meets international flooring standards." },
  { icon: CheckCircle, title: "On-Time Delivery", desc: "Projects completed on schedule, every time." },
  { icon: Target, title: "Precision Work", desc: "Meticulous attention to detail on every project." },
];

const projectImages = [
  { img: dm1img1, name: "Nsambya Hospital" },
  { img: fm2img2, name: "Pearl Business Park" },
  { img: polishedConcrete3, name: "Mukwano Industries" },
  { img: stampedConcrete3, name: "Serena Hotel Patio" },
  { img: terrazzo4, name: "Acacia Mall Offices" },
  { img: selfLevelingEpoxy3, name: "Garden City Terrace" },
];

const About = () => {
  return (
    <>
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4 animate-fade-in">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.15s" }}>
            Uganda's Trusted Partner for{" "}
            <span className="text-primary">High-Performance Flooring</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Collins Flooring Solutions is Uganda's trusted partner for high-performance flooring. We mind zero on where you are – we serve every corner of the country with top-quality materials and expert installation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12 animate-fade-in">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="glass-card rounded-lg p-6 hover-scale animate-fade-up opacity-0" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <v.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12 animate-fade-in">
            Projects We're <span className="text-primary">Proud Of</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((p, i) => (
              <div key={p.name} className="rounded-lg overflow-hidden border border-border group hover-scale animate-fade-up opacity-0" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} flooring project by Collins Flooring Solutions`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-background">
                  <p className="text-sm font-medium text-foreground">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
