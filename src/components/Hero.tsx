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
      {/* Starry animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars that react to mouse */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-star-glow rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(${mousePosition.x * (0.002 + Math.random() * 0.005)}px, ${
                mousePosition.y * (0.002 + Math.random() * 0.005)
              }px)`,
              animationDelay: `${Math.random() * 3}s`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
        
        {/* Larger accent stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`accent-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              transform: `translate(${mousePosition.x * 0.008}px, ${
                mousePosition.y * 0.008
              }px)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <div
        className="absolute w-6 h-6 border border-primary/30 rounded-full pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      />

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
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Raghav Kwatra
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-6 font-medium">
                FullStack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                FullStack Developer with experience in Spring Boot & Security,
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
                className="hover:bg-muted  "
                onClick={() =>
                  window.open("https://leetcode.com/u/raghavkwatra/", "_blank")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(16,16)">
                      <path d="M10.44727,0.26563c-0.13004,0.00413 -0.25335,0.05878 -0.34375,0.15234l-4.44727,4.44922l-2.56055,2.55859c-0.05137,0.05015 -0.09134,0.11076 -0.11719,0.17773c-1.20865,1.37039 -1.19195,3.4604 0.11719,4.76953l2.56055,2.56055c1.36138,1.36138 3.58588,1.36138 4.94727,0l2.25,-2.25c0.12632,-0.12664 0.17547,-0.31106 0.12895,-0.48378c-0.04653,-0.17271 -0.18167,-0.30748 -0.35451,-0.35354c-0.17284,-0.04605 -0.35712,0.00361 -0.48342,0.13028l-2.25,2.25c-0.97862,0.97862 -2.55263,0.97862 -3.53125,0l-2.56055,-2.56055c-0.97862,-0.97862 -0.97862,-2.55459 0,-3.5332l2.56055,-2.55859c0.97862,-0.97862 2.55263,-0.97862 3.53125,0l2.25,2.25c0.19524,0.19578 0.51223,0.19622 0.70801,0.00098c0.19578,-0.19524 0.19622,-0.51223 0.00098,-0.70801l-2.25,-2.25c-0.69283,-0.69282 -1.60914,-1.02407 -2.52148,-1.01172l2.73047,-2.73047c0.14893,-0.14387 0.19378,-0.36466 0.11278,-0.55523c-0.08099,-0.19058 -0.27107,-0.31152 -0.47802,-0.30414zM7.32813,9.40039c-0.18031,-0.00254 -0.34803,0.09219 -0.43893,0.24794c-0.0909,0.15575 -0.0909,0.34837 0,0.50412c0.0909,0.15575 0.25862,0.25049 0.43893,0.24794h6.90039c0.18031,0.00254 0.34803,-0.09219 0.43893,-0.24794c0.0909,-0.15575 0.0909,-0.34837 0,-0.50412c-0.0909,-0.15575 -0.25862,-0.25049 -0.43893,-0.24794z"></path>
                    </g>
                  </g>
                </svg>
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
