"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const languagesRef = useRef<
    Array<{
      logo: string
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      image?: HTMLImageElement
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const technologies = [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    ]

    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initTechnologies = () => {
      languagesRef.current = technologies.map((tech) => {
        const image = new Image()
        image.crossOrigin = "anonymous"
        image.src = tech.logo

        return {
          logo: tech.name,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 20 + 25,
          opacity: Math.random() * 0.4 + 0.2,
          image: image,
        }
      })
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      languagesRef.current.forEach((tech) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - tech.x
        const dy = mouseRef.current.y - tech.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Mouse influence
        if (distance < 150) {
          const force = (150 - distance) / 150
          tech.vx += (dx / distance) * force * 0.02
          tech.vy += (dy / distance) * force * 0.02
          tech.opacity = Math.min(0.8, tech.opacity + force * 0.01)
        } else {
          tech.opacity = Math.max(0.2, tech.opacity - 0.005)
        }

        // Update position
        tech.x += tech.vx
        tech.y += tech.vy

        // Friction
        tech.vx *= 0.98
        tech.vy *= 0.98

        // Boundary collision
        if (tech.x < 0 || tech.x > canvas.width) tech.vx *= -1
        if (tech.y < 0 || tech.y > canvas.height) tech.vy *= -1

        // Keep within bounds
        tech.x = Math.max(0, Math.min(canvas.width, tech.x))
        tech.y = Math.max(0, Math.min(canvas.height, tech.y))

        if (tech.image && tech.image.complete) {
          ctx.save()
          ctx.globalAlpha = tech.opacity
          ctx.drawImage(tech.image, tech.x - tech.size / 2, tech.y - tech.size / 2, tech.size, tech.size)
          ctx.restore()
        }
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    initTechnologies()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
