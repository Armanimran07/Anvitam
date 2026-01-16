export interface GalleryItem {
  url: string;
  caption: string;
}

export interface StorySection {
  title: string;
  content: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  fullDescription?: string;
  gallery?: GalleryItem[]; // Changed from string[] to GalleryItem[]
  specs?: { label: string; value: string }[];
  isFeatured?: boolean;
  story?: StorySection[]; // New: Detailed start-to-finish story
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML/Rich text
  image: string;
  author: string;
  toc?: string[]; // Table of contents headers
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  image: string;
}

export enum PageState {
  VIEW = 'VIEW',
  LOADING = 'LOADING',
  ERROR = 'ERROR'
}

export interface ProcessStep {
  id: string;
  title: string;
  number: string;
  items: string[];
  description: string;
  image: string;
}

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  valueProps: string[];
  icon: string; 
  // New fields for detailed page
  fullDescription?: string;
  process?: ServiceProcess[];
  benefits?: string[];
  image?: string;
  bookingLink?: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  link: string;
  image: string;
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}