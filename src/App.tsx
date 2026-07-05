import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Pages that are never on the critical path
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// All below-fold content in one chunk — loaded after Hero paints
const BelowFold = lazy(() => import('./pages/BelowFoldChunk').then(m => ({
  default: function BelowFoldHome({ setPage }: { setPage: (p: Page) => void }) {
    return (
      <>
        <m.ServicesSection setPage={setPage} compact />
        <m.ServiceClusters />
        <m.ServiceClustersMaquiagem />
        <m.ServiceClustersManicure />
        <m.DiaNoivaSection />
        <m.ServiceClustersSobrancelha />
        <m.ServiceClustersEstetica />
        <m.AboutSection />
        <m.Testimonials />
        <m.CTA />
      </>
    );
  },
})));

const BelowFoldServices = lazy(() => import('./pages/BelowFoldChunk').then(m => ({
  default: function BelowFoldServicesComp({ setPage }: { setPage: (p: Page) => void }) {
    return (
      <>
        <m.ServicesSection setPage={setPage} />
        <m.ServiceClusters />
        <m.ServiceClustersMaquiagem />
        <m.ServiceClustersManicure />
        <m.DiaNoivaSection />
        <m.ServiceClustersSobrancelha />
        <m.ServiceClustersEstetica />
        <m.CTA />
      </>
    );
  },
})));

const BelowFoldAbout = lazy(() => import('./pages/BelowFoldChunk').then(m => ({
  default: function BelowFoldAboutComp() {
    return (
      <>
        <m.AboutSection />
        <m.Testimonials />
        <m.ServiceClusters />
        <m.ServiceClustersMaquiagem />
        <m.ServiceClustersManicure />
        <m.DiaNoivaSection />
        <m.ServiceClustersSobrancelha />
        <m.ServiceClustersEstetica />
        <m.CTA />
      </>
    );
  },
})));

const BelowFoldGallery = lazy(() => import('./pages/BelowFoldChunk').then(m => ({
  default: function BelowFoldGalleryComp() {
    return (
      <>
        <m.Gallery />
        <m.CTA />
      </>
    );
  },
})));

type Page = 'home' | 'services' | 'about' | 'gallery' | 'contact' | 'booking' | 'blog';

const PATH_TO_PAGE: Record<string, Page> = {
  '/': 'home',
  '/servicos': 'services',
  '/sobre': 'about',
  '/galeria': 'gallery',
  '/blog': 'blog',
  '/contato': 'contact',
  '/agendamento': 'booking',
};

const PAGE_TO_PATH: Record<Page, string> = {
  home: '/',
  services: '/servicos',
  about: '/sobre',
  gallery: '/galeria',
  blog: '/blog',
  contact: '/contato',
  booking: '/agendamento',
};

function getPageFromPath(): Page {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return PATH_TO_PAGE[path] ?? 'home';
}

const PAGE_META: Record<Page, { title: string; description: string }> = {
  home: {
    title: 'Cassia Juliato – Cabelo & Estética | Salão de Beleza em Valinhos SP',
    description: 'Um santuário de beleza e bem-estar em Valinhos SP. Cabelo, Maquiagem, Manicure, Pedicure, Sobrancelha, Estética e Pacotes para Noivas. Agende agora!',
  },
  services: {
    title: 'Serviços | Cassia Juliato – Cabelo & Estética',
    description: 'Corte & Penteado, Tratamentos Faciais, Massagens, Manicure & Pedicure, Sobrancelha e Estética Facial. Conheça todos os serviços do salão Cassia Juliato em Valinhos SP.',
  },
  about: {
    title: 'Sobre Nós | Cassia Juliato – Cabelo & Estética',
    description: 'Conheça a história do salão Cassia Juliato. Mais de 8 anos criando experiências excepcionais de beleza e bem-estar em Valinhos SP.',
  },
  gallery: {
    title: 'Galeria | Cassia Juliato – Cabelo & Estética',
    description: 'Veja os trabalhos realizados no salão Cassia Juliato. Cortes, penteados, maquiagem, manicure e muito mais em Valinhos SP.',
  },
  blog: {
    title: 'Blog | Cassia Juliato – Cabelo & Estética',
    description: 'Dicas de beleza, cuidados com o cabelo, tendências de maquiagem e muito mais. Blog oficial do salão Cassia Juliato em Valinhos SP.',
  },
  contact: {
    title: 'Contato | Cassia Juliato – Cabelo & Estética',
    description: 'Entre em contato com o salão Cassia Juliato. Agende seu horário, tire dúvidas ou visite-nos em Valinhos SP.',
  },
  booking: {
    title: 'Agendamento Online | Cassia Juliato – Cabelo & Estética',
    description: 'Agende seu horário online no salão Cassia Juliato. Cabelo, Maquiagem, Manicure, Estética e muito mais em Valinhos SP.',
  },
};

function updateMeta(page: Page) {
  const meta = PAGE_META[page];
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
}

// Invisible sentinel at bottom of hero triggers below-fold chunk load
function BelowFoldTrigger({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setReady(true); observer.disconnect(); } },
      { rootMargin: '600px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} />
      {ready && children}
    </>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[60vh] bg-[#FAF7F2]">
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <Hero setPage={setPage} />
      <BelowFoldTrigger>
        <PageShell><BelowFold setPage={setPage} /></PageShell>
      </BelowFoldTrigger>
    </>
  );
}

function ServicesPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="pt-20">
      <div className="bg-[#1C1C1C] py-24 text-center">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Nosso Menu</p>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-light">Serviços</h1>
      </div>
      <PageShell><BelowFoldServices setPage={setPage} /></PageShell>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#1C1C1C] py-24 text-center">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Nossa História</p>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-light">Sobre Nós</h1>
      </div>
      <PageShell><BelowFoldAbout /></PageShell>
    </div>
  );
}

function GalleryPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#1C1C1C] py-24 text-center">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Nosso Trabalho</p>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-light">Galeria</h1>
      </div>
      <PageShell><BelowFoldGallery /></PageShell>
    </div>
  );
}

function ContactPageWrapper() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}

export default function App() {
  const [page, setPageState] = useState<Page>(getPageFromPath);

  const setPage = (p: Page) => {
    const path = PAGE_TO_PATH[p];
    if (window.location.pathname !== path) {
      window.history.pushState({ page: p }, '', path);
    }
    setPageState(p);
  };

  useEffect(() => {
    const handlePop = () => setPageState(getPageFromPath());
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  useEffect(() => {
    updateMeta(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'about': return <AboutPage />;
      case 'gallery': return <GalleryPage />;
      case 'blog': return <Suspense fallback={null}><BlogPage /></Suspense>;
      case 'contact': return <ContactPageWrapper />;
      case 'booking': return <Suspense fallback={null}><BookingPage /></Suspense>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
