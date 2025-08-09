export interface Service {
  id: string;
  title: string;
  description: string;
  additionalInfo: string;
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Lawn Mowing & Edging',
    description: 'Regular mowing and precise edging to maintain a neat, healthy lawn all year round.',
    additionalInfo: 'Our regular mowing and edging services use top-quality equipment to ensure your lawn stays pristine and vibrant throughout the seasons.',
    image: '/images/service-id1.jpg',
  },
  {
    id: '2',
    title: 'Hedge Trimming',
    description: 'Professional hedge trimming to shape and maintain your hedges, ensuring a tidy and polished look.',
    additionalInfo: 'We shape your hedges with precision, promoting healthy growth and a neat appearance for your garden.',
    image: '/images/service-id2.jpg',
  },
  {
    id: '3',
    title: 'Weeding',
    description: 'Thorough weed removal to protect your garden’s health, leaving your beds clean and vibrant.',
    additionalInfo: 'Our meticulous weeding services target unwanted plants, preserving the beauty and health of your garden beds.',
    image: '/images/service-id3.jpg',
  },
  {
    id: '4',
    title: 'Tree Pruning',
    description: 'Expert pruning to promote tree health and safety, enhancing the beauty of your landscape.',
    additionalInfo: 'We provide skilled pruning to improve tree structure, safety, and aesthetics, tailored to your garden’s needs.',
    image: '/images/service-id4.jpg',
  },
  {
    id: '5',
    title: 'Pressure Washing',
    description: 'High-pressure cleaning for driveways, paths, and outdoor surfaces, restoring their original shine.',
    additionalInfo: 'Our pressure washing services rejuvenate outdoor surfaces, removing dirt and grime for a clean, polished look.',
    image: '/images/service-id5.jpg',
  },
  {
    id: '6',
    title: 'Mulching',
    description: 'Quality mulching to retain moisture, suppress weeds, and enrich your garden’s soil.',
    additionalInfo: 'We apply premium mulch to enhance soil health, reduce weeds, and maintain moisture for a thriving garden.',
    image: '/images/service-id6.jpg',
  },
  {
    id: '7',
    title: 'Garden Clean Up',
    description: 'Detailed clean-up of external areas, removing and discarding vegetation rubbish as needed.',
    additionalInfo: 'We thoroughly clean external areas, clearing leaves, branches, and debris, with safe disposal of vegetation rubbish when required.',
    image: '/images/service-id7.jpg',
  },
  {
    id: '8',
    title: 'Garden Maintenance',
    description: 'Ongoing care to keep your garden thriving, with a focus on long-term beauty and health.',
    additionalInfo: 'Our comprehensive maintenance services ensure your garden remains vibrant and healthy, with regular care tailored to your needs.',
    image: '/images/service-id8.jpg',
  },
  {
    id: '9',
    title: 'Turfing',
    description: 'Professional turf installation for lush, durable lawns that enhance your outdoor space.',
    additionalInfo: 'We expertly install high-quality turf, ensuring a vibrant, long-lasting lawn tailored to your garden’s needs.',
    image: '/images/service-id9.jpg',
  },
];