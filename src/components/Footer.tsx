import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Hugo Costa</h3>
            <p className="text-gray-400">Front-end & Fullstack Developer</p>
          </div>

          <div className="flex gap-6">
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

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> by
            Hugo Costa © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
