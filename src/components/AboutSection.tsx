import { Award, Heart, Shield, Clock } from 'lucide-react';

export default function AboutSection() {
  const values = [
    { icon: Award, title: 'Premiado', desc: 'Reconhecido pela excelência em serviços de beleza e bem-estar de luxo.' },
    { icon: Heart, title: 'Cliente em 1º lugar', desc: 'Cada tratamento é personalizado para suas necessidades e desejos únicos.' },
    { icon: Shield, title: 'Produtos Premium', desc: 'Utilizamos apenas produtos certificados de grau profissional.' },
    { icon: Clock, title: 'Horário Flexível', desc: 'Aberto 7 dias por semana para se encaixar na sua agenda.' },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp"
                  alt="Interior do salão"
                  loading="lazy"
                  width="480"
                  height="256"
                  className="w-full h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp"
                  alt="Tratamento"
                  loading="lazy"
                  width="480"
                  height="176"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="pt-10 space-y-4">
                <img
                  src="https://images.pexels.com/photos/3993452/pexels-photo-3993452.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp"
                  alt="Tratamento de beleza"
                  loading="lazy"
                  width="480"
                  height="176"
                  className="w-full h-44 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp"
                  alt="Spa"
                  loading="lazy"
                  width="480"
                  height="256"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-[#1C1C1C] p-6 text-center shadow-xl">
              <div className="font-serif text-4xl font-light">8+</div>
              <div className="text-xs tracking-widest uppercase mt-1">Anos de<br/>Excelência</div>
            </div>
          </div>

          <div>
            <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Nossa História</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4 leading-tight">
              Um Santuário de<br />Beleza & Bem-Estar
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-[#6B6560] text-sm leading-relaxed mb-4">
              Fundada com paixão pelo cuidado excepcional, a Serenity vem redefinindo a experiência
              de spa e salão há mais de oito anos. Acreditamos que a beleza é uma forma de arte —
              que merece paciência, expertise e dedicação genuína.
            </p>
            <p className="text-[#6B6560] text-sm leading-relaxed mb-10">
              Nosso espaço tranquilo é um refúgio onde você pode se desconectar do mundo e se
              reconectar consigo mesmo. Desde o momento em que você entra, cada detalhe é
              criado para fazer você se sentir celebrado.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#8B6914]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1C1C1C] mb-1">{title}</h3>
                    <p className="text-xs text-[#6B6560] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
