import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.live",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates using OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://yourweatherapp.live",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack e-commerce site with product listing, cart, and checkout.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://myecommercestore.live",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with authentication and markdown support.",
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://myblogplatform.live",
  },
  {
    title: "Chat App",
    description: "Real-time chat app with WebSocket and private messaging support.",
    tech: ["Socket.io", "Node.js", "React", "Express"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://mychatapp.live",
  },
  {
    title: "Task Manager",
    description: "Task tracking tool with drag-and-drop functionality and status filters.",
    tech: ["React", "Redux", "Tailwind", "Firebase"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://mytaskmanager.live",
  },
];

const Project = () => {
  return (
    <section id="projects" className="min-h-screen bg-black pt-[100px]">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
      className="text-5xl lg:text-[70px] leading-tight font-semibold 
        lg:leading-[1.5] max-w-[60ch] text-center mx-auto mb-10"
      style={{
        background: "linear-gradient(0deg, #ffff, violet, #7e22ce)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-xl"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-xl"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;