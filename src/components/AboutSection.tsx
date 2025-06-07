
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                About <span className="text-neon-gradient">VYBE</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mb-8" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
            VYBE was founded by four passionate dancers who believe in the power of movement. We're more than just workshops; we're a place where kids and young adults discover confidence, make friends, and express themselves through the joy of dance. </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our philosophy is simple: create a fun, supportive, and energetic environment where every 
              child can discover their unique rhythm and unleash their inner dancer. We believe dance 
              builds not just physical skills, but confidence, creativity, and lasting friendships away from screens and digital life.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-charcoal-light rounded-xl hover-lift">
                <div className="text-3xl font-bold text-neon-blue mb-2">5</div>
                <div className="text-gray-400">Dance styles</div>
              </div>
              <div className="text-center p-4 bg-charcoal-light rounded-xl hover-lift">
                <div className="text-3xl font-bold text-neon-green mb-2">A decade</div>
                <div className="text-gray-400">Experience</div>
              </div>
            </div>
          </div>

          {/* Team/Image Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-to-br from-charcoal-light to-charcoal rounded-2xl p-8 hover-lift">
                <div className="aspect-video bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💃🕺</div>
                    <p className="text-gray-300">Our Founders & Team</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-charcoal p-4 rounded-lg text-center hover-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-green rounded-full mx-auto mb-2" />
                    <div className="text-white font-semibold">Shashi</div>
                    <div className="text-gray-400 text-sm">Freestyle</div>
                  </div>
                  <div className="bg-charcoal p-4 rounded-lg text-center hover-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-orange rounded-full mx-auto mb-2" />
                    <div className="text-white font-semibold">Shanmukh</div>
                    <div className="text-gray-400 text-sm">Freestyle</div>
                  </div>
                  <div className="bg-charcoal p-4 rounded-lg text-center hover-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue rounded-full mx-auto mb-2" />
                    <div className="text-white font-semibold">Tanuja</div>
                    <div className="text-gray-400 text-sm">Indian classical & Freestyle</div>
                  </div>
                  <div className="bg-charcoal p-4 rounded-lg text-center hover-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-orange to-neon-pink rounded-full mx-auto mb-2" />
                    <div className="text-white font-semibold">Phani</div>
                    <div className="text-gray-400 text-sm">Freestyle</div>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-neon-pink to-neon-orange rounded-full opacity-20 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
