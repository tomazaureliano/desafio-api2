// components/MovieVitrine.tsx
import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Button } from "./ui/Button";
import MovieCard from './ui/MovieCard';


const GENRES = [
  { id: '', name: 'Todos' },
  { id: '28', name: 'Ação' },
  { id: '35', name: 'Comédia' },
  { id: '18', name: 'Drama' },
  { id: '27', name: 'Terror' },
  { id: '878', name: 'Ficção' },
];

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export async function getMovies(page: number = 1, genreId?: string, query?: string) {
  let endpoint = 'movie/popular';
  let params = `&page=${page}`;

  // Prioridade 1: Busca por texto
  if (query) {
    endpoint = 'search/movie';
    params += `&query=${encodeURIComponent(query)}`;
  } 
  // Prioridade 2: Filtro por gênero
  else if (genreId) {
    endpoint = 'discover/movie';
    params += `&with_genres=${genreId}`;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR${params}`,
    { next: { revalidate: 3600 } }
  );
  
  const data = await res.json();
  return {
    results: data.results as Movie[],
    totalPages: data.total_pages as number,
  };
}
console.log("DEBUG IMPORTS:", { SearchBar, Button, MovieCard });
export default async function MovieVitrine({ page = '1', genre = '', search = '' }) {
  const currentPage = parseInt(page);
  const { results: movies, totalPages } = await getMovies(currentPage, genre, search);

  return (
    <section id="vitrine" className="py-20 bg-black px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl font-bold text-white font-oxygen">
            {search ? `Resultados para: ${search}` : 'Explorar Catálogo'}
          </h2>
          
          {/* Aqui é onde o erro acontece se o SearchBar não for exportado como DEFAULT */}
          <SearchBar />
        </div>

        {/* Filtros de Gênero usando Button styles */}
        {!search && (
          <div className="flex flex-wrap gap-3 mb-12">
            {GENRES.map((g) => (
              <Link key={g.id} href={`?genre=${g.id}&page=1#vitrine`}>
                <Button variant={genre === g.id ? 'primary' : 'secondary'} size="sm">
                  {g.name}
                </Button>
              </Link>
            ))}
          </div>
        )}

        {/* Grid usando o novo MovieCard */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <p className="text-zinc-500 col-span-full text-center py-20">Nenhum filme encontrado. 🍿</p>
          )}
        </div>

        {/* Paginação usando o componente Button */}
        <div className="flex justify-center items-center gap-6 mt-16">
          {currentPage > 1 && (
            <Link href={`?search=${search}&genre=${genre}&page=${currentPage - 1}#vitrine`}>
              <Button variant="ghost">← Anterior</Button>
            </Link>
          )}

          <span className="text-zinc-500">Página {currentPage}</span>

          {currentPage < (totalPages > 500 ? 500 : totalPages) && (
            <Link href={`?search=${search}&genre=${genre}&page=${currentPage + 1}#vitrine`}>
              <Button variant="outline">Próxima →</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}