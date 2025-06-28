import React from "react";
import { Code, Database, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SASS",
      ],
      color: "purple",
    },
    {
      title: "Back-end",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
      ],
      color: "blue",
    },
    {
      title: "Tools & Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "Git", "Vercel", "Netlify", "Docker", "AWS"],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-500/20 bg-purple-500/10 text-purple-300",
      blue: "border-blue-500/20 bg-blue-500/10 text-blue-300",
      green: "border-green-500/20 bg-green-500/10 text-green-300",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-lg ${getColorClasses(category.color)}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`border rounded-lg px-3 py-2 text-center font-medium transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and staying up-to-date
              with the latest trends in web development to deliver cutting-edge
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-800/50 border border-gray-600 text-gray-300 px-4 py-2 rounded-full">
                Three.js
              </span>
              <span className="bg-gray-800/50 border border-gray-600 text-gray-300 px-4 py-2 rounded-full">
                WebGL
              </span>
              <span className="bg-gray-800/50 border border-gray-600 text-gray-300 px-4 py-2 rounded-full">
                AI/ML Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
