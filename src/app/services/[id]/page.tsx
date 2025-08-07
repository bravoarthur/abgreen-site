import type { Metadata } from 'next';
import Image from 'next/image';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

interface ServiceDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.title} - Ab Green Garden Maintenance`,
    description: service.description,
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
        <p className="text-lg sm:text-base mb-6">{service.additionalInfo}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src={`/images/service${service.id}_1.jpg`}
            alt={`Image 1 of ${service.title}`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
          <Image
            src={`/images/service${service.id}_2.jpg`}
            alt={`Image 2 of ${service.title}`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}