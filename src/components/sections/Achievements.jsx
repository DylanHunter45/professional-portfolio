import React, { Component } from "react";
import { FaFilePdf } from "react-icons/fa6";

export class Achievements extends Component {
  render() {
    return (
      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            My Achievements 🏆
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
            <p className="text-gray-300 text-xl">
              <strong>Work Achievements 💼</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all w-150">
                <h3 className="text-xl font-bold mb-4">
                  Management Sector Moving Markers Award 2024
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Prize granted by mangement to recognize employees who
                    exeeded project expectations and milestones.
                  </li>
                  <a
                    href="./Moving_Markers_Award.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-right text-red-500"
                  >
                    <FaFilePdf size={26} />
                  </a>
                </ul>
              </div>
              <p className="text-gray-300 text-xl">
                <strong>Schools Achievements 🏫</strong>
              </p>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
                <h3 className="text-xl font-bold mb-4">Dean's Honours List</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Achieved an average GPA of 3.8/4.0 during my studies.
                    Achieved a letter for each semester
                  </li>
                  <a
                    href="./Deans_Honour_All.PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-right text-red-500"
                  >
                    <FaFilePdf size={26} />
                  </a>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Award winner at Re/Action Applied Research Showcase
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Awarded 3rd place in a province-wide Ontario project
                    competition for developing an AI-based Brand Recognition
                    system.
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

export default Achievements;
