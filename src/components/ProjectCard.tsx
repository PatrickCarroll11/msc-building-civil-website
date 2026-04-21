import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block rounded-lg overflow-hidden border bg-card hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
          {project.category}
        </span>
        <h3 className="font-heading font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">Steel Shed Installation</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          View Project <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
