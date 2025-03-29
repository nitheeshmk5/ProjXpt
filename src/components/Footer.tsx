
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-genius-900 text-white">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-genius-400" />
              <h3 className="text-xl font-bold">FinYearGenius</h3>
            </div>
            <p className="text-genius-300 mb-6">
              Empowering students with innovative, high-quality, and ready-to-implement final-year projects across various technological domains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-genius-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-genius-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-genius-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-genius-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-genius-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-genius-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-genius-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-genius-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-genius-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-genius-300">Call/WhatsApp: 9944725360</li>
              <li className="text-genius-300">Email: contact@finyeargenius.com</li>
              <li className="text-genius-300">Locations: Bangalore, Coimbatore</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-genius-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-genius-400 text-sm">© 2023 FinYearGenius. All rights reserved.</p>
          <p className="text-genius-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-genius-500" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
