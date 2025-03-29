import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-vivid-purple mr-2" />
            <span className="text-xl font-bold text-dark-charcoal">ProjXpt</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-genius-800 hover:text-genius-600 font-medium">Home</a>
            <a href="#" className="text-genius-800 hover:text-genius-600 font-medium">Services</a>
            <a href="#" className="text-genius-800 hover:text-genius-600 font-medium">Projects</a>
            <a href="#" className="text-genius-800 hover:text-genius-600 font-medium">About</a>
            <a href="#" className="text-genius-800 hover:text-genius-600 font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-genius-600 hover:bg-genius-700 text-white">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-genius-800 hover:text-genius-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-genius-100">
            <ul className="space-y-4">
              <li><a href="#" className="block text-genius-800 hover:text-genius-600 font-medium">Home</a></li>
              <li><a href="#" className="block text-genius-800 hover:text-genius-600 font-medium">Services</a></li>
              <li><a href="#" className="block text-genius-800 hover:text-genius-600 font-medium">Projects</a></li>
              <li><a href="#" className="block text-genius-800 hover:text-genius-600 font-medium">About</a></li>
              <li><a href="#" className="block text-genius-800 hover:text-genius-600 font-medium">Contact</a></li>
              <li className="pt-2">
                <Button className="w-full bg-genius-600 hover:bg-genius-700 text-white">Get Started</Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
