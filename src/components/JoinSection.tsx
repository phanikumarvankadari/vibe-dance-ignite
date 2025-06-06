
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

const JoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Here you would typically send the email to your backend
    setEmail('');
    alert('Thanks for signing up! We\'ll be in touch soon.');
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-charcoal to-dark-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Secure Your <span className="text-energy-gradient">Spot Today!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join the VIBE community and give your child an unforgettable summer of dance, friends, and confidence building.
          </p>
          
          {/* Urgency Banner */}
          <div className="inline-block bg-gradient-to-r from-neon-orange to-neon-pink p-0.5 rounded-full mb-8 animate-pulse-glow">
            <div className="bg-dark-charcoal px-6 py-3 rounded-full">
              <span className="text-white font-bold">⏰ Early Bird Ends Soon - Save 30%!</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Email Signup */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-charcoal-light p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-neon-blue mr-3" />
                <h3 className="text-2xl font-bold text-white">Get Workshop Updates</h3>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-charcoal border-gray-600 text-white placeholder-gray-400 h-12 text-lg"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-dark-charcoal font-bold py-3 h-12 text-lg rounded-xl hover-glow"
                >
                  Sign Up for Updates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
              
              <p className="text-gray-400 text-sm mt-4 text-center">
                Be the first to know about new workshops and special offers
              </p>
            </div>
          </div>

          {/* WhatsApp & Direct Actions */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* WhatsApp Group */}
            <div className="bg-gradient-to-br from-charcoal-light to-charcoal p-8 rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-neon-green mr-3" />
                <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Connect with other VIBE families, get updates, and share your dancer's progress in our exclusive WhatsApp group.
              </p>
              <Button className="w-full bg-neon-green hover:bg-neon-green/90 text-dark-charcoal font-bold py-3 h-12 text-lg rounded-xl hover-lift">
                Join WhatsApp Group
              </Button>
            </div>

            {/* Direct Registration */}
            <div className="bg-gradient-to-br from-neon-pink/20 to-neon-orange/20 p-8 rounded-2xl border border-neon-pink/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Register?</h3>
              <p className="text-gray-300 mb-6">
                Skip the wait and secure your child's spot in our summer workshops today.
              </p>
              <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-orange hover:opacity-90 text-white font-bold py-3 h-12 text-lg rounded-xl hover-glow">
                Register Now - Save 30%
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Benefits Reminder */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
              <span className="text-gray-300">Small Class Sizes</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-gray-300">Expert Instructors</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-gray-300">Safe Environment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
