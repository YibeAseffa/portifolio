import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold">Yibeltal Aseffa</h1>
      <p className="text-lg md:text-2xl mt-4">
        Full-Stack Web Developer | MERN Stack Enthusiast
      </p>
      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg mr-4"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-green-500 text-white rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
