import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 85, category: "Language" },
    { name: "JavaScript", level: 75, category: "Language" },
    { name: "HTML & CSS", level: 85, category: "Language" },
    { name: "Django", level: 80, category: "Framework" },
    { name: "React.js", level: 70, category: "Framework" },
    { name: "Bootstrap", level: 75, category: "Libraries" },
    { name: "MySQL", level: 70, category: "Database" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "Vite", level: 70, category: "Tools" },
    { name: "Django Admin", level: 75, category: "Tools" },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Time Management",
    "Inventory Management",
    "Logistics Coordination",
  ]

  const categories = ["Language", "Framework", "Libraries", "Database", "Tools"]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technical skills gained through hands-on learning and professional experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3 text-primary">{category}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {technicalSkills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <li key={skill.name} className="font-medium">{skill.name}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills & Experience */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Learning Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Python Full Stack Development</h4>
                    <p className="text-sm text-muted-foreground">FITA Academy • 2025</p>
                    <p className="text-sm mt-1">
                      Comprehensive training in Python Django framework, web development, and database management.
                    </p>
                  </div>
                  <div className="border-l-4 border-muted pl-4">
                    <h4 className="font-semibold">Bachelor of Computer Application</h4>
                    <p className="text-sm text-muted-foreground">Manonmaniya Sundaranar University • 2019-2022</p>
                    <p className="text-sm mt-1">
                      Foundation in computer science, programming concepts, and software development principles.
                    </p>
                  </div>
                  <div className="border-l-4 border-muted pl-4">
                    <h4 className="font-semibold">Operations Management</h4>
                    <p className="text-sm text-muted-foreground">Hind Carriers Pvt. Ltd • Oct 2022 - Feb 2025</p>
                    <p className="text-sm mt-1">
                      Developed analytical thinking, process optimization, and cross-functional collaboration skills.
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
