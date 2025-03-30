
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[85vh] py-16 px-6 md:px-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 inline-block px-4 py-1.5 bg-white/30 backdrop-blur-sm rounded-full font-medium text-sm border border-white/20">
          🚀 Final Year Project Solutions
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
          Empower Your Final Year With An <span className="genz-gradient-text">Outstanding Project!</span>
        </h1>
        
        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          We specialize in delivering innovative, high-quality final-year projects for students across various domains.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={scrollToContact} className="genz-button-primary px-8 py-6 text-lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-white/20">
            Explore Domains
          </Button>
        </div>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <div className="animate-float">
          <div className="genz-card p-4 rotate-3 bg-genz-purple/10">
            <div className="font-bold text-lg">Web Dev</div>
          </div>
        </div>
        <div className="animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="genz-card p-4 -rotate-2 bg-genz-pink/10">
            <div className="font-bold text-lg">Machine Learning</div>
          </div>
        </div>
        <div className="animate-float" style={{ animationDelay: "1s" }}>
          <div className="genz-card p-4 rotate-2 bg-genz-blue/10">
            <div className="font-bold text-lg">IoT</div>
          </div>
        </div>
        <div className="animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="genz-card p-4 -rotate-3 bg-genz-orange/10">
            <div className="font-bold text-lg">AI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
