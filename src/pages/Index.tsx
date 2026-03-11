import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocationSection from "@/components/LocationSection";
import TeamSection from "@/components/TeamSection";
import TransformSection from "@/components/TransformSection";
import TestimonialSection from "@/components/TestimonialSection";
import CasesSection from "@/components/CasesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
      <TeamSection />
      <TransformSection />
      <TestimonialSection />
      <CasesSection />
      <DifferentialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
