import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import VantaBackground from "@/components/VantaBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ScrollAnimator>
        <About />
      </ScrollAnimator>
      <ScrollAnimator>
        <Experience />
      </ScrollAnimator>
      <ScrollAnimator>
        <Projects />
      </ScrollAnimator>
      <ScrollAnimator>
        <Education />
      </ScrollAnimator>
      {/* <Skills /> */}
      <ScrollAnimator>
        <Contact />
      </ScrollAnimator>
      <Footer />
      <VantaBackground />
    </div>
  );
};

export default Index;
