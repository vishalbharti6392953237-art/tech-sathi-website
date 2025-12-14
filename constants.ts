import { BlogPost, Category } from './types';

export const APP_NAME = "Tech Saathi";

export const CATEGORIES: Category[] = [
  { id: 'tech-ai', name: 'Technology & AI', hindiName: 'Technology aur AI', description: 'Latest gadgets, AI tools aur technical updates.', icon: 'Cpu' },
  { id: 'courses', name: 'Free Courses', hindiName: 'Free Courses', description: 'Free certificates aur best online courses ki jankari.', icon: 'GraduationCap' },
  { id: 'blogging', name: 'Blogging Guide', hindiName: 'Blogging aur Website', description: 'Website kaise banaye aur SEO seekhein.', icon: 'Globe' },
  { id: 'earning', name: 'Online Earning', hindiName: 'Online Earning', description: 'Ghar baithe paise kamane ke legitimate tarike.', icon: 'DollarSign' },
  { id: 'gk', name: 'GK & Updates', hindiName: 'General Knowledge', description: 'Trending news aur important general knowledge.', icon: 'BookOpen' },
];

// Delivers: 10 blog post ideas with titles
export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'AI se Online Paise Kaise Kamaye? (Full Guide 2025)',
    excerpt: 'Is guide mein hum seekhenge ki kaise aap ChatGPT aur Gemini jaise AI tools ka use karke content writing aur freelancing se paise kama sakte hain.',
    category: 'tech-ai',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'Google Free Data Analytics Course with Certificate',
    excerpt: 'Google ke free courses kaise join karein? Step-by-step process aur certificate pane ka tarika is article mein padhein.',
    category: 'courses',
    date: 'Oct 22, 2024',
    readTime: '4 min read',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Apni Pehli WordPress Website Kaise Banaye (Hindi Tutorial)',
    excerpt: 'Agar aap beginner hain aur apni website shuru karna chahte hain, toh ye easy guide aapke liye hai. Domain aur Hosting ki puri jankari.',
    category: 'blogging',
    date: 'Oct 20, 2024',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: '4',
    title: 'Freelancing Kya Hai? Beginners Guide for Students',
    excerpt: 'Padhai ke saath part-time earning kaise karein? Freelancing platforms jaise Upwork aur Fiverr par account kaise banaye.',
    category: 'earning',
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/400?random=4'
  },
  {
    id: '5',
    title: 'Top 5 AI Tools Jo Har Student Ko Pata Hone Chahiye',
    excerpt: 'Apni studies aur assignments ko aasan banane ke liye in 5 free AI tools ka istemal aaj hi shuru karein.',
    category: 'tech-ai',
    date: 'Oct 15, 2024',
    readTime: '3 min read',
    imageUrl: 'https://picsum.photos/800/400?random=5'
  },
  {
    id: '6',
    title: 'SEO Kya Hai? Apne Blog Par Traffic Kaise Layein',
    excerpt: 'Search Engine Optimization (SEO) ke basics seekhein aur Google ke first page par rank karna shuru karein.',
    category: 'blogging',
    date: 'Oct 12, 2024',
    readTime: '7 min read',
    imageUrl: 'https://picsum.photos/800/400?random=6'
  },
  {
    id: '7',
    title: 'Youtube Channel Shuru Karne Ka Sahi Tarika',
    excerpt: 'Bina chehra dikhaye Youtube se earning kaise karein? Niche selection se lekar video editing tak sab kuch.',
    category: 'earning',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/400?random=7'
  },
  {
    id: '8',
    title: 'Current Affairs: India ke Latest Space Missions',
    excerpt: 'ISRO ke naye projects aur Chandrayaan ke bare mein mahatvapurna jankari jo competitive exams ke liye zaroori hai.',
    category: 'gk',
    date: 'Oct 08, 2024',
    readTime: '4 min read',
    imageUrl: 'https://picsum.photos/800/400?random=8'
  },
  {
    id: '9',
    title: 'Digital Marketing Free Course (Hindi Mein)',
    excerpt: 'Digital Marketing ke concepts jaise Social Media Marketing aur Email Marketing ko free mein seekhne ke resources.',
    category: 'courses',
    date: 'Oct 05, 2024',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/400?random=9'
  },
  {
    id: '10',
    title: 'Computer Basics: RAM, ROM aur Processor Kya Hai?',
    excerpt: 'Computer hardware ki basic jankari simple Hindi mein. Janein aapke laptop ya PC ke liye kya configuration sahi hai.',
    category: 'tech-ai',
    date: 'Oct 01, 2024',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/400?random=10'
  }
];