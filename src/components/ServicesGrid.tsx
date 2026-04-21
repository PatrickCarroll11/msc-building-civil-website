import { Building2, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Building2, ClipboardList };

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    "icon": "Building2",
    "title": "Residential Construction",
    "description": "Building homes with quality and care."
  },
  {
    "icon": "Building2",
    "title": "Commercial Construction",
    "description": "Constructing commercial spaces tailored to business needs."
  },
  {
    "icon": "Building2",
    "title": "Civil Engineering",
    "description": "Providing robust civil engineering solutions."
  },
  {
    "icon": "Building2",
    "title": "Renovations",
    "description": "Expert renovations to refresh spaces."
  },
  {
    "icon": "ClipboardList",
    "title": "Project Management",
    "description": "Managing projects efficiently from start to finish."
  },
  {
    "icon": "ClipboardList",
    "title": "Consultancy Services",
    "description": "Professional consultancy for construction projects."
  }
];

const ServicesGrid = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          MSC Building & Civil offers comprehensive building and civil engineering services across Longford and surrounding areas. From residential to commercial projects, we ensure quality and reliability in all our undertakings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Building2;
          return (
            <div
              key={service.title}
              className="group p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-default flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300 shrink-0">
                <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground leading-snug">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesGrid;