import Navbar from "@/components/dental/Navbar";
import Hero from "@/components/dental/Hero";
import About from "@/components/dental/About";
import Services from "@/components/dental/Services";
import Benefits from "@/components/dental/Benefits";
import Trust from "@/components/dental/Trust";
import Testimonials from "@/components/dental/Testimonials";
import FAQ from "@/components/dental/FAQ";
import CTASection from "@/components/dental/CTASection";
import Footer from "@/components/dental/Footer";
import WhatsAppButton from "@/components/dental/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Benefits />
    <Trust />
    <Testimonials />
    <FAQ />
    <CTASection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
