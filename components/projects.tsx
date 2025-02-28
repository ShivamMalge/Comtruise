import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Neural Image Classifier",
      description: "A deep learning model that classifies images with 98% accuracy using a custom CNN architecture.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-vTFqqGMnCQPPk1BqB6xrXcvhKEJDzM.webp",
      tags: ["Computer Vision", "TensorFlow", "CNN"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Real-time sentiment analysis of text using transformer-based models with multilingual support.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-yuzwYaKLEiHD6lKKVw2rXIsKE2KH74.jpeg",
      tags: ["NLP", "PyTorch", "BERT"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for time-series forecasting of business metrics with anomaly detection.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-9r1Z7mHvX3MUERa3g7avuJIveG2gzg.jpeg",
      tags: ["Time Series", "Prophet", "Streamlit"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Recommendation Engine",
      description:
        "Collaborative filtering system for product recommendations with real-time user preference learning.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-vAJbIvBMchybJNb75sjVnl1yFyOaWg.jpeg",
      tags: ["Recommender Systems", "PySpark", "MLlib"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Autonomous Agent Framework",
      description:
        "A framework for building autonomous agents that can learn from their environment and make decisions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-ZTQtLLZaZsiNuTUU3b2g199yqbwwaM.jpeg",
      tags: ["Reinforcement Learning", "PyTorch", "Gym"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "MLOps Pipeline Automation",
      description: "End-to-end MLOps pipeline for continuous training, evaluation, and deployment of ML models.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-hr8wrlVZbeNd4eLTQCVYUBAIHAdgiq.png",
      tags: ["MLOps", "Kubernetes", "Kubeflow"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-center max-w-3xl text-muted-foreground">
            A selection of my machine learning and data science projects. Each project demonstrates different aspects of
            my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

