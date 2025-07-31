import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-star-glow rounded-full sparkle glow-star"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-star-glow rounded-full sparkle glow-star" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-star-glow rounded-full sparkle glow-star" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-star-glow rounded-full sparkle glow-star" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent text-lg mb-2 font-medium">Hi there, I'm</p>
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
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
                onClick={() => window.open('https://github.com/raghavkwatra', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() => window.open('https://linkedin.com/in/raghavkwatra', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() => window.open('https://leetcode.com/u/raghavkwatra/', '_blank')}
              >
                <Code className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-muted hover:text-accent"
                onClick={() => window.open('mailto:rkwatra454@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* 3D-like illustration area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circular frame */}
              <div className="w-80 h-80 rounded-full bg-gradient-secondary p-1 floating">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                  {/* Profile placeholder or actual image */}
                  <div className="w-64 h-64 rounded-full bg-gradient-primary flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-foreground">RK</div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-8 w-8 h-8 bg-star-glow rounded-full sparkle glow-star"></div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-star-glow rounded-full sparkle glow-star" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-4 -right-4 glass rounded-lg p-3 floating" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-star-glow rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">Java Spring</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-lg p-3 floating" style={{ animationDelay: '1.5s' }}>
                <Code className="h-6 w-6 text-accent mb-1" />
                <div className="text-xs text-muted-foreground">Backend Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;