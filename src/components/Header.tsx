'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="AB Green Garden Maintenance"
            width={450} // Tela pequena
            height={120} // Altura automática
            className="md:w-[400px] w-[250px] h-auto object-contain" // w-80 = 320px, w-32 = 128px (aproximado para 120px)
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-xl text-garden-green hover:text-earth-brown transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-xl text-garden-green hover:text-earth-brown transition-colors">
            About
          </Link>
          <Link href="/services" className="text-xl text-garden-green hover:text-earth-brown transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="text-xl text-garden-green hover:text-earth-brown transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-xl text-garden-green hover:text-earth-brown transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-garden-green" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <Link href="/" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/gallery" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="/contact" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}


/*'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50} className="object-contain" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-xl text-garden-green hover:text-earth-brown transition-colors">Home</Link>
          <Link href="/sobre" className="text-xl text-garden-green hover:text-earth-brown transition-colors">Sobre</Link>
          <Link href="/servicos" className="text-xl text-garden-green hover:text-earth-brown transition-colors">Serviços</Link>
          <Link href="/galeria" className="text-xl text-garden-green hover:text-earth-brown transition-colors">Galeria</Link>
          <Link href="/contato" className="text-xl text-garden-green hover:text-earth-brown transition-colors">Contato</Link>
        </nav>
        <button className="md:hidden text-garden-green" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <Link href="/" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>Home</Link>
          <Link href="/sobre" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>Sobre</Link>
          <Link href="/servicos" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>Serviços</Link>
          <Link href="/galeria" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>Galeria</Link>
          <Link href="/contato" className="block text-lg text-garden-green hover:text-earth-brown py-2" onClick={toggleMenu}>Contato</Link>
        </nav>
      )}
    </header>
  );
}


/*

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white text-garden-green p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo do Negócio de Jardinagem"
            width={350} // Ajuste conforme o tamanho do seu logo
            height={90} // Ajuste conforme o tamanho do seu logo
            className="object-contain"
          />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-xl hover:text-earth-brown hover:underline transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-xl hover:text-earth-brown hover:underline transition-all duration-300 ease-in-out"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/servicos"
              className="text-xl hover:text-earth-brown hover:underline transition-all duration-300 ease-in-out"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/galeria"
              className="text-xl hover:text-earth-brown hover:underline transition-all duration-300 ease-in-out"
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="text-xl hover:text-earth-brown hover:underline transition-all duration-300 ease-in-out"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  */