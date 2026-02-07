import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../sections/Hero';
import ToolsTicker from '../sections/ToolsTicker';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import ParticleBackground from '../components/ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Initialize scroll-triggered animations for sections
    const sections = document.querySelectorAll('.reveal-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.9, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
        <ToolsTicker />
        <Projects />
        <Experience />
        <Skills />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
