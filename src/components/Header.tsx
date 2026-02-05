
import Link from 'next/link';
import Image from 'next/image'; 

export default function Header() {
  return (
    <header className="w-full min-h-[80px] md:h-[100px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between bg-black/65 backdrop-blur-md shadow-lg fixed top-0 z-50 py-4 md:py-0">
      
  
      <div className="flex items-center gap-3 md:gap-4">
        <Image 
          src="/icons/logo.svg" 
          alt="MovieNight Logo" 
          width={48} 
          height={48}
          className="md:w-[56px] md:h-[56px] object-contain"
          priority 
        />
        
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight font-oxygen">
          MovieNight
        </h1>
      </div>

   
      <nav className="flex items-center gap-6 md:gap-10 mt-4 md:mt-0">
        <Link 
          href="#vitrine" 
          className="text-white text-sm md:text-lg font-light hover:text-red-500 transition-colors font-oxygen"
        >
          Catálogo
        </Link>
      
       
        <Link 
          href="#contato" 
          className="text-white text-sm md:text-lg font-light hover:text-red-500 transition-colors font-oxygen"
        >
          Contato
        </Link>
      </nav>

    </header>
  );
}