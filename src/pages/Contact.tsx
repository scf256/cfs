import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly. Thank you!",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4 animate-fade-in">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.15s" }}>
            Let's Talk About Your <span className="text-primary">Project</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Reach out for a free quote. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-5">
                {[
                  { href: "tel:+256705266437", icon: Phone, label: "Phone", value: "0705 266 437" },
                  { href: "tel:+256760396541", icon: Phone, label: "Phone", value: "0760 396 541" },
                  { href: "https://wa.me/256705266437", icon: MessageCircle, label: "WhatsApp", value: "Chat with us", external: true },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 glass-card rounded-lg p-4 hover:border-primary/40 transition-all duration-300 hover-scale"
                  >
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4 glass-card rounded-lg p-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Kampala, Uganda – We serve nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.35s" }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <Input id="name" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <Input id="phone" placeholder="0705 266 437" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea id="message" placeholder="Tell us about your flooring project..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <Button type="submit" size="lg" className="gap-2 font-semibold mt-2 hover-scale">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding bg-card pt-0">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576!2d32.554287!3d0.294373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTcnMzkuNyJOIDMywrAzMycxNS40IkU!5e0!3m2!1sen!2sug!4v1709123456789!5m2!1sen!2sug"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Collins Flooring Solutions Location"
              className="w-full"
            ></iframe>
          </div>
          <p className="text-center text-muted-foreground mt-4">Kampala, Uganda – We serve nationwide</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
