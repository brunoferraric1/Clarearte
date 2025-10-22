// Blog post content types

export type ContentBlock =
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'numberedList'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' };

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  author: string;
  date: string;
  content: ContentBlock[];
}
