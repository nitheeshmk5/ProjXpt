
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-genius-600 to-genius-900 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Take the Stress Out of Your Final Year Project!</h2>
            <p className="text-xl text-genius-100 mb-8">
              Connect with us today and turn your ideas into reality. Let's create an impressive project that will make your professors take notice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <PhoneCall className="w-5 h-5 mr-3 text-genius-200" />
                <p>Call/WhatsApp: <br /><strong>9944725360</strong></p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-genius-200" />
                <p>Email Us: <br /><strong>contact@finyeargenius.com</strong></p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-genius-200" />
                <p>Visit Us: <br /><strong>Bangalore, Coimbatore</strong></p>
              </div>
            </div>
            
            <p className="text-genius-200 font-semibold text-lg">Your Success Starts Here! 🎓💡</p>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-genius-900">Get a Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-genius-200 rounded-md focus:outline-none focus:ring-2 focus:ring-genius-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-genius-200 rounded-md focus:outline-none focus:ring-2 focus:ring-genius-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full p-3 border border-genius-200 rounded-md focus:outline-none focus:ring-2 focus:ring-genius-500"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Project Requirements" 
                    rows={3}
                    className="w-full p-3 border border-genius-200 rounded-md focus:outline-none focus:ring-2 focus:ring-genius-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-genius-600 hover:bg-genius-700 text-white">
                  Request Callback
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
