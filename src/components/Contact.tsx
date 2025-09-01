import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Send,
} from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:rkwatra454@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "rkwatra454@gmail.com",
      link: "mailto:rkwatra454@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 6284361688",
      link: "tel:+916284361688",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      username: "@raghavkwatra",
      link: "https://github.com/raghavkwatra",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      username: "@raghavkwatra",
      link: "https://linkedin.com/in/raghavkwatra",
      color: "hover:text-blue-400",
    },
    {
      icon: <LeetCodeIcon className="h-6 w-6" />,
      title: "LeetCode",
      username: "@raghavkwatra",
      link: "https://leetcode.com/u/raghavkwatra/",
      color: "hover:stroke-orange-400",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss opportunities and build something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question about my work,
                want to discuss a potential opportunity, or just want to say
                hello, I'd love to hear from you!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-accent">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-accent">Find me on</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass p-3 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.title}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="font-medium">{social.title}:</span>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {social.username}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-border focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                This form will open your default email client with the message
                pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
