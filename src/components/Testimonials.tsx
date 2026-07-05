import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amanda R.',
    service: 'Coloração & Corte',
    rating: 5,
    text: 'Resultado absolutamente incrível! A equipe realmente ouviu o que eu queria e entregou além das minhas expectativas. O ambiente do salão é tão calmo e luxuoso.',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Marcus T.',
    service: 'Massagem Relaxante',
    rating: 5,
    text: 'Melhor massagem que já fiz na vida. A terapeuta era incrivelmente habilidosa e o ambiente é perfeito para relaxar. Saio completamente renovado toda vez.',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Sofia L.',
    service: 'Pacote para Noiva',
    rating: 5,
    text: 'A Serenity tornou meu dia de casamento inesquecível. O pacote para noiva foi impecável — cabelo, maquiagem, unhas. Cada detalhe foi perfeito. Me senti uma rainha.',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A96E]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Nossos Clientes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">O Que Dizem</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="relative bg-white/5 border border-white/10 p-8 hover:border-[#C9A96E]/40 transition-all duration-300 hover-lift">
              <Quote size={32} className="text-[#C9A96E]/30 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#C9A96E]" fill="#C9A96E" />
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-[#C9A96E] text-xs tracking-wide">{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
