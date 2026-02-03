import Link from 'next/link'; // Importação essencial
export default function Header() {
  return (
    <header className="w-full h-[100px] px-10 flex items-center justify-between bg-black/65 backdrop-blur-md shadow-lg fixed top-0 z-50">
      
      {/* Lado Esquerdo: Logo e Nome */}
      <div className="flex items-center gap-4">
        <img 
          src="/icons/logo.svg" 
          alt="MovieNight Logo" 
          className="w-[56px] h-[56px] object-contain" 
        />
        
        <h1 className="text-white text-3xl font-bold tracking-tight font-oxygen">
          MovieNight
        </h1>
      </div>

      {/* Lado Direito: Navegação */}
      <nav className="flex items-center gap-10">
        <Link 
          href="#vitrine" 
          className="text-white text-lg font-light hover:text-red-500 transition-colors font-oxygen"
        >
          Catálogo
        </Link>
        <Link 
          href="#contato" 
          className="text-white text-lg font-light hover:text-red-500 transition-colors font-oxygen"
        >
          Contato
        </Link>
      </nav>

    </header>
  );
}