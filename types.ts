export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: string; // Content is optional initially, loaded via AI
}

export interface Category {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
}