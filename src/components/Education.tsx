import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Bharati Vidyapeeth",
      duration: "2022 - 2025",
      gpa: "8.5/10",
      description:
        "Specialized in Computer Science and Engineering with focus on software development and system design.",
    },
    {
      degree: "Diploma in Engineering",
      institution: "Thapar University",
      duration: "2019 - 2022",
      gpa: "8.2/10",
      description:
        "Foundation in engineering principles with emphasis on programming and technical problem-solving.",
    },
  ];

  const certifications = [
    {
      title: "Java Programming Certification",
      issuer: "Oracle",
      year: "2024",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Spring Framework Certification",
      issuer: "VMware",
      year: "2024",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Spring Security Certification",
      issuer: "Spring Academy",
      year: "2024",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Education &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My academic background and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Academic Background
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass rounded-lg p-6 hover:bg-card/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground mt-1">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-accent mb-1">
                          {edu.degree}
                        </h4>
                        <p className="font-medium text-foreground mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="px-2 py-1 bg-primary/20 text-primary rounded-md">
                            CGPA: {edu.gpa}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass rounded-lg p-4 hover:bg-card/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-secondary rounded-lg text-primary-foreground">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-accent">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 glass rounded-lg p-6">
                <h4 className="font-semibold text-accent mb-3">
                  Continuous Learning
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I believe in continuous learning and staying updated with the
                  latest technologies. Currently pursuing advanced
                  certifications in microservices architecture and cloud
                  technologies to expand my backend development expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
