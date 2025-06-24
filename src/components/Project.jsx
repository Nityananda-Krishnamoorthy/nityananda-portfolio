import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Nityananda-Krishnamoorthy/nityananda-portfolio.git",
    live: "https://nityananda-portfolio.vercel.app",
  },
  {
    title: "Gemini-Clone",
    description: "Gemini Clone is a React web app powered by Google’s Gemini Pro API",
    tech: ["React", "Google API", "JavaScript", "Tailwind" , "CSS"],
    github: "https://github.com/Nityananda-Krishnamoorthy/Gemini-Clone.git",
    live: "https://gemini-clone-nityananda.vercel.app/",
  },
  {
    title: "Admin-Dashboard",
    description: "A responsive admin panel with charts, product management, and analytics.",
    tech: ["React", "Material UI", "Redux", "JavaScript"],
    github: "https://github.com/Nityananda-Krishnamoorthy/Admin-Dashboard.git",
    live: "https://admin-dashboard-seven-zeta-30.vercel.app/dashboard",
  },
  {
    title: "EduVision-XR",
    description: "An AR-powered educational platform for interactive learning.",
    tech: ["React", "TypeScript", "Tailwind", "AR", "API"],
    github: "https://github.com/Nityananda-Krishnamoorthy/EduVision-XR.git",
    live: "https://sher-ar-edu-system.vercel.app",
  },
  {
    title: "Sorting Visualizer",
    description: "Sorting Visualizer is a web app to visualize sorting algorithms in action.",
    tech: ["HTML", "CSS", "SCSS", "JavaScript"],
    github: "https://github.com/Nityananda-Krishnamoorthy/SortingVisualizer.git",
    live: "https://sorting-visualizer-nityananda.vercel.app/",
  },
  {
    title: "Task Manager",
    description: "ToDo app built with MERN stack and CRUD Operations.",
    tech: ["React", "MongoDB", "Tailwind", "Node.js", "Express"],
    github: "https://github.com/Nityananda-Krishnamoorthy/MERN-ToDo-App.git",
    live: "https://mern-todo-app-vpi6.onrender.com/",
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
