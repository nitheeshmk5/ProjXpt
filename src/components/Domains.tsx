import React from "react";
import { Badge } from "@/components/ui/badge";

const domains = [
  {
    name: "Web Development",
    description:
      "Modern responsive websites with React, Angular, Vue.js, or full-stack solutions.",
    icon: "🌐",
    color: "bg-genz-blue/10 text-genz-blue",
    tags: ["React", "MERN", "PHP", "Django"],
  },
  {
    name: "AI & Machine Learning",
    description:
      "Intelligent systems that learn patterns, predict outcomes, and make decisions.",
    icon: "🤖",
    color: "bg-genz-pink/10 text-genz-pink",
    tags: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    name: "Mobile Applications",
    description: "Cross-platform or native mobile apps for Android and iOS.",
    icon: "📲",
    color: "bg-genz-orange/10 text-genz-orange",
    tags: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    name: "Blockchain",
    description:
      "Decentralized applications and smart contracts for the Web3 ecosystem.",
    icon: "🔗",
    color: "bg-genz-pink/10 text-genz-pink",
    tags: ["Ethereum", "Smart Contracts", "dApps", "NFTs"],
  },
  {
    name: "Cloud Computing",
    description: "Scalable applications hosted on AWS, Azure, or Google Cloud.",
    icon: "☁️",
    color: "bg-blue-500/10 text-blue-500",
    tags: ["AWS", "Azure", "GCP", "Serverless"],
  },
];

const Domains = () => {
  return (
    <div
      id="domains"
      className="py-20 px-6 md:px-10 bg-white/50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project <span className="genz-gradient-text">Domains</span>
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We offer projects across various cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="genz-card p-8 hover:translate-y-[-5px]">
              <div
                className={`text-4xl mb-4 inline-block p-3 rounded-xl ${domain.color}`}
              >
                {domain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{domain.name}</h3>
              <p className="opacity-80 mb-4">{domain.description}</p>
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`${domain.color} border-0`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
