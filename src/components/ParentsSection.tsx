
import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Clock, Award, Heart, Star } from 'lucide-react';

const ParentsSection = () => {
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

  const reasons = [
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Supervised classes with experienced instructors in a secure, welcoming studio space.",
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 12 kids per class ensures personalized attention and quality instruction.",
      color: "neon-green"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple time slots available to fit your family's busy summer schedule.",
      color: "neon-pink"
    },
    {
      icon: Award,
      title: "Experienced Instructors",
      description: "Professional dancers with years of experience teaching children and teens.",
      color: "neon-orange"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "My daughter has grown so much in confidence since joining VYBE. She can't wait for summer workshops!",
      rating: 5
    },
    {
      name: "Marcus T.", 
      text: "The instructors are amazing with kids. My son learned so much and made great friends.",
      rating: 5
    },
    {
      name: "Jessica L.",
      text: "Best investment for our summer plans. The kids love it and parents love the progress they see.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-charcoal-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Parents <span className="text-neon-gradient">Trust VYBE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Peace of mind meets endless fun. Here's why families choose VYBE for their children's dance journey.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`transition-all duration-1000 delay-${index * 150} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-charcoal rounded-2xl p-6 hover-lift h-full text-center border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br from-${reason.color} to-${reason.color}/70 rounded-full flex items-center justify-center mx-auto mb-4 hover-glow`}>
                  <reason.icon className="w-8 h-8 text-dark-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials 
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Parents Are Saying
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`bg-gradient-to-br from-charcoal to-charcoal-light p-6 rounded-2xl hover-lift transition-all duration-1000 delay-${700 + index * 150} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon-orange fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-pink rounded-full mr-3" />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">Verified Parent</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Trust Indicators 
        <div className={`mt-16 bg-charcoal-light p-8 rounded-2xl transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">5 Years</div>
              <div className="text-gray-400">Teaching Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green mb-2">200+</div>
              <div className="text-gray-400">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">100%</div>
              <div className="text-gray-400">Safety Record</div>
            </div>
          </div>
        </div>  */}
      </div>
    </section>
  );
};

export default ParentsSection;
