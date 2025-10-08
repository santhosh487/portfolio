import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Developed an e-commerce website using Django, Python, and MySQL to manage products, users, and orders. Created a user-friendly frontend with JavaScript, HTML, and CSS, and connected it to the backend for smooth operation. Added basic features like user login, product browsing, and shopping cart for easy shopping.",
      image: "/modern-e-commerce-website-interface-with-product-g.jpg",
      technologies: ["Django", "Python", "MySQL", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/santhosh487/Ecommerce-project",
      status: "Completed",
    },
    
    {
      title: "Zomato",
      description:
        "Creating an HTML and CSS template that resembles Zomato's website design involves structuring the content with HTML and styling it with CSS to replicate its visual elements and layout.",
      image: "/zom.png",
      technologies: ["HTML", "CSS",],
      github: "https://github.com/santhosh487/zomato",
      status: "In Progress",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Planning":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my Django development skills and problem-solving approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>{project.status}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
