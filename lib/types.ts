export interface Video {
  id: string;
  title: string;
  driveUrl: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  /** "16/9" for landscape, "9/16" for portrait reels */
  aspectRatio: "16/9" | "9/16";
  videos: Video[];
}

export interface Social {
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  vimeo?: string;
  twitter?: string;
}

export interface HeroData {
  name: string;
  brandName: string;
  tagline: string;
  bio: string;
  email: string;
  whatsapp: string;
}

export interface PortfolioData {
  hero: HeroData;
  social: Social;
  categories: Category[];
}
