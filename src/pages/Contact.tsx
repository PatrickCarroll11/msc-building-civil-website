import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waPhone = "353868447778";
    const firstName = "martin";
    const text = `Hi ${firstName}, I'm looking for a quote.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Location:* ${formData.location}\n*Type of Project:* ${formData.projectType}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Opening WhatsApp", description: "Complete sending your message in WhatsApp." });
    setFormData({ name: "", phone: "", location: "", projectType: "", message: "" });
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-accent">MSC Building & Civil</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Get a free, no-obligation quote today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                <a href="tel:0868447778" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Phone</p>
                    <p className="font-semibold">086 844 7778</p>
                  </div>
                </a>
                <a href="mailto:padraigsheridan29@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                    <p className="font-semibold">padraigsheridan29@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Location</p>
                    <p className="font-semibold">Longford, Ireland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name <span className="text-destructive">*</span></label>
                  <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone <span className="text-destructive">*</span></label>
                  <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Location</label>
                  <Input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Your town or county" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Type of Project</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Select...</option>
              <option value="Residential Construction">Residential Construction</option>
              <option value="Commercial Construction">Commercial Construction</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Renovations">Renovations</option>
              <option value="Project Management">Project Management</option>
              <option value="Consultancy Services">Consultancy Services</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:opacity-90 font-bold py-3 h-auto rounded-lg">
                  Get a Free Quote
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
