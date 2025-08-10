import type { Metadata } from 'next';
import GalleryLightbox from '@/components/GalleryLightbox';


interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const photos: Photo[] = [
  { src: '/images/antes1.jpg', width: 800, height: 600, alt: 'Before Hedges done in Dee Why' },
  { src: '/images/depois1.jpg', width: 800, height: 600, alt: 'After Hedges transformation in Dee Why' },
  { src: '/images/antes2.jpg', width: 800, height: 600, alt: 'Before garden in Manly' },
  { src: '/images/depois2.jpg', width: 800, height: 600, alt: 'After garden makeover in Manly' },
  { src: '/images/antes3.jpg', width: 800, height: 600, alt: 'Before Pressure Washing in Seaforth' },
  { src: '/images/depois3.jpg', width: 800, height: 600, alt: 'After Pressure Washing in Seaforth' },
  { src: '/images/antes4.jpg', width: 800, height: 600, alt: 'Before Lawn Mowing in Narrabeen' },
  { src: '/images/depois4.jpg', width: 800, height: 600, alt: 'After Lawn Mowing in Narrabeen' },
  { src: '/images/antes5.jpg', width: 800, height: 600, alt: 'Before garden clean up in New Port' },
  { src: '/images/depois5.jpg', width: 800, height: 600, alt: 'After garden clean up in New Port' },
  { src: '/images/antes6.jpg', width: 800, height: 600, alt: 'Before Weeding job in French Forest' },
  { src: '/images/depois6.jpg', width: 800, height: 600, alt: 'After Weeding job in French Forest' },
  { src: '/images/antes7.jpg', width: 800, height: 600, alt: 'Before Weeding in Brookvale' },
  { src: '/images/depois7.jpg', width: 800, height: 600, alt: 'After Weeding in Brookvale' },
  { src: '/images/antes8.jpg', width: 800, height: 600, alt: 'Before garden maintenance in Mona Vale' },
  { src: '/images/depois8.jpg', width: 800, height: 600, alt: 'After garden maintenance in Mona Vale' },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abgreen.com.au'),
  title: 'Before & After Gallery | Gardening in Dee Why & Northern Beaches',
  description: 'Explore our before and after garden transformations in Dee Why, Manly, and Northern Beaches. See the results of our expert gardening services.',
  keywords: 'before and after garden, garden transformation Dee Why, lawn mowing results Northern Beaches, gardening gallery, garden makeover',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Before & After Gallery | Gardening in Dee Why',
    description: 'View our garden before and after photos in Dee Why and Northern Beaches.',
    images: [
      {
        url: '/images/depois1.jpg',
        width: 1200,
        height: 630,
        alt: 'Garden before and after in Dee Why',
      },
    ],
    url: 'https://www.abgreen.com.au/gallery',
    siteName: 'AB Green Garden Maintenance',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before & After Gallery | Gardening in Dee Why',
    description: 'See our garden transformations in Dee Why and Northern Beaches.',
    images: ['/images/depois1.jpg'],
  },
};

export default function Galeria() {
  return (
    <div>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Before & After</h1>
      </section>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <div className="mt-8 text-center">
          <p className="text-lg sm:text-base mb-4">
            Explore our stunning garden transformations across Dee Why, Manly, Seaforth, and other Northern Beaches areas. Each project showcases our expertise in lawn mowing, hedging, and more.
          </p>
          <p className="text-lg sm:text-base mb-6">
            View the before and after results of our professional gardening services – contact us for your own transformation!
          </p>
        </div>
        <GalleryLightbox photos={photos} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Before & After Gallery',
              description: 'Gallery of before and after garden transformations in Dee Why and Northern Beaches.',
              url: 'https://www.abgreen.com.au/gallery',
              provider: {
                '@type': 'Organization',
                name: 'AB Green Garden Maintenance',
                url: 'https://www.abgreen.com.au',
              },
            }),
          }}
        />
      </div>
    </div>
  );
}
