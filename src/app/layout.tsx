import './globals.css';
import Header from "@/components/Header";
import MovieVitrine from '@/components/MovieVitrine';
import Footer from '@/components/Footer';
import { Oxygen } from 'next/font/google';

const oxygen = Oxygen({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-oxygen'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${oxygen.variable} font-sans bg-zinc-950`}>
        <Header />

        <main>
          {children} {/* Aqui entra o conteúdo da Landing Page */}
        </main>

       

        <Footer />
      </body>
    </html>
  );
}