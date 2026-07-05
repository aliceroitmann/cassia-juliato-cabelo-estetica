import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

const clusters = [
  {
    title: 'Sobrancelha Simples - Valinhos SP',
    desc: 'Design e alinhamento das sobrancelhas para emoldurar o rosto e realçar o olhar naturalmente. Técnica precisa de remoção dos fios indesejados, respeitando o formato original para um resultado harmonioso e de longa duração.',
  },
  {
    title: 'Sobrancelha Design em Valinhos',
    desc: 'Mapeamento profissional das sobrancelhas para encontrar o formato ideal para o seu rosto. Técnica avançada que define, alinha e cria sobrancelhas simétricas e bem delineadas, transformando e valorizando o olhar.',
  },
  {
    title: 'Sobrancelha com Tinta em Valinhos - SP',
    desc: 'Design de sobrancelhas com aplicação de tinta profissional para preencher falhas, uniformizar a cor e intensificar o olhar. Resultado natural ou mais marcado conforme sua preferência, com durabilidade de semanas.',
  },
  {
    title: 'Sobrancelha com Henna - Valinhos SP',
    desc: 'Design artístico com aplicação de henna vegetal que pigmenta os fios e a pele, criando sobrancelhas mais cheias, simétricas e com efeito duradouro. Alternativa natural e segura para um olhar mais intenso e expressivo.',
  },
];

export default function ServiceClustersSobrancelha() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Sobrancelha</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Todos os Nossos Serviços - Sobrancelha em Valinhos - SP
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Sobrancelhas perfeitas que emolduram o rosto e transformam o olhar com técnicas precisas e resultados duradouros.
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
      </div>
    </section>
  );
}
