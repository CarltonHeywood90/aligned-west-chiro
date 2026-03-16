import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

// 1. Initialize fonts with CSS variables
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AlignedWest Chiropractic | Healing Reimagined',
  description: 'Holistic chiropractic care blending mind, body, and soul in Orem, Utah.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Apply font variables and set base text smoothing
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased text-clinic-dark bg-white min-h-screen flex flex-col">
        
        {/* The Navigation stays at the top */}
        <Navigation />
        
        {/* flex-grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* The Footer stays at the bottom */}
        <Footer />

      </body>
    </html>
  );
}