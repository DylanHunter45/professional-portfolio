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
        </div>
      </section>
    );
  }
}

export default Home;
