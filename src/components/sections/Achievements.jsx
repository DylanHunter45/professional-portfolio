import React, { Component } from "react";

export class Achievements extends Component {
  render() {
    return (
      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Achievements section title</p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all w-150">
                <h3 className="text-xl font-bold mb-4"> Achievement 1 </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>point 1</li>
                  <li>point 2</li>
                  <li>point 3</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Achievement 1 </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>point 1</li>
                  <li>point 2</li>
                  <li>point 3</li>
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
