export interface BankAccount {
  id: string;
  currency: string;
  currencySymbol: string;
  badge: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  sortCodeOrSwift: string;
  routingOrIban?: string;
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'editorial' | 'candid' | 'culture' | 'details';
  src: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface WeddingDetails {
  coupleMonogram: string;
  hashtag: string;
  brideFullName: string;
  groomFullName: string;
  dateString: string;
  targetDate: string;
  welcomeText: string;
  hashtags: string[];
  registryQuote: string;
  contactEmail: string;
  contactNote: string;
  fullGalleryUrl?: string;
}

export interface CoupleProfile {
  fullName: string;
  nickname: string;
  role?: string;
  title: string;
  image: string;
  altImage?: string;
  bio: string;
  whoSheIs?: string;
  whoHeIs?: string;
  whatSheDoes?: string;
  whatHeDoes?: string;
  whatSheLoves?: string[];
  whatHeLoves?: string[];
  quote: string;
  interests?: string[];
  socialLinks?: {
    platform: string;
    url: string;
    label: string;
  }[];
}

export interface BridalPartyMember {
  id: string;
  name: string;
  role: string;
  relation: string;
  image: string;
  quote?: string;
  category: 'maid_of_honor' | 'best_man' | 'bridesmaid' | 'groomsman' | 'family';
}

export interface StoryAspect {
  title: string;
  period: string;
  narrative: string;
  highlight: string;
}
