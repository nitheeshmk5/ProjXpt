
import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-soft-purple">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-vivid-purple/20 rounded-full opacity-70 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-magenta-pink/20 rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-soft-purple/30 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-vivid-purple mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal">ProjXpt</h1>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-charcoal leading-tight mb-6">
              Empower Your Final Year with an Outstanding Project!
            </h2>
            <p className="text-lg text-charcoal-gray mb-4 italic font-medium">
              We build the project, you build the presentation!
            </p>
            <p className="text-lg text-charcoal-gray mb-8">
              Struggling to find the perfect final-year project? We've got you covered! 
              We specialize in delivering innovative, high-quality, and ready-to-implement 
              final-year projects for students across various domains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-vivid-purple hover:bg-magenta-pink text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-vivid-purple text-vivid-purple hover:bg-soft-purple/10">
                View Projects
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-full bg-soft-purple/20 rounded-2xl absolute -top-4 -left-4"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-soft-purple/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-vivid-purple" />
                  <h3 className="text-xl font-bold text-dark-charcoal">Ready to Transform Your Ideas?</h3>
                </div>
                <p className="text-charcoal-gray mb-6">Connect with us today and let's turn your vision into an impressive final year project!</p>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-vivid-purple mr-2" />
                  <span className="font-medium">Call/WhatsApp: 9944725360</span>
                </div>
                <p className="text-sm text-charcoal-gray">Locations: Bangalore, Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
