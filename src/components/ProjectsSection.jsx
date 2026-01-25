import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Business-Nexus",
    description:
      "A modern networking app that helps entrepreneurs and investors connect, chat, and collaborate in real time.",
    image: "/nexus.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    github: "https://github.com/your-username/ecommerce-dashboard",
    live: "https://business-nexus-production-5ee7.up.railway.app/",
  },
  {
    title: "StoryHub app",
    description:
      "A storytelling platform where users can explore story types, read episodes, and manage stories via an admin panel.",
    image: "/storyapp1.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Axios",
    ],
    github: "https://www.github.com/haroonkpk/storyHub-app",
    live: "https://www.github.com/haroonkpk/storyHub-app",
  },
  {
    title: "E-commerce marketplace",
    description:
      "A full-featured e-commerce marketplace with product listings, user authentication, admin dashboard and cart system",
    image: "/brand.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Axios",
      "Cloudinary",
    ],
    github: "https://github.com/haroonkpk/fullstack-ecommerce-marketplace",
    live: "https://github.com/haroonkpk/fullstack-ecommerce-marketplace",
  },
  {
    title: "chat application",
    description:
      "A real-time chat application with user authentication, online status tracking, and private messaging using Socket.io and MERN stack.",
    image: "/chatapp.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "daisyUi",
      "JWT",
      "Axios",
      "Cloudinary",
    ],
    github: "https://github.com/haroonkpk/chatapp",
    live: "https://github.com/haroonkpk/chatapp",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Featured <span className="text-[#C44E52]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 rounded-4xl overflow-hidden backdrop-blur-sm border border-[#F4A21E]/20 hover:border-[#C44E52] transition-colors duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282a57] via-[#282a57]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#F4A21E] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap mb-10 gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#282a57] border border-[#F4A21E]/20 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#C44E52] transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F4A21E] transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 'For More' Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-18 animate-bounce">
          <a
            href="http://www.github.com/haroonkpk"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C44E52] to-[#F4A21E] text-white rounded-3xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#C44E52]/20"
          >
            For more View GitHub
            <ExternalLink size={21} />
          </a>
        </div>
      </div>
    </section>
  );
}
