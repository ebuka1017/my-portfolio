import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Border draw animation
      gsap.fromTo(
        borderRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        }
      );

      // Content fade in
      const elements = contentRef.current?.querySelectorAll('.footer-item');
      elements?.forEach((el, index) => {
        gsap.fromTo(
          el,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2 + index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 95%',
            },
          }
        );
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-6 sm:py-8">
      {/* Top Border */}
      <div
        ref={borderRef}
        className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-[#d9d9d9]/10 origin-left"
      ></div>

      <div
        ref={contentRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
      >
        <p className="footer-item text-center text-xs sm:text-sm text-[#8c8c8c]">
          © 2026 Isaac Okwuzi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
