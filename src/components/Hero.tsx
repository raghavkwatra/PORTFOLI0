import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Code } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const LinkedInIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "20%",
            left: "20%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "20%",
            left: "40%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "30%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "40%",
            left: "50%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "70%",
            left: "70%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "80%",
            left: "60%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "40%",
            left: "70%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "30%",
            left: "80%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "50%",
            left: "80%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "90%",
            left: "80%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "90%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "80%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-star-glow rounded-full opacity-60 transition-transform duration-300 ease-out"
          style={{
            top: "90%",
            left: "20%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent text-lg mb-2 font-medium">
                Hi there, I'm{" "}
                <span className="inline-block animate-wave origin-[70%_70%]">
                  👋🏻
                </span>
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Raghav Kwatra
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
                Java Backend Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Backend Developer with experience in Spring Boot & Security,
                crafting robust and scalable backend solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() =>
                  window.open("https://github.com/raghavkwatra", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-[#0077b5] transition-colors"
                onClick={() =>
                  window.open("https://linkedin.com/in/raghavkwatra", "_blank")
                }
              >
                <LinkedInIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() =>
                  window.open("https://leetcode.com/u/raghavkwatra/", "_blank")
                }
              >
                <Code className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() =>
                  window.open("mailto:rkwatra454@gmail.com", "_blank")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer circular frame */}

              <div className="w-90 h-90 flex items-end justify-end ">
                {/* Default image */}
                <img
                  src="/lovable-uploads/image.png"
                  alt="Raghav Kwatra"
                  className="w-80 h-70 w object-cover group-hover:hidden transition-opacity duration-300 ease-in-out scale-75 "
                />
                {/* Hover image */}
                <img
                  src="/lovable-uploads/2dfd3c7e-8eb4-47fa-845d-f1d5c33c04d2.png"
                  alt="Raghav Hover"
                  className="w-80 h-70 object-cover hidden group-hover:block transition-opacity duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
