/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 * ────────────────────────────────────────────────────────────────────────────
 *  Almost every word on the site is pulled from this file. Update text, links,
 *  projects and services here and every page stays in sync.
 *
 *  Items marked with `PLACEHOLDER` in a comment are things Philips should
 *  review or replace with real details (links, project write-ups, etc.).
 * ────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Philips Bek',
  initials: 'PB',
  role: 'Web Developer & AI Tools Enthusiast',
  tagline: 'WordPress & modern web development, sharpened with AI and automation.',
  // Used for <title>, Open Graph, structured data.
  description:
    'Philips Bek is a web and WordPress developer in Kuala Lumpur who builds fast, responsive websites and uses AI tools and automation to work smarter.',
  location: 'Kuala Lumpur, Malaysia',
  availability: 'Open to freelance projects and full-time web / WordPress roles.',
  // Portrait photo. Save your image at public/images/philips-bek.jpg
  // (or update this path). Used on the About page and the home hero card.
  photo: '/images/philips-bek.jpg',
  photoAlt: 'Philips Bek at his Sunway University graduation',
};

export const contact = {
  email: 'philipsbekwork@gmail.com',
  // Displayed for humans; `whatsappUrl` is the tappable link.
  phoneDisplay: '+60 17-981 2010',
  whatsappUrl: 'https://wa.me/60179812010',
  // Prefilled text for the floating WhatsApp button (edit freely).
  whatsappMessage: "Hi Philips! I found your portfolio and I'd like to talk about a project.",
  location: 'Kuala Lumpur & Selangor, Malaysia',
};

// Only socials with `ready: true` are shown. To add LinkedIn, set a real `url`
// and flip `ready` to true.
export const socials = [
  { label: 'GitHub', short: 'GitHub', url: 'https://github.com/Philipsbek', ready: true, handle: 'github.com/Philipsbek' },
  { label: 'LinkedIn', short: 'LinkedIn', url: '#', ready: false, handle: 'linkedin.com/in/your-handle' },
  { label: 'WhatsApp', short: 'WhatsApp', url: 'https://wa.me/60179812010', ready: true, handle: '+60 17-981 2010' },
  { label: 'Email', short: 'Email', url: 'mailto:philipsbekwork@gmail.com', ready: true, handle: 'philipsbekwork@gmail.com' },
];

// Navigation shown in header and footer.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'AI & Automation', href: '/ai-automation' },
  { label: 'Contact', href: '/contact' },
];

// A short curated set surfaced on the home page.
export const featuredSkills = [
  'WordPress & Elementor',
  'WooCommerce',
  'Responsive Web Design',
  'SEO & Site Optimization',
  'Workflow Automation',
  'AI-Assisted Development',
];

// Grouped tech stack, used on the About page.
export const techStack = [
  {
    group: 'Build & Design',
    items: ['WordPress', 'Elementor', 'WooCommerce', 'Vibe / AI-assisted coding', 'Figma', 'Canva'],
  },
  {
    group: 'Hosting, Domains & DNS',
    items: ['Hostinger (hPanel)', 'Vercel', 'Cloudflare', 'Yeahhost'],
  },
  {
    group: 'Automation & AI',
    items: ['Make.com', 'n8n', 'Airtable', 'AI chat & content tools'],
  },
  {
    group: 'Tooling & SEO',
    items: ['VS Code', 'GitHub', 'Web SEO tools', 'Analytics & marketing setup'],
  },
];

// Work history — timeline on Home (summary) and About (full).
export const experience = [
  {
    role: 'Web / WordPress Developer',
    company: 'PNH Malaysia',
    period: '2025 – 2026',
    summary:
      'Own the full website workflow end to end — from first build to launch — using WordPress and AI-assisted coding, including hosting setup, domain purchase and DNS management.',
    highlights: [
      'Delivered complete sites from concept through to a live, launched website.',
      'Handled hosting, domain registration and DNS configuration for each project.',
      'Tuned websites with optimization plugins and tools for stronger SEO and crawlability.',
    ],
  },
  {
    role: 'AI Chatbot Developer',
    company: 'Cyberwolves',
    period: '2024 – 2025',
    summary:
      'Built WhatsApp AI chatbots using Make.com, connecting messaging flows to data and automation tools.',
    highlights: [
      'Designed and built WhatsApp AI chatbot flows with Make.com.',
      'Worked with n8n and Airtable to route data and automate responses.',
      'Combined several tools into practical, working automation for real use cases.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Double Dot',
    period: '2022 – 2023',
    summary:
      'Developed and tested websites alongside the team, contributing to builds and running manual testing.',
    highlights: [
      'Built and iterated on client websites with the development team.',
      'Ran manual testing to catch issues before release.',
      'Collaborated closely with teammates across the build process.',
    ],
  },
];

export const education = [
  {
    school: 'Sunway University & Lancaster University',
    period: '2020 – 2023',
    credential: 'BSc (Hons) Information Technology — Computer Networking & Security',
  },
  {
    school: 'Sunway College',
    period: '2019 – 2020',
    credential: 'Canadian International Matriculation Programme (CIMP)',
  },
];

// Not listed on the resume — clearly marked so nothing is invented.
export const certifications = [
  // PLACEHOLDER: add real certifications here, e.g.
  // { name: 'Google Analytics Certified', issuer: 'Google', year: '2024' },
];

// Not specified on the resume — replace with your actual languages.
export const languages = [
  // PLACEHOLDER: e.g. { name: 'English', level: 'Professional' },
];

export const strengths = [
  {
    title: 'End-to-end ownership',
    body: 'Comfortable taking a project from a blank page to a live site — design, build, hosting, domain and DNS all handled.',
  },
  {
    title: 'Practical with AI',
    body: 'I use AI tools to move faster and generate ideas, then apply my own judgement to keep the result accurate and on-brand.',
  },
  {
    title: 'SEO-minded builds',
    body: 'Websites are set up for performance, crawlability and search visibility from the start, not patched on afterwards.',
  },
  {
    title: 'Adaptable & self-directed',
    body: 'Happy switching between WordPress, automation platforms and new tools to fit whatever a project actually needs.',
  },
];

export const services = [
  {
    icon: 'browser',
    title: 'Website Design & Development',
    blurb:
      'Custom, responsive websites built to load fast and look sharp on every screen — from the first wireframe to launch day.',
    points: ['Responsive across mobile, tablet and desktop', 'Clean, modern layouts', 'Built and launched end to end'],
  },
  {
    icon: 'wordpress',
    title: 'WordPress & Elementor',
    blurb:
      'Flexible WordPress sites built with Elementor and the right plugins, so you can update content yourself with confidence.',
    points: ['Elementor page building', 'Plugin selection & setup', 'Editor-friendly handover'],
  },
  {
    icon: 'cart',
    title: 'E-Commerce with WooCommerce',
    blurb:
      'Online stores set up with WooCommerce — products, checkout and the essentials configured and ready to sell.',
    points: ['WooCommerce store setup', 'Product & checkout configuration', 'Payment-ready foundations'],
  },
  {
    icon: 'gauge',
    title: 'SEO & Site Optimization',
    blurb:
      'Tuning existing and new sites for speed, crawlability and search visibility using proven optimization tools and plugins.',
    points: ['On-page SEO fundamentals', 'Performance & crawlability', 'Optimization plugins & tools'],
  },
  {
    icon: 'bolt',
    title: 'Workflow Automation',
    blurb:
      'Connecting the apps you already use with Make.com and n8n to remove repetitive manual work from your day.',
    points: ['Make.com & n8n workflows', 'Airtable data connections', 'WhatsApp chatbot flows'],
  },
  {
    icon: 'server',
    title: 'Hosting, Domains & Maintenance',
    blurb:
      'Hosting setup, domain registration, DNS management and ongoing upkeep so your site stays online, fast and secure.',
    points: ['Hosting & domain setup', 'DNS management', 'Ongoing updates & fixes'],
  },
];

/**
 * PORTFOLIO PROJECTS
 * ------------------
 * Real projects lead the list (they carry live links). The remaining entries
 * are representative sample cards you can replace with real work over time.
 * Keep any project images in /public/projects/.
 */
export const projects = [
  {
    slug: 'cards-against-humanity',
    title: 'Cards Against Humanity',
    category: 'Landing Page',
    placeholder: false,
    image: '/projects/cards-against-humanity.jpg',
    overview:
      'A bold, high-contrast marketing site for the notorious party game — scattered-card visuals, punchy typography and an interactive “play a hand” demo.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Capture the game’s irreverent tone while keeping the page crisp, fast and genuinely fun to click.',
    delivered:
      'A responsive landing page with animated card stacks, a step-by-step explainer and a playable demo hand — deployed on Vercel.',
    url: 'https://design-cards-against-humanity.vercel.app/',
    accent: 'a',
  },
  {
    slug: 'soundcloud',
    title: 'SoundCloud — Discover UI',
    category: 'Web App UI',
    placeholder: false,
    image: '/projects/soundcloud.jpg',
    overview:
      'A dark, media-first music-discovery interface — trending genres, a Top 50 chart, artists to watch and curated playlists in a dense, cover-art-led grid.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Organise a lot of music content into a clean, scannable streaming interface where the artwork leads.',
    delivered:
      'A responsive streaming discovery page with genre tiles, ranked charts, artist cards and playlists in an image-first layout — deployed on Vercel.',
    url: 'https://design-sound-cloud.vercel.app/',
    accent: 'b',
  },
  {
    slug: 'cora',
    title: 'Cora — AI Email Assistant',
    category: 'Landing Page',
    placeholder: false,
    image: '/projects/cora.jpg',
    overview:
      'A calm, editorial landing page for an AI email assistant that triages your inbox and writes daily summaries — led by a dreamy sky illustration and founder testimonials.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Make an AI productivity tool feel calm and trustworthy rather than busy or hypey.',
    delivered:
      'A responsive marketing site with an atmospheric hero, a scrolling testimonial wall and clear sign-up calls to action — deployed on Vercel.',
    url: 'https://design-cora.vercel.app/',
    accent: 'c',
  },
  {
    slug: 'klinik-pergigian-kita',
    title: 'Klinik Pergigian Kita',
    category: 'Business Website',
    placeholder: false,
    image: '/projects/klinik-pergigian-kita.jpg',
    overview:
      'A modern, trust-building website for a Malaysian dental clinic — clear service listings, real patient testimonials, multiple branches and easy contact.',
    role: 'Web / WordPress Developer',
    tools: ['WordPress', 'Elementor', 'SEO', 'Responsive design'],
    challenge: 'Present a full range of dental services and build patient trust while keeping contact and enquiries effortless.',
    delivered:
      'A responsive WordPress site with service pages, genuine patient reviews, branch details and clear WhatsApp / contact calls to action.',
    url: 'https://klinikpergigiankita.com/',
    accent: 'a',
  },
  {
    slug: 'muheet-oil-refining',
    title: 'Muheet Oil Refining',
    category: 'Business Website',
    placeholder: false,
    image: '/projects/muheet-oil-refining.jpg',
    overview:
      'A corporate website for a Libyan oil-refining and refinery-development company — presenting its projects, engineering focus and role in the national energy sector.',
    role: 'Web / WordPress Developer',
    tools: ['WordPress', 'Elementor', 'SEO', 'Responsive design'],
    challenge: 'Convey the scale, credibility and technical expertise of a major industrial project in a clean, modern layout.',
    delivered:
      'A polished, responsive WordPress corporate site covering the refinery project, company vision, accreditation and news across well-structured sections.',
    url: 'https://muheet.ly/',
    accent: 'b',
  },
  {
    slug: 'peikar-stays',
    title: 'Peikar — Superhost Stays',
    category: 'Landing Page',
    placeholder: false,
    // image: '/projects/peikar.jpg', // TODO: add screenshot when reachable
    overview:
      'An Airbnb-style showcase for a Kuantan Superhost’s 13 vacation homes — property cards with ratings, a host profile and quick chat-to-book links.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Turn a scattered set of holiday-home listings into one polished, trustworthy booking showcase.',
    delivered:
      'A responsive listings page with property cards, ratings, a Superhost profile and direct WhatsApp / Airbnb booking links — deployed on Vercel.',
    url: 'https://peikar-airbnb.vercel.app/',
    accent: 'c',
  },
  {
    slug: 'mekaverse',
    title: 'MekaVerse — Digital Art Gallery',
    category: 'Landing Page',
    placeholder: false,
    image: '/projects/mekaverse.jpg',
    overview:
      'A stark, monochrome showcase for a 10,000-piece mecha digital-art collection — a full-bleed black gallery where only the artwork carries colour, with live collection stats and a Web3 mint flow.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Give a digital-collectible drop a premium, gallery-like presence where the interface all but disappears.',
    delivered:
      'A responsive, high-contrast showcase with animated marquees, region storytelling, live stats and clear mint / connect-wallet calls to action — deployed on Vercel.',
    url: 'https://design-meka-verse.vercel.app/',
    accent: 'a',
  },
  {
    slug: 'morphic',
    title: 'Morphic — Text-to-Anime',
    category: 'Landing Page',
    placeholder: false,
    image: '/projects/morphic.jpg',
    overview:
      'A cinematic, dark-mode marketing site for an AI tool that turns a single line of story into cel-shaded anime — key visuals, consistent characters and animated cuts.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Sell an imaginative AI creative product with the mood and polish of a real anime studio.',
    delivered:
      'A responsive, animation-rich landing page with a scrolling scene gallery, feature workflows and an infinite-storyboard showcase — deployed on Vercel.',
    url: 'https://design-morphic.vercel.app/',
    accent: 'c',
  },
  {
    slug: 'pop-site',
    title: 'Pop Site — Site Builder',
    category: 'Landing Page',
    placeholder: false,
    image: '/projects/pop-site.jpg',
    overview:
      'A bold, editorial marketing site for a one-page “link-in-bio” website builder — monumental type, a single blue accent and lively product mockups.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'Vercel'],
    challenge: 'Make a link-in-bio product feel premium and genuinely clickable using typography and rhythm alone.',
    delivered:
      'A responsive, multi-section landing page with animated product cards, a block-by-block feature showcase and clear calls to action — deployed on Vercel.',
    url: 'https://design-pop-site.vercel.app/',
    accent: 'a',
  },
  {
    slug: 'beauty-talent-academy',
    title: 'Beauty Talent Academy',
    category: 'Business Website',
    placeholder: false,
    image: '/projects/beauty-talent-academy.jpg',
    overview:
      'A polished website for an established beauty school in Kuantan — courses, certifications and trust stats presented with a calm, editorial layout and a WhatsApp enquiry flow.',
    role: 'Design & front-end (vibe-coded with Claude)',
    tools: ['Vibe coding (Claude)', 'Responsive design', 'SEO', 'Vercel'],
    challenge: 'Communicate 36 years of credibility and a full course catalogue clearly, and turn visitors into WhatsApp enquiries.',
    delivered:
      'A responsive marketing site with programme listings, certification badges, animated trust stats and WhatsApp call-to-actions — deployed on Vercel.',
    url: 'https://beauty-talent-academy.vercel.app/',
    accent: 'b',
  },
  {
    slug: 'wordpress-business-site',
    title: 'Business Website (WordPress)',
    category: 'WordPress',
    placeholder: true,
    overview:
      'A responsive marketing website built on WordPress, covering the full workflow from build to a live, launched site.',
    role: 'Web / WordPress Developer',
    tools: ['WordPress', 'Elementor', 'Hostinger', 'Cloudflare'],
    challenge: 'Deliver a complete, launch-ready site including hosting, domain and DNS.',
    delivered:
      'A finished responsive website with hosting configured, domain connected and DNS managed end to end.',
    url: '#',
    accent: 'a',
  },
  {
    slug: 'woocommerce-store',
    title: 'Online Store (WooCommerce)',
    category: 'E-Commerce',
    placeholder: true,
    overview:
      'A WooCommerce storefront with products, categories and a working checkout, ready for a small business to sell online.',
    role: 'Web Developer',
    tools: ['WordPress', 'WooCommerce', 'Elementor'],
    challenge: 'Turn a product catalogue into a clean, easy-to-manage online shop.',
    delivered:
      'A configured WooCommerce store with product pages and a checkout flow set up for the client to run themselves.',
    url: '#',
    accent: 'b',
  },
  {
    slug: 'whatsapp-ai-chatbot',
    title: 'WhatsApp AI Chatbot',
    category: 'AI & Automation',
    placeholder: true,
    overview:
      'A WhatsApp chatbot that answers messages automatically, built on Make.com and connected to data with Airtable.',
    role: 'AI Chatbot Developer',
    tools: ['Make.com', 'n8n', 'Airtable', 'WhatsApp'],
    challenge: 'Automate repetitive WhatsApp conversations while keeping replies useful and on-brand.',
    delivered:
      'A working automation flow that handles incoming WhatsApp messages and routes data between connected tools.',
    url: '#',
    accent: 'c',
  },
  {
    slug: 'landing-page',
    title: 'Campaign Landing Page',
    category: 'Landing Page',
    placeholder: true,
    overview:
      'A focused, single-purpose landing page designed to convert, built to load quickly and read clearly on mobile.',
    role: 'Web Developer',
    tools: ['Vibe / AI-assisted coding', 'Vercel'],
    challenge: 'Communicate one offer clearly and get visitors to a single call to action.',
    delivered:
      'A fast, responsive landing page with a clear layout and a single, prominent call to action.',
    url: '#',
    accent: 'a',
  },
];

// The categories used for the portfolio filter (derived from `projects`).
export const projectCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

// AI & Automation page content.
export const aiIntro = {
  eyebrow: 'How I work with AI',
  heading: 'AI as a tool, judgement as the standard',
  body: 'I treat AI as a way to move faster and explore more options — not as a replacement for thinking. Tools help me draft, prototype and automate; I stay responsible for quality, accuracy and whether the result actually fits the goal.',
};

export const aiCapabilities = [
  {
    title: 'AI-assisted web development',
    body: 'Using AI and vibe-coding workflows to prototype layouts and ship pages faster, then refining the code and design by hand.',
  },
  {
    title: 'Content & idea generation',
    body: 'Drafting copy, headlines and structure with AI, then editing for tone, accuracy and a natural, human voice.',
  },
  {
    title: 'Workflow automation',
    body: 'Building automations in Make.com and n8n that connect apps like Airtable and WhatsApp to cut out repetitive manual steps.',
  },
  {
    title: 'AI chatbot exploration',
    body: 'Designing and testing WhatsApp AI chatbots — mapping conversation flows and wiring them to real data sources.',
  },
];

export const aiPrinciples = [
  'Start from the goal, then pick the tool — not the other way around.',
  'Review and fact-check anything AI produces before it ships.',
  'Keep a human voice; avoid generic, obviously auto-generated copy.',
  'Automate the repetitive parts so the meaningful work gets more attention.',
];

// Path to a downloadable résumé. Drop a real file at /public/philips-bek-resume.pdf.
// Downloadable résumé — the file lives at public/philips-bek-resume.pdf.
export const resumeUrl = '/philips-bek-resume.pdf';
