import React, { Component } from "react";

import { FaFilePdf } from "react-icons/fa6";
//add skills manually whenever new skills are learned
const backendSkills = [
  "Python",
  "C#",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "MySQL",
  "ASP .NET",
  "Django",
  "Nodejs",
  "PHP",
  "Git",
  "Dart",
];
const frontendSkills = ["Flutter", "React", "Vue", "JavaScript", "TailwindCSS"];

export class About extends Component {
  render() {
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
            <p className="text-gray-300 mb-6">
              I'm a software developer with 3 years of professional experience
              with a strong focus on backend development, specializing in
              building scalable, efficient, and secure systems. I enjoy working
              behind the scenes to design robust APIs, manage databases, and
              optimize performance to bring complex applications to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
                <h3 className="text-xl font-bold mb-4"> My Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Software Developer / IT Analyst at Justice Canada | Sep.
                      2022 - Present <br></br>
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Junior Programmer - Internship at Justice Canada | May
                      2022 - Sep. 2022
                    </h4>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      IT Security Practitioner - Internship at Global Affairs
                      Canada | Sep. 2021 - Dec. 2021
                    </h4>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
                <h3 className="text-xl font-bold mb-4"> My Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Disploma in Computer Engineering </strong> -
                    Algonquin College (2020 - 2024)
                  </li>
                  <li>
                    <strong> 3.8/4.0 GPA</strong>
                  </li>
                  <li>
                    Recieved Applied Research Showcase Award for Ai Brand
                    Recognition Machine Learning Capstone Project.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
