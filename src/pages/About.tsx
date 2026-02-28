import { Shield, Users, MapPin, Award, CheckCircle, Target } from "lucide-react";
import projectHospital from "@/assets/project-hospital.webp";
import projectLobby from "@/assets/project-lobby.webp";
import projectFactory from "@/assets/project-factory.webp";
import projectStamped from "@/assets/project-stamped.webp";
import projectOffice from "@/assets/project-office.webp";
import projectDecking from "@/assets/project-decking.webp";

const values = [
  { icon: Shield, title: "Quality First", desc: "We use only premium materials and proven techniques." },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with years of hands-on experience." },
  { icon: MapPin, title: "Nationwide Reach", desc: "We serve every corner of Uganda with no exceptions." },
  { icon: Award, title: "Certified Standards", desc: "All our work meets international flooring standards." },
  { icon: CheckCircle, title: "On-Time Delivery", desc: "Projects completed on schedule, every time." },
  { icon: Target, title: "Precision Work", desc: "Meticulous attention to detail on every project." },
];

const projectImages = [
  { img: projectHospital, name: "Nsambya Hospital" },
  { img: projectLobby, name: "Pearl Business Park" },
  { img: projectFactory, name: "Mukwano Industries" },
  { img: projectStamped, name: "Serena Hotel Patio" },
  { img: projectOffice, name: "Acacia Mall Offices" },
  { img: projectDecking, name: "Garden City Terrace" },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl">
            Uganda's Trusted Partner for{" "}
            <span className="text-primary">High-Performance Flooring</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Collings Flooring is Uganda's trusted partner for high-performance flooring. We mind zero on where you are – we serve every corner of the country with top-quality materials and expert installation.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-lg p-6">
                <v.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Projects We're <span className="text-primary">Proud Of</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((p) => (
              <div key={p.name} className="rounded-lg overflow-hidden border border-border group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} flooring project by Collings Flooring`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
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
