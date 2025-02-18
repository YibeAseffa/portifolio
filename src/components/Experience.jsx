import React from "react";

const experiences = [
  {
    role: "Intern - Frontend Developer",
    company: "Tempolabs",
    description:
      "Developed and published React components for ReactComponents.com.",
  },
  {
    role: "Assistant Lecturer",
    company: "Bahirdar University",
    description:
      "Taught programming and hardware courses, contributed to software and hardware projects.",
  },
  {
    role: "Full-Stack Developer (Bootcamp)",
    company: "BusyQA",
    description: "Built multiple full-stack applications using the MERN stack.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
