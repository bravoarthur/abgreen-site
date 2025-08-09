export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const features: Feature[] = [
    {
      id: 1,
      title: 'Strata & Property Managers',
      description: 'Reliable gardening solutions for strata and property management needs.',
      image: '/images/strata-property.svg',
    },
    {
      id: 2,
      title: 'Garden Maintenance',
      description: 'Expert care to keep your garden thriving year-round.',
      image: '/images/garden-maintenance.svg',
    },
  {
    id: 3,
    title: 'Commercial Maintenance',
    description: 'Tailored upkeep for business landscapes, ensuring vibrant outdoor spaces.',
    image: '/images/commercial-maintenance.svg',
  },
];