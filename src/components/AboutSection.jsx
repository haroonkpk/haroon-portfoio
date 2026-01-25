import React from "react";

export default function AboutSection() {
  const features = [
    {
      title: "MERN Stack Expertise",
      description:
        "Specialized in building full-stack apps using MongoDB, Express, React, and Node.js with a strong emphasis on performance and scalability.",
      icon: (
        <svg className="w-6 h-6 text-[#F4A21E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Focused Development",
      description:
        "Designing fluid interfaces using Tailwind CSS to ensure responsive, accessible, and delightful user experiences.",
      icon: (
        <svg className="w-6 h-6 text-[#C44E52]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      title: "Real-Time Applications",
      description:
        "Integrating real-time features with Socket.io for chat, live updates, and collaborative tools to create dynamic web apps.",
      icon: (
        <svg className="w-6 h-6 text-[#F4A21E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H4l1.405-1.405A2.032 2.032 0 006 14.158V11a6 6 0 015-5.917" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 md:mt-40 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          About <span className="text-[#C44E52]">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          I'm <span className="text-[#F4A21E] font-medium">Haroon</span>, a
          full-stack developer who turns ideas into fast, reliable, and
          beautifully crafted web applications. With a passion for smooth
          interfaces and real-time functionality, I bridge design and logic to
          deliver digital impact.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[#F4A21E]/20 bg-white/5 backdrop-blur-sm p-6 rounded-4xl hover:border-[#C44E52] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#282a57]/50"
            >
              <div className="mb-4 bg-white/10 w-fit p-3 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}