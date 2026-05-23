import { useState } from "react";
import dm1img1 from "@/assets/Dm1/dm1-1.jpeg";
import dm1img2 from "@/assets/Dm1/dm1-2.jpeg";
import dm1img3 from "@/assets/Dm1/dm1-3.jpeg";
import fm2img1 from "@/assets/Fm2/fm2-1.jpeg";
import fm2img2 from "@/assets/Fm2/fm2-2.jpeg";
import cushionVinyl1 from "@/assets/Cushion vinly/cushion-vinyl-1.jpeg";
import cushionVinyl2 from "@/assets/Cushion vinly/cushion-vinyl-2.jpeg";
import cushionVinyl3 from "@/assets/Cushion vinly/cushion-vinyl-3.jpeg";
import stampedConcrete1 from "@/assets/Stamped Concrete/stamped-concrete-1.jpeg";
import stampedConcrete2 from "@/assets/Stamped Concrete/stamped-concrete-2.jpeg";
import stampedConcrete3 from "@/assets/Stamped Concrete/stamped-concrete-3.jpeg";
import stampedConcrete4 from "@/assets/Stamped Concrete/stamped-concrete-4.jpeg";
import polishedConcrete1 from "@/assets/Polished Concrete floors/polished-concrete-1.jpeg";
import polishedConcrete3 from "@/assets/Polished Concrete floors/polished-concrete-3.jpeg";
import polishedConcrete4 from "@/assets/Polished Concrete floors/polished-concrete-4.jpeg";
import terrazzo2 from "@/assets/Terrazo concrete floors/terrazzo-2.jpeg";
import terrazzo3 from "@/assets/Terrazo concrete floors/terrazzo-3.jpeg";
import terrazzo4 from "@/assets/Terrazo concrete floors/terrazzo-4.jpeg";
import terrazzo5 from "@/assets/Terrazo concrete floors/terrazzo-5.jpeg";
import selfLevelingEpoxy1 from "@/assets/self leveling epoxy/self-leveling-epoxy-1.jpeg";
import selfLevelingEpoxy2 from "@/assets/self leveling epoxy/self-leveling-epoxy-2.jpeg";
import selfLevelingEpoxy3 from "@/assets/self leveling epoxy/self-leveling-epoxy-3.jpeg";
import selfLevelingEpoxy4 from "@/assets/self leveling epoxy/self-leveling-epoxy-4.jpeg";
import homogeneousVinyl1 from "@/assets/homegenous vinly floor/homogeneous-vinyl-1.jpeg";
import homogeneousVinyl2 from "@/assets/homegenous vinly floor/homogeneous-vinyl-2.jpeg";
import homogeneousVinyl3 from "@/assets/homegenous vinly floor/homogeneous-vinyl-3.jpeg";
import spcVideo1 from "@/assets/SPC/spc-1.mp4";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const featuredServices = [
  {
    id: "dm1",
    name: "DM1 Industrial Flooring",
    shortDesc: "Highest flatness specification for VNA warehouses with 13m+ racking",
    description: "A DM1 concrete floor is the highest flatness/levelness specification (Superflat) under the Concrete Society's TR34 standards, designed for very narrow aisle (VNA) warehouses with racking heights exceeding 13m. These floors are usually jointless, fiber-reinforced, and require precise, often laser-guided, construction to ensure safe, stable operation of automated, fixed-path, or high-reach materials handling equipment.",
    features: [
      "Engineered for VNA and high-bay racking systems over 13 meters",
      "Laser screed construction for extreme precision",
      "Steel fiber reinforcement for jointless surfaces",
      "Superflat accuracy minimizes vibration",
      "Can be corrected using diamond grinding techniques"
    ],
    images: [dm1img1, dm1img2, dm1img3]
  },
  {
    id: "fm2",
    name: "FM2 Industrial Flooring",
    shortDesc: "High-tolerance durable surfaces for heavy traffic and narrow-aisle racking",
    description: "FM2 concrete floors are high-tolerance, durable surfaces designed for industrial warehouses, distribution centers, and areas with heavy traffic or narrow-aisle racking. These floors provide excellent flatness for material handling equipment while maintaining long-term durability under demanding conditions.",
    features: [
      "Designed for heavy traffic and forklift operations",
      "Ideal for narrow-aisle racking systems",
      "High-tolerance flatness for warehouse environments",
      "Durable surface for distribution centers",
      "Cost-effective solution for industrial applications"
    ],
    images: [fm2img1, fm2img2]
  },
  {
    id: "cushion-vinyl",
    name: "Cushion Vinyl Flooring",
    shortDesc: "Waterproof sheet flooring with foam backing for comfort and durability",
    description: "Cushion vinyl is a durable, waterproof sheet flooring with an integrated foam backing, providing underfoot comfort, warmth, and sound insulation. Ideal for high-traffic, moisture-prone areas like kitchens and bathrooms, it is slip-resistant, hygienic, and available in diverse designs (wood, stone, tile). It is easy to maintain, often DIY-friendly to install, and typically ranges from 2mm to 4.5mm in thickness.",
    features: [
      "Built-in foam backing for comfort and warmth",
      "100% waterproof - perfect for bathrooms and kitchens",
      "Slip-resistant surface for safety",
      "Sound reduction and acoustic insulation",
      "Resistant to stains, scratches, and heavy foot traffic",
      "Easy to clean - sweep and mop maintenance",
      "DIY-friendly installation with adhesive or tape",
      "Available in wood, stone, and tile designs"
    ],
    images: [cushionVinyl1, cushionVinyl2, cushionVinyl3]
  },
  {
    id: "stamped-concrete",
    name: "Stamped Concrete",
    shortDesc: "Durable decorative concrete that imitates stone, brick, slate, or wood",
    description: "Stamped concrete is a durable, versatile, and cost-effective surfacing option that imitates natural materials like stone, brick, slate, or wood for patios, driveways, and walkways. It is created by pouring concrete, applying color hardeners and release agents, and pressing texture mats into the surface. Properly installed stamped concrete can last over 20 years and requires sealing every 2-3 years to maintain color and protection.",
    features: [
      "Mimics expensive materials - stone, slate, brick, wood planks",
      "Durable surface lasting 20+ years with proper care",
      "Cost-effective alternative to natural stone or pavers",
      "Custom patterns and colors for unique designs",
      "Enhances curb appeal for patios, driveways, walkways",
      "Requires resealing every 2-3 years with acrylic sealers",
      "Professional installation ensures pattern alignment",
      "High-end appearance at affordable pricing"
    ],
    images: [stampedConcrete1, stampedConcrete2, stampedConcrete3, stampedConcrete4]
  },
  {
    id: "polished-concrete",
    name: "Polished Concrete Floors",
    shortDesc: "High-gloss eco-friendly surface with diamond-polished durability",
    description: "Polished concrete floors are highly durable, low-maintenance, and eco-friendly surfaces created by grinding, honing, and polishing concrete slabs with diamond abrasives. Often treated with a chemical densifier to harden the surface, these floors provide a modern, high-gloss or matte finish suitable for residential and commercial spaces. The process involves grinding depths of 1mm to 4mm and using diamond grits from 25 to 3000 to achieve the desired smoothness and shine.",
    features: [
      "Diamond grinding process for glass-like finish",
      "Exposed aggregate or salt-and-pepper finish options",
      "Chemical densifiers harden and seal the surface",
      "Extremely resistant to wear and high-traffic",
      "Low maintenance - no waxing required",
      "Improves indoor lighting with reflectivity",
      "Eco-friendly and allergen-free (no mold growth)",
      "Color customization with stains and dyes"
    ],
    images: [polishedConcrete1, polishedConcrete3, polishedConcrete4]
  },
  {
    id: "terrazzo",
    name: "Terrazzo Concrete Floors",
    shortDesc: "Durable decorative flooring with marble, quartz, and glass chips",
    description: "Terrazzo concrete floors are a durable, customizable, and decorative surfacing material made by mixing aggregate chips—such as marble, quartz, or glass—into a cement or epoxy binder, then grinding and polishing the surface smooth. They offer exceptional longevity, low maintenance, and high-traffic resistance, making them ideal for both commercial and residential applications. Known to last the lifetime of a building when properly sealed.",
    features: [
      "Marble, quartz, granite, and glass aggregate chips",
      "Cementitious option for heavy-duty industrial use",
      "Epoxy option for indoor, faster, thinner installation",
      "Unlimited color options and intricate patterns",
      "Metal, plastic, or zinc dividing strips for designs",
      "Lifetime durability - lasts as long as the building",
      "Resistant to stains, mold, and abrasions",
      "Low maintenance with proper sealing"
    ],
    images: [terrazzo2, terrazzo3, terrazzo4, terrazzo5]
  },
  {
    id: "self-leveling-epoxy",
    name: "Self-Leveling Epoxy Floors",
    shortDesc: "Seamless high-performance resin system for industrial and commercial use",
    description: "Self-leveling epoxy is a high-performance, two-component resin system that spreads evenly to create seamless, durable, and glossy surfaces, primarily for concrete floors in garages, industrial sites, and showrooms. Applied with a notch trowel, it cures to a perfectly level, thick finish providing exceptional strength, chemical resistance, and a professional, mirror-like appearance.",
    features: [
      "Two-component resin system for maximum strength",
      "Self-leveling formula for perfectly flat surfaces",
      "Seamless, glossy, mirror-like finish",
      "Exceptional chemical resistance for labs and factories",
      "Ideal for garages, industrial sites, and showrooms",
      "Applied with notch trowel for thick, durable coating",
      "High-performance durability under heavy use",
      "Easy to clean and maintain"
    ],
    images: [selfLevelingEpoxy1, selfLevelingEpoxy2, selfLevelingEpoxy3, selfLevelingEpoxy4]
  },
  {
    id: "homogeneous-vinyl",
    name: "Homogeneous Vinyl Flooring",
    shortDesc: "Single-layer hygienic flooring for high-traffic commercial environments",
    description: "Homogeneous vinyl floor is a high-performance, single-layer, and durable flooring solution composed of a single, compact layer of vinyl. It is ideal for heavy-traffic, hygienic, and commercial environments like hospitals, schools, and offices. The color and pattern are consistent throughout the entire thickness, allowing for deep cleaning and restoration without revealing different colors underneath.",
    features: [
      "Single-layer solid construction throughout",
      "Extreme durability for high-traffic areas",
      "Non-porous hygienic surface with PUR or Diamond 10 technology",
      "No polish or wax required - low maintenance costs",
      "Seamless welded seams for watertight finish",
      "Anti-slip, static-conductive, and acoustic versions available",
      "Excellent stain and abrasion resistance",
      "Ideal for hospitals, schools, offices, and retail"
    ],
    images: [homogeneousVinyl1, homogeneousVinyl2, homogeneousVinyl3]
  },
  {
    id: "spc",
    name: "SPC (Stone Plastic Composite) Flooring",
    shortDesc: "100% waterproof rigid luxury vinyl with limestone core",
    description: "SPC (Stone Plastic Composite) flooring is a highly durable, 100% waterproof, and rigid luxury vinyl flooring, composed of limestone powder and stabilizers. Ideal for high-traffic areas and wet rooms, it features a click-lock system for easy installation, excellent sound insulation, and superior resistance to denting, impacts, and temperature changes. Compatible with underfloor heating.",
    features: [
      "100% waterproof - perfect for kitchens, bathrooms, basements",
      "Rigid stone polymer core with limestone powder",
      "DIY-friendly click-lock installation system",
      "Highly impact-resistant and scratch-resistant",
      "Resists expansion and contraction from temperature changes",
      "Sound-absorbing underlayment for quieter comfort",
      "Compatible with underfloor heating systems",
      "Ideal for homes with pets and children"
    ],
    images: [],
    videos: [spcVideo1]
  }
];

const otherServices = [
  { name: "Composite Decking", desc: "Weather-resistant decking for terraces and outdoor spaces." },
  { name: "Micro Topping Flooring", desc: "Ultra-thin decorative overlay for modern interiors." },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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

      {/* Featured Services - Expandable */}
      <section className="section-padding bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">Featured Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Premium <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Flooring Systems</span>
            </h2>
          </div>

          <div className="space-y-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground">{service.shortDesc}</p>
                </div>

                {/* Image Gallery - Always Visible */}
                {service.images && service.images.length > 0 && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.images.map((img, i) => (
                        <div
                          key={i}
                          className="group rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 hover-scale"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={img}
                              alt={`${service.name} - ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video Gallery - Always Visible */}
                {service.videos && service.videos.length > 0 && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.videos.map((video, i) => (
                        <div
                          key={i}
                          className="rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500"
                        >
                          <video
                            controls
                            className="w-full h-full"
                            preload="metadata"
                          >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Details Section */}
                <div className="border-t border-border/50">
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-base font-semibold text-foreground">View Details & Features</span>
                    <div className="ml-4">
                      {expandedService === service.id ? (
                        <ChevronUp className="w-6 h-6 text-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content - Description and Features */}
                  {expandedService === service.id && (
                    <div className="px-6 pb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-heading font-bold text-foreground mb-3">Description</h4>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-heading font-bold text-foreground mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Other <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of flooring solutions for every application
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
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
