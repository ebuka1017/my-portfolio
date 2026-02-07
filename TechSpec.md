# Isaac Okwuzi Portfolio - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Installation |
|-----------|---------|--------------|
| Button | CTA buttons, interactions | `npx shadcn add button` |
| Badge | Section labels, tags | `npx shadcn add badge` |
| Card | Project cards, experience cards | `npx shadcn add card` |
| Separator | Visual dividers | `npx shadcn add separator` |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| OrbitalBadge | Floating name/availability badges | `src/components/OrbitalBadge.tsx` |
| ProjectCarousel | 3D horizontal scroll projects | `src/sections/Projects.tsx` |
| Timeline | 3D experience timeline | `src/sections/Experience.tsx` |
| SkillFlipCard | 3D flip skill cards | `src/sections/Skills.tsx` |
| OrbitalSocial | Orbiting social icons | `src/sections/CTA.tsx` |
| LogoTicker | Infinite scroll logo strip | `src/sections/LogoTicker.tsx` |
| ParticleBackground | Floating particles effect | `src/components/ParticleBackground.tsx` |
| MagneticButton | Magnetic hover CTA | `src/components/MagneticButton.tsx` |

### Custom Hooks
| Hook | Purpose | Location |
|------|---------|----------|
| useScrollProgress | Track scroll progress | `src/hooks/useScrollProgress.ts` |
| useInView | Intersection observer | `src/hooks/useInView.ts` |
| useMousePosition | Track mouse for magnetic effects | `src/hooks/useMousePosition.ts` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero Profile 3D Tilt | CSS + React State | CSS transform on hover, perspective container | Medium |
| Orbital Badge Rotation | GSAP ScrollTrigger | Scroll-linked rotation animation | High |
| Character Stagger Reveal | GSAP | Split text, staggered translateY/opacity | Medium |
| Floating Particles | CSS Animation | Random positioned divs with CSS keyframes | Low |
| Availability Dot Pulse | CSS Animation | Scale/opacity keyframes, infinite | Low |
| Logo Ticker Infinite Scroll | CSS Animation | translateX animation, duplicated content | Low |
| Project Horizontal Scroll | GSAP ScrollTrigger | Pin section, translateX on scroll | High |
| Project Card 3D Rotation | GSAP ScrollTrigger | rotateY + translateZ on scroll progress | High |
| Card Hover 3D Lift | CSS | translateZ + scale on hover | Low |
| Timeline Line Draw | GSAP ScrollTrigger | scaleY animation linked to scroll | Medium |
| Experience Card 3D Flip | GSAP | rotateX entrance animation | Medium |
| Skill Card 3D Flip | CSS | rotateY on hover, backface-visibility | Medium |
| Social Icons Orbit | CSS Animation | rotate animation, counter-rotate children | Medium |
| Magnetic Button | React + CSS | Mouse position tracking, transform on hover | Medium |
| Footer Border Draw | GSAP | scaleX animation on scroll trigger | Low |
| Section Fade Reveals | GSAP ScrollTrigger | Intersection-triggered opacity/translateY | Low |

---

## Animation Library Choices

### GSAP (GreenSock Animation Platform)
**Rationale:**
- Industry-standard for complex scroll animations
- ScrollTrigger plugin for scroll-linked effects
- Excellent performance with GPU acceleration
- Precise timing control

**Used For:**
- Scroll-triggered section reveals
- Horizontal scroll conversion (Projects)
- 3D card rotations
- Timeline line draw
- Complex stagger animations

### CSS Animations
**Rationale:**
- Best performance for simple continuous animations
- No JavaScript overhead
- Hardware accelerated

**Used For:**
- Floating particles
- Logo ticker
- Availability dot pulse
- Social icon orbit
- Simple hover transitions

### CSS Transitions
**Rationale:**
- Simple state-based animations
- Excellent performance
- Easy to implement

**Used For:**
- Button hovers
- Card hovers
- Link underlines
- Color transitions

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Hero profile image
│   │   ├── copiedcatz.jpg       # Project 1 screenshot
│   │   ├── baseguard.jpg        # Project 2 screenshot
│   │   ├── cookflow.jpg         # Project 3 screenshot
│   │   └── learningwithgrace.jpg # Project 4 screenshot
│   └── fonts/                   # If self-hosting fonts
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   └── separator.tsx
│   │   ├── OrbitalBadge.tsx     # Floating orbital badges
│   │   ├── ParticleBackground.tsx # Floating particles
│   │   ├── MagneticButton.tsx   # Magnetic hover button
│   │   └── SplitText.tsx        # Text splitting for animations
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section
│   │   ├── LogoTicker.tsx       # Logo ticker section
│   │   ├── Projects.tsx         # Projects carousel
│   │   ├── Experience.tsx       # Experience timeline
│   │   ├── Skills.tsx           # Skills grid
│   │   ├── CTA.tsx              # Call-to-action
│   │   └── Footer.tsx           # Footer
│   ├── hooks/
│   │   ├── useScrollProgress.ts # Scroll progress tracker
│   │   ├── useInView.ts         # Intersection observer
│   │   └── useMousePosition.ts  # Mouse position tracker
│   ├── lib/
│   │   ├── utils.ts             # Utility functions
│   │   └── animations.ts        # Animation presets
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind imports
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies

### Core Dependencies (from webapp-building skill)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (via shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Animation Dependencies
```bash
npm install gsap @gsap/react
```

### Font Dependencies
- Google Fonts via WebFont loader (Bricolage Grotesque)

---

## Implementation Phases

### Phase 1: Setup & Foundation
1. Initialize project with webapp-building skill
2. Install shadcn components (button, badge, card, separator)
3. Install GSAP animation library
4. Set up global styles and CSS variables
5. Configure fonts (Bricolage Grotesque)

### Phase 2: Static Layout
1. Build Hero section with profile image
2. Build LogoTicker section
3. Build Projects section with cards
4. Build Experience timeline
5. Build Skills grid
6. Build CTA section
7. Build Footer

### Phase 3: Animation Implementation
1. Implement scroll-triggered reveals (GSAP ScrollTrigger)
2. Add hero orbital animations
3. Implement project horizontal scroll
4. Add timeline line draw
5. Implement skill card flips
6. Add social icon orbit
7. Implement magnetic button

### Phase 4: Polish & Optimization
1. Add hover effects
2. Implement reduced motion support
3. Optimize performance (will-change, GPU)
4. Test responsive behavior
5. Cross-browser testing

---

## CSS Variables

```css
:root {
  /* Colors */
  --color-bg-primary: #1a1a1a;
  --color-bg-card: #202020;
  --color-bg-input: #2e2e2e;
  --color-text-primary: #d9d9d9;
  --color-text-secondary: #8c8c8c;
  --color-text-muted: #707070;
  --color-accent: #8c8c8c;
  --color-border: rgba(217, 217, 217, 0.16);
  --color-green: #4ade80;
  
  /* Easing */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-expo: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Durations */
  --duration-micro: 150ms;
  --duration-fast: 300ms;
  --duration-medium: 500ms;
  --duration-slow: 800ms;
  --duration-cinematic: 1200ms;
}
```

---

## Performance Checklist

- [ ] Use `transform` and `opacity` for animations (GPU accelerated)
- [ ] Apply `will-change` before animations, remove after
- [ ] Use CSS animations for simple continuous effects
- [ ] Throttle scroll events (use GSAP's optimized scroll)
- [ ] Implement `prefers-reduced-motion` media query
- [ ] Lazy load images below the fold
- [ ] Use Intersection Observer for triggering
- [ ] Minimize layout thrashing
- [ ] Test on mobile devices
- [ ] Verify 60fps on target devices
