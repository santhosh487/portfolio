import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey from logistics operations to full stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">My Story</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Motivated Full-Stack Developer with primary focus on specializing in Django (Python), with intermediate
                experience using JavaScript, HTML, and CSS. I have practical experience through project work from my BCA
                degree and recent training at FITA Academy.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                I have experience building web applications that are robust, scalable, built with clean and efficient
                code, and learn new technologies quickly. I want to use my years of technical experience to help build
                collaborative problem solving as part of innovative development projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">2+ Years</p>
                  <p className="text-sm text-muted-foreground">Operations Executive</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">2025 Graduate</p>
                  <p className="text-sm text-muted-foreground">Python Full Stack</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right side - Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Ponneri, Chennai - 601 204</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Available for immediate opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>Open to remote and hybrid work</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Background</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Operations Executive</h5>
                    <p className="text-sm text-muted-foreground">Hind Carriers Pvt. Ltd • Oct 2022 - Feb 2025</p>
                    <p className="text-sm mt-1">
                      Oversaw all logistics activities from start to finish, encompassing inventory management,
                      scheduling, and dispatching, to meet deadlines and cut costs. Partnered with team members to work
                      towards more streamlined workflows.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium">Python Full Stack Developer</h5>
                    <p className="text-sm text-muted-foreground">FITA Academy • 2025</p>
                    <p className="text-sm mt-1">
                      Completed comprehensive training in Python Django framework, web development, and database
                      management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
