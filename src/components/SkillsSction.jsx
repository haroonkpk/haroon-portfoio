import React from "react";
import { motion } from "framer-motion";
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Technical <span className="text-purple-400">Expertise</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-0 lg:gap-x-4 sm:gap-x-8">
          {[
            {
              category: "Frontend Development",
              skills: [
                { name: "React & Next.js", level: 95 },
                { name: "JavaScript (ES6+)", level: 90 },
                { name: "Zustand & State Mgmt", level: 85 },
                { name: "CSS3 & Tailwind CSS", level: 95 },
                { name: "Web Animations (Framer, GSAP)", level: 75 },
              ],
              icon: "🎨",
              color: "from-blue-500 to-blue-700",
            },
            {
              category: "Backend & APIs",
              skills: [
                { name: "Node.js & Express", level: 90 },
                { name: "REST APIs & Auth", level: 95 },
                { name: "MongoDB & Mongoose", level: 88 },
                { name: "JWT & Bcrypt", level: 88 },
                { name: "File Upload (Cloudinary)", level: 85 },
              ],
              icon: "⚡",
              color: "from-green-500 to-green-700",
            },
            {
              category: "Performance & DevOps",
              skills: [
                { name: "Git & GitHub", level: 92 },
                { name: "Postman & API Testing", level: 88 },
                { name: "CI/CD (Render, Railway, Vercel, Netlify)", level: 85 },
                { name: "VS Code & DevTools", level: 90 },
              ],
              icon: "🚀",
              color: "from-purple-500 to-purple-700",
            },
          ].map((category) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              key={category.category}
              className="border h-fit border-gray-700 rounded-lg p-6 z-10 bg-[#101828] transform hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="h-52 border  border-gray-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="absolute top-[-50px] h-62 border  border-gray-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="absolute top-[-100px] h-72 border border-gray-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
