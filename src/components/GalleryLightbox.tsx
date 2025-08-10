"use client";

import { useState } from "react";
import Image from "next/image";
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

interface GalleryLightboxProps {
  photos: Photo[];
}

export default function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const lightboxSlides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
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
    </>
  );
}