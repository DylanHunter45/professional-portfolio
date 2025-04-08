import React, { Component } from "react";
//from-blue-500 to-purple-500 bg-clip-text text-transparent <- for gradient text

export class Home extends Component {
  render() {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center x-10 px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r  leading-right">
            Hello, my name is Dylan Hunter.
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I like stuff and things.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              My Projects
            </a>
            <a
              href="#achievements"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              My Achievements
            </a>
            <a
              href="#contacts"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-05 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
