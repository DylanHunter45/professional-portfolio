import React, { Component } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
//from-blue-500 to-purple-500 bg-clip-text text-transparent <- for gradient text
//https://uiverse.io/                                       <- for ui
//https://www.reactbits.dev/                                <- for ui + ux

export class Home extends Component {
  render() {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center x-10 px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r leading-right">
            Dylan Hunter
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-6xl mx-auto">
            Software Engineer passionate about building scalable systems, clean
            code, and innovative tech. Experienced in back-end development, RPA
            Development, and turning ideas into production-ready software.
            <br />
            <br />
            Click through the main sections of my profile below of scroll
            through my portfolio to learn more about me! 😀
          </p>
          <div className="flex justify-center space-x-4 pb-10">
            <a
              href="#projects"
              className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              My Projects
            </a>
            <a
              href="#achievements"
              className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              My Achievements
            </a>
            <a
              href="#contact"
              className="border border-blue-700/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center mt-10 animate-bounce text-gray-500">
            <HiChevronDoubleDown size={50} />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
