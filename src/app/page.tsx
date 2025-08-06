
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function Home() {
  const getRandomServices = (services: { id: string; title: string; description: string }[], count: number) => {
    const shuffled = services.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomServices = getRandomServices(services, 3);

  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen bg-garden-green text-white relative">
        <h1 className="text-4xl font-bold text-center sm:text-3xl">Transforme Seu Jardim</h1>
        <p className="mt-4 text-lg sm:text-base">Serviços de jardinagem profissional na Austrália.</p>
        <Link
          href="/contato"
          className="mt-6 px-6 py-3 bg-light-garden text-garden-green rounded-lg hover:bg-garden-green hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 sm:px-4 sm:py-2 sm:text-sm"
        >
          Peça um Orçamento
        </Link>
      </section>
      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center sm:text-xl">Nossos Serviços</h2>
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

/*import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function Home() {
  // Função para sortear 3 serviços
  const getRandomServices = (services: { id: string; title: string; description: string }[], count: number) => {
    const shuffled = services.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomServices = getRandomServices(services, 3);

  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen bg-garden-green text-white relative">
        <h1 className="text-4xl font-bold">Transforme Seu Jardim</h1>
        <p className="mt-4 text-lg">Serviços de jardinagem profissional na Austrália.</p>
        <Link
          href="/contato"
          className="mt-6 px-6 py-3 bg-light-garden text-garden-green rounded-lg hover:bg-garden-green hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        >
          Peça um Orçamento
        </Link>
      </section>
      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
*/
/*


import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen bg-garden-green text-white relative">
        <h1 className="text-4xl font-bold">Transforme Seu Jardim</h1>
        <p className="mt-4 text-lg">Serviços de jardinagem profissional na Austrália.</p>
        <Link
          href="/contato"
          className="mt-6 px-6 py-3 bg-gray-300 text-garden-green rounded-lg hover:bg-light-garden hover:text-garden-green transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        >
          Peça um Orçamento
        </Link>
      </section>
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Manutenção de Jardins</h3>
            <p>Cuide do seu jardim com nossos serviços regulares.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Paisagismo</h3>
            <p>Crie um jardim dos seus sonhos com nosso design profissional.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Poda e Limpeza</h3>
            <p>Mantenha seu jardim impecável com nossos serviços de poda.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

*/