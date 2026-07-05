import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { WA_LINK } from '../constants';

const HERO_IMG =
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&fm=webp&q=50';

interface HeroProps {
  setPage: (page: string) => void;
}

export default function Hero({ setPage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* LCP image — <img> so the browser preload scanner finds it */}
      <img
        src={`${HERO_IMG}&w=800`}
        srcSet={`${HERO_IMG}&w=480 480w, ${HERO_IMG}&w=800 800w, ${HERO_IMG}&w=1200 1200w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        // @ts-expect-error fetchpriority not yet in all TS lib defs
        fetchpriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width="1024"
        height="576"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
      {/* vinheta lateral para profundidade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-[#C9A96E]/50 text-[#E8D5B0] text-xs tracking-[0.3em] uppercase px-5 py-2 mb-8 animate-fade-in-up">
          <Star size={10} fill="currentColor" />
          <span>Salão de Beleza & Estética Premium</span>
          <Star size={10} fill="currentColor" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-white font-light leading-none mb-4 animate-fade-in-up delay-100">
          Cassia Juliato Cabelo Estética
        </h1>
        <h2 className="font-serif text-xl md:text-3xl text-[#E8D5B0] italic font-light mb-6 animate-fade-in-up delay-200">
          Salão de Cabeleireiros — Sua Beleza em Boas Mãos
        </h2>

        <div className="section-divider mx-auto mb-8 animate-fade-in-up delay-300" />

        <p className="text-white/70 text-sm md:text-base tracking-wide max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
          Especialistas em cortes, coloração, penteados e estética. Atendimento personalizado
          para realçar o que há de mais bonito em você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a
            href={WA_LINK}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-all duration-300"
          >
            Agendar pelo WhatsApp
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setPage('services')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 text-white text-xs tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
          >
            Ver Serviços
          </button>
        </div>

        <div className="flex gap-10 justify-center mt-16 animate-fade-in-up delay-500">
          {[['6000+', 'Clientes Felizes'], ['08+', 'Especialistas'], ['18+', 'Anos de Excelência']].map(
            ([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl text-[#C9A96E] font-light">{num}</div>
                <div className="text-white/50 text-xs tracking-widest mt-1">{label}</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
