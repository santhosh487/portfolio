"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-balance">Santhosh S</h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary text-balance">Web Developer</h2>
              <p className="text-xl text-muted-foreground max-w-lg text-pretty">
                Motivated Full-Stack Developer specializing in Django (Python) with experience in JavaScript, HTML, and
                CSS. Transitioning from 2+ years in logistics operations to build robust, scalable web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/santhoshsunderraj" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:santhoshsunderraj25@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20">
                <img
                  src="\my-image2.jpeg" 
                  alt="Santhosh - Web Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  style={{ transform: 'scale(1.2, 1.3, 1.5)' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")}>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
