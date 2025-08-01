import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "A modern dashboard with dark mode, real-time charts, and responsive design",
    image: "/nexus.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/your-username/ecommerce-dashboard",
    live: "https://business-nexus-production-5ee7.up.railway.app/",
  },
  {
    title: "Social Media App",
    description:
      "Full-featured social  platform with real-time messaging and notifications",
    image: "/img.png",
    tags: ["Next.js", "Socket.io", "Prisma", "TailwindCSS"],
    github: "https://github.com/your-username/social-media-app",
    live: "https://your-live-site.com/social",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-5 gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
