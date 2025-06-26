import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Award } from 'lucide-react';

const WorkshopsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const workshops = [
    {
      "title": "RRR VYBE",
      "description": "High-energy Indian movie dance for kids! Learn fun moves, build confidence, and shine like a star.",
      "duration": "4 day workshop",
      "spots": "9 places",
      "level": "All Levels",
      "color": "from-orange-500 to-red-600",
      "icon": "🌟",
      "registerLink": "https://api.whatsapp.com/send?phone=35845152921"
    }
  //,
  //  {
  //    "title": "Epic VYBE",
  //    "description": "Powerful Indian movie dance for adults. Master dynamic moves and express your passion on the dance floor.",
  //    "duration": "Weekend workshop",
  //    "spots": "9 places",
  //    "level": "All Levels",
  //    "color": "from-purple-700 to-indigo-800",
  //    "icon": "🔥"
  // }
    //,
    //{
    //  title: "Breaking Basics",
    //  description: "Introduction to breakdancing with safe, beginner-friendly moves that wow friends and family.",
    //  duration: "6 weeks",
    //  spots: "8 kids max", 
    //  level: "Beginner",
    //  color: "from-neon-green to-green-600",
    //  icon: "🌪️"
    //}
  ];

  return (
    <section id="workshops" ref={sectionRef} className="py-20 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Summer Dance <span className="text-energy-gradient">Workshops</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ignite their creativity with our specialized urban dance programs designed for kids aged 8-12
          </p>
          
          {/* Special Offer Callout */}
          <div className="inline-block relative">
            <div className="bg-gradient-to-r from-neon-orange to-neon-pink p-0.5 rounded-2xl animate-pulse-glow">
              <div className="bg-dark-charcoal px-8 py-4 rounded-2xl">
                <div className="text-white font-bold text-lg mb-1">🔥 Early Bird Special</div>
                <div className="text-neon-orange font-semibold">Whatsapp for amazing discounts!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              }`}
            >
              <div className="bg-charcoal-light rounded-2xl p-6 hover-lift h-full border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${workshop.color} p-0.5 rounded-xl mb-6`}>
                  <div className="bg-charcoal-light p-4 rounded-xl text-center">
                    <div className="text-4xl mb-2">{workshop.icon}</div>
                    <h3 className="text-xl font-bold text-white">{workshop.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {workshop.description}
                </p>

                {/* Workshop Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-3 text-neon-blue" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-3 text-neon-green" />
                    <span>{workshop.spots}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Award className="w-4 h-4 mr-3 text-neon-pink" />
                    <span>{workshop.level}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neon-orange fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">Perfect for beginners</span>
                </div>

                {/* CTA Button */}
                {workshop.registerLink ? (
                  <a href={workshop.registerLink} target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full bg-gradient-to-r ${workshop.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover-glow`}>
                      Reserve Spot
                    </Button>
                  </a>
                ) : (
                  <Button className={`w-full bg-gradient-to-r ${workshop.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover-glow`}>
                    Reserve Spot
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={`bg-gradient-to-r from-charcoal-light to-charcoal p-8 rounded-2xl transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose VYBE Summer Workshops?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="font-semibold text-white mb-2">Skill Building</div>
              <div className="text-gray-400 text-sm">Learn new moves and improve coordination</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <div className="font-semibold text-white mb-2">New Friends</div>
              <div className="text-gray-400 text-sm">Connect with like-minded young dancers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <div className="font-semibold text-white mb-2">Confidence</div>
              <div className="text-gray-400 text-sm">Build self-esteem through creative expression</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="font-semibold text-white mb-2">Pure Fun</div>
              <div className="text-gray-400 text-sm">Active entertainment they'll love</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
