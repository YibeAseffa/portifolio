import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <p className="mt-4 text-center max-w-3xl mx-auto">
        I am a passionate Full-Stack Web Developer with a background in Computer
        Engineering. With experience in both front-end and back-end development,
        I specialize in the MERN stack, AI, and responsive design.
      </p>
      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold">Education</h3>
        <p>Bachelor’s in Computer Engineering - Bahir Dar University</p>

        <h3 className="text-xl font-semibold mt-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            React
          </span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Node.js
          </span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            MongoDB
          </span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
