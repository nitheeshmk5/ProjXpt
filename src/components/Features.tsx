
import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    { 
      title: "Customized Projects", 
      description: "Tailored to your college requirements" 
    },
    { 
      title: "Source Code & Documentation", 
      description: "Complete and easy to understand" 
    },
    { 
      title: "Live Demo & Guidance", 
      description: "Learn while you build" 
    },
    { 
      title: "Affordable Pricing", 
      description: "Student-friendly packages" 
    },
    { 
      title: "On-Time Delivery", 
      description: "Meet your submission deadlines with ease" 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-genius-900 mb-4">Why Choose FinYearGenius?</h2>
          <p className="text-lg text-genius-700 max-w-3xl mx-auto">
            We understand the challenges students face during their final year. 
            Our services are designed to make your project journey seamless and successful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-genius-50 border border-genius-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-6 h-6 text-genius-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-genius-900 mb-2">{feature.title}</h3>
                  <p className="text-genius-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
