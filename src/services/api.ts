const API_KEY = 'b06371b6dc600749266263f205ec08d8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function getMovies() {
  try {

    
    // Mapeando os dados para sua vitrine
    interface Movie {
        title: string;
        poster_path: string;
        vote_average: number;
        overview: string;
    }

    interface ApiResponse {
        results: Movie[];
    }

    interface MappedMovie {
        titulo: string;
        poster: string;
        nota: number;
        resumo: string;
    }

    const movieResponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    const data: ApiResponse = await movieResponse.json();
    
    // Mapeando os dados para sua vitrine
    const movies: MappedMovie[] = data.results.map(movie => ({
        titulo: movie.title,
        poster: `${IMG_URL}${movie.poster_path}`,
        nota: movie.vote_average,
        resumo: movie.overview
    }));

    console.log(movies);
  } catch (error) {
    console.error("Erro ao conectar com a TMDB:", error);
  }
}

getMovies();