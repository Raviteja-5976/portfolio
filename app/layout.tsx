import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raviteja Karnati - Interactive Portfolio',
  description: 'Gamified portfolio of Raviteja Karnati - Full Stack Developer & AI Engineer',
  keywords: 'Raviteja Karnati, Full Stack Developer, AI Engineer, Interactive Portfolio, Gamified',
  authors: [{ name: 'Raviteja Karnati' }],
  openGraph: {
    title: 'Raviteja Karnati - Interactive Portfolio',
    description: 'Experience an interactive, gamified portfolio showcasing expertise in AI, ML, and Full Stack Development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}