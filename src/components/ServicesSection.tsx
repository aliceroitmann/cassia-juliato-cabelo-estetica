import { Scissors, Sparkles, Wind, Hand, Droplets, Flower2 } from 'lucide-react';
import { WA_LINK } from '../constants';

const services = [
  {
    icon: Scissors,
    title: 'Corte & Penteado',
    desc: 'De cortes precisos a colorações criativas, nossos estilistas criam visuais que expressam sua personalidade única.',
    img: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
  {
    icon: Sparkles,
    title: 'Tratamentos Faciais',
    desc: 'Rituais avançados de skincare com produtos premium para limpar, rejuvenescer e restaurar o seu brilho.',
    img: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
  {
    icon: Wind,
    title: 'Massagens',
    desc: 'Entregue-se ao relaxamento profundo com nossas técnicas terapêuticas de massagem corporal e pedras quentes.',
    img: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
  {
    icon: Hand,
    title: 'Manicure & Pedicure',
    desc: 'Cuide das suas mãos e pés com tratamentos de luxo, modelagem e esmaltação para um acabamento impecável.',
    img: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
  {
    icon: Droplets,
    title: 'Tratamentos Corporais',
    desc: 'Esfoliações e envolturas nutritivas que deixam a pele sedosa e profundamente hidratada.',
    img: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
  {
    icon: Flower2,
    title: 'Pacotes para Noivas',
    desc: 'Pacotes completos de beleza e bem-estar criados para tornar o seu dia especial absolutamente inesquecível.',
    img: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=300&q=60&fm=webp',
  },
];

interface ServicesSectionProps {
  setPage: (page: string) => void;
  compact?: boolean;
}

export default function ServicesSection({ setPage, compact = false }: ServicesSectionProps) {
  const displayed = compact ? services.slice(0, 3) : services;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">O Que Oferecemos</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Salão de Beleza em Valinhos SP — Nossos Serviços
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Um menu selecionado de tratamentos de beleza e bem-estar para elevar sua experiência
            e celebrar cada versão de você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group hover-lift">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width="300"
                    height="208"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 w-9 h-9 bg-[#C9A96E] flex items-center justify-center">
                    <Icon size={16} className="text-[#1C1C1C]" />
                  </div>
                </div>
                <div className="border border-gray-100 border-t-0 p-6">
                  <h3 className="font-serif text-xl text-[#1C1C1C] font-medium mb-2">{service.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{service.desc}</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-4 text-xs tracking-widest uppercase text-[#8B6914] hover:text-[#7A5C10] transition-colors flex items-center gap-2 group/btn"
                  >
                    Agendar
                    <span className="w-4 h-px bg-[#C9A96E] group-hover/btn:w-6 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {compact && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPage('services')}
              className="px-8 py-3 border border-[#C9A96E] text-[#8B6914] text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#1C1C1C] transition-all duration-300"
            >
              Ver Todos os Serviços
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
