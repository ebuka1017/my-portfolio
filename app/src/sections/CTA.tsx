import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Twitter, X } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/ebuka1017' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/isaac-okwuzi-0304791b9' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/nothiro__' },
  { name: 'Email', icon: Mail, href: 'mailto:isaacokwuzi@gmail.com' },
];

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showTypeform, setShowTypeform] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Social icons entrance
      const socialIcons = orbitRef.current?.querySelectorAll('.social-icon');
      socialIcons?.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.2 + index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      });

      // Constant orbit animation
      animationRef.current = gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      });

      // Content reveal
      const contentElements = contentRef.current?.querySelectorAll('.reveal-item');
      contentElements?.forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pause/resume animation
  useEffect(() => {
    if (animationRef.current) {
      if (isPaused) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isPaused]);

  // Load Typeform script when modal opens
  useEffect(() => {
    if (showTypeform) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showTypeform]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 reveal-section"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orbiting Social Icons Section */}
        <div 
          className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-16 sm:mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Center Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#202020] shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Isaac Okwuzi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Orbiting Icons */}
          <div
            ref={orbitRef}
            className="absolute inset-0 w-full h-full"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const angle = (index * 90) - 90;
              const radius = 42; // percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon absolute w-10 h-10 sm:w-12 sm:h-12 bg-[#202020] rounded-full flex items-center justify-center border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#d9d9d9] hover:scale-110 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8c8c8c] group-hover:text-[#1a1a1a] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Content Section */}
        <div ref={contentRef} className="text-center space-y-4 sm:space-y-5">
          <h2 className="reveal-item text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9d9d9]">
            Let's work together
          </h2>
          
          <p className="reveal-item text-base sm:text-lg text-[#8c8c8c] max-w-lg mx-auto">
            I'm currently available for new projects and collaborations. 
            Let's create something amazing.
          </p>

          <div className="reveal-item flex flex-wrap justify-center gap-3 pt-4">
            <MagneticButton href="https://calendly.com/isaacokwuzi/30min">
              Schedule a call
            </MagneticButton>
            <button
              onClick={() => setShowTypeform(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#202020] text-[#d9d9d9] font-medium rounded-full border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#2e2e2e] hover:border-[#d9d9d9]/20 text-sm sm:text-base"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Typeform Modal */}
      {showTypeform && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={() => setShowTypeform(false)}
        >
          <button
            onClick={() => setShowTypeform(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#202020] flex items-center justify-center border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#2e2e2e]"
          >
            <X className="w-5 h-5 text-[#8c8c8c]" />
          </button>
          <div 
            data-tf-live="01KGTNZFECH5M9DMH4NKBP1ZBW" 
            className="w-full h-full"
          ></div>
        </div>
      )}
    </section>
  );
};

export default CTA;
