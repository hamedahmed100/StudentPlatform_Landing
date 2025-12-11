import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StudentsSection from '@/components/StudentsSection';
import GradesSection from '@/components/GradesSection';
import MobileAppSection from '@/components/MobileAppSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StudentsSection />
        <GradesSection />
        <MobileAppSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
