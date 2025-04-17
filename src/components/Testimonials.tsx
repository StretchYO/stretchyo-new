
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialProps) => (
  <div className="bg-white rounded-xl shadow-lg p-8 relative">
    <Quote className="absolute top-6 left-6 h-12 w-12 text-stretchyo-purple/10" />
    <div className="pt-10">
      <p className="text-lg text-gray-700 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div className="ml-3">
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "StretchYo LLC Digital helped us grow repeat customers by 50% in just 2 months.",
      author: "Himalayan Bites Café",
      role: "Owner",
    },
    {
      quote: "My realtor site started generating leads the first week!",
      author: "Rina Shah",
      role: "Realtor, Bay Area",
    },
    {
      quote: "The wellbeing challenges completely transformed our company culture. Our team is more engaged than ever.",
      author: "Michael Chen",
      role: "CEO, TechInnovate",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our clients have to say about their experience with StretchYo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
