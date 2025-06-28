import React from "react";
import { Code, Palette, Server, Zap } from "lucide-react";

const About = () => {
  const technologies = [
    { name: "React", color: "text-blue-400" },
    { name: "Next.js", color: "text-white" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "HTML", color: "text-orange-400" },
    { name: "CSS", color: "text-blue-300" },
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Front-end Excellence",
      description: "Modern React applications with beautiful UI/UX",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design-focused",
      description: "Pixel-perfect implementations with attention to detail",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Full-stack Ready",
      description: "Backend development with Node.js and APIs",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Driven",
      description: "Optimized, fast-loading web applications",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate front-end developer with a strong foundation in
            UI/UX design and full-stack development. I specialize in creating
            modern, responsive web applications using cutting-edge technologies
            like React and Next.js, while also having expertise in backend
            development with Node.js and API integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 hover:bg-gray-800/70 transition-all duration-300 hover:scale-110"
              >
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
