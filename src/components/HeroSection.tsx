
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
    <section className="relative min-h-screen pt-20 overflow-hidden bg-charcoal">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Video Element */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          // Replace with your video source
          src="media/bg.mp4"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
        {/* Animated Background Elements (optional, keep if desired) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-0 right-0 p-4 z-20 mb-[15%] mt-[3rem] flex justify-center">

  <img
    src="https://i.ibb.co/QFHk3HqM/logo3.png"
    alt="VYBE Dance Workshops Logo"
    className="h-10 scale-[3]"
  />
</div>


      {/* Video Controls */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-6 right-6 z-30 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 hover-glow"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
        {/* Main Headline */}
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-4">
            <span className="block text-white animate-text-reveal stagger-1">Unleash Their</span>
            <span className="block text-neon-gradient animate-text-reveal stagger-2 drop-shadow-lg">VYBE</span>
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
          <a href="#workshops" className="min-w-[200px]">
            <Button
              size="lg"
              className="w-full bg-neon-blue hover:bg-neon-blue/90 text-dark-charcoal font-bold px-8 py-4 text-lg rounded-xl hover-lift pulse-glow"
            >
              Explore Workshops
            </Button>
          </a>
         {/*
          <Button
            size="lg"
            variant="outline"
            className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-charcoal font-bold px-8 py-4 text-lg rounded-xl hover-lift min-w-[200px] backdrop-blur-sm"
          >
            Get Early Bird Offer!
          </Button> */}
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
