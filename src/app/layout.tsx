import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter} from 'next/font/google'

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400","700"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abgreen.com.au'),
  title: 'Ab Green Garden Maintenance',
  description: 'Gardener in Dee Why offering lawn mowing, hedging, and garden maintenance. Serving Northern Beaches with professional care. Hedging, Lawn Mowing and more.',
  keywords: 'gardener Dee Why, lawn mowing Dee Why, garden care Northern Beaches, hedging in Manly, pressure washing in Avalon, gardening services Australia, Lawn Mowing Manly, Lawn Mowing curl curl, gardener Northern Beaches',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Gardener Dee Why | Lawn Mowing Northern Beaches',
    description: 'Professional gardening services in Dee Why and Northern Beaches. Lawn mowing, hedging, pressure washing, and more!',
    url: 'https://www.abgreen.com.au', // Substitua pelo seu domínio real
    siteName: 'Ab Green Garden Maintenance',
    images: [
      {
        url: '/images/gardenimage-bg.jpg', // Caminho relativo a partir de /public
        width: 1200,
        height: 630,
        alt: 'Garden maintenance in Dee Why',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gardener Dee Why | Lawn Mowing & Garden Care',
    description: 'Expert gardening services in Dee Why and Northern Beaches.',
    images: ['/images/garden-bg.jpg'], // Mesmo caminho da Open Graph
  },
  icons: {
    icon: '/favicon.ico', // Caminho para o favicon atualizado
  },
  viewport: 'width=device-width, initial-scale=1.0', // Já está no <head>, mas pode ser movido aqui
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.className}>
      <head>
        <meta name="google-site-verification" content="PXWR0WyZEsZID4rLg_hsrSifHlZgU59ycdW687sB0VI"/>        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ab Green Garden Maintenance",
              description: "Gardening services across Northern Beaches including lawn mowing, hedging, and pressure washing.",
              url: "https://www.abgreen.com.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dee Why",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              areaServed: [
                "Seaforth",
                "Brookvale",
                "Narrabeen",
                "Warriewood",
                "Manly",
                "Newport",
                "French Forest",
                "Forestville",
                "Cromer",
                "Curl Curl",
                "Freshwater",
                "Collaroy",
                "Mona Vale",
              ],
              telephone: "+61 424 226 446", // Substitua pelo seu número real
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}