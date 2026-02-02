import Link from 'next/link'
import Image from 'next/image'
import MovieVitrine from '@/components/MovieVitrine'
import Hero from '@/components/Hero'


export default function Home({ 
  searchParams 
}: { 
  searchParams: { page?: string; genre?: string; search?: string } 
}) {
  return (
    <>
      <Hero />
      <MovieVitrine 
        page={searchParams.page || '1'} 
        genre={searchParams.genre || ''} 
        search={searchParams.search || ''} 
      />
    </>
  );
}