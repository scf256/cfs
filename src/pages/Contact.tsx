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
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground max-w-3xl">
            Let's Talk About Your <span className="text-primary">Project</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Reach out for a free quote. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-5">
                <a href="tel:+256705266437" className="flex items-center gap-4 glass-card rounded-lg p-4 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">0705 266 437</p>
                  </div>
                </a>
                <a href="tel:+256760396541" className="flex items-center gap-4 glass-card rounded-lg p-4 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">0760 396 541</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/256705266437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card rounded-lg p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">Chat with us</p>
                  </div>
                </a>
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
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <Input
                    id="phone"
                    placeholder="0705 266 437"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your flooring project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2 font-semibold mt-2">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
