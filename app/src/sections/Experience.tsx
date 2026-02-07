import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: 'Independent Contractor',
    company: 'Product Design',
    period: '11/2024 - Present',
    description: 'Solving complex design and engineering problems for individuals and small business clients, focusing on web aesthetics and user interfaces.',
  },
  {
    id: 2,
    role: 'Founding Member',
    company: 'Simpl Technologies',
    period: '03/2024 - Present',
    description: 'Lead UI/UX design and documentation for product launches, ensuring high-quality web aesthetics and user experience.',
  },
  {
    id: 3,
    role: 'Design Coach',
    company: 'Thrive Nest',
    period: '01/2024 - 02/2025',
    description: 'Developed and delivered a peer-driven curriculum on product design fundamentals, mentoring aspiring designers.',
  },
  {
    id: 4,
    role: 'Business Development Lead',
    company: 'GSG Ventures',
    period: '10/2021 - 01/2023',
    description: 'Pioneered an innovative crowdsourced delivery model and spearheaded warehouse automation.',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Timeline line draw
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          },
        }
      );

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            rotateX: -45,
            y: 50,
            opacity: 0,
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Dot pulse animation
        const dot = card.querySelector('.timeline-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.4,
              delay: index * 0.15 + 0.3,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 reveal-section"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">
          {/* Header - Sticky on desktop */}
          <div ref={headerRef} className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
            <Badge 
              variant="secondary" 
              className="mb-3 bg-[#202020] text-[#8c8c8c] border-none hover:bg-[#2e2e2e]"
            >
              experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9d9d9] mb-4">
              Work Experience
            </h2>
            <p className="text-base sm:text-lg text-[#8c8c8c]">
              My professional journey in design engineering and product development.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="lg:col-span-3 relative">
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-[#d9d9d9]/10">
              <div
                ref={lineRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#d9d9d9]/50 to-[#d9d9d9]/10 origin-top"
                style={{ height: '100%' }}
              ></div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="experience-card relative pl-10 sm:pl-14 perspective-1000"
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-0 sm:left-1 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#202020] border border-[#d9d9d9]/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#d9d9d9]"></div>
                  </div>

                  {/* Card */}
                  <div className="group bg-[#202020] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#d9d9d9]/10 transition-all duration-300 hover:border-[#d9d9d9]/20 hover:translate-x-1 sm:hover:translate-x-2">
                    {/* Period */}
                    <span className="text-xs sm:text-sm text-[#8c8c8c] font-medium">
                      {exp.period}
                    </span>

                    {/* Role & Company */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#d9d9d9] mt-1 mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8c8c8c] font-medium mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#8c8c8c] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
