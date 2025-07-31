import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My professional journey in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-8">
              {/* Experience Item */}
              <div className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background glow-primary"></div>
                
                <div className="glass rounded-lg p-6 hover:bg-card/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-accent">Java Developer Intern</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" />
                        <span>Sweatless Solutions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Gained hands-on experience in backend development with a focus on security and authentication systems.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-accent">Key Achievements:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Implemented Multi-Factor Authentication (MFA) integration to enhance application security</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Worked extensively with Spring Security framework for authentication and authorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Collaborated with senior developers to implement best practices in secure coding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Contributed to the development of RESTful APIs using Spring Boot</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Java</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Spring Boot</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Spring Security</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MFA</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">REST APIs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;