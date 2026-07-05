import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

const clusters = [
  {
    title: 'Mão - Valinhos SP',
    desc: 'Cuidado completo das mãos com limpeza, cutícula e esmaltação tradicional. Deixamos suas mãos macias, hidratadas e com visual impecável para o dia a dia, garantindo acabamento profissional e duradouro que valoriza cada detalhe.',
  },
  {
    title: 'Mão com Francesinha em Valinhos',
    desc: 'A elegância atemporal da francesinha executada com perfeição e precisão. Ideal para noivas, formaturas ou qualquer ocasião que peça um visual clássico e sofisticado, com acabamento impecável e durabilidade superior.',
  },
  {
    title: 'Mão Esmaltação em Valinhos - SP',
    desc: 'Aplicação profissional de esmalte em gel ou comum, com preparação completa das cutículas e nivelamento das unhas. Ampla variedade de cores e acabamentos para combinar com qualquer visual e ocasião especial.',
  },
  {
    title: 'Mão com Hidratação - Valinhos SP',
    desc: 'Tratamento completo que une esmaltação profissional à hidratação intensiva das mãos. Produtos nutritivos que deixam a pele macia e radiante, enquanto as unhas recebem cuidado estético e acabamento duradouro.',
  },
  {
    title: 'Pé em Valinhos',
    desc: 'Cuidado completo dos pés com esfoliação, tratamento de calosidades, cutícula e esmaltação. Relaxe enquanto suas pernas e pés recebem atenção total, saindo renovados, macios e com visual impecável.',
  },
  {
    title: 'Pé com Francesinha em Valinhos - SP',
    desc: 'O clássico e elegante acabamento francesinha aplicado com maestria nos pés. Perfeito para sandálias, vestidos e ocasiões especiais onde os pés precisam estar absolutamente impecáveis e deslumbrantes.',
  },
  {
    title: 'Pé Esmaltação - Valinhos SP',
    desc: 'Esmaltação profissional dos pés com preparação completa das unhas e cutículas. Variedade de cores vibrantes e acabamentos sofisticados para você se sentir bonita do rosto aos pés em qualquer época do ano.',
  },
  {
    title: 'Pé Hidratação em Valinhos',
    desc: 'Tratamento de hidratação profunda dos pés aliado à esmaltação profissional. Produtos nutritivos que eliminam o ressecamento e calosidades, deixando os pés macios, renovados e com visual perfeito para exibir.',
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

export default function ServiceClustersManicure() {
  const chunkSize = 6;
  const groups: typeof clusters[] = [];
  for (let i = 0; i < clusters.length; i += chunkSize) {
    groups.push(clusters.slice(i, i + chunkSize));
  }

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Manicure & Pedicure</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Todos os Nossos Serviços - Manicure e Pedicure em Valinhos - SP
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Cuidado e beleza para suas mãos e pés com técnicas profissionais e produtos de alta qualidade.
          </p>
        </div>

        {groups.map((group, gi) => (
          <div key={gi}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
              {group.map((cluster) => (
                <div
                  key={cluster.title}
                  className="bg-white border border-gray-100 p-7 hover:border-[#C9A96E]/40 hover:shadow-md transition-all duration-300 flex flex-col"
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
        ))}
      </div>
    </section>
  );
}
