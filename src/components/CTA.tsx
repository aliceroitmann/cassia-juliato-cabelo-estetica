import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4">Pronto para se Transformar?</p>
        <h2 className="font-serif text-5xl md:text-6xl text-white font-light mb-6 leading-tight">
          Agende pelo<br />WhatsApp Agora
        </h2>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-white/60 text-sm leading-relaxed mb-10">
          Fale diretamente com nossa equipe e agende seu horário de forma rápida e prática.
          Atendimento personalizado do início ao fim.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-all duration-300"
        >
          Marcar Horário Agora
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
