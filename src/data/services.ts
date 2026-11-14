import ceramicImg from '../assets/images/ceramic_coating_gloss_1794677546057.jpg';
import machinePolishImg from '../assets/images/machine_polishing_detail_1794677546536.jpg';
import caravanImg from '../assets/images/caravan_jet_washing_1794677548509.jpg';
import heroImg from '../assets/images/hero_luxury_detailing_1794677545944.jpg';
import mobileSetupImg from '../assets/images/mobile_valeting_setup_1794677547730.jpg';

export type ServiceCategory = 'all' | 'valeting' | 'specialist';

export interface ServicePackage {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  summary: string;
  highlights: string[];
  idealFor: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export const BUSINESS_INFO = {
  name: 'Luxury Approved Valeting Ltd',
  shortName: 'Luxury Approved Valeting',
  phoneDisplay: '+44 7498 033738',
  phoneHref: 'tel:+447498033738',
  email: 'luxuryapprovedvaletingltd@gmail.com',
  emailHref: 'mailto:luxuryapprovedvaletingltd@gmail.com',
  reviewsCount: 164,
  recommendRate: '100%',
  teamSize: '1–2 Man Team',
};

export const MEDIA_ASSETS = {
  hero: heroImg,
  mobileSetup: mobileSetupImg,
};

export const SERVICES: ServicePackage[] = [
  {
    id: 'ceramic-coatings',
    number: '01',
    title: 'Ceramic Coatings',
    category: 'valeting',
    summary:
      'Long-term SiO2 paint protection engineered to lock in deep wet-look gloss, UV resistance, and effortless hydrophobic water beading.',
    highlights: [
      'Full multi-stage paint decontamination prior to bonding',
      'Durable hydrophobic barrier against road salt and grime',
      'Deep mirror clarity on gloss, trim, and alloy faces',
    ],
    idealFor: 'Daily drivers, prestige & new vehicles',
    image: ceramicImg,
    imageAlt: 'Tight spherical hydrophobic water beads on black ceramic-coated car paintwork',
    featured: true,
  },
  {
    id: 'full-detail',
    number: '02',
    title: 'Full Detail',
    category: 'valeting',
    summary:
      'Complete inside-and-out restoration restoring showroom condition across bodywork, interior cabins, upholstery, and trim.',
    highlights: [
      'Deep interior steam, extraction, and leather conditioning',
      'Three-stage exterior decontamination and clay bar treatment',
      'Protective wax or polymer sealant application',
    ],
    idealFor: 'Seasonal resets, sales prep & family vehicles',
  },
  {
    id: 'exterior-valet',
    number: '03',
    title: 'Exterior Valet',
    category: 'valeting',
    summary:
      'Safe, thorough exterior maintenance wash designed to lift traffic film without introducing wash swirls.',
    highlights: [
      'Citrus pre-wash and thick pH-neutral snow foam dwell',
      'Two-bucket grit-guarded contact wash and plush drying',
      'Deep wheel face, barrel, and tyre wall finish',
    ],
    idealFor: 'Regular upkeep & maintenance plans',
  },
  {
    id: 'machine-polishing',
    number: '04',
    title: 'Machine Polishing',
    category: 'valeting',
    summary:
      'Precision single or multi-stage paint correction removing swirl marks, light scratches, haze, and oxidation.',
    highlights: [
      'Paint depth inspection and tailored pad/compound pairing',
      'Removes unsightly rotary holograms and wash marring',
      'Restores crisp depth and optical clarity prior to protection',
    ],
    idealFor: 'Dark paintwork, swirls & dulled finishes',
    image: machinePolishImg,
    imageAlt: 'Detailing specialist operating a dual-action machine polisher on black bodywork',
    featured: true,
  },
  {
    id: 'caravan-cleaning',
    number: '05',
    title: 'Caravan Cleaning',
    category: 'specialist',
    summary:
      'Dedicated roof-to-chassis mobile wash and protection tailored safely for touring caravans and motorhomes.',
    highlights: [
      'Safe algae, moss, and black streak removal',
      'Scratch-free care for acrylic windows and decals',
      'Protective hydrophobic rinse coat for seasonal storage',
    ],
    idealFor: 'Touring caravans, campervans & motorhomes',
    image: caravanImg,
    imageAlt: 'Spotless touring caravan receiving a gentle snow foam and jet wash rinse',
    featured: true,
  },
  {
    id: 'jet-washing',
    number: '06',
    title: 'Jet Washing',
    category: 'specialist',
    summary:
      'High-pressure precision rinsing using our onboard mobile water supply for tough grime, arches, and work vehicles.',
    highlights: [
      'Controlled pressure flushing for wheel arches and chassis',
      'Clears mud, winter road salt, and commercial site debris',
      'Self-contained mobile unit — zero tap access required',
    ],
    idealFor: 'Vans, 4x4s, trailers & hard surfaces',
  },
];

export const VEHICLE_TYPES = [
  'Saloon / Hatchback',
  'SUV / 4x4',
  'Sports / Prestige',
  'Van / Commercial',
  'Caravan / Motorhome',
];
