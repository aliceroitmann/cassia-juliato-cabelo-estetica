import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

interface Cluster {
  title: string;
  desc: string;
}

const clusters: Cluster[] = [
  {
    title: 'Corte de Cabelos Feminino - Valinhos SP',
    desc: 'Realce sua beleza com um corte personalizado para o formato do seu rosto e estilo de vida. Nossas profissionais analisam cada detalhe para entregar um visual que valorize seus fios, com acabamento impecável e resultado que você vai amar.',
  },
  {
    title: 'Corte de Cabelos Masculino em Valinhos',
    desc: 'Cortes masculinos modernos e clássicos executados com precisão e estilo. Atendimento especializado para cabelos lisos, cacheados ou crespos, com técnicas atuais que garantem um visual alinhado e adequado à sua personalidade.',
  },
  {
    title: 'Corte Infantil com Espaço KIDS em Valinhos - SP',
    desc: 'Ambiente especialmente pensado para os pequenos! Nosso Espaço Kids oferece uma experiência divertida e sem estresse para crianças. Profissionais capacitados para atender com toda a simpatia e paciência que as crianças merecem.',
  },
  {
    title: 'Corte Bordado - Valinhos SP',
    desc: 'Técnica artística de alta precisão que cria detalhes e acabamentos únicos nos fios. O corte bordado define contornos e adiciona personalidade ao visual, sendo ideal para quem busca um estilo diferenciado e marcante no dia a dia.',
  },
  {
    title: 'Corte e Escova de Cabelos em Valinhos',
    desc: 'O combo perfeito para sair do salão renovada! Corte preciso seguido de escova modeladora profissional que garante volume, brilho e maciez duradouros. Ideal para ocasiões especiais ou para o seu look do dia a dia.',
  },
  {
    title: 'Tratamentos Capilares em Valinhos - SP',
    desc: 'Linha completa de tratamentos profissionais para restaurar a saúde e a vitalidade dos seus fios. De nutrição a reconstrução profunda, utilizamos produtos de alta performance para combater danos do dia a dia e devolver o brilho ao cabelo.',
  },
  {
    title: 'Hidratação - Valinhos SP',
    desc: 'Tratamento essencial que repõe água e nutrientes nos fios ressecados, devolvendo maciez, brilho e maleabilidade. Ideal para quem usa secador e chapinha com frequência. Uma sessão já traz resultados visíveis e sensação de leveza imediata.',
  },
  {
    title: 'Hidratação Intra Celular em Valinhos',
    desc: 'Tecnologia avançada que penetra na estrutura interna do fio para hidratar de dentro para fora. Trata fios porosos, quebradiços e sem vida com eficácia superior, garantindo resultados duradouros e fios muito mais saudáveis e resilientes.',
  },
  {
    title: 'Hidratação Reconstrução em Valinhos - SP',
    desc: 'Protocolo intensivo que combina hidratação profunda com reconstrução das fibras capilares danificadas. Indicado para cabelos com quebra e fios fragilizados pelo calor ou processos químicos. Resultado: cabelo forte, nutrido e com muito mais resistência.',
  },
  {
    title: 'Tintura - Valinhos SP',
    desc: 'Transforme seu visual com colorações de alta qualidade em toda a extensão dos cabelos. Cobertura total dos fios brancos com cores vibrantes e duradouras, utilizando produtos que respeitam a saúde capilar e garantem resultado uniforme e luminoso.',
  },
  {
    title: 'Coloração em Valinhos',
    desc: 'Arte e técnica em cada fio. Colorações personalizadas criadas para valorizar o seu tom de pele e estilo. Do louro natural ao castanho profundo, nossos especialistas em colorimetria transformam seus fios com precisão e criatividade únicos.',
  },
  {
    title: 'Luzes e Mechas em Valinhos - SP',
    desc: 'Clarear e iluminar os cabelos com técnicas modernas como babylights, highlights e mechas tradicionais. Criamos contrastes harmoniosos que adicionam profundidade e movimento ao visual, com resultados naturais ou mais impactantes conforme sua preferência.',
  },
  {
    title: 'Loiras Iluminadas - Valinhos SP',
    desc: 'Especialidade da casa! Técnicas exclusivas para loiros luminosos, brilhantes e com aspecto saudável. Do loiro platinado ao mel, criamos o tom perfeito para o seu subtom de pele, com transição natural e máxima durabilidade entre retoques.',
  },
  {
    title: 'Morenas Iluminadas em Valinhos',
    desc: 'Realce a profundidade e o brilho dos cabelos escuros com técnicas de iluminação que criam movimento sem alterar drasticamente a cor base. Resultado: cabelo com brilho dourado natural, muito mais dinâmico e expressivo no dia a dia.',
  },
  {
    title: 'Progressiva em Valinhos - SP',
    desc: 'Alisamento progressivo que elimina o frizz e o volume excessivo, deixando os fios lisos, sedosos e brilhantes por meses. Técnica segura com produtos de qualidade que tratam e disciplinam os cabelos sem comprometer sua saúde estrutural.',
  },
  {
    title: 'Botox Capilar - Valinhos SP',
    desc: 'Tratamento revitalizador que preenche, nutre e sela as cutículas sem alterar a estrutura química do cabelo. O resultado é imediato: fios hidratados, com mais brilho, menos frizz e aparência de cabelo novo por várias semanas.',
  },
  {
    title: 'Selamento em Valinhos',
    desc: 'Técnica que sela as cutículas abertas dos fios, aprisionando nutrientes e hidratação no interior do cabelo. Ideal após tratamentos químicos ou coloração, devolve brilho intenso, maciez e prolonga a durabilidade dos procedimentos realizados.',
  },
  {
    title: 'Penteados e Tranças em Valinhos - SP',
    desc: 'Criações únicas e elaboradas para qualquer ocasião. Do penteado casual ao evento mais especial, nossas especialistas executam desde tranças básicas às mais elaboradas, com acabamento profissional e fixação duradoura para você arrasar.',
  },
  {
    title: 'Penteados para Noivas - Valinhos SP',
    desc: 'O dia mais especial merece o penteado dos sonhos! Criamos looks exclusivos para noivas com testes prévios e atenção total aos detalhes. Do coque elegante aos cachos românticos, garantimos perfeição e durabilidade durante toda a celebração.',
  },
  {
    title: 'Penteados para Madrinhas em Valinhos',
    desc: 'Penteados sofisticados e harmoniosos para as madrinhas estarem lindas e alinhadas com o estilo do casamento. Atendemos grupos com agilidade e qualidade, garantindo que todas estejam impecáveis para a cerimônia e a recepção.',
  },
  {
    title: 'Penteados para Formaturas em Valinhos - SP',
    desc: 'Celebre essa conquista com um visual inesquecível! Criamos penteados elegantes e modernos para formaturas, com técnicas que garantem durabilidade desde a cerimônia até a festa, sem preocupação com o visual durante toda a comemoração.',
  },
  {
    title: 'Penteados para Festas - Valinhos SP',
    desc: 'Para cada tipo de festa, um penteado especial. Aniversários, confraternizações ou jantares, criamos o visual ideal para você brilhar em qualquer evento, com técnicas modernas e acabamento profissional que dura a noite toda.',
  },
  {
    title: 'Penteados para Eventos em Valinhos',
    desc: 'Penteados sob medida para qualquer tipo de evento corporativo, social ou cultural. Profissionalismo e elegância em cada criação, adaptando o estilo ao dress code e à proposta do evento para que você apareça sempre impecável.',
  },
  {
    title: 'Penteados para Escolas de Dança e Festival de Balé em Valinhos - SP',
    desc: 'Penteados técnicos e artísticos para bailarinas e dançarinas de todas as idades. Coque clássico, tranças elaboradas ou penteados temáticos, executados com precisão e produtos de fixação forte para resistir à coreografia com leveza e beleza.',
  },
];

function WaButton({ text = 'Marcar Horário Agora' }: { text?: string }) {
  return (
    <div className="text-center my-10">
      <a
        href={WA_LINK}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="group inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-all duration-300"
      >
        {text}
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

export default function ServiceClusters() {
  const chunkSize = 6;
  const groups: Cluster[][] = [];
  for (let i = 0; i < clusters.length; i += chunkSize) {
    groups.push(clusters.slice(i, i + chunkSize));
  }

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Cabelos & Afins</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Todos os Nossos Serviços - Cabeleireiros em Valinhos - SP
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Conheça em detalhe cada serviço que oferecemos. Clique em "Saiba Mais" para falar diretamente com nossa equipe.
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
                  <p className="text-[#6B6560] text-sm leading-relaxed flex-1 mb-5">
                    {cluster.desc}
                  </p>
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
