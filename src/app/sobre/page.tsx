import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre - Seu Negócio de Jardinagem',
  description: 'Conheça mais sobre nosso negócio de jardinagem.',
};

export default function Sobre() {
  return (
    <div>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Sobre Nós</h1>
      </section>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <p className="text-lg">
          Somos uma empresa apaixonada por transformar jardins em espaços incríveis. Com anos de experiência na Austrália, oferecemos serviços de jardinagem profissional, desde manutenção até paisagismo.
        </p>
      </div>
    </div>
  );
}