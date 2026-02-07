import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ExternalLink, Play, Sparkles, Images } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getProjectBySlug } from '../data/projects';
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
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      <ParticleBackground />
      
      <main className="relative z-10 py-16 sm:py-20">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#8c8c8c] hover:text-[#d9d9d9] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div ref={headerRef} className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              {project.isVibeEngineered && (
                <Badge className="bg-[#d9d9d9] text-[#1a1a1a] font-medium border-none text-xs sm:text-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Vibe Engineered
                </Badge>
              )}
              <Badge 
                variant="secondary" 
                className="bg-[#202020] text-[#8c8c8c] border-none capitalize text-xs sm:text-sm"
              >
                {project.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d9d9d9] mb-3 sm:mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main Image or YouTube Embed */}
          <div ref={imageRef} className="mb-8 sm:mb-12">
            {youtubeId ? (
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#202020] border border-[#d9d9d9]/10">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#202020] border border-[#d9d9d9]/10">
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
              <h2 className="text-xl sm:text-2xl font-bold text-[#d9d9d9] mb-3 sm:mb-4">About</h2>
              <div className="text-base sm:text-lg text-[#8c8c8c] leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>

              {/* Screenshots Section */}
              {galleryImages.length > 0 && (
                <div className="mt-10 sm:mt-12">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#d9d9d9]">
                      {project.category === 'design' ? 'Design Screens' : 'Screenshots'}
                    </h2>
                    <button
                      onClick={() => openGallery(0)}
                      className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#202020] rounded-full border border-[#d9d9d9]/10 text-sm text-[#d9d9d9] hover:bg-[#2e2e2e] hover:border-[#d9d9d9]/20 transition-all"
                    >
                      <Images className="w-4 h-4" />
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {galleryImages.map((screenshot, index) => (
                      <div 
                        key={index} 
                        className="aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-[#202020] border border-[#d9d9d9]/10 cursor-pointer group"
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
                <h2 className="text-lg sm:text-xl font-bold text-[#d9d9d9] mb-3 sm:mb-4">Links</h2>
                <div className="space-y-2 sm:space-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 sm:p-4 bg-[#202020] rounded-lg sm:rounded-xl border border-[#d9d9d9]/10 transition-all duration-300 hover:border-[#d9d9d9]/20 hover:bg-[#2e2e2e] group"
                    >
                      <span className="font-medium text-[#d9d9d9] text-sm sm:text-base">{link.label}</span>
                      <ExternalLink className="w-4 h-4 text-[#8c8c8c] group-hover:text-[#d9d9d9] transition-colors" />
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
                      className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 bg-[#202020] text-[#d9d9d9] rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:bg-[#2e2e2e] border border-[#d9d9d9]/10 hover:border-[#d9d9d9]/20 group"
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
