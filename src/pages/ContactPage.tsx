import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Fale Conosco</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">Contato</h1>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-[#6B6560] text-sm max-w-md mx-auto">
            Adoraríamos ouvir você. Entre em contato para agendamentos, dúvidas ou apenas para dizer olá.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <img
                src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp"
                alt="Salão"
                className="w-full h-56 object-cover mb-6"
              />
            </div>

            {[
              {
                icon: MapPin,
                title: 'Nossa Localização',
                content: ['Av. Paulista, 1234', 'São Paulo, SP 01310-100'],
              },
              {
                icon: Phone,
                title: 'Telefone',
                content: ['(11) 99999-0174'],
              },
              {
                icon: Mail,
                title: 'E-mail',
                content: ['ola@serenityspa.com.br', 'agendamentos@serenityspa.com.br'],
              },
              {
                icon: Clock,
                title: 'Horário de Funcionamento',
                content: ['Seg–Sex: 9h às 20h', 'Sáb–Dom: 10h às 18h'],
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#8B6914]" />
                </div>
                <div>
                  <h2 className="text-xs tracking-widest uppercase text-[#1C1C1C] mb-1">{title}</h2>
                  {content.map(c => (
                    <p key={c} className="text-[#6B6560] text-sm">{c}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white border border-gray-100 p-10 text-center">
                <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-[#8B6914]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1C1C1C] font-light mb-2">Mensagem Enviada!</h3>
                <p className="text-[#6B6560] text-sm">Retornaremos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 space-y-5">
                <h3 className="font-serif text-2xl text-[#1C1C1C] font-light mb-2">Envie uma Mensagem</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Nome</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">E-mail</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Assunto</label>
                  <input
                    required
                    type="text"
                    value={form.subject}
                    onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6B6560] mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A96E] text-[#1C1C1C] text-xs tracking-widest uppercase hover:bg-[#A07840] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
