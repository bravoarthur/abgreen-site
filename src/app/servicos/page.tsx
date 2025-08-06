import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Serviços - Seu Negócio de Jardinagem',
  description: 'Conheça nossos serviços de jardinagem profissional.',
};

export default function Servicos() {
  return (
    <div>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">Nossos Serviços</h1>
      </section>
      <div className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
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