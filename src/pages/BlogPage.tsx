import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  cover_image: string;
  reading_time: number;
  published_at: string;
  created_at: string;
}

const CATEGORIES = ['Todos', 'Cabelo', 'Skincare', 'Bem-Estar', 'Dicas', 'Tendências'];

function PostCard({ post, onClick }: { post: Post; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer hover-lift bg-white border border-gray-100"
    >
      <div className="overflow-hidden h-52 relative">
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#C9A96E] text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-[#6B6560] text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {new Date(post.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.reading_time} min de leitura
          </span>
        </div>
        <h3 className="font-serif text-xl text-[#1C1C1C] font-medium mb-2 leading-snug group-hover:text-[#C9A96E] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#6B6560] text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs text-[#6B6560]">
            <User size={11} />
            {post.author}
          </span>
          <span className="text-[#C9A96E] text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
            Ler mais <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}

function PostDetail({ post, onBack }: { post: Post; onBack: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#C9A96E] text-xs tracking-widest uppercase mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeft size={14} />
        Voltar ao Blog
      </button>

      <div className="mb-4">
        <span className="bg-[#C9A96E] text-white text-[10px] tracking-widest uppercase px-3 py-1">
          {post.category}
        </span>
      </div>

      <h1 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light leading-tight mb-6">
        {post.title}
      </h1>

      <div className="flex items-center gap-5 text-[#6B6560] text-xs mb-8 pb-8 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
          <User size={13} />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={13} />
          {new Date(post.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={13} />
          {post.reading_time} min de leitura
        </span>
      </div>

      <div className="overflow-hidden mb-10">
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>

      <div
        className="prose-content text-[#1C1C1C] leading-relaxed"
        style={{ fontSize: '0.95rem', lineHeight: '1.8' }}
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
      />

      <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3">
        <Tag size={14} className="text-[#C9A96E]" />
        <span className="text-xs text-[#6B6560] tracking-wide">Categoria:</span>
        <span className="text-xs bg-[#C9A96E]/10 text-[#C9A96E] px-3 py-1">{post.category}</span>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [featured, ...rest] = posts.filter(
    p => activeCategory === 'Todos' || p.category === activeCategory
  );

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });
      if (!error && data) setPosts(data);
      setLoading(false);
    };
    load();
  }, []);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
        <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      </div>
    );
  }

  const filtered = posts.filter(
    p => activeCategory === 'Todos' || p.category === activeCategory
  );
  const [featuredPost, ...otherPosts] = filtered;

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-3">Conteúdo & Inspiração</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">Blog</h1>
        <div className="section-divider mx-auto mb-4" />
        <p className="text-[#6B6560] text-sm max-w-md mx-auto">
          Dicas de beleza, tendências, tutoriais e inspiração para cuidar de você.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-3 flex-wrap justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C9A96E] border-[#C9A96E] text-white'
                  : 'border-gray-300 text-[#6B6560] hover:border-[#C9A96E] hover:text-[#C9A96E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 animate-pulse">
                <div className="h-52 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#6B6560]">
            <p className="font-serif text-2xl font-light mb-2">Nenhum post encontrado</p>
            <p className="text-sm">Tente outra categoria ou volte em breve.</p>
          </div>
        ) : (
          <>
            {/* Post destaque */}
            {featuredPost && (
              <article
                onClick={() => setSelectedPost(featuredPost)}
                className="group cursor-pointer mb-12 grid md:grid-cols-2 gap-0 bg-white border border-gray-100 hover-lift overflow-hidden"
              >
                <div className="overflow-hidden h-64 md:h-auto relative">
                  <img
                    src={featuredPost.cover_image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A96E] text-white text-[10px] tracking-widest uppercase px-3 py-1">
                      Em Destaque
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#C9A96E] text-xs tracking-widest uppercase mb-3">{featuredPost.category}</span>
                  <h2 className="font-serif text-3xl text-[#1C1C1C] font-light leading-snug mb-4 group-hover:text-[#C9A96E] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#6B6560]">
                    <span className="flex items-center gap-2">
                      <User size={11} /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={11} />
                      {new Date(featuredPost.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <button className="mt-6 self-start text-xs tracking-widest uppercase text-[#C9A96E] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ler Artigo <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            )}

            {/* Grid de posts */}
            {otherPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map(post => (
                  <PostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
