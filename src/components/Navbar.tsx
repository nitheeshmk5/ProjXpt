
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 backdrop-blur-md bg-white/70 z-50 py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-gradient-to-tr from-genz-purple to-genz-pink rounded-full flex items-center justify-center text-white font-bold">P</div>
        <span className="text-xl font-bold">ProjXpt</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
        <a href="#domains" className="hover:text-primary transition-colors">Domains</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      
      <Button variant="outline" className="hidden md:flex">
        Contact Us
      </Button>
      
      <button className="md:hidden text-xl">☰</button>
    </nav>
  );
};

export default Navbar;
