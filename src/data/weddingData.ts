import { WeddingDetails, CoupleProfile, GalleryPhoto, BankAccount } from '../types';

export const WEDDING_DETAILS: WeddingDetails = {
  coupleMonogram: 'O & B',
  hashtag: '#OyinTimiLoveBound26',
  brideFullName: 'Oyindamola Serah Oshadare',
  groomFullName: 'Busayo Timileyin Akomolede',
  dateString: 'Friday, November 6, 2026',
  targetDate: '2026-11-06T12:00:00',
  welcomeText:
    'We invite you to witness and celebrate the sacred covenant and eternal union of our lives under the grace of God.',
  hashtags: ['#OyinTimiLoveBound26'],
  registryQuote:
    'Your presence is our greatest gift, but if you wish to honor us with a gift, a financial contribution towards our new beginning would be warmly appreciated.',
  contactEmail: 'akomoledebusayotimi@gmail.com',
  contactNote: 'For inquiries, special congratulations, or gift coordination',
};

// Official Pre-Wedding & Portrait Gallery
// High-resolution portraits and pre-wedding photoshoot collections
export const HERO_STRIP_PHOTOS = [
  {
    id: 'hero-1',
    src: '/portraits/image_4bb89863.png',
    caption: 'Tender Embrace in Royal Splendor',
    subtitle: 'Woven in royal indigo and coral beads, hearts beat as one',
  },
  {
    id: 'hero-2',
    src: '/portraits/image_cb67432d.png',
    caption: 'Radiant Joy & Eternal Promise',
    subtitle: 'Oyindamola in pure white satin and pearls with her beloved',
  },
  {
    id: 'hero-3',
    src: '/portraits/image_dae5ca40.png',
    caption: 'Adoration & Devotion',
    subtitle: 'Busayo and Oyindamola in regal white ceremony attire',
  },
  {
    id: 'hero-4',
    src: '/portraits/image_89b53498.png',
    caption: 'Heritage, Poise & Elegance',
    subtitle: 'Hand-in-hand in traditional patterned attire',
  },
  {
    id: 'hero-5',
    src: '/portraits/image_8e1215e6.png',
    caption: 'The Groom — Regal Poise',
    subtitle: 'Busayo Timileyin Akomolede in bespoke textured ivory suit',
  },
  {
    id: 'hero-6',
    src: '/prewedding/HAK_6303.jpg',
    caption: 'Endless Affection & Devotion',
    subtitle: 'Celebrating our sacred union in royal harmony',
  },
  {
    id: 'hero-7',
    src: '/prewedding/HAK_6353.jpg',
    caption: 'Unscripted Laughter & Warmth',
    subtitle: 'The pure, heartwarming smiles that define us',
  },
  {
    id: 'hero-8',
    src: '/prewedding/HAK_6435.jpg',
    caption: 'Sacred Covenant',
    subtitle: 'Two lives, two hearts, intertwined forever',
  },
];

export const BRIDE_PROFILE: CoupleProfile = {
  fullName: 'Oyindamola Serah Oshadare',
  nickname: 'Oyin-B',
  role: 'The Bride',
  title: 'Regulatory & Pharmacovigilance Pharmacist, Bodycare Expert & Women Health Advocate',
  image: '/bride.jpg',
  bio: 'Multi-talented, driven, endlessly kind, a woman of exceptional grace, ambition, and heart. Oyindamola is the kind of person who leaves an impact on everyone she meets. Professionally, she wears many hats with effortless poise, working as a Regulatory & Pharmacovigilance Pharmacist (Madonna University alumnus), Bodycare Expert, and Women Health Advocate, empowering people through wellness as a Senior Partner at Oriflame, and coaching emerging entrepreneurs through her online business guides. Yet, for all her drive and success, her biggest superpower is simply her heart. Oyin is a semi-gentle, sweet fellow who naturally looks out for others, ensuring everyone around her feels cared for, valued, and at peace. To know her is to admire her, but to be loved by her is life’s greatest blessing.',
  quote:
    'From our very first conversation, Timi felt like peace personified. In him, I found not just my greatest love, but my most trusted confidant, my prayer partner, and my home. Loving him is the most natural and rewarding decision of my life.',
  interests: [
    'Regulatory & Pharmacovigilance Pharmacy Practice',
    'Bodycare Expertise & Holistic Wellness',
    'Women Health Advocacy, Faith, and Family',
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://ng.linkedin.com/in/oyindamola-oshadare-371ab5273',
    },
    {
      platform: 'Facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/serah.oshadare',
    },
  ],
};

export const GROOM_PROFILE: CoupleProfile = {
  fullName: 'Busayo Timileyin Akomolede',
  nickname: 'Timi-B',
  role: 'The Groom',
  title: 'Senior Software Engineer & Tech Innovator',
  image: '/groom.jpg',
  bio: 'Brilliant, hardworking, and effortlessly funny, Busayo is the kind of person who brings light, intellect, and easy laughter wherever he goes. A true technologist at heart, he is deeply passionate about innovation, spending his days building intuitive web tools, developing modern sites, and securing digital infrastructure with over five years of IT support and cybersecurity experience. A proud graduate of the University of Lagos (UNILAG), his talents don’t stop behind a computer screen; he is also a gifted drummer and a natural educator with a heart for inspiring others. Above all his drive and technical craft, Busayo is funny, deeply caring, and tirelessly hardworking, a devoted partner whose gentle kindness and infectious humor make life an adventure.',
  quote:
    'From our very first conversation, Oyindamola felt like peace personified. In her, I found not just my greatest love, but my most trusted confidante, my prayer partner, and my home. Loving her is the most natural and rewarding decision of my life.',
  interests: [
    'Full-Stack Architecture & Cloud Systems',
    'Open Source Innovation & Mentorship',
    'Cherishing family moments, inspiring others, and making Oyindamola smile',
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://ng.linkedin.com/in/busayo-akomolede',
    },
    {
      platform: 'Facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/people/Busayo-Timileyin-Akomolede/61571194372634/#',
    },
  ],
};

// Authentic Pre-Wedding & Portrait Photographs
// Studio portraits and pre-wedding photoshoot collections
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'user-p1',
    title: 'Tender Embrace in Royal Splendor',
    subtitle: 'Oyindamola & Busayo adorned in traditional patterned attire and coral beads',
    category: 'culture',
    src: '/portraits/image_4bb89863.png',
    aspect: 'portrait',
  },
  {
    id: 'user-p2',
    title: 'Radiant Joy & Pure Devotion',
    subtitle: 'Oyindamola in pure white satin and pearls with her beloved Busayo',
    category: 'editorial',
    src: '/portraits/image_cb67432d.png',
    aspect: 'portrait',
  },
  {
    id: 'user-p3',
    title: 'A Gaze of Adoration',
    subtitle: 'Shared laughter and deep affection in bespoke ceremony whites',
    category: 'editorial',
    src: '/portraits/image_dae5ca40.png',
    aspect: 'portrait',
  },
  {
    id: 'user-p4',
    title: 'Heritage & Poise',
    subtitle: 'Stepping forward hand-in-hand in custom royal indigo fabric',
    category: 'culture',
    src: '/portraits/image_89b53498.png',
    aspect: 'portrait',
  },
  {
    id: 'user-p5',
    title: 'The Groom — Regal Poise',
    subtitle: 'Busayo Timileyin Akomolede in bespoke textured white three-piece suit',
    category: 'editorial',
    src: '/portraits/image_8e1215e6.png',
    aspect: 'portrait',
  },
  {
    id: 'pw-1',
    title: 'Cherished Embrace',
    subtitle: 'Oyindamola & Busayo in intimate harmony',
    category: 'editorial',
    src: '/prewedding/HAK_6303.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-2',
    title: 'Radiant Smile',
    subtitle: 'Gentle moments filled with joy and grace',
    category: 'candid',
    src: '/prewedding/HAK_6350.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-3',
    title: 'Bespoke Splendor',
    subtitle: 'Classic tailored silhouettes and regal charm',
    category: 'editorial',
    src: '/prewedding/HAK_6294.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-4',
    title: 'Stepping into Tomorrow',
    subtitle: 'Hand-in-hand, walking forward in shared faith',
    category: 'editorial',
    src: '/prewedding/HAK_63941.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-5',
    title: 'Tender Connection',
    subtitle: 'Love that speaks softly and deeply',
    category: 'candid',
    src: '/prewedding/HAK_6353.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-6',
    title: 'Sacred Covenant',
    subtitle: 'Two lives intertwined in holy matrimony',
    category: 'editorial',
    src: '/prewedding/HAK_6435.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-7',
    title: 'Regal Poise',
    subtitle: 'A quiet portrait of mutual devotion',
    category: 'editorial',
    src: '/prewedding/HAK_6284.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-8',
    title: 'Unscripted Laughter',
    subtitle: 'The warmth that fills every room they enter',
    category: 'candid',
    src: '/prewedding/HAK_6453.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-9',
    title: 'Eyes of Devotion',
    subtitle: 'In her gaze, a world of peace and beauty',
    category: 'candid',
    src: '/prewedding/HAK_6302.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-10',
    title: 'Soulful Harmony',
    subtitle: 'A love sculpted by grace, patience, and warmth',
    category: 'editorial',
    src: '/prewedding/HAK_6357.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-11',
    title: 'Royal Stride',
    subtitle: 'Standing tall together in unwavering commitment',
    category: 'editorial',
    src: '/prewedding/HAK_6412.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-12',
    title: 'Pure Serenity',
    subtitle: 'Finding home in each other’s presence',
    category: 'candid',
    src: '/prewedding/HAK_6450.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-13',
    title: 'Graceful Union',
    subtitle: 'Every chapter written with joy and hope',
    category: 'editorial',
    src: '/prewedding/HAK_6459.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-14',
    title: 'Whispered Blessing',
    subtitle: 'Holding tightly to God’s promises',
    category: 'candid',
    src: '/prewedding/HAK_6473.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-15',
    title: 'Cinematic Panorama',
    subtitle: 'Wide frame of their beautiful love story',
    category: 'editorial',
    src: '/prewedding/HAK_6474.jpg',
    aspect: 'landscape',
  },
  {
    id: 'pw-16',
    title: 'Joy Unbounded',
    subtitle: 'Celebrating the gift of forever',
    category: 'candid',
    src: '/prewedding/HAK_6479.jpg',
    aspect: 'portrait',
  },
  {
    id: 'pw-17',
    title: 'Together in God’s Grace',
    subtitle: '#OyinTimiLoveBound26',
    category: 'editorial',
    src: '/prewedding/HAK_6492.jpg',
    aspect: 'portrait',
  },
];

// User-provided banking details for monetary gifts:
// 1. 3222857948 First Bank - Oshadare Oyindamola
// 2. 1015083128 VFD Microfinance Bank - Oshadare Oyindamola
export const DONATION_ACCOUNTS: BankAccount[] = [
  {
    id: 'first-bank',
    currency: 'NGN',
    currencySymbol: '₦',
    badge: 'Bride Account',
    bankName: 'First Bank of Nigeria',
    accountNumber: '3222857948',
    accountName: 'Oshadare Oyindamola',
    sortCodeOrSwift: 'FBNINGLA',
    notes: 'Primary Account • Oshadare Oyindamola',
  },
  {
    id: 'vfd-bank',
    currency: 'NGN',
    currencySymbol: '₦',
    badge: 'Bride Account',
    bankName: 'VFD Microfinance Bank',
    accountNumber: '1015083128',
    accountName: 'Oshadare Oyindamola',
    sortCodeOrSwift: 'VFDNGLA',
    notes: 'Microfinance Account • Oshadare Oyindamola',
  },
];
