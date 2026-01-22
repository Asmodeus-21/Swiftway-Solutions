
import { Project, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'gen-1',
    title: 'General Contracting',
    description: 'Full-service project management from blueprint to final walkthrough. We handle permits, sub-contractors, and quality control.',
    icon: 'fa-solid fa-helmet-safety'
  },
  {
    id: 'elec-1',
    title: 'Expert Electrical',
    description: 'Mikey is a licensed master electrician specializing in panel upgrades, smart home integration, and complex rewiring.',
    icon: 'fa-solid fa-bolt-lightning'
  },
  {
    id: 'kit-1',
    title: 'Kitchen & Bath',
    description: 'Modernizing the heart of your home with premium finishes, energy-efficient appliances, and intelligent layouts.',
    icon: 'fa-solid fa-sink'
  },
  {
    id: 'add-1',
    title: 'Home Additions',
    description: 'Need more space? We build seamless extensions that match your home’s existing architecture perfectly.',
    icon: 'fa-solid fa-house-chimney-medical'
  },
  {
    id: 'comm-1',
    title: 'Commercial Renovation',
    description: 'Retail build-outs and office updates designed to help your Philadelphia business thrive.',
    icon: 'fa-solid fa-building'
  },
  {
    id: 'emer-1',
    title: 'Emergency Repairs',
    description: 'Available 24/7 for critical electrical failures or structural issues across Greater Philadelphia.',
    icon: 'fa-solid fa-truck-medical'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Society Hill Modern Kitchen',
    category: 'Kitchen',
    description: 'A complete gut renovation featuring quartz countertops and custom smart lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e150213467f9?auto=format&fit=crop&q=80&w=1200',
    location: 'Society Hill, Philadelphia',
    year: 2025
  },
  {
    id: 'p2',
    title: 'Whole House Rewire',
    category: 'Electrical',
    description: 'Updated a historic 1920s estate with modern 200-amp service and ethernet routing.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    location: 'Main Line, Montgomery County',
    year: 2025
  },
  {
    id: 'p3',
    title: 'Manayunk Rooftop Deck',
    category: 'General',
    description: 'Structural reinforcement and premium composite decking with integrated outdoor lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
    location: 'Manayunk, Philadelphia',
    year: 2024
  },
  {
    id: 'p4',
    title: 'Bucks County Farmhouse Bath',
    category: 'Bath',
    description: 'Spa-inspired primary bathroom with heated floors and a freestanding tub.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    location: 'Doylestown, Bucks County',
    year: 2025
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    location: 'Fishtown',
    text: 'Mikey and Swiftway converted our dark basement into a bright studio. His electrical knowledge saved us thousands on lighting design.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Robert M.',
    location: 'South Philly',
    text: 'Swiftway Solutions is the only contractor I trust. Professional, on-time, and they actually clean up after the job!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Linda K.',
    location: 'Ardmore',
    text: 'Expert work on our kitchen. The electrical panel upgrade was handled flawlessly alongside the cabinetry.',
    rating: 5
  }
];

export const SERVICE_AREAS = [
  'Philadelphia County',
  'Bucks County',
  'Montgomery County',
  'Delaware County',
  'Chester County',
  'Camden County (NJ)'
];
