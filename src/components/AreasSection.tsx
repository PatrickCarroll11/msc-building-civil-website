import { MapPin } from "lucide-react";

const areas = [
  "Longford",
  "Westmeath",
  "Leitrim",
  "Roscommon",
  "Cavan",
  "Meath",
  "Offaly",
  "Kildare",
  "Dublin",
  "Wicklow",
  "Louth",
  "Laois"
];

const AreasSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide Building & Civil Engineering services across Longford and surrounding counties.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-accent/40 hover:bg-accent/5 transition-colors">
              <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
              Co. {area}
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-semibold text-accent">
          We operate nationwide across Ireland.
        </p>
      </div>
    </section>
  );
};

export default AreasSection;
