import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 py-4 px-6 md:px-10 flex items-center justify-between 
      backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="/Fav.png"
          alt="ProjXpt Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-extrabold tracking-wide text-gray-900">
          Proj
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Xpt
          </span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        {["Services", "Domains", "Why Us"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-blue-500 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Contact Button */}
      <Button className="hidden md:flex border-gray-400 text-gray-800 relative overflow-hidden px-6 py-2 font-semibold ">
        <a href="#contact" className="relative z-10 text-white">
          Contact Us
        </a>
        <span className="absolute inset-0 bg-gradient-to-r text-white from-blue-500 to-purple-500 opacity-0 transition-all duration-300 hover:opacity-100"></span>
      </Button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center gap-5 py-6 md:hidden"
          >
            {["Services", "Why Us", "Domains", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
