const photos = [
  'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
  'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=480&fm=webp',
];

const captions = [
  'Corte & Penteado',
  'Tratamento Facial',
  'Massagem Relaxante',
  'Coloração',
  'Experiência Spa',
  'Nosso Espaço',
  'Cuidado com Unhas',
  'Visual para Noiva',
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#8B6914] text-xs tracking-[0.4em] uppercase mb-3">Nosso Trabalho</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-light mb-4">Galeria</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden break-inside-avoid cursor-pointer">
              <img
                src={src}
                alt={captions[i]}
                loading="lazy"
                width="480"
                height="360"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs tracking-widest uppercase">{captions[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
