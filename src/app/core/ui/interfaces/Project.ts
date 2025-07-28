export interface Project {
  id: string;
  category: 'talleres' | 'obras';
  mainImage: string;
  title: string;
  subtitle: string;
  description: string;
  pdfLink?: string;
  pdfLinkButton?:string;
  galleryImages: string[];
  videoLink?: string;
  audioEmbed?: string;
  footerText?: string;
  team?: string[];
}