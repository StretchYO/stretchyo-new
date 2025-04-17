
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions or ready to get started? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form and Information */}
        <Contact />

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 rounded-xl p-4 h-[400px] flex items-center justify-center">
              <p className="text-center text-gray-500">Interactive map would be embedded here</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and products.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">How long does it take to build a website?</h3>
                <p className="text-gray-600">
                  Most of our websites are completed within 2-4 weeks depending on complexity and content requirements. We'll provide a specific timeline during our initial consultation.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer ongoing support for your apps?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive support packages for all our applications. This includes regular updates, bug fixes, and technical assistance.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-3">How does the AI personalization work?</h3>
                <p className="text-gray-600">
                  Our AI technology analyzes patterns in your behavior and preferences over time to provide increasingly personalized recommendations and content. All data processing is done with strict privacy controls.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
