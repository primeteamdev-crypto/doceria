import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import HowItWorks from '@/components/HowItWorks';
import Differentials from '@/components/Differentials';
import CakeQuiz from '@/components/CakeQuiz';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import SiteFooter from '@/components/SiteFooter';
import FloatingButtons from '@/components/FloatingButtons';
import MobileBottomBar from '@/components/MobileBottomBar';

const Index = () => {
  return (
    <main className="pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <SocialProof />
      <TestimonialsCarousel />
      <PortfolioCarousel />
      <HowItWorks />
      <Differentials />
      <CakeQuiz />
      <AboutSection />
      <FAQSection />
      <SiteFooter />
      <FloatingButtons />
      <MobileBottomBar />
    </main>
  );
};

export default Index;
