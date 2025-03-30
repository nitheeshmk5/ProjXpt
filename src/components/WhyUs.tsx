
import React from 'react';
import { Circle, CircleCheck, Clock, FileText, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    title: "Expert Guidance",
    description: "Get mentored by industry professionals who've worked on real-world projects",
    icon: <Lightbulb className="w-6 h-6 text-genz-purple" />
  },
  {
    title: "Complete Documentation",
    description: "Thorough project documents including SRS, design docs, and implementation details",
    icon: <FileText className="w-6 h-6 text-genz-purple" />
  },
  {
    title: "24/7 Support",
    description: "Reach out to us anytime for project assistance and troubleshooting",
    icon: <Users className="w-6 h-6 text-genz-purple" />
  },
  {
    title: "Timely Delivery",
    description: "We respect your deadlines and ensure on-time delivery for your peace of mind",
    icon: <Clock className="w-6 h-6 text-genz-purple" />
  }
];

const processSteps = [
  {
    number: "01",
    title: "Project Selection",
    description: "Choose from our catalog or share your custom requirements"
  },
  {
    number: "02",
    title: "Proposal & Payment",
    description: "Get a detailed proposal with timeline and affordable pricing"
  },
  {
    number: "03",
    title: "Development",
    description: "We build your project with regular progress updates"
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Receive your project with demo and implementation guidance"
  }
];

const WhyUs = () => {
  return (
    <div id="why-us" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="genz-gradient-text">Advantages</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            What makes us the perfect choice for your final year project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-lg bg-white/80 shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="genz-gradient-text">Process</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Simple steps to get your project completed
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-genz-purple to-genz-pink hidden md:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[50%] top-0 -translate-x-[50%] md:block hidden">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border-2 border-genz-purple text-genz-purple font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <div className="md:w-[50%]"></div>
                
                <div className="md:w-[50%] genz-card p-8">
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border-2 border-genz-purple text-genz-purple font-bold text-sm">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 hidden md:block">{step.title}</h3>
                  <p className="opacity-80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
