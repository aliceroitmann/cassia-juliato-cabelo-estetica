import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { WA_LINK } from '../constants';

interface FooterProps {
  setPage: (page: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="bg-white inline-block p-2">
                <img
                  src="/logo_cassia_juliato.webp"
                  alt="Cassia Juliato - Cabelo & Estética"
                  width="192"
                  height="48"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-6">
              Um santuário de beleza e bem-estar de luxo. Criando experiências excepcionais desde 2016.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <div key={i} className="w-8 h-8 border border-white/20 flex items-center justify-center cursor-pointer hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs tracking-widest uppercase mb-5 text-[#C9A96E]">Links Rápidos</h2>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => setPage(link.id)}
                    className="text-white/70 text-sm hover:text-[#C9A96E] transition-colors tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-white/50 text-sm hover:text-[#C9A96E] transition-colors tracking-wide"
                >
                  Agendar pelo WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs tracking-widest uppercase mb-5 text-[#C9A96E]">Serviços</h2>
            <ul className="space-y-2.5">
              {['Corte & Penteado', 'Tratamentos Faciais', 'Massagens', 'Manicure & Pedicure', 'Tratamentos Corporais', 'Pacotes para Noivas'].map(s => (
                <li key={s}>
                  <span className="text-white/70 text-sm tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs tracking-widest uppercase mb-5 text-[#C9A96E]">Visite-nos</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-xs leading-relaxed">Av. Paulista, 1234<br />São Paulo, SP 01310-100</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="text-[#C9A96E] flex-shrink-0" />
                <span className="text-white/70 text-xs">(11) 99999-0174</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="text-[#C9A96E] flex-shrink-0" />
                <span className="text-white/70 text-xs">ola@serenityspa.com.br</span>
              </li>
              <li className="flex gap-3">
                <Clock size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-xs leading-relaxed">
                  Seg–Sex: 9h – 20h<br />
                  Sáb–Dom: 10h – 18h
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">© 2024 Cassia Juliato – Cabelo & Estética. Todos os direitos reservados.</p>
          <p className="text-white/50 text-xs">Feito com carinho para o seu bem-estar</p>
        </div>
      </div>
    </footer>
  );
}
