// src/app/not-found.tsx
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main 
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(9, 9, 11, 1) 100%), 
          linear-gradient(270deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 59%), 
          url('/images/imgHero.png')
        ` 
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          
          {/* Badge de Erro */}
          <div className="px-4 py-1.5 rounded-full border border-red-500/40 bg-red-500/10 backdrop-blur-md text-red-500 text-xs font-bold uppercase tracking-widest">
            Erro 404 • Página não encontrada
          </div>

          {/* Título Estilo Hero */}
          <h1 className="text-white text-7xl md:text-[10rem] font-bold font-oxygen leading-none tracking-tighter [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.8)]">
            Corte!
          </h1>

          {/* Mensagem Temática */}
          <p className="text-white/80 text-2xl md:text-3xl font-medium font-oxygen max-w-xl leading-snug">
            Essa cena não está no nosso roteiro.<br/>
            O link que você seguiu pode estar quebrado<br/>
            ou a página foi removida da edição final.
          </p>

          {/* Botão de Retorno seguindo o padrão Figma */}
          <div className="pt-6">
            <Link 
              href="/" 
              className="inline-block px-12 py-4 rounded-[56px] border-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 text-white text-2xl font-bold font-oxygen shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay de Vinheta */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20 pointer-events-none" />
    </main>
  );
}