import { ArrowRight, Star, Heart, Crown, Sparkles } from 'lucide-react';
import { WA_LINK } from '../constants';

const photos = [
  {
    src: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
    alt: 'Noiva em produção exclusiva',
  },
  {
    src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
    alt: 'Ambiente exclusivo para noivas',
  },
  {
    src: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
    alt: 'Maquiagem para noiva',
  },
  {
    src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
    alt: 'Cabelo para noiva',
  },
];

const packages = [
  {
    icon: Star,
    name: 'Pacote Noiva Essencial',
    highlight: false,
    includes: [
      'Penteado para Noiva',
      'Maquiagem para Noiva',
      'Manicure e Pedicure',
      'Teste de Penteado',
      'Teste de Maquiagem',
    ],
  },
  {
    icon: Heart,
    name: 'Pacote Noiva Clássico',
    highlight: false,
    includes: [
      'Penteado para Noiva',
      'Maquiagem para Noiva',
      'Manicure e Pedicure',
      'Hidratação Capilar',
      'Teste de Penteado',
      'Teste de Maquiagem',
      'Sobrancelha Design',
    ],
  },
  {
    icon: Crown,
    name: 'Pacote Noiva Premium',
    highlight: true,
    includes: [
      'Penteado para Noiva',
      'Maquiagem para Noiva',
      'Manicure e Pedicure Completo',
      'Hidratação Intra Celular',
      'Massagem Relaxante',
      'Sobrancelha Design',
      'Teste de Penteado',
      'Teste de Maquiagem',
      'Sesão para Madrinhas (1)',
    ],
  },
  {
    icon: Sparkles,
    name: 'Pacote Noiva Luxo',
    highlight: false,
    includes: [
      'Penteado para Noiva',
      'Maquiagem Artística para Noiva',
      'Manicure e Pedicure Completo',
      'Hidratação Reconstrução',
      'Massagem Relaxante',
      'Banho de Lua',
      'Sobrancelha com Henna',
      'Alongamento de Cílios',
      'Revitalização Facial',
      'Teste de Penteado e Maquiagem',
      'Sessão para Madrinhas (2)',
    ],
  },
];

const weekServices = [
  'Hidratação e Reconstrução Capilar',
  'Coloração e Luzes',
  'Progressiva ou Botox Capilar',
  'Sobrancelha Design com Henna',
  'Micropigmentação',
  'Massagem Relaxante',
  'Limpeza de Pele e Peeling',
  'Depilação Completa',
  'Banho de Lua',
  'Manicure e Pedicure',
];

export default function DiaNoivaSection() {
  return (
    <section className="py-0 overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1280&fm=webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#E8D5B0] text-xs tracking-[0.5em] uppercase mb-4">Experiência Exclusiva</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white font-light mb-4 leading-tight">
            Dia da Noiva
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mb-5" />
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Um espaço mágico e exclusivo para que o dia mais especial da sua vida seja vivido com toda a beleza, emoção e cuidado que você merece.
          </p>
        </div>
      </div>

      {/* Espaço Exclusivo */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Nosso Espaço</p>
              <h3 className="font-serif text-4xl text-[#1C1C1C] font-light mb-5 leading-snug">
                Espaço Noivas Exclusivo —<br />Um Ambiente Feito Para Este Grande Dia
              </h3>
              <div className="w-10 h-0.5 bg-[#C9A96E] mb-6" />
              <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
                Nosso Espaço Noivas foi pensado em cada detalhe para criar uma atmosfera de leveza, elegância e aconchego. Um ambiente reservado, privativo e decorado especialmente para que você e suas madrinhas se preparem com tranquilidade e estilo.
              </p>
              <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
                Contamos com iluminação profissional, área de descanso, espelhos de camarim, música ambiente e toda a estrutura que você precisa para se produzir com comodidade. O espaço também dispõe de área externa belíssima, ideal para fotos do making of que vão compor as memórias eternas do seu álbum de casamento.
              </p>
              <p className="text-[#6B6560] text-sm leading-relaxed">
                Nossa equipe de especialistas estará inteiramente dedicada a você neste dia, garantindo que cada serviço seja executado com perfeição, carinho e no ritmo que o momento pede.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo) => (
                <div key={photo.alt} className="overflow-hidden aspect-square">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    width="480"
                    height="480"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Serviços da Semana */}
      <div className="bg-[#1C1C1C] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Preparação Completa</p>
            <h3 className="font-serif text-4xl text-white font-light mb-4">
              Serviços Para a Semana do Casamento
            </h3>
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto mb-4" />
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              Além do atendimento no grande dia, cuidamos da sua beleza durante toda a semana do casamento. Chegue ao altar no seu melhor, de dentro para fora.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {weekServices.map((service) => (
              <div
                key={service}
                className="border border-white/10 p-5 text-center hover:border-[#C9A96E]/50 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-6 h-0.5 bg-[#C9A96E] mx-auto mb-3" />
                <p className="text-white/80 text-xs leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pacotes */}
      <div className="bg-[#FAF7F2] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Escolha o Seu</p>
            <h3 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
              Pacotes para o Dia da Noiva
            </h3>
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto mb-4" />
            <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
              Quatro opções de pacotes completos, cada um pensado para proporcionar uma experiência única e inesquecível. Solicite uma cotação personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col p-8 transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[#C9A96E] text-[#1C1C1C] shadow-2xl scale-105'
                      : 'bg-white border border-gray-100 hover:border-[#C9A96E]/40 hover:shadow-lg'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1C1C1C] text-white text-[10px] tracking-widest uppercase px-4 py-1">
                      Mais Completo
                    </div>
                  )}
                  <div className={`w-10 h-10 flex items-center justify-center mb-5 ${pkg.highlight ? 'bg-white/20' : 'bg-[#FAF7F2]'}`}>
                    <Icon size={18} className={pkg.highlight ? 'text-[#1C1C1C]' : 'text-[#C9A96E]'} />
                  </div>
                  <h4 className={`font-serif text-lg font-medium mb-5 leading-snug ${pkg.highlight ? 'text-[#1C1C1C]' : 'text-[#1C1C1C]'}`}>
                    {pkg.name}
                  </h4>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${pkg.highlight ? 'bg-[#1C1C1C]' : 'bg-[#C9A96E]'}`} />
                        <span className={`text-xs leading-relaxed ${pkg.highlight ? 'text-[#1C1C1C]/80' : 'text-[#6B6560]'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`w-full text-center text-xs tracking-widest uppercase py-3 font-medium transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-white text-[#8B6914] hover:bg-white/90'
                        : 'bg-[#C9A96E] text-[#1C1C1C] hover:bg-[#A07840]'
                    }`}
                  >
                    Solicitar Cotação
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-[#6B6560] text-sm mb-5">
              Não encontrou o pacote ideal? Montamos um pacote exclusivo sob medida para você.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1C1C1C] text-white text-xs tracking-widest uppercase hover:bg-[#C9A96E] transition-all duration-300"
            >
              Clique Aqui e Solicite uma Cotação de Valores Agora
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Espaço Fotográfico */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1280&fm=webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#E8D5B0] text-xs tracking-[0.4em] uppercase mb-4">Seu Álbum de Casamento</p>
          <h3 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
            Espaço Fotográfico Interno & Externo
          </h3>
          <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto mb-5" />
          <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-xl">
            Nosso ambiente conta com cenários lindos tanto internos quanto externos, especialmente pensados para compor as imagens do making of que vão emocionar para sempre no seu álbum de casamento.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-xs tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
          >
            Conhecer o Espaço
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
