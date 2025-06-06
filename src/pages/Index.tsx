
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkshopsSection from '@/components/WorkshopsSection';
import ParentsSection from '@/components/ParentsSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import FloatingCTAs from '@/components/FloatingCTAs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WorkshopsSection />
      <ParentsSection />
      <JoinSection />
      <Footer />
      <FloatingCTAs />
    </div>
  );
};

export default Index;
