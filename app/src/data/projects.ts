export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'design' | 'app' | 'github';
  description: string;
  fullDescription: string;
  image: string;
  screenshots?: string[];
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
  isVibeEngineered?: boolean;
  demoVideo?: string;
}

export const projects: Project[] = [
  // Apps
  {
    id: '1',
    title: 'CopiedCatz',
    slug: 'copiedcatz',
    category: 'app',
    description: 'AI-powered platform that extracts "Visual DNA" from images and generates new variations based on that DNA.',
    fullDescription: `CopiedCatz is an AI-powered platform that extracts "Visual DNA" from images (lighting, composition, camera settings, etc.) and allows users to generate new variations based on that "DNA".

💡 Inspiration
We've all been there: you see an amazing ad, a stunning movie poster, or a perfect Instagram shot, and you think, "I wish I could make something like that, but with my product." Current AI tools are like a slot machine. We wanted to build a tool that lets you copy the recipe, not just the image.

🚀 What it does
• Extract: Upload any image and our AI analyzes it and extracts its "DNA"
• Remix: Edit the structured plan without breaking the overall style
• Generate: The AI creates your new image using professional settings
• Edit & Perfect: Professional tools to tweak focus, remove backgrounds, or upscale

⚙️ How we built it
Built using Next.js, Supabase, Pusher, and Bria AI's unique ability to understand images as structured JSON rather than just pixels.

🏆 Accomplishments
• The "Magic Prompt" - intelligent assistant that fills in complex photography settings
• True Professional Control - sliders for Depth of Field and Focal Length
• Dynamic "No-Code" Editor - friendly titled boxes for every object
• 100% Service Coverage - Generation, Extraction, Background Removal, and Upscaling`,
    image: '/images/copiedcatz.jpg',
    tags: ['AI/ML', 'Image Generation', 'Next.js', 'TypeScript', 'Bria AI'],
    links: [
      { label: 'Live App', url: 'https://copiedcatz.netlify.app' },
    ],
    isVibeEngineered: true,
    demoVideo: 'https://youtu.be/rKod0dOpdAU',
  },
  {
    id: '2',
    title: 'Baseguard',
    slug: 'baseguard',
    category: 'app',
    description: 'CLI tool that blocks browser compatibility bugs from going live using Baseline data and AI-powered auto-fixing.',
    fullDescription: `Baseguard prevents you from shipping code with browser compatibility issues. When you git-commit, Baseguard scans code against baseline data, searches the web for possible fixes, then applies them.

🌱 Inspiration
Browser compatibility checking creates extra work for web developers. They spend time searching documentation, adding fallback code, and testing in different browsers. BaseGuard was built to let AI handle compatibility.

🛠️ What it does
When developers commit their code, BaseGuard:
• Scans for unsupported features using official Baseline data
• Uses Gemini AI to give advice on best fixes and explain user impact
• Automatically applies fixes using the Jules coding agent

🧰 How we built it
• Detection uses web-features and custom parsers
• Analysis connects to Gemini AI for researching fixes
• Implementation uses Jules AI to write code patches
• Integration uses Husky to add git hooks

Tech stack: Node.js, Commander.js, Babel, PostCSS, Gemini, Jules, Husky

🏆 Accomplishments
• First to combine Baseline detection with AI-powered auto-fixing
• Works with any editor since it relies on git
• Fast setup with good defaults`,
    image: '/images/baseguard.jpg',
    tags: ['CLI Tool', 'Developer Tools', 'Node.js', 'AI', 'Open Source'],
    links: [
      { label: 'NPM Package', url: 'https://www.npmjs.com/package/baseguard' },
      { label: 'GitHub', url: 'https://github.com/ebuka1017/baseguard' },
    ],
    isVibeEngineered: true,
    demoVideo: 'https://youtu.be/OknrfYpLdBo',
  },
  {
    id: '3',
    title: 'CookFlow+',
    slug: 'cookflow',
    category: 'app',
    description: 'Cooking assistant that turns any YouTube recipe video into a hands-free, personalized cooking experience.',
    fullDescription: `CookFlow+ is a cooking assistant that turns any YouTube recipe video into a hands-free, personalized cooking experience. It solves the pain of pausing, rewinding, and juggling messy hands while trying to cook along with videos.

Paste a link, and CookFlow+ gives you:
• Structured Recipes with steps, ingredients, timestamps, and tips from the chef
• Smart Substitutions when you don't have an ingredient
• Voice-Guided Cooking so you can ask questions, or say "next step" or "repeat" while you cook
• Video Analysis to find key moments, product mentions, and summaries

Built for the Google AI Challenge using Gemini AI.`,
    image: '/images/cookflow.jpg',
    tags: ['Voice AI', 'Food Tech', 'Gemini AI', 'Web App'],
    links: [
      { label: 'Read Article', url: 'https://dev.to/otnotorious/cookflow-turn-any-youtube-recipe-into-a-hands-free-voice-guided-cooking-experience-3ce1' },
      { label: 'Try Demo', url: 'https://ai.studio/apps/drive/1UMtEMDB_mmLb7WLFu_Hn6j9mIXTxvjYd' },
    ],
    isVibeEngineered: true,
  },
  {
    id: '4',
    title: 'LearningWithGrace',
    slug: 'learningwithgrace',
    category: 'app',
    description: 'AI-powered learning platform that builds learning paths based on skill level and delivers personalized education.',
    fullDescription: `G.R.A.C.E. is an AI-powered learning platform that builds learning paths based on skill level, tests understanding at every step, and delivers personalized, voice and video driven education.

💡 Inspiration
I wanted a tool that could break things down for me, adapt to how I think, and actually help me learn. This is what pushed me to work on G.R.A.C.E.

What it does
G.R.A.C.E. helps anyone learn anything by creating a step-by-step learning path. It breaks big topics into smaller parts and adds short tests after each one. Users can interact through voice, chat, or live video calls with an AI teacher.

How I built it
• Gemini 2.5 Flash for learning paths and checkpoint questions
• ElevenLabs for voice interaction
• Tavus for live AI video tutoring
• React frontend with Supabase for data management

🏆 Accomplishments
Users have already said it helps them learn better. Some students told me they got value just from seeing how a topic was broken down.`,
    image: '/images/learningwithgrace.jpg',
    tags: ['EdTech', 'AI Tutoring', 'React', 'ElevenLabs', 'Tavus'],
    links: [
      { label: 'Live App', url: 'https://learningwithgrace.netlify.app' },
    ],
    isVibeEngineered: true,
    demoVideo: 'https://youtu.be/8RNzRDRpXEw',
  },
  // GitHub Projects
  {
    id: '5',
    title: 'Custom Printf',
    slug: 'custom-printf',
    category: 'github',
    description: 'A custom implementation of the printf function in C, handling various format specifiers.',
    fullDescription: `A custom implementation of the printf function in C from scratch. This project handles various format specifiers including %c, %s, %d, %i, %u, %o, %x, %X, %p, %%, and more.

Built as part of the ALX Software Engineering program to understand low-level programming and variadic functions. This project demonstrates:

• Handling of multiple format specifiers
• Variable arguments (variadic functions)
• Memory management
• String manipulation
• Integer to string conversion (various bases)

This was a deep dive into how standard library functions work under the hood.`,
    image: '/images/printf-thumb.jpg',
    screenshots: ['/images/printf.jpg'],
    tags: ['C', 'Low-level Programming', 'ALX', 'Systems Programming'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/ebuka1017/printf' },
    ],
  },
  {
    id: '6',
    title: 'Simple Shell',
    slug: 'simple-shell',
    category: 'github',
    description: 'A UNIX command line interpreter (shell) built in C with process management.',
    fullDescription: `A UNIX command line interpreter (shell) built in C. This project implements core shell functionality including command execution, process management, and environment variable handling.

Features:
• Command execution with arguments
• Process management (fork, exec, wait)
• Environment variable handling
• Built-in commands: cd, exit, env, setenv, unsetenv
• Path resolution
• Signal handling

A deep dive into operating systems concepts and how shells work under the hood. Built as part of the ALX Software Engineering program.`,
    image: '/images/shell-thumb.jpg',
    screenshots: ['/images/shell.jpg'],
    tags: ['C', 'Operating Systems', 'Systems Programming', 'ALX'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/ebuka1017/simple_shell' },
    ],
  },
  // Design Projects
  {
    id: '7',
    title: 'SimplMonie',
    slug: 'simplmonie',
    category: 'design',
    description: 'Real-time global money transfer platform connecting bank accounts without wallets or IBAN requirements.',
    fullDescription: `SimplMonie is a platform for real-time global money transfer. Users connect credit/debit cards from any financial platform and can send money from their local bank account to any financial platform globally—including transactions between region-specific accounts.

There's no need to own an IBAN and there's no wallet to top up. Money only leaves your bank when a transaction is initiated, letting users experience the speed of fintech while enjoying the security of legacy banking.

The Problem
Research revealed pain points in international transfers: high fees, slow processing, complex procedures. Additionally, a deep trust issue in African fintech meant users preferred traditional banks despite inefficiencies.

My Role (Sole Designer)
• Led entire design effort & copywriting
• Conducted user outreach and interviews
• Documentation analysis during technical deepdives
• Product management to prevent scope creep

Deliverables: User Research, Mood Board & Style Guide, High Fidelity Prototype`,
    image: '/images/simplmonie-thumbnail.png',
    screenshots: [
      '/images/simplmonie1.png',
      '/images/simplmonie2.png',
      '/images/simplmonie3.png',
      '/images/simplmonie4.png',
      '/images/simplmonie5.png',
      '/images/simplmonie6.png',
      '/images/simplmonie7.png',
      '/images/simplmonie8.png',
      '/images/simplmonie9.png',
      '/images/simplmonie10.png',
      '/images/simplmonie11.png',
      '/images/simplmonie12.png',
    ],
    tags: ['Fintech', 'Product Design', 'UX Research', 'UI Design'],
    links: [],
  },
  {
    id: '8',
    title: 'Robin',
    slug: 'robin',
    category: 'design',
    description: 'Voice-first Executive Assistant interface integrating with workspace tools like Jira, Slack, and Gmail.',
    fullDescription: `I designed Robin to redefine professional productivity through a voice-first Executive Assistant interface. Moving beyond standard AI chat, Robin integrates directly with workspace tools like Jira, Slack, and Gmail, allowing users to manage workflows via natural conversation.

The design features a centralized, reactive energy orb and transparent system logs that track tool usage and data sources in real-time. By balancing high-end cosmic aesthetics with functional workspace toggles, I created an intuitive ecosystem where complex task delegation feels as simple as a phone call.

Skills & Deliverables:
• Figma
• Mobile App Design
• Interaction Design
• Brand Identity Design
• User Experience Design`,
    image: '/images/robin-thumbnail.png',
    screenshots: [
      '/images/robin1.jpeg',
      '/images/robin2.png',
      '/images/robin3.png',
      '/images/robin4.png',
      '/images/robin5.png',
      '/images/robin6.png',
      '/images/robin7.png',
      '/images/robin8.png',
      '/images/robin9.png',
      '/images/robin10.png',
    ],
    tags: ['AI Assistant', 'Mobile Design', 'Voice UI', 'Brand Identity'],
    links: [],
  },
  {
    id: '9',
    title: 'QwikMart',
    slug: 'qwikmart',
    category: 'design',
    description: 'E-commerce aggregator with AI shopping assistant and vendor spotlight for a humanized shopping experience.',
    fullDescription: `I designed Quikmart to serve as a streamlined e-commerce aggregator that balances physical product sales with service-based marketplace features. The project focuses on conversational commerce through the integration of an AI shopping assistant (Ask Fred) and a distinct Vendor Spotlight to humanize the shopping experience.

By utilizing a high-contrast visual hierarchy and a clean, mobile-first architecture, I created a friction-free discovery path. The result is a scalable, modern retail ecosystem that prioritizes vendor identity and user intuition.

Skills & Deliverables:
• Ecommerce Design
• Web Design
• User Experience Design
• UI Kit
• Brand Identity Design`,
    image: '/images/QWIKMART-THUMBNAIL.png',
    screenshots: [
      '/images/QWIKMART1.png',
      '/images/QWIKMART2.png',
      '/images/QWIKMART3.png',
      '/images/QWIKMART4.png',
      '/images/QWIKMART5.png',
      '/images/QWIKMART6.png',
    ],
    tags: ['Ecommerce', 'Web Design', 'UI Kit', 'Brand Identity'],
    links: [],
  },
  {
    id: '10',
    title: 'OptimusBank',
    slug: 'optimusbank',
    category: 'design',
    description: 'Redesigned bank onboarding flow transforming a cluttered legacy interface into a streamlined digital entry point.',
    fullDescription: `I redesigned the bank's onboarding flow to transform a cluttered legacy interface into a streamlined digital entry point. By consolidating multi-step security into a single checklist and applying a "Bank on..." narrative with high-contrast visuals, I minimized cognitive load while upholding banking-grade trust.

This design bridges fintech modernism with professional reliability, creating a friction-free journey into the Optiverse. The result is an intuitive, high-performance system that simplifies user acquisition through a refined, user-first architecture.

Skills & Deliverables:
• User Interface Design
• User Experience Design
• Product Discovery
• Information Architecture
• Interactive Prototype`,
    image: '/images/OPTIMUS-thumbnail.png',
    screenshots: [
      '/images/OPTIMUSBANK1.png',
      '/images/OPTIMUSBANK2.png',
      '/images/OPTIMUSBANK3.png',
      '/images/OPTIMUSBANK4.png',
      '/images/OPTIMUSBANK5.png',
      '/images/OPTIMUSBANK6.png',
      '/images/OPTIMUSBANK7.png',
      '/images/OPTIMUSBANK8.png',
      '/images/OPTIMUSBANK9.png',
      '/images/OPTIMUSBANK10.png',
    ],
    tags: ['Fintech', 'UX Design', 'UI Design', 'Onboarding'],
    links: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(p => p.category === category);
};
