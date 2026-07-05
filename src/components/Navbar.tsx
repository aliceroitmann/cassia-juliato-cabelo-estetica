import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { WA_LINK } from '../constants';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const isHome = currentPage === 'home';
  const solid = scrolled || !isHome;

  const links = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <>
      <div ref={sentinelRef} className="absolute top-16 left-0 w-px h-px pointer-events-none" aria-hidden="true" />
      <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => setPage('home')} className="flex items-center">
          <img
            src="/logo_cassia_juliato.webp"
            alt="Cassia Juliato - Cabelo & Estética"
            width="192"
            height="48"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                currentPage === link.id
                  ? solid ? 'text-[#8B6914]' : 'text-[#C9A96E]'
                  : solid ? 'text-[#1C1C1C] hover:text-[#8B6914]' : 'text-white/90 hover:text-[#C9A96E]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`px-6 py-2.5 text-xs tracking-widest uppercase font-medium border border-[#C9A96E] transition-all duration-300 ${
              solid ? 'text-[#8B6914] hover:bg-[#C9A96E] hover:text-[#1C1C1C]' : 'text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1C1C1C]'
            }`}
          >
            Agendar
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className={`md:hidden transition-colors ${solid ? 'text-[#1C1C1C]' : 'text-white'}`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => { setPage(link.id); setMenuOpen(false); }}
              className={`block w-full text-left text-sm tracking-widest uppercase py-2 transition-colors ${
                currentPage === link.id ? 'text-[#8B6914]' : 'text-[#1C1C1C] hover:text-[#8B6914]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block w-full mt-2 px-6 py-3 text-xs tracking-widest uppercase font-medium bg-[#C9A96E] text-[#1C1C1C] text-center"
          >
            Agendar
          </a>
        </div>
      )}
    </nav>
    </>
  );
}
