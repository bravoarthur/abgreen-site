"use client";

import Gallery from 'react-photo-gallery';
import Head from 'next/head';

const photos = [
  { src: '/images/antes1.jpg', width: 4, height: 3, alt: 'Antes do projeto 1' },
  { src: '/images/depois1.jpg', width: 4, height: 3, alt: 'Depois do projeto 1' },
  // Adicione mais imagens conforme necessário
];

export default function Galeria() {
  return (
    <div>
      <Head>
        <title>Galeria - Seu Negócio de Jardinagem</title>
        <meta name="description" content="Veja nossos projetos de jardinagem antes e depois." />
      </Head>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Antes e Depois</h1>
      </section>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <div className="mt-8">
          <Gallery photos={photos} />
        </div>
      </div>
    </div>
  );
}