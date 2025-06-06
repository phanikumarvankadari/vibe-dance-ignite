
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-charcoal via-charcoal to-charcoal-light">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-neon-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-neon-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Video Controls */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-20 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 hover-glow"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-4">
            <span className="block text-white animate-text-reveal stagger-1">Unleash Their</span>
            <span className="block text-neon-gradient animate-text-reveal stagger-2 drop-shadow-lg">VIBE</span>
            <span className="block text-white animate-text-reveal stagger-3">This Summer!</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Fun, confidence & creativity for kids aged 8-12
            <br />
            <span className="text-neon-blue">Discover the joy of urban dance in a vibrant community</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="bg-neon-blue hover:bg-neon-blue/90 text-dark-charcoal font-bold px-8 py-4 text-lg rounded-xl hover-lift pulse-glow min-w-[200px]"
          >
            Explore Workshops
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-charcoal font-bold px-8 py-4 text-lg rounded-xl hover-lift min-w-[200px] backdrop-blur-sm"
          >
            Get Early Bird Offer!
          </Button>
        </div>

        {/* Early Bird Banner */}
        <div className={`mt-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-neon-orange to-neon-pink p-0.5 rounded-full animate-pulse-glow">
            <div className="bg-dark-charcoal px-6 py-2 rounded-full">
              <span className="text-white font-semibold">🎉 Limited Time: 30% Off Early Bird Registration!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-blue rounded-xl rotate-45 opacity-80" />
        </div>
      </div>
      
      <div className="absolute top-1/3 left-10 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <div className="animate-float">
          <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-orange rounded-full opacity-70" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
