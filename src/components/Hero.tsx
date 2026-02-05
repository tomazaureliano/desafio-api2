
import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-cover bg-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      style={{ 
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90) 100%), 
          linear-gradient(270deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 59%), 
          url('/images/imgHero.png')
        ` 
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-0 z-10">
        <div className="flex flex-col items-start gap-8 md:gap-12">
          
          <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/80 text-xs font-bold uppercase tracking-widest">
            A Experiência Definitiva em Cinema
          </div>

          <h1 className="text-white text-7xl md:text-[11rem] font-bold font-oxygen leading-none tracking-tighter [text-shadow:_0px_4px_5px_rgb(0_0_0_/_0.53)]">
            MovieNight
          </h1>

          <p className="text-white/90 text-2xl md:text-3xl font-medium font-oxygen max-w-2xl leading-snug">
            Um catálogo atualizado e preciso sobre<br className="hidden md:block"/>
            os filmes que fazem sucesso. Descubra<br className="hidden md:block"/>
             o melhor filme para a sua noite.
          </p>

     
          <div className="pt-6">
            <a 
              href="#vitrine" 
              className="inline-block group relative px-12 py-4 rounded-[56px] border-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 text-white text-3xl font-bold font-oxygen shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Ver Agora!
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
    </section>
  );
}