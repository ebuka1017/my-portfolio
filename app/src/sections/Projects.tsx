import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

// Pick the 3 best projects
const featuredProjects = [
  projects.find(p => p.slug === 'copiedcatz'),
  projects.find(p => p.slug === 'simplmonie'),
  projects.find(p => p.slug === 'baseguard'),
].filter(Boolean);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <Badge 
              variant="secondary" 
              className="mb-3 bg-surface text-sub border-none hover:bg-raise"
            >
              my work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
              Selected Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-ink font-medium rounded-full border border-ink/10 transition-all duration-300 hover:bg-raise hover:border-ink/20 group self-start sm:self-auto text-sm sm:text-base"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Projects Grid - 3 wider cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {featuredProjects.map((project) => {
            if (!project) return null;
            return (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="project-card group block relative bg-surface rounded-2xl sm:rounded-3xl overflow-hidden border border-ink/10 transition-all duration-500 hover:border-ink/25 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image Container - wider aspect ratio (16/10) */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                  
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h4 className="text-lg sm:text-xl font-bold text-ink mb-1.5 group-hover:text-ink transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-sub line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-ink font-medium">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
