import { MetadataRoute } from 'next';


const services = [
  { id: '1', title: 'Lawn Mowing', path: '/services/1' },
  { id: '2', title: 'Hedge Trimming', path: '/services/2' },
  { id: '3', title: 'Weeding', path: '/services/3' },
  { id: '4', title: 'Tree Pruning', path: '/services/4' },
  { id: '5', title: 'Pressure Washing', path: '/services/5' },
  { id: '6', title: 'Mulching', path: '/services/6' },
  { id: '7', title: 'Garden Clean Up', path: '/services/7' },
  { id: '8', title: 'Garden Maintenance', path: '/services/8' },
  { id: '9', title: 'Turfing', path: '/services/9' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.abgreen.com.au';

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // URLs dinâmicas dos serviços
  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticUrls, ...serviceUrls];
}