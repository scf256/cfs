import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-floor.webp";
import projectLobby from "@/assets/project-lobby.webp";
import projectFactory from "@/assets/project-factory.webp";
import projectHospital from "@/assets/project-hospital.webp";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Flooring Solutions" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Nationwide Coverage" },
];

const trustBadges = [
  { icon: Shield, label: "Quality Guaranteed" },
  { icon: Award, label: "Certified Experts" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: CheckCircle, label: "Nationwide Service" },
];

const Index = () => {
  return (
    <>
      {/* Hero Section - full viewport with large image space */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium polished industrial epoxy flooring in a modern warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-6">
                Uganda's Trusted Flooring Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-foreground animate-fade-up-delay">
              Premium Industrial &amp; Commercial Flooring Solutions{" "}
              <span className="text-gradient">Across Uganda</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up-delay-2">
              From hospitals to factories – we deliver flawless floors that last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link to="/contact">
                <Button size="lg" className="gap-2 font-semibold">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
            Why Choose <span className="text-primary">Collings Flooring?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="glass-card rounded-lg p-6 text-center">
                <badge.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            A selection of our finest commercial and industrial flooring installations across Uganda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: projectHospital, name: "Nsambya Hospital", desc: "Hospital Ward Flooring" },
              { img: projectLobby, name: "Pearl Business Park", desc: "Commercial Lobby Flooring" },
              { img: projectFactory, name: "Mukwano Industries", desc: "Factory Floor Coating" },
            ].map((project) => (
              <div key={project.name} className="group rounded-lg overflow-hidden border border-border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.name} – ${project.desc}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Transform Your <span className="text-primary">Floors?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Get a free, no-obligation quote for your next flooring project. We serve every corner of Uganda.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 font-semibold">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
