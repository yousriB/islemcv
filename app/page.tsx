"use client"

import { useState, useEffect } from "react"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Github,
  Menu,
  X,
  Code,
  Cloud,
  Settings,
  Briefcase,
  User,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">HB</span>
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "features", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "resume", label: "Resume", icon: Settings },
                { id: "contact", label: "Contact", icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
              <div className="px-6 py-4 space-y-4">
                {[
                  { id: "home", label: "Home", icon: User },
                  { id: "features", label: "Skills", icon: Code },
                  { id: "projects", label: "Projects", icon: Briefcase },
                  { id: "resume", label: "Resume", icon: Settings },
                  { id: "contact", label: "Contact", icon: MessageCircle },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wider uppercase text-sm">Welcome to my world</p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary">Mohamed Hedi</span>
                  <br />
                  <span className="text-muted-foreground">DevOps Engineer</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                DevOps engineer with a degree in computer science, passionate about system administration, deployment
                automation, and cloud management. Driven by the optimization of operations and business scalability,
                committed to continuous learning and staying at the forefront of this ever-evolving field.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/Med-hedi-bra" },
                  { icon: Linkedin, href: "https://linkedin.com/in/mohamedbra99" },
                ].map(({ icon: Icon, href }, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 bg-transparent"
                    onClick={() => window.open(href, "_blank")}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
                    <img
                      src="/bearded-man-cardigan.png"
                      alt="Mohamed Hedi Bra - Professional Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-80 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">What I Do</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized in modern DevOps practices and cloud technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Platforms",
                description:
                  "Expert in AWS, GCP, and Scaleway cloud platforms with hands-on experience in resource management and deployment automation.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Settings,
                title: "DevOps & Automation",
                description:
                  "Proficient in Ansible, Terraform, Pulumi, and Packer for infrastructure automation and configuration management.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Code,
                title: "Container Orchestration",
                description:
                  "Kubernetes expert with Helm, FluxCD, ArgoCD experience. Docker containerization and private registry management.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">My Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my latest work in DevOps and cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Microservices",
                description:
                  "Spring Boot microservices with Kafka event-driven architecture, Keycloak auth, and distributed tracing using Zipkin.",
                gradient: "from-orange-500 to-red-500",
                tech: ["Spring Boot", "Kafka", "Keycloak", "Docker"],
              },
              {
                title: "Kubernetes GitOps Workflow",
                description:
                  "Implemented GitOps workflow with ArgoCD and Helm charts for application deployment with Keycloak secure access.",
                gradient: "from-blue-500 to-purple-500",
                tech: ["ArgoCD", "Helm", "Kubernetes", "Keycloak"],
              },
              {
                title: "Security Audit Tool",
                description:
                  "Django REST API tool integrating Nmap and OWASP ZAP for automated vulnerability scans and security reporting.",
                gradient: "from-green-500 to-teal-500",
                tech: ["Django", "Docker", "OWASP ZAP", "PostgreSQL"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">7+ Years Experience</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my professional growth and educational background
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground text-sm">🎓</span>
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {[
                  {
                    degree: "Software Engineer",
                    school: "Higher Institute of Applied Sciences and Technology of Sousse",
                    period: "2021 - 2024",
                    grade: "Graduate",
                    description:
                      "Comprehensive software engineering program covering system design, programming, and modern development practices.",
                  },
                  {
                    degree: "Preparatory Cycle",
                    school: "Higher Institute of Applied Sciences and Technology of Sousse",
                    period: "2019 - 2021",
                    grade: "Completed",
                    description:
                      "Foundation in mathematics, physics, and computer science preparing for engineering studies.",
                  },
                ].map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <p className="text-muted-foreground">
                            {edu.school} • {edu.period}
                          </p>
                        </div>
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground text-sm">💼</span>
                </div>
                Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    role: "DevOps Engineer",
                    company: "Comwork.io",
                    period: "May 2024 - Present",
                    status: "Current",
                    statusColor: "bg-green-500",
                    description:
                      "Streamline Linux server administration with Ansible, maintain CI/CD pipelines, deploy Kubernetes applications with Helm and FluxCD, and implement GitOps workflows with ArgoCD.",
                  },
                  {
                    role: "Backend Developer Intern",
                    company: "Numeryx Tunisie",
                    period: "February - April 2024",
                    status: "3 Months",
                    statusColor: "bg-blue-500",
                    description:
                      "Developed audit tool automating pentester tasks, integrated Nmap and OWASP ZAP for vulnerability scans, configured automated Docker container deployment.",
                  },
                  {
                    role: "Full Stack Developer Intern",
                    company: "National Center for Cinema and Image",
                    period: "July - August 2023",
                    status: "2 Months",
                    statusColor: "bg-purple-500",
                    description:
                      "Developed film shooting management platform using ReactJs and NodeJs, managed version control with AWS CodeCommit, deployed frontend using AWS Amplify.",
                  },
                ].map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold">{exp.role}</h4>
                          <p className="text-muted-foreground">
                            {exp.company} • {exp.period}
                          </p>
                        </div>
                        <span className={`${exp.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="h-5 w-5 mr-2" />
              Download Full Resume
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss your next project? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">👋</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mohamed Hedi Bra</h3>
                    <p className="text-muted-foreground">
                      DevOps Engineer passionate about cloud infrastructure and automation. Let's discuss your next
                      project!
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: Phone, label: "+216-29-716-221", href: "tel:+21629716221" },
                      { icon: Mail, label: "mohamedhedibra8@gmail.com", href: "mailto:mohamedhedibra8@gmail.com" },
                      { icon: MapPin, label: "Sousse, Tunisia", href: "#" },
                    ].map(({ icon: Icon, label, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <span className="font-medium">{label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 font-medium">Connect with me</p>
                    <div className="flex space-x-3">
                      {[
                        { icon: Github, href: "https://github.com/Med-hedi-bra" },
                        { icon: Linkedin, href: "https://linkedin.com/in/mohamedbra99" },
                      ].map(({ icon: Icon, href }, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 bg-transparent"
                          onClick={() => window.open(href, "_blank")}
                        >
                          <Icon className="h-5 w-5" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Mohamed Hedi Bra. All rights reserved. Built with ❤️ using Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
