
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <Textarea id="message" placeholder="Tell us more about your project..." className="min-h-[150px]" />
              </div>
              <Button className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue text-white w-full md:w-auto px-8">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue rounded-xl shadow-lg p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p>Milpitas, California</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>+1 (573) 222-0685</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>strethyo@strecthyo.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p>Monday-Friday: 9am - 6pm</p>
                    <p>Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Connect With Our Application</h4>
                <div className="flex justify-center">
                  {/* Placeholder for QR code */}
                  <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center text-stretchyo-purple">
                    QR Code
                  </div>
                </div>
                <p className="text-center mt-4">www.sangatha.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
