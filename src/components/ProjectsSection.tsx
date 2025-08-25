import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import javaDashboard from '@/assets/project-java-dashboard.jpg';
import awsArchitecture from '@/assets/project-aws-architecture.jpg';
import reactEcommerce from '@/assets/project-react-ecommerce.jpg';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Enterprise Java Dashboard",
      description: "Comprehensive business intelligence dashboard built with Spring Boot and React. Features real-time data visualization, user management, and advanced analytics.",
      image: javaDashboard,
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      category: "Web App",
      tags: ["Java", "Web App", "Enterprise"]
    },
    {
      id: 2,
      title: "AWS Microservices Architecture",
      description: "Scalable microservices platform deployed on AWS with automated CI/CD pipeline. Includes API Gateway, Lambda functions, and RDS integration.",
      image: awsArchitecture,
      technologies: ["AWS", "Java", "Docker", "Kubernetes", "Terraform"],
      category: "Cloud",
      tags: ["Cloud", "AWS", "Microservices"]
    },
    {
      id: 3,
      title: "React E-commerce Platform",
      description: "Modern e-commerce solution with responsive design, payment integration, and inventory management. Built with React and Spring Boot backend.",
      image: reactEcommerce,
      technologies: ["React", "Java", "Spring Boot", "MongoDB", "Stripe"],
      category: "Web App",
      tags: ["React", "Web App", "E-commerce"]
    }
  ];

  const filters = ['All', 'Web App', 'Cloud', 'Java', 'React', 'AWS'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of enterprise-level applications and innovative solutions I've built using modern technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* 3D Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
               <div
                key={project.id}
                className="bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg 
                         hover:shadow-3d hover:scale-105 hover:-rotate-1 hover:animate-card-hover
                         transition-all duration-500 group transform-gpu border border-accent/10"
                style={{ perspective: '1000px' }}
              >
                {/* 3D Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 
                             transition-all duration-500 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-accent/20 to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"></div>
                  
                  {/* 3D Overlay Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 
                                 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="icon" variant="secondary" className="h-8 w-8 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <ExternalLink size={16} />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Github size={16} />
                    </Button>
                  </div>
                </div>

                {/* 3D Project Content */}
                <div className="p-6 bg-card/95 backdrop-blur-sm border-t border-accent/10">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent 
                               transition-all duration-300 group-hover:scale-105">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-foreground/80 
                               transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* 3D Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium
                                 hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer
                                 group-hover:animate-bounce border border-accent/20"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 3D Project Links */}
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 group/btn hover:scale-105 transition-all duration-300">
                      <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="group/btn hover:scale-105 transition-all duration-300">
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;