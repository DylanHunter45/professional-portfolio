import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Personal Projects 🧑‍💻
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Mug and Bean </h3>
              <p className="text-gray-400 mb-4">
                A coffee themed website for caffeine lovers. A personal project
                dedicated to logging monthly beans and cups a coffee.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Node.js", "Express.js", "Firebase"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/DylanHunter45/mugandbean"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colours my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> LeetCode Notifier </h3>
              <p className="text-gray-400 mb-4">
                Project dedicated to connecting with a LeetCode API that will
                get the daily problem as well as a seperate section for querying
                all LeetCode problems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Vite",
                  "Node.js",
                  "Express.js",
                  "APIs",
                  "Firebase",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-red-400 hover:text-red-300 transition-colours my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Gmail inbox sorter </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                A python based projects that can be used to remove the
                disgusting clutter in your inbox. Full tutorial from cloning
                project to inbox cleaning is provided in the .md file on GitHub.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Gmail API", "Gmail POP/IMAP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colours my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Discord Bot: JackBot </h3>
              <p className="text-gray-400 mb-4">
                Daily coin based discord bot with gambling style game features
                to earn coins and redeem custom rewards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "SQLite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/DylanHunter45/JackBot"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colours my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
