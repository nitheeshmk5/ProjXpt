import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Customized Projects",
    description: "Tailored to your college requirements",
    icon: "📋",
  },
  {
    title: "Source Code & Documentation",
    description: "Complete and easy to understand",
    icon: "💻",
  },
  {
    title: "Live Demo & Guidance",
    description: "Learn while you build",
    icon: "🎯",
  },
  {
    title: "Affordable Pricing",
    description: "Student-friendly packages",
    icon: "💰",
  },
  {
    title: "On-Time Delivery",
    description: "Meet your submission deadlines with ease",
    icon: "⏱️",
  },
];

const Services = () => {
  return (
    <div id="services" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="genz-gradient-text">ProjXpt</span>?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We make your final year project journey smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="genz-card p-8 hover:translate-y-[-5px]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
              <div className="mt-4 flex items-center text-primary">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Included in all packages
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
