import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { 
  Figma, 
  Code2, 
  Layers, 
  Palette, 
  Box,
  Lightbulb,
  Users,
  BarChart3,
  GitBranch,
  Database,
  Cloud,
  Terminal,
  Wrench
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: 'Design',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Framer', icon: Box },
      { name: 'UI/UX Design', icon: Layers },
      { name: 'Prototyping', icon: Lightbulb },
      { name: 'Interaction Design', icon: Code2 },
      { name: 'Web Design', icon: Palette },
    ],
  },
  {
    name: 'Technical',
    icon: Code2,
    skills: [
      { name: 'JavaScript/TypeScript', icon: Code2 },
      { name: 'ReactJS', icon: Box },
      { name: 'Python', icon: Terminal },
      { name: 'HTML/CSS', icon: Layers },
      { name: 'SQL', icon: Database },
      { name: 'Git', icon: GitBranch },
      { name: 'Bash', icon: Wrench },
      { name: 'GCP', icon: Cloud },
    ],
  },
  {
    name: 'Product',
    icon: BarChart3,
    skills: [
      { name: 'Agile', icon: Users },
      { name: 'Product Management', icon: BarChart3 },
      { name: 'Business Analysis', icon: Lightbulb },
      { name: 'Market Research', icon: BarChart3 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
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

      // Category labels animation
      const labels = categoriesRef.current?.querySelectorAll('.category-label');
      labels?.forEach((label, index) => {
        gsap.fromTo(
          label,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      });

      // Skill cards staggered animation
      const cards = categoriesRef.current?.querySelectorAll('.skill-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            scale: 0.8, 
            opacity: 0, 
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: index * 0.04,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          }
        );
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
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <Badge 
            variant="secondary" 
            className="mb-3 bg-[#202020] text-[#8c8c8c] border-none hover:bg-[#2e2e2e]"
          >
            skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9d9d9] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-[#8c8c8c] max-w-2xl mx-auto">
            Technologies and tools I work with daily to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={categoriesRef} className="space-y-10 sm:space-y-14">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.name}>
                {/* Category Label */}
                <div className="category-label flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#202020] flex items-center justify-center">
                    <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#d9d9d9]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#d9d9d9]">{category.name}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    const cardId = `${category.name}-${skill.name}`;
                    const isFlipped = flippedCard === cardId;

                    return (
                      <div
                        key={skill.name}
                        className="skill-card relative h-20 sm:h-24 perspective-1000 cursor-pointer"
                        onClick={() => setFlippedCard(isFlipped ? null : cardId)}
                      >
                        <div
                          className="relative w-full h-full transition-transform duration-500 preserve-3d"
                          style={{
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                          }}
                        >
                          {/* Front */}
                          <div className="absolute inset-0 backface-hidden bg-[#202020] rounded-lg sm:rounded-xl border border-[#d9d9d9]/10 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-[#d9d9d9]/20 hover:bg-[#2e2e2e]">
                            <SkillIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8c8c8c]" />
                            <span className="text-xs sm:text-sm font-medium text-[#d9d9d9] text-center px-2">
                              {skill.name}
                            </span>
                          </div>

                          {/* Back */}
                          <div
                            className="absolute inset-0 backface-hidden bg-[#d9d9d9] rounded-lg sm:rounded-xl flex items-center justify-center"
                            style={{ transform: 'rotateY(180deg)' }}
                          >
                            <span className="text-xs sm:text-sm font-bold text-[#1a1a1a]">Proficient</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
