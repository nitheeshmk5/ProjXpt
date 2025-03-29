
import { LucideIcon, FileCode, MessagesSquare, Code, CheckCircle } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const Process = () => {
  const steps: Step[] = [
    {
      title: "1. Share Your Requirements",
      description: "Tell us about your project needs, college guidelines, and specific domain interests",
      icon: FileCode
    },
    {
      title: "2. Consultation & Planning",
      description: "Our experts will discuss feasibility, technologies, and create a project roadmap",
      icon: MessagesSquare
    },
    {
      title: "3. Development & Documentation",
      description: "We build your project with quality code and prepare comprehensive documentation",
      icon: Code
    },
    {
      title: "4. Delivery & Support",
      description: "Receive your complete project with setup guidance and ongoing technical support",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 bg-genius-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-genius-900 mb-4">Our Simple Process</h2>
          <p className="text-lg text-genius-700 max-w-3xl mx-auto">
            From concept to completion, we make the entire journey straightforward and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-genius-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-genius-100 rounded-full">
                    <Icon className="w-8 h-8 text-genius-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-genius-900">{step.title}</h3>
                  <p className="text-genius-700">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
