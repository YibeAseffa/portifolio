import React from "react";

const projects = [
  {
    title: "UI Kits for Airbnb-style Site",
    description:
      "Designed and developed pixel-perfect UI kits for a rental platform.",
  },
  {
    title: "Chat UI Kit",
    description:
      "Built an interactive and responsive chat UI using Tailwind CSS.",
  },
  {
    title: "Social Feed App",
    description:
      "Developed a real-time social media feed with likes and comments.",
  },
  {
    title: "Crypto Tracker",
    description:
      "Built a crypto tracking dashboard with real-time API integration.",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
