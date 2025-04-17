
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <div className="py-20 bg-gradient-to-r from-stretchyo-purple to-stretchyo-blue">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Digital Presence & Personal Wellbeing</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We provide both professional services for businesses and wellness products for individuals.
            </p>
          </div>
        </div>
        <Products />
        <About />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
