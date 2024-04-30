export interface NavItemFooter {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface FrequentlyAskedQuestion {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  title: string;
  body: string;
  name: string;
  role: string;
  avatar: string;
}

export interface EventType {
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  image: string;
}

export interface GalleryType {
  title: string;
  image: string;
}

export interface SessionData {
  userId?: string;
  username?: string;
  email?: string;
  image?: string;
  isLoggedIn: boolean;
}
