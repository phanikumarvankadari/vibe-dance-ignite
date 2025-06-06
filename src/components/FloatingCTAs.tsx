
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, X } from 'lucide-react';

const FloatingCTAs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded CTAs */}
      <div className={`transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="space-y-3 mb-4">
          <Button 
            className="bg-neon-blue hover:bg-neon-blue/90 text-dark-charcoal font-semibold px-6 py-3 rounded-full shadow-lg hover-lift"
            onClick={() => console.log('Call clicked')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={toggleExpanded}
        className={`w-16 h-16 rounded-full shadow-xl transition-all duration-300 ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-neon-pink to-neon-orange hover:opacity-90 animate-pulse-glow'
        }`}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="text-white font-bold text-lg">!</div>
        )}
      </Button>

      {/* Pulse Ring Animation */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full border-2 border-neon-pink animate-ping opacity-30" />
      )}
    </div>
  );
};

export default FloatingCTAs;
