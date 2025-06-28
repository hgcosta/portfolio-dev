import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "O Que Faz Bem",
      url: "oqfazbem.com.br",
      description:
        "Responsive wellness platform focused on SEO optimization and performance with modern UI design",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Next.js", "SEO"],
    },
    {
      name: "Light Design",
      url: "lightdesign.com.br",
      description:
        "Creative design agency website with stunning animations and portfolio showcase",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Animations", "Portfolio"],
    },
    {
      name: "Nue Superfícies",
      url: "nuesuperficies.com.br",
      description:
        "Industrial surfaces company website with product catalog and contact integration",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "E-commerce", "Catalog"],
    },
    {
      name: "REC Produtores",
      url: "recprodutores.com.br",
      description:
        "Music producers network platform with audio integration and artist profiles",
      image:
        "https://images.pexels.com/photos/1201694/pexels-photo-1201694.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Audio", "Network"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and
            design approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Site
                  </a>
                  <button className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-4 py-2 rounded-lg font-medium transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
