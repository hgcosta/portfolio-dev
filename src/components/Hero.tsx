import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hugo
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Costa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Front-end & Fullstack Developer crafting beautiful, performant web
            experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center gap-2">
            See my work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-full font-medium transition-all duration-300">
            Download CV
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
