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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0,0,256,256"
          className="h-6 w-6 hover:stroke-orange-400f"
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
      ),
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
