import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolioImg from "@/assets/project-portfolio.jpg";
import carServiceImg from "@/assets/project-car-service.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site with sections for projects, resume, and contact form. Features static pages, forms, and deployment basics.",
    image: portfolioImg,
    tech: ["HTML", "CSS", "JavaScript", "React"],
    focus: "Static pages, forms, deployment basics"
  },
  {
    title: "Car Service Booking System",
    description: "Users can book car servicing online, choose a service center, and track the service status with real-time updates.",
    image: carServiceImg,
    tech: ["React.js", "Django REST", "PostgreSQL", "AWS"],
    focus: "API design, authentication, real-time updates"
  },
  {
    title: "Mini E-Commerce App",
    description: "A small online shop where users can view products, add to cart, and checkout with mock payment integration.",
    image: ecommerceImg,
    tech: ["React.js", "Django REST", "PostgreSQL"],
    focus: "API integration, authentication, state management"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-primary font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-accent font-semibold mb-1">Learning Focus:</p>
                  <p className="text-xs text-muted-foreground">{project.focus}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
