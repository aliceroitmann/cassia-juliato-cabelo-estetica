import { ArrowRight } from 'lucide-react';
import { WA_LINK } from '../constants';

const clusters = [
  {
    title: 'Banho de Lua - Valinhos SP',
    desc: 'Ritual relaxante e nutritivo que combina esfoliação suave, hidratação e envolvimento corporal com produtos selecionados. Sua pele sai completamente renovada, macia e radiante, pronta para brilhar em qualquer ocasião especial.',
  },
  {
    title: 'Depilação em Valinhos',
    desc: 'Remoção eficaz e duradoura dos pelos com técnicas modernas e produtos de qualidade. Atendimento delicado e profissional para garantir conforto e excelentes resultados em todas as regiões do corpo, com pele suave por muito mais tempo.',
  },
  {
    title: 'Massagem Relaxante em Valinhos - SP',
    desc: 'Técnica terapêutica com movimentos suaves e contínuos para aliviar tensões do dia a dia, reduzir o estresse e promover bem-estar profundo. Uma experiência de relaxamento que renova o corpo e a mente completamente.',
  },
  {
    title: 'Massagem Redutora - Valinhos SP',
    desc: 'Técnica intensiva com movimentos específicos para modelar o corpo, reduzir medidas e estimular a circulação sanguínea e linfática. Sessões regulares potencializam os resultados e contribuem para o contorno corporal desejado.',
  },
  {
    title: 'Peeling em Valinhos',
    desc: 'Procedimento de renovação celular que remove células mortas da superfície da pele, estimulando a produção de colágeno e revelando uma pele mais lisa, uniforme, luminosa e com textura visivelmente mais suave e rejuvenescida.',
  },
  {
    title: 'Limpeza de Pele em Valinhos - SP',
    desc: 'Protocolo completo de higienização profunda que remove impurezas, cravos e células mortas, desobstruindo os poros e prevenindo a acne. Sua pele fica purificada, equilibrada e com aparência muito mais saudável.',
  },
  {
    title: 'Revitalização Facial - Valinhos SP',
    desc: 'Tratamento estético que combina ativos revitalizantes para restaurar o viço, a firmeza e o brilho natural da pele. Indicado para peles cansadas, opacas ou com sinais de envelhecimento precoce, com resultados visíveis.',
  },
  {
    title: 'Esfoliação Corporal em Valinhos',
    desc: 'Técnica que remove células mortas da pele do corpo, estimulando a renovação celular e deixando a pele macia, suave e com brilho natural. Potencializa os efeitos de hidratações e outros tratamentos corporais aplicados.',
  },
  {
    title: 'Drenagem Facial em Valinhos - SP',
    desc: 'Técnica de massagem linfática facial que reduz o inchaço, melhora a circulação e define o contorno do rosto. Tratamento com resultados imediatos e cumulativos, indicado para reduzir retenção líquida e o inchaço facial.',
  },
  {
    title: 'Micropigmentação - Valinhos SP',
    desc: 'Técnica de pigmentação permanente para sobrancelhas, lábios ou área dos olhos, criando efeitos naturais e duradouros. Procedimento preciso realizado por profissionais certificados para resultados seguros e impecáveis.',
  },
  {
    title: 'Alongamento de Cílios em Valinhos',
    desc: 'Técnica avançada de aplicação de extensões de cílios para um olhar mais expressivo, volumoso e intenso sem maquiagem. Diferentes modelos e curvaturas disponíveis para personalizar o resultado ao seu estilo único.',
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

export default function ServiceClustersEstetica() {
  const chunkSize = 6;
  const groups: typeof clusters[] = [];
  for (let i = 0; i < clusters.length; i += chunkSize) {
    groups.push(clusters.slice(i, i + chunkSize));
  }

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Estética Facial & Corporal</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">
            Todos os Nossos Serviços - Estética em Valinhos
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm leading-relaxed">
            Tratamentos faciais e corporais de alta performance para cuidar da sua pele e do seu bem-estar.
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
