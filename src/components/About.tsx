import VantaBackground from "@/components/VantaBackground";
const About = () => {
  return (
    <>
      <section id="about" className="py-20">
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
                  I’m a software developer experienced in backend systems,
                  automation, and AI-driven solutions . I work with{" "}
                  <span className="font-semibold text-primary">
                    React, JavaScript, and n8n
                  </span>
                  , and I explore{" "}
                  <span className="font-semibold text-primary">
                    Machine Learning (ML) and Deep Learning (DL)
                  </span>
                  .
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At{" "}
                  <span className="font-semibold text-primary">
                    Sweatless Solutions
                  </span>
                  , I built{" "}
                  <span className="font-semibold text-primary">
                    secure authentication systems
                  </span>
                  , including{" "}
                  <span className="font-semibold text-primary">
                    Multi-Factor Authentication (MFA)
                  </span>
                  .
                </p>

                <p className="text-lg leading-relaxed">
                  One of my key projects,{" "}
                  <span className="font-semibold text-primary">
                    Scheduler AI
                  </span>
                  , integrates{" "}
                  <span className="font-semibold text-primary">
                    Google Sheets, n8n, React, and AI calling services
                  </span>
                  . It{" "}
                  <span className="font-semibold text-primary">
                    automated lead handling
                  </span>{" "}
                  and made
                  <span className="font-semibold text-primary">
                    {" "}
                    cold calling 100% faster
                  </span>{" "}
                  for clients by streamlining scheduling, follow-ups, and
                  dashboard updates.
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
                      <span>AI automation, React</span>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    Currently
                  </h3>
                  <p className="text-muted-foreground">
                    Looking for opportunities to contribute to innovative
                    backend projects and expand my expertise in microservices
                    architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
