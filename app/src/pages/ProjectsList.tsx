import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight, Sparkles, Palette, Github, Images } from 'lucide-react';
import { projects } from '../data/projects';
import ParticleBackground from '../components/ParticleBackground';
import ImageGallery from '../components/ImageGallery';


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
    <div className="relative min-h-screen bg-canvas overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="mb-10 sm:mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sub hover:text-ink transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-3">
              All Projects
            </h1>
            <p className="text-base sm:text-lg text-sub max-w-xl">
              A complete collection of my work across apps, design, and open source.
            </p>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-14 sm:space-y-16">
            {/* Apps Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sub" />
                Apps
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {apps.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="project-card group block relative bg-surface rounded-xl sm:rounded-2xl overflow-hidden border border-ink/10 transition-all duration-500 hover:border-ink/20 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                      
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-bold text-ink mb-2 group-hover:text-ink transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-sub line-clamp-2 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-ink font-medium">
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
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-sub" />
                Design Work
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {designProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card group block relative bg-surface rounded-xl sm:rounded-2xl overflow-hidden border border-ink/10 transition-all duration-500 hover:border-ink/20 hover:shadow-xl hover:-translate-y-1"
                  >
                    <Link to={`/projects/${project.slug}`}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                      </div>
                    </Link>

                    <div className="p-4 sm:p-5">
                      <Link to={`/projects/${project.slug}`}>
                        <h3 className="text-lg sm:text-xl font-bold text-ink mb-2 group-hover:text-ink transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-sub line-clamp-2 mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Link 
                          to={`/projects/${project.slug}`}
                          className="flex items-center gap-1 text-sm text-ink font-medium hover:text-ink transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        {project.screenshots && project.screenshots.length > 0 && (
                          <button
                            onClick={() => openGallery(project.screenshots || [], 0)}
                            className="flex items-center gap-1.5 text-sm text-sub font-medium hover:text-ink transition-colors"
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
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-sub" />
                GitHub Projects
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {githubProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="project-card group flex gap-4 sm:gap-5 bg-surface rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-ink/10 transition-all duration-500 hover:border-ink/20 hover:shadow-xl"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-ink mb-1 sm:mb-2 group-hover:text-ink transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-sm text-sub line-clamp-2 mb-2 sm:mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-ink font-medium">
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
