import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

const clusters = [
  {
    title: 'Maquiagem para Casamentos e Eventos - Valinhos SP',
    desc: 'Maquiagem artística e duradoura para festas, casamentos e eventos especiais. Utilizamos produtos de alta performance para garantir fotogenia, durabilidade e um visual impecável da primeira foto até a última dança, valorizando seus traços naturais.',
  },
  {
    title: 'Maquiagem para Noivas em Valinhos',
    desc: 'Look exclusivo para o dia mais especial da sua vida. Realizamos teste prévio para criar uma maquiagem que expresse sua personalidade e harmonize com o estilo do casamento. Beleza e emoção garantidas da cerimônia à última dança.',
  },
  {
    title: 'Maquiagem para Formaturas em Valinhos - SP',
    desc: 'Celebre sua conquista com uma produção impecável! Maquiagem sofisticada e moderna para formandas que querem brilhar na cerimônia e arrasar na festa, com técnicas que garantem durabilidade e fotogenia do início ao fim da comemoração.',
  },
];

function WaButton() {
  return (
    <div className="text-center my-10">
      <a
        href={WA_LINK}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-all duration-300"
      >
        Marcar Horário Agora
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

export default function ServiceClustersMaquiagem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Maquiagem & Afins</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Todos os Nossos Serviços - Maquiagem em Valinhos
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Produções artísticas pensadas para realçar a sua beleza em cada momento único da sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
          {clusters.map((cluster) => (
            <div
              key={cluster.title}
              className="bg-[#FAF7F2] border border-gray-100 p-7 hover:border-[#C9A96E]/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="w-8 h-0.5 bg-[#C9A96E] mb-4" />
              <h3 className="font-serif text-xl text-[#1C1C1C] font-medium mb-3 leading-snug">
                {cluster.title}
              </h3>
              <p className="text-[#6B6560] text-sm leading-relaxed flex-1 mb-5">{cluster.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="self-start text-xs tracking-widest uppercase font-medium text-[#1C1C1C] bg-[#C9A96E] px-5 py-2.5 hover:bg-[#A07840] transition-colors"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>

        <WaButton />
      </div>
    </section>
  );
}
