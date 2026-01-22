
export interface Project {
  id: string;
  title: string;
  category: 'General' | 'Electrical' | 'Kitchen' | 'Bath' | 'Commercial';
  description: string;
  imageUrl: string;
  location: string;
  year: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum RoutePath {
  Home = '/',
  Services = '/services',
  Portfolio = '/portfolio',
  About = '/about',
  Contact = '/contact'
}
