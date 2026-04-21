import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Projects</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Browse our portfolio of completed steel shed installations across Ireland.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b sticky top-[5.75rem] bg-background z-30">
        <div className="container flex flex-wrap gap-2 justify-center">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No projects found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
