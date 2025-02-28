import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, LineChart, Microscope, Server } from "lucide-react"

export default function About() {
  const skills = [
    { name: "Python", category: "Languages" },
    { name: "TensorFlow", category: "ML Frameworks" },
    { name: "PyTorch", category: "ML Frameworks" },
    { name: "Scikit-Learn", category: "ML Libraries" },
    { name: "Computer Vision", category: "Specialization" },
    { name: "NLP", category: "Specialization" },
    { name: "Deep Learning", category: "Specialization" },
    { name: "Data Visualization", category: "Data Science" },
    { name: "SQL", category: "Databases" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "MLOps", category: "Operations" },
  ]

  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "TechCorp AI",
      period: "2021 - Present",
      description:
        "Leading the development of computer vision models for autonomous systems. Improved model accuracy by 35% and reduced inference time by 50%.",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "ML Engineer",
      company: "DataSense Inc.",
      period: "2018 - 2021",
      description:
        "Developed NLP models for sentiment analysis and text classification. Built end-to-end ML pipelines and deployed models to production.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "Data Scientist",
      company: "Analytics Pro",
      period: "2016 - 2018",
      description:
        "Analyzed large datasets to extract insights and build predictive models. Created dashboards and visualizations for business stakeholders.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            I'm a passionate Machine Learning Engineer with over 7 years of experience building intelligent systems that
            solve real-world problems. My expertise spans across computer vision, natural language processing, and deep
            learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Microscope className="mr-2 h-6 w-6" /> My Background
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a Master's degree in Computer Science specializing in Machine Learning, I've dedicated my career to
                pushing the boundaries of AI technology.
              </p>
              <p>
                I've worked on projects ranging from computer vision systems for autonomous vehicles to NLP models for
                content moderation and recommendation engines.
              </p>
              <p>
                My approach combines strong theoretical foundations with practical implementation skills, allowing me to
                take ML projects from research to production.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Database className="mr-2 h-6 w-6" /> Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm py-1">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
          <Server className="mr-2 h-6 w-6" /> Work Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="pt-6">
                <div className="mb-4">{exp.icon}</div>
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

