import './globals.css';
import type { Metadata } from 'next';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Portafolio en Next.js',
  description: 'Portafolio profesional de Wilmer Gulcochía migrado a Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.3.0/css/all.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
