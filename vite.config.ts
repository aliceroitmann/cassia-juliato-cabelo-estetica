import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://cassiajuliatocabelos.bolt.host';

const criticalCSS = `
body{font-family:'Jost',sans-serif;background-color:#FAF7F2;color:#1C1C1C}
:root{--gold:#C9A96E;--gold-light:#E8D5B0;--gold-dark:#A07840;--cream:#FAF7F2;--charcoal:#1C1C1C;--warm-gray:#6B6560}
*{scroll-behavior:smooth}
`;

interface PageMeta {
  path: string;
  file: string;
  title: string;
  description: string;
  ogImage?: string;
}

const pages: PageMeta[] = [
  {
    path: '/servicos',
    file: 'servicos.html',
    title: 'Serviços | Cassia Juliato – Cabelo & Estética',
    description: 'Corte & Penteado, Tratamentos Faciais, Massagens, Manicure & Pedicure, Sobrancelha e Estética Facial. Conheça todos os serviços do salão Cassia Juliato em Valinhos SP.',
  },
  {
    path: '/sobre',
    file: 'sobre.html',
    title: 'Sobre Nós | Cassia Juliato – Cabelo & Estética',
    description: 'Conheça a história do salão Cassia Juliato. Mais de 8 anos criando experiências excepcionais de beleza e bem-estar em Valinhos SP.',
  },
  {
    path: '/galeria',
    file: 'galeria.html',
    title: 'Galeria | Cassia Juliato – Cabelo & Estética',
    description: 'Veja os trabalhos realizados no salão Cassia Juliato. Cortes, penteados, maquiagem, manicure e muito mais em Valinhos SP.',
  },
  {
    path: '/blog',
    file: 'blog.html',
    title: 'Blog | Cassia Juliato – Cabelo & Estética',
    description: 'Dicas de beleza, cuidados com o cabelo, tendências de maquiagem e muito mais. Blog oficial do salão Cassia Juliato em Valinhos SP.',
  },
  {
    path: '/contato',
    file: 'contato.html',
    title: 'Contato | Cassia Juliato – Cabelo & Estética',
    description: 'Entre em contato com o salão Cassia Juliato. Agende seu horário, tire dúvidas ou visite-nos em Valinhos SP.',
  },
  {
    path: '/agendamento',
    file: 'agendamento.html',
    title: 'Agendamento Online | Cassia Juliato – Cabelo & Estética',
    description: 'Agende seu horário online no salão Cassia Juliato. Cabelo, Maquiagem, Manicure, Estética e muito mais em Valinhos SP.',
  },
];

function deferNonCriticalCSS(): Plugin {
  return {
    name: 'defer-non-critical-css',
    transformIndexHtml(html) {
      const transformed = html.replace(
        /<link rel="stylesheet"([^>]*href="[^"]*assets\/[^"]*\.css[^"]*"[^>]*)>/g,
        (match, attrs) => {
          const href = attrs.match(/href="([^"]+)"/)?.[1] ?? '';
          return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">\n<noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
      return transformed.replace('</head>', `<style>${criticalCSS}</style>\n</head>`);
    },
  };
}

function generateStaticPages(): Plugin {
  return {
    name: 'generate-static-pages',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) return;

      const baseHtml = fs.readFileSync(indexPath, 'utf-8');

      // Default (home) canonical
      const homeHtml = setMeta(baseHtml, {
        path: '/',
        file: 'index.html',
        title: 'Cassia Juliato – Cabelo & Estética | Salão de Beleza em Valinhos SP',
        description: 'Um santuário de beleza e bem-estar em Valinhos SP. Cabelo, Maquiagem, Manicure, Pedicure, Sobrancelha, Estética e Pacotes para Noivas. Agende agora!',
      });
      fs.writeFileSync(indexPath, homeHtml);

      // Generate one HTML file per route
      const redirectLines: string[] = ['/  /index.html  200'];
      for (const page of pages) {
        const html = setMeta(baseHtml, page);
        fs.writeFileSync(path.join(distDir, page.file), html);
        redirectLines.push(`${page.path}  /${page.file}  200`);
        redirectLines.push(`${page.path}/  /${page.file}  200`);
      }
      // Fallback: anything else → index
      redirectLines.push('/*  /index.html  200');

      fs.writeFileSync(path.join(distDir, '_redirects'), redirectLines.join('\n') + '\n');
      console.log(`\n✓ Generated ${pages.length} static HTML pages for SEO`);
    },
  };
}

function setMeta(html: string, page: PageMeta & { path: string }): string {
  const ogImage = page.ogImage ?? `${SITE_URL}/logo_cassia_juliato.jpg`;
  const canonical = `${SITE_URL}${page.path === '/' ? '' : page.path}`;

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${page.description}"`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${page.title}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${page.description}"`
    )
    .replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${ogImage}"`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${page.title}"`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${page.description}"`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*"/,
      `<meta name="twitter:image" content="${ogImage}"`
    )
    .replace(
      /(<\/head>)/,
      `<link rel="canonical" href="${canonical}" />\n$1`
    );
}

export default defineConfig({
  plugins: [react(), deferNonCriticalCSS(), generateStaticPages()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
