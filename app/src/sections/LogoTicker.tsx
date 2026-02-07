import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Figma, 
  Framer, 
  Github, 
  Chrome, 
  Slack,
  Trello
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'Figma', icon: Figma },
  { name: 'Framer', icon: Framer },
  { name: 'GitHub', icon: Github },
  { name: 'Chrome', icon: Chrome },
  { name: 'Slack', icon: Slack },
  { name: 'Trello', icon: Trello },
];

const LogoTicker = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Ticker reveal
      gsap.fromTo(
        tickerRef.current,
        { opacity: 0, scaleX: 0.95 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 overflow-hidden reveal-section"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <h3
          ref={headingRef}
          className="text-center text-sm font-medium text-[#8c8c8c] uppercase tracking-wider mb-12"
        >
          Trusted by industry tools
        </h3>
      </div>

      {/* Ticker Container */}
      <div
        ref={tickerRef}
        className="relative overflow-hidden"
        style={{ transform: 'rotate(-1deg)' }}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10"></div>

        {/* Ticker Track */}
        <div className="flex animate-ticker">
          {/* First Set */}
          {[...logos, ...logos].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center px-12 py-6 group"
              >
                <div className="flex items-center gap-3 transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100">
                  <Icon className="w-8 h-8 text-[#d9d9d9]" />
                  <span className="text-lg font-medium text-[#d9d9d9]">{logo.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
