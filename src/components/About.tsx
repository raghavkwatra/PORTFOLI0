const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Passionate about building robust solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm a dedicated Java Developer with expertise in Spring Boot and
                Spring Security. My journey in software development has been
                driven by a passion for creating efficient, scalable, and secure
                backend systems.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                During my internship at Sweatless Solutions, I gained hands-on
                experience implementing Multi-Factor Authentication (MFA) and
                working with Spring Security to build robust authentication
                systems.
              </p>
              <p className="text-lg leading-relaxed">
                I enjoy solving complex problems, optimizing system performance,
                and staying up-to-date with the latest technologies in the Java
                ecosystem. When I'm not coding, you can find me exploring new
                frameworks or contributing to open-source projects.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>Chandigarh,India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>Java Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialty</span>
                    <span>FullStack Devlopment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interests</span>
                    <span>Spring Boot, Security</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Currently
                </h3>
                <p className="text-muted-foreground">
                  Looking for opportunities to contribute to innovative backend
                  projects and expand my expertise in microservices
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
