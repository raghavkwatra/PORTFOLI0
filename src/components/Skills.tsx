import { Code, Database, Shield, Cloud, Settings, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries", 
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security", level: 85 },
        { name: "Spring MVC", level: 80 },
        { name: "JPA/Hibernate", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Security & Authentication",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Spring Security", level: 90 },
        { name: "JWT", level: 85 },
        { name: "OAuth 2.0", level: 80 },
        { name: "MFA Implementation", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
        { name: "Maven", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 75 },
        { name: "JSON/XML", level: 85 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to build robust backend solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass rounded-lg p-6 hover:bg-card/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-accent">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `expand-${skillIndex} 1.5s ease-out ${index * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <div className="glass rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-accent">Additional Expertise</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "RESTful API Design", "Test-Driven Development", "Agile Methodology", 
                  "Clean Code Practices", "Design Patterns", "System Architecture",
                  "Performance Optimization", "Code Reviews", "Documentation",
                  "Problem Solving", "Team Collaboration", "Technical Leadership"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-primary/20 text-primary rounded-full text-sm hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;