import React from "react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-white">
          Technical <span className="text-[#C44E52]">Expertise</span>
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
                { name: "Web Animations", level: 75 },
              ],
              icon: "🎨",
              color: "from-[#F4A21E] to-orange-500",
            },
            {
              category: "Backend & APIs",
              skills: [
                { name: "Node.js & Express", level: 90 },
                { name: "REST APIs & Auth", level: 95 },
                { name: "MongoDB & Mongoose", level: 88 },
                { name: "JWT & Bcrypt", level: 88 },
                { name: "File Upload", level: 85 },
              ],
              icon: "⚡",
              color: "from-[#C44E52] to-red-700",
            },
            {
              category: "Performance & DevOps",
              skills: [
                { name: "Git & GitHub", level: 92 },
                { name: "Postman & API Testing", level: 88 },
                { name: "CI/CD Deployment", level: 85 },
                { name: "VS Code & DevTools", level: 90 },
              ],
              icon: "🚀",
              color: "from-[#F4A21E] to-[#C44E52]",
            },
          ].map((category) => (
            <div
              key={category.category}
              className="border h-fit border-[#F4A21E]/20 bg-white/5 backdrop-blur-sm rounded-4xl p-6 z-10 transform hover:scale-[1.02] hover:border-[#C44E52] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-[#F4A21E] font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="hidden lg:flex justify-center relative">
            <div className="h-52 border border-[#F4A21E]/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#282a57] via-[#282a57]/40 to-transparent" />
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="absolute top-[-50px] h-62 border border-[#F4A21E]/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#282a57] via-[#282a57]/40 to-transparent" />
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="absolute top-[-100px] h-72 border border-[#F4A21E]/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#282a57] via-[#282a57]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
