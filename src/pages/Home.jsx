import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mb-4 drop-shadow-lg">
        Hi, I'm Vivek Reddy
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-6">
        Data Scientist & Analyst. I turn raw data into clear, actionable insights
        using Python, ML, and storytelling dashboards.
      </p>
      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
