import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const SplitText = ({ children, className = '', delay = 0 }: SplitTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(
      chars,
      { 
        y: 40, 
        opacity: 0,
        rotateX: -30,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: 'power3.out',
      }
    );
  }, [delay]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {children.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ 
            transformStyle: 'preserve-3d',
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
