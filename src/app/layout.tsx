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
  title: 'Your Gardening Business',
  description: 'Professional gardening services in Australia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.className}>
      <head>        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
       <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}