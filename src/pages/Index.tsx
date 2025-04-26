import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Domains from "@/components/Domains";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Chatbot from "@/components/Chatbot"; // Import Chatbot

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Services />
      <Domains />
      <WhyUs />
      <Portfolio />
      <ContactForm />
      <Footer />
      <Chatbot /> {/* Add Chatbot */}
    </div>
  );
};

export default Index;
