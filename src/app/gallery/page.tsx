"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image"; // Certifique-se de importar
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Definindo a interface para as fotos
interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const photos: Photo[] = [
  { src: "/images/antes1.jpg", width: 4, height: 3, alt: "Before project 1" },
  { src: "/images/depois1.jpg", width: 4, height: 3, alt: "After Project 1" },
  { src: "/images/antes2.jpg", width: 4, height: 3, alt: "Before project 2" },
  { src: "/images/depois2.jpg", width: 4, height: 3, alt: "After Project 2" },
  { src: "/images/antes3.jpg", width: 4, height: 3, alt: "Before project 3" },
  { src: "/images/depois3.jpg", width: 4, height: 3, alt: "After Project 3" },
  { src: "/images/antes4.jpg", width: 4, height: 3, alt: "Before project 4" },
  { src: "/images/depois4.jpg", width: 4, height: 3, alt: "After Project 4" },
  { src: "/images/antes5.jpg", width: 4, height: 3, alt: "Before project 5" },
  { src: "/images/depois5.jpg", width: 4, height: 3, alt: "After Project 5" },
  { src: "/images/antes6.jpg", width: 4, height: 3, alt: "Before project 6" },
  { src: "/images/depois6.jpg", width: 4, height: 3, alt: "After Project 6" },
  { src: "/images/antes7.jpg", width: 4, height: 3, alt: "Before project 7" },
  { src: "/images/depois7.jpg", width: 4, height: 3, alt: "After Project 7" },
  { src: "/images/antes8.jpg", width: 4, height: 3, alt: "Before project 8" },
  { src: "/images/depois8.jpg", width: 4, height: 3, alt: "After Project 8" },
];

export default function Galeria() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Converte o array de photos para o formato esperado pelo Lightbox
  const lightboxSlides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width * 100, // Ajuste proporcional
    height: photo.height * 100,
  }));

  // Função para abrir a galeria com tipagem explícita
  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width * 200} // Ajuste proporcional (ex.: 800px para width 4)
              height={photo.height * 200} // Ajuste proporcional (ex.: 600px para height 3)
              className="w-full h-auto object-cover cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        <Lightbox
          open={isOpen}
          index={selectedIndex}
          close={() => setIsOpen(false)}
          slides={lightboxSlides}
          plugins={[Thumbnails]}
          thumbnails={{ position: "bottom" }}
          on={{
            view: ({ index: currentIndex }) => setSelectedIndex(currentIndex),
          }}
        />
      </div>
    </div>
  );
}