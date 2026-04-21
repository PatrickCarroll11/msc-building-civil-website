import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import ImageLightbox from "@/components/ImageLightbox";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
            <span className="block text-xs font-semibold uppercase tracking-wider text-primary-foreground/70 mb-2">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-10">
        <div className="container max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Custom steel shed installation completed by Pèdar Holohan Steel Sheds. This{" "}
            {project.category.toLowerCase()} project was supplied and fitted to the highest
            standard using premium galvanised steel, built to withstand Ireland's weather
            conditions for decades to come.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-bold font-heading mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`${project.title} - Photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold font-heading mb-3">
            Want a Similar Shed?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get in touch for a free quote on your next steel shed project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="tel:0852366267">Call Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={project.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};

export default ProjectDetail;
