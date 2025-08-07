"use client";

import Gallery from 'react-photo-gallery';
import Head from 'next/head';

const photos = [
  { src: '/images/antes1.jpg', width: 4, height: 3, alt: 'Before project 1' },
  { src: '/images/depois1.jpg', width: 4, height: 3, alt: 'After Project 1' },
  // Adicione mais imagens conforme necessário
];

export default function Galeria() {
  return (
    <div>
      <Head>
        <title>Gallery - Ab Green Garden Maintenance</title>
        <meta name="description" content="View our before and after gardening projects." />
      </Head>
      <section className="bg-garden-green text-white w-full py-8">
        <h1 className="text-4xl font-bold text-center">Before & After</h1>
      </section>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <div className="mt-8">
          <Gallery photos={photos} />
        </div>
      </div>
    </div>
  );
}