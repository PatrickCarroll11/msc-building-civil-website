import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentProjects = [];

const RecentWork = () => (
  <section className="py-24 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A sample of recent building & civil engineering projects completed across Longford and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" className="px-6">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;