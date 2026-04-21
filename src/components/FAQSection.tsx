import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to build a new home in Longford?",
    a: "The cost of building a new home in Longford typically ranges from €150,000 to €350,000 or more, depending on size, design complexity, materials chosen, and site conditions. MSC Building & Civil provides detailed, transparent quotes tailored to your specific project. We recommend scheduling a free consultation so we can assess your requirements and provide an accurate estimate with no hidden costs."
  },
  {
    q: "How quickly can MSC Building & Civil respond to a new enquiry?",
    a: "We aim to respond to all new enquiries within 24 hours, Monday to Friday. For urgent matters, you can call us directly on 086 844 7778 and speak with a member of our team straight away. We understand that construction and civil engineering projects often have time-sensitive requirements, and we prioritise prompt communication from the very first contact."
  },
  {
    q: "What areas do MSC Building & Civil cover beyond Longford?",
    a: "While our headquarters are based in Longford, we proudly serve clients across a wide range of counties including Westmeath, Leitrim, Roscommon, Cavan, Meath, Offaly, Kildare, Dublin, Wicklow, Louth, and Laois. If you are unsure whether we cover your location, give us a call or send an email and we will be happy to confirm availability for your area."
  },
  {
    q: "Do you handle planning permission and regulatory approvals for construction projects in Longford?",
    a: "Yes, as part of our consultancy and project management services, MSC Building & Civil can assist you in navigating the planning permission process with Longford County Council and relevant regulatory bodies. Our experienced team understands local planning requirements and can guide you through submissions, compliance documentation, and any follow-up queries to help keep your project on track."
  },
  {
    q: "Are MSC Building & Civil fully insured and certified?",
    a: "Absolutely. MSC Building & Civil is fully insured, ISO certified, and a member of the Local Chamber of Commerce. All of our operatives hold the relevant qualifications and certifications required to carry out residential, commercial, and civil engineering works safely and to the highest industry standards. We are happy to provide documentation upon request before any work commences."
  },
  {
    q: "How long does a typical home renovation project take in Longford?",
    a: "The duration of a renovation project depends on its scope and complexity. A single-room refurbishment might take one to two weeks, while a full home renovation could take anywhere from eight to twenty weeks. At MSC Building & Civil, we create a detailed project timeline before work begins and keep you informed throughout. Our project management approach ensures minimum disruption and on-time delivery wherever possible."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 section-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our building and civil engineering services in Longford and beyond.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="px-6 md:px-8">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-accent transition-colors duration-200"
                >
                  <span className="font-semibold text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 text-accent ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-10 text-sm">
          Still have questions?{" "}
          <a
            href="tel:0868447778"
            className="text-accent font-semibold hover:underline"
          >
            Call us on 086 844 7778
          </a>{" "}
          or{" "}
          <a
            href="mailto:padraigsheridan29@gmail.com"
            className="text-accent font-semibold hover:underline"
          >
            send us an email
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQSection;