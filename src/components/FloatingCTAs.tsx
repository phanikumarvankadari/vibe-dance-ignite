
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle as a substitute for WhatsApp icon

const FloatingCTAs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappLink = "https://chat.whatsapp.com/L0uEWAxefgN2ZVzf54dTCJ"; // Updated WhatsApp group URL

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button
          className={
            'w-16 h-16 rounded-full shadow-xl transition-all duration-300 ' +
            'bg-green-500 hover:bg-green-600 text-white animate-pulse-glow flex items-center justify-center' // Keeping flex styling and padding for centering
          }
        >
          {/* Reverted to using MessageCircle icon */}
          <MessageCircle className="w-8 h-8" /> 
        </Button>
      </a>

      {/* Pulse Ring Animation (Optional, adjust color if keeping) */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-30" />
    </div>
  );
};

export default FloatingCTAs;
