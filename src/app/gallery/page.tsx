"use client";

import Gallery from 'react-photo-gallery';
import Head from 'next/head';

const photos = [
  { src: '/images/antes1.jpg', width: 4, height: 3, alt: 'Before project 1' },
  { src: '/images/depois1.jpg', width: 4, height: 3, alt: 'After Project 1' },
  { src: '/images/antes2.jpg', width: 4, height: 3, alt: 'Before project 2' },
  { src: '/images/depois2.jpg', width: 4, height: 3, alt: 'After Project 2' },
  { src: '/images/antes3.jpg', width: 4, height: 3, alt: 'Before project 3' },
  { src: '/images/depois3.jpg', width: 4, height: 3, alt: 'After Project 3' },
  { src: '/images/antes4.jpg', width: 4, height: 3, alt: 'Before project 4' },
  { src: '/images/depois4.jpg', width: 4, height: 3, alt: 'After Project 4' },
  { src: '/images/antes5.jpg', width: 4, height: 3, alt: 'Before project 5' },
  { src: '/images/depois5.jpg', width: 4, height: 3, alt: 'After Project 5' },
  { src: '/images/antes6.jpg', width: 4, height: 3, alt: 'Before project 6' },
  { src: '/images/depois6.jpg', width: 4, height: 3, alt: 'After Project 6' },
  { src: '/images/antes7.jpg', width: 4, height: 3, alt: 'Before project 7' },
  { src: '/images/depois7.jpg', width: 4, height: 3, alt: 'After Project 7' },
  { src: '/images/antes8.jpg', width: 4, height: 3, alt: 'Before project 8' },
  { src: '/images/depois8.jpg', width: 4, height: 3, alt: 'After Project 8' },
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