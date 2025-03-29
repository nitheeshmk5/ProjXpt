
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "FinYearGenius delivered an AI-based recommendation system project that exceeded my expectations. Their work helped me secure top marks!",
      author: "Ananya S.",
      university: "Anna University",
      rating: 5,
      initial: "AS"
    },
    {
      quote: "I was struggling with my IoT project until I found FinYearGenius. They provided a complete solution with clear documentation that made my defense presentation smooth.",
      author: "Rahul M.",
      university: "VIT Vellore",
      rating: 5,
      initial: "RM"
    },
    {
      quote: "The web application they built for me was not only functional but had an impressive UI. My professors were really impressed with the work.",
      author: "Priya K.",
      university: "BITS Pilani",
      rating: 5,
      initial: "PK"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-genius-900 mb-4">Student Success Stories</h2>
          <p className="text-lg text-genius-700 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from students who achieved academic success with our help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-genius-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-genius-400 text-genius-400" />
                  ))}
                </div>
                
                <p className="text-genius-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-genius-200">
                    <AvatarFallback className="text-genius-700">{testimonial.initial}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-genius-900">{testimonial.author}</p>
                    <p className="text-sm text-genius-600">{testimonial.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
