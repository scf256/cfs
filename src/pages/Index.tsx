import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock, CheckCircle, Phone } from "lucide-react";
// Hero Background Images
import polishedConcrete1 from "@/assets/Polished Concrete floors/polished-concrete-1.jpeg";
import dm1Floor1 from "@/assets/Dm1/dm1-1.jpeg";
import terrazzoFloor from "@/assets/Terrazo concrete floors/terrazzo-2.jpeg";
import selfLevelingEpoxy from "@/assets/self leveling epoxy/self-leveling-epoxy-1.jpeg";
import stampedConcrete from "@/assets/Stamped Concrete/stamped-concrete-1.jpeg";
// Showcase Images
import dm1img2 from "@/assets/Dm1/dm1-2.jpeg";
import stampedConcrete2 from "@/assets/Stamped Concrete/stamped-concrete-2.jpeg";
import polishedConcrete3 from "@/assets/Polished Concrete floors/polished-concrete-3.jpeg";
import terrazzo3 from "@/assets/Terrazo concrete floors/terrazzo-3.jpeg";
import fm2img1 from "@/assets/Fm2/fm2-1.jpeg";
import epoxy2 from "@/assets/self leveling epoxy/self-leveling-epoxy-2.jpeg";

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

const heroImages = [
  polishedConcrete1,
  dm1Floor1,
  terrazzoFloor,
  selfLevelingEpoxy,
  stampedConcrete,
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Collins Flooring Solutions - Premium flooring ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30 mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Uganda's Trusted Flooring Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-primary-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.25s" }}>
              Premium Industrial &amp; Commercial Flooring Solutions{" "}
              <span className="text-primary">Across Uganda</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/75 max-w-xl animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
              From hospitals to factories – we deliver flawless floors that last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.55s" }}>
              <Link to="/projects">
                <Button size="lg" className="gap-2 font-semibold bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg shadow-primary/25 text-white">
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+256705266437">
                <Button size="lg" className="gap-2 font-semibold !bg-white hover:!bg-gray-50 !text-gray-900 shadow-lg border-2 border-gray-200">
                  <Phone className="w-4 h-4 !text-gray-900" /> Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 animate-count-up opacity-0" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                <div className="text-3xl md:text-5xl font-heading font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground animate-fade-in">
              Why Choose <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Collins Flooring Solutions?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div
                key={badge.label}
                className="glass-card rounded-2xl p-8 text-center hover-scale animate-fade-up opacity-0 group"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-orange-500/30 transition-all duration-300">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Solutions Showcase */}
      <section className="section-padding bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in">
              Premium <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Flooring Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto animate-fade-in">
              From industrial warehouses to elegant commercial spaces – we deliver excellence in every installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: stampedConcrete2, name: "Stamped Concrete", desc: "Decorative outdoor solutions" },
              { img: polishedConcrete3, name: "Polished Concrete", desc: "Modern commercial spaces" },
              { img: dm1img2, name: "Industrial Flooring", desc: "Heavy-duty warehouse floors" },
            ].map((solution, i) => (
              <div
                key={solution.name}
                className="group rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover-scale animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={solution.img}
                    alt={`${solution.name} – ${solution.desc}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-xl text-white drop-shadow-lg">{solution.name}</h3>
                    <p className="text-sm text-white/90 mt-1 drop-shadow">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-fade-in">
            <Link to="/services">
              <Button size="lg" className="gap-2 font-semibold bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg shadow-primary/25">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in">
              Featured <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto animate-fade-in">
              A selection of our finest commercial and industrial flooring installations across Uganda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: epoxy2, name: "Self-Leveling Epoxy", desc: "Seamless industrial flooring" },
              { img: terrazzo3, name: "Terrazzo Flooring", desc: "Elegant commercial spaces" },
              { img: fm2img1, name: "FM2 Industrial Flooring", desc: "High-traffic warehouse solutions" },
            ].map((project, i) => (
              <div
                key={project.name}
                className="group rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover-scale animate-fade-up opacity-0"
                style={{ animationDelay: `${0.15 + i * 0.15}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.img}
                    alt={`${project.name} – ${project.desc}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 bg-gradient-to-b from-background to-card/30">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-fade-in">
            <Link to="/projects">
              <Button variant="outline" className="gap-2 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-orange-500/5 to-primary/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in">
            Ready to Transform Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Floors?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 animate-fade-in text-lg">
            Get a free, no-obligation quote for your next flooring project. We serve every corner of Uganda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2 font-semibold hover-scale bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg shadow-primary/25">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+256705266437">
              <Button size="lg" variant="outline" className="gap-2 font-semibold hover-scale border-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Find <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-muted-foreground mt-2">Kampala, Uganda – We serve nationwide</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576!2d32.554287!3d0.294373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTcnMzkuNyJOIDMywrAzMycxNS40IkU!5e0!3m2!1sen!2sug!4v1709123456789!5m2!1sen!2sug"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Collins Flooring Solutions Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
