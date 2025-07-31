import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Mail,
  Shield,
  Database,
  Code,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Spam Mail Detection System",
      description:
        "Machine learning-based email classification system that automatically detects and filters spam emails using advanced algorithms and natural language processing techniques.",
      tech: [
        "Python",
        "Machine Learning",
        "NLP",
        "Data Analysis",
        "Email Processing",
      ],
      github: "https://github.com/raghavkwatra",
      features: [
        "Advanced ML algorithms for spam detection",
        "Natural Language Processing ",
        "High accuracy classification system",
        "Real-time email processing",
      ],
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "School Management WebApp",
      description:
        "Comprehensive web application for school management with features for student enrollment, grade tracking, attendance management, and administrative tasks.",
      tech: ["Java", "Spring Boot", "Web Development", "REST API"],
      github: "https://github.com/raghavkwatra",
      features: [
        "Administrative dashboard",
        "Student enrollment and management",
        "Grade tracking and reporting",
        "Attendance management system",
      ],
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Security Authentication System",
      description:
        "Robust authentication and authorization system built with Spring Security, featuring multi-factor authentication, role-based access control, and secure session management.",
      tech: ["Java", "Spring Security", "Spring Boot", "JWT", "MFA"],
      github: "https://github.com/raghavkwatra",
      features: [
        "Multi-Factor Authentication (MFA)",
        "Role-based access control",
        "JWT token management",
        "Secure session handling",
      ],
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of the projects I've worked on recently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-lg p-6 hover:bg-card/50 transition-all duration-300 group hover:scale-105"
              >
                {/* Project Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-accent group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-accent mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-muted hover:text-accent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                window.open("https://github.com/raghavkwatra", "_blank")
              }
            >
              <Code className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
