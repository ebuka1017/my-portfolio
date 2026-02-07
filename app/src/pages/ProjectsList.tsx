import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight, Sparkles, Palette, Github, Images } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { projects } from '../data/projects';
import ParticleBackground from '../components/ParticleBackground';
import ImageGallery from '../components/ImageGallery';

// Tag color mapping
const getTagColor = (tag: string): string => {
  const colors: Record<string, string> = {
    'AI/ML': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Image Generation': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'Next.js': 'bg-white/10 text-gray-300 border-white/20',
    'TypeScript': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Bria AI': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'CLI Tool': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Developer Tools': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Node.js': 'bg-green-600/20 text-green-400 border-green-600/30',
    'AI': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Open Source': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Voice AI': 'bg-red-500/20 text-red-300 border-red-500/30',
    'Food Tech': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Gemini AI': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Web App': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'EdTech': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    'AI Tutoring': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    'React': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'ElevenLabs': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'Tavus': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    'C': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    'Low-level Programming': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    'ALX': 'bg-red-600/20 text-red-400 border-red-600/30',
    'Systems Programming': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    'Operating Systems': 'bg-indigo-600/20 text-indigo-400 border-indigo-600/30',
    'Fintech': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    'Product Design': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'UX Research': 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    'UI Design': 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    'AI Assistant': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    'Mobile Design': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Voice UI': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'Brand Identity': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    'Ecommerce': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'Web Design': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'UI Kit': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    'UX Design': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
    'Onboarding': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Web Platform': 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
    'Mobile App': 'bg-pink-600/20 text-pink-400 border-pink-600/30',
    'React Native': 'bg-blue-400/20 text-blue-400 border-blue-400/30',
  };
  return colors[tag] || 'bg-[#2e2e2e] text-[#8c8c8c] border-[#3e3e3e]';
};

const ProjectsList = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Gallery state for design projects
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );

    const cards = contentRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card, index) => {
      tl.fromTo(
        card,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        0.2 + index * 0.05
      );
    });
  }, []);

  const apps = projects.filter(p => p.category === 'app');
  const githubProjects = projects.filter(p => p.category === 'github');
  const designProjects = projects.filter(p => p.category === 'design');

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="mb-10 sm:mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#8c8c8c] hover:text-[#d9d9d9] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9d9d9] mb-3">
              All Projects
            </h1>
            <p className="text-base sm:text-lg text-[#8c8c8c] max-w-xl">
              A complete collection of my work across apps, design, and open source.
            </p>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-14 sm:space-y-16">
            {/* Apps Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#d9d9d9] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#8c8c8c]" />
                Apps
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {apps.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="project-card group block relative bg-[#202020] rounded-xl sm:rounded-2xl overflow-hidden border border-[#d9d9d9]/10 transition-all duration-500 hover:border-[#d9d9d9]/20 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent"></div>
                      
                      {project.isVibeEngineered && (
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <Badge className="bg-[#d9d9d9] text-[#1a1a1a] text-[10px] sm:text-xs font-medium border-none">
                            Vibe Engineered
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#d9d9d9] mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#8c8c8c] line-clamp-2 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#d9d9d9] font-medium">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Design Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#d9d9d9] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#8c8c8c]" />
                Design Work
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {designProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group block relative bg-[#202020] rounded-xl sm:rounded-2xl overflow-hidden border border-[#d9d9d9]/10 transition-all duration-500 hover:border-[#d9d9d9]/20 hover:shadow-xl hover:-translate-y-1"
                  >
                    <Link to={`/projects/${project.slug}`}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent"></div>
                      </div>
                    </Link>

                    <div className="p-4 sm:p-5">
                      <Link to={`/projects/${project.slug}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-[#d9d9d9] mb-2 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-[#8c8c8c] line-clamp-2 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link 
                          to={`/projects/${project.slug}`}
                          className="flex items-center gap-1 text-sm text-[#d9d9d9] font-medium hover:text-white transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        {project.screenshots && project.screenshots.length > 0 && (
                          <button
                            onClick={() => openGallery(project.screenshots || [], 0)}
                            className="flex items-center gap-1.5 text-sm text-[#8c8c8c] font-medium hover:text-[#d9d9d9] transition-colors"
                          >
                            <Images className="w-4 h-4" />
                            <span>View Screens</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* GitHub Projects Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#d9d9d9] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-[#8c8c8c]" />
                GitHub Projects
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {githubProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="project-card group flex gap-4 sm:gap-5 bg-[#202020] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#d9d9d9]/10 transition-all duration-500 hover:border-[#d9d9d9]/20 hover:shadow-xl"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[#d9d9d9] mb-1 sm:mb-2 group-hover:text-white transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#8c8c8c] line-clamp-2 mb-2 sm:mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[#d9d9d9] font-medium">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={galleryImages}
        currentIndex={galleryIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default ProjectsList;
