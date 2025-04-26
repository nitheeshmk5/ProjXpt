import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDomain = () => {
    document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" });
  };

  const cardVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-[85vh] py-16 px-6 md:px-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 inline-block px-4 py-1.5 bg-white/30 backdrop-blur-sm rounded-full font-medium text-sm border border-white/20">
          🚀 Crafting Websites for All
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
          Build Any Website With{" "}
          <span className="genz-gradient-text">Innovation & Expertise!</span>
        </h1>

        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          From personal portfolios to business solutions, e-commerce to custom
          apps, we deliver high-quality websites tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            className="genz-button-primary px-8 py-6 text-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            className="px-8 py-6 text-lg rounded-full border-2 bg-white text-black hover:bg-white hover:border-purple-500 hover:text-purple-500"
            onClick={scrollToDomain}
          >
            Explore Services
          </Button>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {["Portfolios", "E-Commerce", "Business", "Custom Apps"].map(
          (text, index) => (
            <motion.div
              key={text}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: `${index * 0.5}s` }}
              className="animate-float"
            >
              <div className="genz-card p-4 rounded-lg bg-genz-card-bg">
                <div className="font-bold text-lg">{text}</div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Hero;
