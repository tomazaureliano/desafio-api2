
import React from 'react';
import BackButton from "@/components/ui/BackButton";


interface CastMember {
  id: number;
  name: string;
  character: string;
}

interface MovieDetails {
  title: string;
  overview: string;
  backdrop_path: string;
  runtime: number;
  release_date: string;
  credits: {
    cast: CastMember[];
  };
}

const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}min`;
};

async function getMovieDetails(id: string): Promise<MovieDetails | null> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=pt-BR&append_to_response=credits`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (!movie) return <div className="text-white p-20 font-oxygen">Filme não encontrado.</div>;

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  
  const mainCast = movie.credits?.cast
    ?.slice(0, 5)
    .map((actor: CastMember) => actor.name)
    .join(', ');

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-oxygen">
      <section 
        className="relative w-full min-h-[85vh] flex items-end pb-12 bg-cover bg-center"
        style={{ 
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(9, 9, 11, 1) 100%), 
            linear-gradient(270deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 59%), 
            url('${backdropUrl}')
          ` 
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded bg-red-600 text-white font-bold text-sm">
              {releaseYear}
            </span>
            <span className="text-zinc-300 font-medium">
              {formatRuntime(movie.runtime)}
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.8)]">
            {movie.title}
          </h1>

          {mainCast && (
            <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
              <span className="text-white font-semibold">Elenco:</span> {mainCast}
            </p>
          )}

          <p className="max-w-3xl text-xl text-zinc-300 mb-10 leading-relaxed">
            {movie.overview}
          </p>
          
          <BackButton />
        </div>
      </section>
    </main>
  );
}