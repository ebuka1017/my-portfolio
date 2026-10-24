import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ExternalLink, Play, Images } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import ParticleBackground from '../components/ParticleBackground';
import ImageGallery from '../components/ImageGallery';


const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Gallery state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryImages = project?.screenshots || [];

  const openGallery = (index: number) => {
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
    
    if (!project) return;

    const tl = gsap.timeline();
    
    tl.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );

    tl.fromTo(
      imageRef.current,
      { y: 40, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
      0.2
    );

    tl.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      0.4
    );

    tl.fromTo(
      linksRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
      0.5
    );
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Extract YouTube video ID if it's a YouTube link
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&\s?]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = project.demoVideo ? getYouTubeId(project.demoVideo) : null;

  return (
    <div className="relative min-h-screen bg-canvas overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10 py-16 sm:py-20">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sub hover:text-ink transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div ref={headerRef} className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-3 sm:mb-4">
              {project.title}
            </h1>
            
          </div>

          {/* Main Image or YouTube Embed */}
          <div ref={imageRef} className="mb-8 sm:mb-12">
            {youtubeId ? (
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface border border-ink/10">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-surface border border-ink/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div ref={contentRef} className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3 sm:mb-4">About</h2>
              <div className="text-base sm:text-lg text-sub leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>

              {/* Screenshots Section */}
              {galleryImages.length > 0 && (
                <div className="mt-10 sm:mt-12">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-ink">
                      {project.category === 'design' ? 'Design Screens' : 'Screenshots'}
                    </h2>
                    <button
                      onClick={() => openGallery(0)}
                      className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-surface rounded-full border border-ink/10 text-sm text-ink hover:bg-raise hover:border-ink/20 transition-all"
                    >
                      <Images className="w-4 h-4" />
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {galleryImages.map((screenshot, index) => (
                      <div 
                        key={index} 
                        className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-surface border border-ink/10 cursor-pointer group"
                        onClick={() => openGallery(index)}
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Links Sidebar */}
            <div ref={linksRef} className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <h2 className="text-lg sm:text-xl font-bold text-ink mb-3 sm:mb-4">Links</h2>
                <div className="space-y-2 sm:space-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 sm:p-4 bg-surface rounded-lg sm:rounded-xl border border-ink/10 transition-all duration-300 hover:border-ink/20 hover:bg-raise group"
                    >
                      <span className="font-medium text-ink text-sm sm:text-base">{link.label}</span>
                      <ExternalLink className="w-4 h-4 text-sub group-hover:text-ink transition-colors" />
                    </a>
                  ))}
                </div>

                {/* YouTube Demo Link (if not embedded) */}
                {project.demoVideo && !youtubeId && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 bg-surface text-ink rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:bg-raise border border-ink/10 hover:border-ink/20 group"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      Watch Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
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

export default ProjectDetail;
