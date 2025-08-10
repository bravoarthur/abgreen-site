import type { Metadata } from 'next';
import Image from 'next/image';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

interface ServiceDetailPageProps {
  params: { id: string };
}

const neighborhoods = [
  'Dee Why', 'Seaforth', 'Brookvale', 'Narrabeen', 'Warriewood',
  'Manly', 'Newport', 'Mona Vale', 'French Forest', 'Freshwater',
  'Curl Curl', 'Collaroy',
];

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);
  if (!service) {
    return { title: 'Service Not Found' };
  }

  // Rotaciona o bairro principal com base no ID
  const primaryNeighborhood = 'Dee Why';
  const locationKeywords = `${primaryNeighborhood}, Northern Beaches`;

  const keywordsService = service.title.toLowerCase().replace(/ & /g, ' ');
  const selectedNeighborhoods = neighborhoods.slice(1, 7).map((n) => n.toLowerCase()); // Limita a 6 bairros
  const otherNeighborhoods = neighborhoods.slice(7, 13).map((n) => n.toLowerCase())
  const keywords = `${keywordsService} ${selectedNeighborhoods.join(', ')}, gardening services`;

  return {
    title: `${service.title} in ${primaryNeighborhood} | AB Green Garden Maintenance`, 
    description: `${service.description} in ${locationKeywords}. Expert service across Northern Beaches.`,
    keywords,
    openGraph: {
      title: `${service.title} in ${primaryNeighborhood}`,
      description: `${service.description} in ${locationKeywords}.`,
      images: [
        {
          url: `/images/service${service.id}_1.jpg`,
          width: 600,
          height: 400,
          alt: `${service.title} example in ${primaryNeighborhood}`,
        },
        {
          url: `/images/service${service.id}_2.jpg`,
          width: 600,
          height: 400,
          alt: `${service.title} example in ${primaryNeighborhood}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in ${primaryNeighborhood}`,
      description: `${service.description} in ${locationKeywords}.`,
      images: [`/images/service${service.id}_1.jpg`],
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">{service.title}</h1>
      </section>
      <div className="py-12 px-4 max-w-5xl mx-auto">
        <p className="text-lg sm:text-base mb-6">{service.description}</p>
        <p className="text-lg sm:text-base mb-6">{`${service.additionalInfo}Request now ${service.title} in ${neighborhoods[0]}`}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src={`/images/service${service.id}_1.jpg`}
            alt={`${service.title} example 1 in Northern Beaches`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px]"
            priority
          />
          <Image
            src={`/images/service${service.id}_2.jpg`}
            alt={`${service.title} example 2 in Northern Beaches`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[250px]"
            priority
          />
        </div>
        <p className="mt-8 ml-2">
          We proudly offer {service.title} in {neighborhoods.slice(1, 7).join(', ')} and other Northern Beaches areas.
        </p>
        <p className="mt-8 ml-2">
          AB Green Garden Maintenance is also happy to provide {service.title} in {neighborhoods.slice(7, 12).join(', ')}.
        </p>
      </div>
    </div>
  );
}