import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Tool definitions with logo images from Brandfetch
const tools = [
  { name: 'Figma', logo: 'https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1729268241679' },
  { name: 'Framer', logo: 'https://cdn.brandfetch.io/idCeIE9B96/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668082190606' },
  { name: 'GitHub', logo: 'https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1735228640978' },
  { name: 'Cursor', logo: 'https://cdn.brandfetch.io/ideKwS9dxx/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1770370970888' },
  { name: 'Antigravity', logo: 'https://cdn.brandfetch.io/idR_Q3daYc/w/200/h/184/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1763658538344' },
  { name: 'Hugging Face', logo: 'https://cdn.brandfetch.io/idfR5s7X3k/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1725653188934' },
  { name: 'React', logo: 'https://cdn.brandfetch.io/idREYlLkpD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746616583363' },
  { name: 'TypeScript', logo: 'https://cdn.brandfetch.io/idKX_Hb7va/w/820/h/820/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764475967212' },
  { name: 'Node.js', logo: 'https://cdn.brandfetch.io/id7JRtQEAa/w/820/h/502/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764437949473' },
  { name: 'Python', logo: 'https://cdn.brandfetch.io/idbpOFBgcc/w/820/h/820/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1764244766386' },
  { name: 'Git', logo: 'https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1735228640978' },
  { name: 'Bash', logo: 'https://cdn.brandfetch.io/idL0iThUdH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668185455996' },
  { name: 'Docker', logo: 'https://cdn.brandfetch.io/idL0iThUdH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668185455996' },
  { name: 'Vercel', logo: 'https://cdn.brandfetch.io/idawOgBOm3/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668185455996' },
  { name: 'Netlify', logo: 'https://cdn.brandfetch.io/idZzU7L5GZ/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668185455996' },
];

const ToolsTicker = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tickerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-6 sm:py-10 overflow-hidden"
    >
      <div
        ref={tickerRef}
        className="relative overflow-hidden"
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10"></div>

        {/* Ticker Track */}
        <div className="flex animate-ticker">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-5 sm:px-8 py-2.5 group flex-shrink-0"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 transition-all duration-300 opacity-50 group-hover:opacity-100">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span className="text-sm font-medium text-[#d9d9d9] whitespace-nowrap">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTicker;
