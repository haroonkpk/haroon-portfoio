import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      title: "MERN Stack Expertise",
      description:
        "Specialized in building full-stack apps using MongoDB, Express, React, and Node.js with a strong emphasis on performance and scalability.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v16h16V4H4zm4 4h8v8H8V8z"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Focused Development",
      description:
        "Designing fluid interfaces using Tailwind CSS and Framer Motion to ensure responsive, accessible, and delightful user experiences.",
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Applications",
      description:
        "Integrating real-time features with Socket.io for chat, live updates, and collaborative tools to create dynamic web apps.",
      icon: (
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17H4l1.405-1.405A2.032 2.032 0 006 14.158V11a6 6 0 015-5.917"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 mt-40 px-4 bg-transparent ">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold  mb-12"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
        >
          I'm <span className="text-white font-medium">Haroon</span>, a
          full-stack developer who turns ideas into fast, reliable, and
          beautifully crafted web applications. With a passion for smooth
          interfaces and real-time functionality, I bridge design and logic to
          deliver digital impact.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="border border-gray-700 bg-[#0B1120]/60 p-6 rounded-lg hover:scale-[1.02] transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
