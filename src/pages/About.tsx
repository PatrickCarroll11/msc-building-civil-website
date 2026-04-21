import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">MSC Building & Civil</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Professional Building & Civil Engineering service you can depend on.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            MSC Building & Civil is a trusted name in the construction and civil engineering industry, based in Longford. Our team of skilled professionals is committed to delivering projects that exceed expectations, with a focus on quality, safety, and sustainability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-14">
            We take pride in our community roots and our ability to adapt to the needs of our clients..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[{"title":"Quality Materials","desc":"We use only the best materials for lasting results."},{"title":"Competitive Pricing","desc":"Affordable rates without compromising on quality."},{"title":"Professional Team","desc":"Experienced professionals dedicated to excellence."},{"title":"Wide Coverage","desc":"Proudly serving Longford and surrounding counties."},{"title":"Customer Satisfaction","desc":"Our clients' satisfaction is our top priority."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
