import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  HardHat,
  Wrench,
  ClipboardList,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Residential Construction",
    seo: "Residential Construction Longford",
    description:
      "We specialize in building high-quality homes that meet your specifications. Our team is dedicated to providing exceptional craftsmanship and service.",
    features: [
      "Custom Designs",
      "Energy Efficient Solutions",
      "Quality Materials",
      "Experienced Team",
      "Timely Completion",
    ],
    icon: Home,
  },
  {
    title: "Commercial Construction",
    seo: "Commercial Construction Longford",
    description:
      "Our commercial construction services cater to businesses looking to create functional and modern spaces. We focus on delivering projects that support business growth.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Industrial Units",
      "Cost-effective Solutions",
      "Innovative Designs",
    ],
    icon: Building2,
  },
  {
    title: "Civil Engineering",
    seo: "Civil Engineering Longford",
    description:
      "MSC Building & Civil provides comprehensive civil engineering services, including infrastructure development and maintenance. We ensure projects are completed with precision.",
    features: [
      "Infrastructure Development",
      "Structural Analysis",
      "Environmental Compliance",
      "Risk Management",
      "Sustainable Practices",
    ],
    icon: HardHat,
  },
  {
    title: "Renovations",
    seo: "Home Renovations Longford",
    description:
      "Our renovation services are designed to transform and enhance existing spaces. We work closely with clients to bring their vision to life with quality and efficiency.",
    features: [
      "Interior Upgrades",
      "Exterior Improvements",
      "Modern Designs",
      "Quality Finishes",
      "Attention to Detail",
    ],
    icon: Wrench,
  },
  {
    title: "Project Management",
    seo: "Construction Project Management Longford",
    description:
      "We offer efficient project management services, ensuring that all aspects of your construction project are handled professionally and within budget.",
    features: [
      "Comprehensive Planning",
      "Resource Management",
      "Risk Assessment",
      "Budget Control",
      "On-time Delivery",
    ],
    icon: ClipboardList,
  },
  {
    title: "Consultancy Services",
    seo: "Construction Consultancy Longford",
    description:
      "Our consultancy services provide expert advice and strategic planning for your construction projects. We help you make informed decisions and achieve successful outcomes.",
    features: [
      "Feasibility Studies",
      "Risk Analysis",
      "Design Consultancy",
      "Cost Estimation",
      "Project Strategy",
    ],
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              MSC Building & Civil
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              From residential builds to civil engineering, we deliver
              comprehensive construction solutions across Longford and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 md:gap-16">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`group rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 overflow-hidden bg-card ${
                    isEven ? "" : "bg-card"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                      <div>
                        {/* Icon + Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                          </div>
                          <div className="pt-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        {/* SEO Badge */}
                        <div className="mb-6">
                          <Badge
                            variant="outline"
                            className="text-xs font-semibold uppercase tracking-widest border-accent/30 text-accent bg-accent/5 px-3 py-1"
                          >
                            {service.seo}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA Link */}
                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 text-sm"
                        >
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-8 md:p-10 section-alt flex flex-col justify-center">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
                        What's Included
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 group/item"
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                              <CheckCircle2 className="h-5 w-5 text-accent" />
                            </span>
                            <span className="text-foreground font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Index tag */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Service {String(index + 1).padStart(2, "0")} of{" "}
                          {String(serviceDetails.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}