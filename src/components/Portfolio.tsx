import React from "react";

const projects = [
  {
    title: "Expense Tracker through SMS",
    description:
      "A unique system to track expenses via SMS integration, ideal for mobile-first users.",
    image: "/expense.png", // Replace with actual image path
    technologies: ["SMS Forwarder", "Node.js", "Firebase"],
  },
  {
    title: "Thrive Together",
    description:
      "A collaborative platform to manage group projects and tasks efficiently.",
    image: "/Thrive.jpg", // Replace with actual image path
    technologies: ["React", "Supabase", "Tailwind CSS"],
  },
];

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="py-20 px-6 md:px-10 bg-white/50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="genz-gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Explore some of our innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="genz-card p-6 hover:translate-y-[-5px] transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="opacity-80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-genz-purple/10 text-genz-purple text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
