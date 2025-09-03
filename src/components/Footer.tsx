import { Github, Linkedin, Mail, Code, Heart } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Raghav Kwatra
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am trying with AI automation with n8n and i have some
                experience in java devlopment. currently shifting towards AI/ML
                and React.js
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:rkwatra454@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  rkwatra454@gmail.com
                </a>
                <a
                  href="tel:+916284361688"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="h-4 w-4 text-center">📞</span>
                  +91 6284361688
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/raghavkwatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/raghavkwatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://leetcode.com/u/raghavkwatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Raghav Kwatra. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
