
import { Code, Cpu, Database, Layout, Smartphone, Sparkles } from "lucide-react";

const Domains = () => {
  const domains = [
    {
      title: "Web Development",
      icon: <Layout className="w-10 h-10 text-genius-500" />,
      description: "Responsive websites, web applications, e-commerce solutions using modern frameworks"
    },
    {
      title: "AI & Machine Learning",
      icon: <Sparkles className="w-10 h-10 text-genius-500" />,
      description: "Advanced algorithms, predictive models, natural language processing, computer vision"
    },
    {
      title: "Android Apps",
      icon: <Smartphone className="w-10 h-10 text-genius-500" />,
      description: "Native Android applications with intuitive UIs and powerful backend integrations"
    },
    {
      title: "Data Science",
      icon: <Database className="w-10 h-10 text-genius-500" />,
      description: "Data analysis, visualization, big data processing, and insightful reporting"
    },
    {
      title: "IoT Solutions",
      icon: <Cpu className="w-10 h-10 text-genius-500" />,
      description: "Connected device systems, sensor networks, smart solutions for real-world problems"
    },
    {
      title: "Software Engineering",
      icon: <Code className="w-10 h-10 text-genius-500" />,
      description: "Desktop applications, system programming, microservices architecture"
    }
  ];

  return (
    <section className="py-16 bg-genius-900 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Domains</h2>
          <p className="text-lg text-genius-100 max-w-3xl mx-auto">
            We offer projects across various technological domains to match your interests and academic requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className="bg-genius-800 border border-genius-700 rounded-xl p-6 hover:bg-genius-700 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-genius-800 rounded-full">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{domain.title}</h3>
                <p className="text-genius-200">{domain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
