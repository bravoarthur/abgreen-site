
import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Home - Your Gardening Business',
  description: 'Transform your garden with professional gardening services in Australia.',
};

export default function Home() {
  const getRandomServices = (services: { id: string; title: string; description: string }[], count: number) => {
    const shuffled = services.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomServices = getRandomServices(services, 3);

  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen bg-garden-green text-white relative">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">Transform Your Garden</h1>
        <p className="mt-4 text-lg sm:text-base">rofessional gardening services.</p>
        <Link
          href="/contact"
          className="mt-6 px-6 py-3 bg-light-garden text-garden-green rounded-lg hover:bg-garden-green hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 sm:px-4 sm:py-2 sm:text-sm"
        >
          Request a Quote
        </Link>
      </section>
      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center sm:text-xl">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {randomServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
