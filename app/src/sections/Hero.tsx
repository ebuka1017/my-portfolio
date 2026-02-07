import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, Twitter } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Profile image entrance
      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        0
      );

      // Name entrance
      tl.fromTo(
        nameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.2
      );

      // Title entrance
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.4
      );

      // Description fade
      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.6
      );

      // Buttons entrance
      tl.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.8
      );

      // Socials entrance
      tl.fromTo(
        socialsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        1
      );

      // Scroll-based effects
      gsap.to(imageRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-5 lg:space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#202020] rounded-full border border-[#d9d9d9]/10">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#4ade80]"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#d9d9d9]">available for work</span>
            </div>

            {/* Name - Single Line */}
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#d9d9d9] leading-none tracking-tight whitespace-nowrap"
            >
              ISAAC OKWUZI
            </h1>

            {/* Title */}
            <h2
              ref={titleRef}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#8c8c8c]"
            >
              Design Engineer
            </h2>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#8c8c8c] max-w-lg leading-relaxed"
            >
              Detail-obsessed designer and product engineer with experience in designing 
              and building both Fintech and Utility software. Skilled at simplifying complex 
              systems and delivering thoughtfully crafted experiences.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap gap-3 pt-1">
              <MagneticButton href="https://calendly.com/isaacokwuzi/30min">
                Schedule a call
              </MagneticButton>
              <a
                href="/ISAAC_OKWUZI_OFFICIAL.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#202020] text-[#d9d9d9] font-medium rounded-full border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#2e2e2e] hover:border-[#d9d9d9]/20 group text-sm sm:text-base"
              >
                Download Resume
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Social Links */}
            <div ref={socialsRef} className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ebuka1017"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#202020] flex items-center justify-center border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#d9d9d9] hover:text-[#1a1a1a] group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#8c8c8c] group-hover:text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/isaacokwuzi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#202020] flex items-center justify-center border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#d9d9d9] hover:text-[#1a1a1a] group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#8c8c8c] group-hover:text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/nothiro__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#202020] flex items-center justify-center border border-[#d9d9d9]/10 transition-all duration-300 hover:bg-[#d9d9d9] hover:text-[#1a1a1a] group"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#8c8c8c] group-hover:text-[#1a1a1a]" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                ref={imageRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]"
              >
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Isaac Okwuzi"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Decorative Rings */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-2xl sm:rounded-3xl border border-[#d9d9d9]/10 -z-10"></div>
                <div className="absolute -inset-6 sm:-inset-8 rounded-2xl sm:rounded-3xl border border-[#d9d9d9]/5 -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
