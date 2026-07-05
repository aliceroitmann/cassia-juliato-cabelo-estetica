/*
# Criar tabela de posts do blog (sem autenticação)

1. Novas Tabelas
- `blog_posts`
  - `id` (uuid, chave primária)
  - `title` (text) — título do post
  - `slug` (text, único) — slug para URL amigável
  - `excerpt` (text) — resumo do post
  - `content` (text) — conteúdo completo
  - `category` (text) — categoria do post
  - `author` (text) — nome do autor
  - `cover_image` (text) — URL da imagem de capa
  - `reading_time` (int) — tempo estimado de leitura em minutos
  - `published` (boolean, default true) — se o post está publicado
  - `published_at` (timestamptz) — data de publicação
  - `created_at` (timestamptz)

2. Segurança
- RLS habilitado na tabela `blog_posts`.
- Leitura pública (anon + authenticated) para posts publicados.
- Inserção, atualização e exclusão permitidas para anon + authenticated (app sem login).

3. Dados iniciais
- 6 posts de exemplo em PT-BR para popular o blog.
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'Dicas',
  author text NOT NULL DEFAULT 'Equipe Serenity',
  cover_image text NOT NULL DEFAULT '',
  reading_time int NOT NULL DEFAULT 3,
  published boolean NOT NULL DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_blog_posts" ON blog_posts;
CREATE POLICY "anon_select_blog_posts" ON blog_posts FOR SELECT
TO anon, authenticated USING (published = true);

-- INSERT, UPDATE and DELETE intentionally omitted for anon/authenticated.
-- Blog posts are managed exclusively via service_role (admin/backend).

-- Posts iniciais de exemplo
INSERT INTO blog_posts (title, slug, excerpt, content, category, author, cover_image, reading_time, published_at)
VALUES
(
  'Os 5 Melhores Tratamentos para Hidratar o Cabelo em Casa',
  'melhores-tratamentos-hidratacao-cabelo',
  'Cabelo seco e sem vida? Confira nossas dicas favoritas para recuperar o brilho e a maciez dos fios sem sair de casa, usando ingredientes naturais e produtos profissionais.',
  'Manter o cabelo hidratado é essencial para garantir fios saudáveis, brilhantes e sem frizz. Com o dia a dia corrido, nem sempre é possível visitar o salão com frequência — mas a boa notícia é que alguns tratamentos simples podem fazer toda a diferença no conforto da sua casa.

**1. Máscara de Abacate com Mel**
O abacate é rico em gorduras saudáveis e vitaminas que nutrem profundamente os fios. Misture metade de um abacate maduro com duas colheres de mel, aplique nos fios úmidos, deixe agir por 30 minutos e lave normalmente. O resultado é imediato.

**2. Óleo de Argan**
Considerado o "ouro líquido" da beleza capilar, o óleo de argan hidrata sem pesar. Aplique algumas gotinhas nas pontas após o banho, ainda com o cabelo úmido.

**3. Máscara de Iogurte e Azeite**
Combine um pote de iogurte natural com uma colher de azeite de oliva extra virgem. Essa combinação sela as cutículas e deixa os fios muito mais macios e fáceis de pentear.

**4. Banho de Creme com Vapor**
Após aplicar o condicionador ou máscara, envolva o cabelo em uma toalha aquecida por 15 minutos. O calor abre as cutículas e potencializa a absorção dos ativos.

**5. Proteína de Seda Caseira**
Misture clara de ovo com algumas gotinhas de óleo essencial de lavanda. A proteína da clara fortalece os fios fragilizados e combate a quebra.

Lembre-se: a hidratação regular (pelo menos uma vez por semana) é o segredo para um cabelo sempre saudável. Combine esses tratamentos caseiros com visitas mensais ao nosso salão para resultados ainda mais incríveis.',
  'Cabelo',
  'Isabella Chen',
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
  5,
  now() - interval '2 days'
),
(
  'Guia Completo: Rotina de Skincare para Pele Mista',
  'rotina-skincare-pele-mista',
  'A pele mista é uma das mais comuns e também uma das mais desafiadoras de cuidar. Criamos um guia passo a passo para equilibrar a oleosidade sem ressecar as áreas mais sensíveis.',
  'A pele mista combina características da pele oleosa na zona T (testa, nariz e queixo) com áreas mais secas nas bochechas e têmporas. Encontrar o equilíbrio certo pode parecer difícil, mas com a rotina adequada fica muito mais simples.

**Manhã**

1. Limpeza suave: Use um gel de limpeza facial sem sulfatos para remover a oleosidade noturna sem agredir a pele seca.
2. Tônico equilibrante: Prefira fórmulas com ácido hialurônico e extrato de pepino, que hidratam sem obstruir os poros.
3. Sérum de vitamina C: Protege contra radicais livres, uniformiza o tom e dá luminosidade.
4. Hidratante oil-free: Um gel-creme leve hidrata sem brilho excessivo.
5. Protetor solar FPS 50+: Obrigatório todos os dias, mesmo em dias nublados.

**Noite**

1. Dupla limpeza: Comece com óleo de limpeza para remover maquiagem e protetor. Depois, use o gel de limpeza suave.
2. Esfoliação química (2x por semana): Ácidos AHA/BHA ajudam a controlar a oleosidade e renovar as células.
3. Sérum noturno: Retinol em baixa concentração estimula a renovação celular.
4. Hidratante noturno nutritivo: Nas bochechas, use um creme mais rico. Na zona T, aplique em quantidade menor.

**Dica da Serenity**: Venha conhecer nosso protocolo de facial personalizado para pele mista. Em apenas uma sessão, você perceberá a diferença!',
  'Skincare',
  'Sofia Alvarez',
  'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800',
  7,
  now() - interval '5 days'
),
(
  'Massagem: Muito Além do Relaxamento',
  'beneficios-massagem-saude',
  'A massagem terapêutica vai muito além de aliviar o estresse. Descubra os benefícios comprovados para a saúde física e mental que fazem dela um investimento essencial no seu bem-estar.',
  'Muita gente associa a massagem apenas a um momento de luxo e relaxamento. Mas a ciência comprova que os benefícios vão muito além do prazer imediato — a massagem terapêutica regular é um investimento real na sua saúde.

**Benefícios físicos comprovados**

- Redução da tensão muscular: A pressão aplicada nos músculos libera nós e contraturas, aliviando dores crônicas e melhorando a mobilidade.
- Melhora da circulação: Os movimentos de amassamento estimulam o fluxo sanguíneo e linfático, auxiliando na eliminação de toxinas.
- Redução da inflamação: Pesquisas mostram que a massagem pode diminuir marcadores inflamatórios no organismo.
- Alívio de cefaleias: Técnicas específicas no pescoço e ombros podem reduzir a frequência de dores de cabeça tensionais.

**Benefícios mentais e emocionais**

- Redução do cortisol: O hormônio do estresse diminui significativamente após uma sessão de massagem.
- Aumento da serotonina e dopamina: Os neurotransmissores do bem-estar são estimulados, melhorando o humor.
- Melhora do sono: A massagem regula o sistema nervoso autônomo, favorecendo um sono mais profundo e reparador.
- Redução da ansiedade: Estudos indicam que sessões regulares podem ser tão eficazes quanto alguns tratamentos ansiolíticos.

**Qual tipo escolher?**

- Massagem Sueca: Ideal para iniciantes, focada no relaxamento geral.
- Massagem com Pedras Quentes: Combina calor e pressão para um relaxamento mais profundo.
- Massagem Desportiva: Para atletas e pessoas ativas.
- Shiatsu: Trabalha os meridianos energéticos do corpo.

Na Serenity, nossos terapeutas avaliam suas necessidades antes de cada sessão para personalizar a técnica mais adequada.',
  'Bem-Estar',
  'Marcus Williams',
  'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=800',
  6,
  now() - interval '10 days'
),
(
  'Tendências de Coloração para 2024: O que Está em Alta',
  'tendencias-coloracao-2024',
  'Da técnica airtouch ao lived-in color, as tendências de coloração deste ano apostam no natural, no luminoso e no personalizável. Veja o que vai dominar os salões em 2024.',
  'O mundo da coloração capilar está em constante evolução, e 2024 trouxe propostas lindíssimas que equilibram modernidade e praticidade. Confira as principais tendências que estamos adorando executar aqui na Serenity.

**Airtouch: o Balayage Evoluído**
A técnica airtouch usa um secador para remover os fios mais finos da mecha, colorindo apenas os mais grossos. O resultado é um clareamento ultra-natural, com transição suavíssima entre as cores e baixíssima manutenção.

**Lived-In Color**
A proposta é um visual que parece que o cabelo clareou naturalmente ao sol. As raízes ficam preservadas e as pontas ganham luminosidade, criando um efeito de cabelo sem esforço que todo mundo ama.

**Dourado Mel**
Os tons quentes estão em alta: louro mel, caramelo e cobre formam a paleta mais desejada do ano. Eles valorizam qualquer tom de pele e combinam com todas as estações.

**Coloração Vivid em Mechas**
Para quem quer ousar sem comprometer o look completo, mechas coloridas em tons vibrantes (rosa, lilás, azul) aparecem estrategicamente para dar um toque especial e moderno.

**Moreno Iluminado**
Os cabelos escuros ganharam técnicas de iluminação que criam profundidade e movimento sem mudar a cor base. O babylights e o glossing são os favoritos das morenas que querem mais vida nos fios.

**Baixa Manutenção é Tendência**
Uma das maiores tendências é justamente a praticidade: técnicas que crescem bem, com raízes naturais e menos visitas ao salão para retoques.

Quer descobrir qual coloração combina com você? Agende uma consulta de colorimetria gratuita na Serenity.',
  'Tendências',
  'Isabella Chen',
  'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=800',
  5,
  now() - interval '15 days'
),
(
  'Como Preparar a Pele para o Verão: 10 Dicas Essenciais',
  'preparar-pele-verao-dicas',
  'Com a chegada do verão, a pele precisa de cuidados especiais. Confira nossas 10 dicas para chegar na estação mais quente do ano com a pele radiante, hidratada e protegida.',
  'O verão chegou — e com ele a necessidade de redobrar os cuidados com a pele. O calor, o sol e o cloro da piscina podem ressecar, manchar e envelhecer a pele precocemente. Mas com os cuidados certos, você brilha na praia e na cidade.

**1. Protetor Solar é Inegociável**
Use FPS 50 no mínimo, todos os dias, mesmo em dias nublados. Reaplicar a cada 2 horas na exposição direta ao sol é fundamental.

**2. Hidratação de Dentro para Fora**
Beba pelo menos 2 litros de água por dia. A hidratação interna reflete diretamente no viço e elasticidade da pele.

**3. Esfoliação Semanal**
Remove células mortas, uniformiza o tom e prepara a pele para absorver melhor os hidratantes. Use esfoliantes suaves para o rosto e mais intensos no corpo.

**4. Invista em Antioxidantes**
Séruns com vitamina C, niacinamida e resveratrol protegem contra os danos do sol e do estresse oxidativo.

**5. Cuide do Pós-Sol**
Após a exposição, use géis calmantes com aloe vera e bisabolol para acalmar a pele e evitar o descascamento.

**6. Maquiagem Leve**
No verão, prefira BB creams, tints e bronzers leves ao invés de bases pesadas que entopem os poros.

**7. Atenção às Manchas**
Não esprema espinhas durante o verão — o sol potencializa manchas pós-inflamatórias. Prefira tratamentos noturnos.

**8. Faça um Peeling de Transição**
Antes do verão intenso, um peeling leve no salão renova a pele e uniformiza o tom para receber melhor o bronzeado.

**9. Cuide dos Lábios**
Use lip balm com FPS 30 diariamente. Os lábios são muito sensíveis ao sol e ressecam facilmente.

**10. Agende seu Facial**
Um facial profissional pré-verão na Serenity vai preparar e potencializar os cuidados da sua pele para os meses quentes.',
  'Skincare',
  'Sofia Alvarez',
  'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=800',
  6,
  now() - interval '20 days'
),
(
  'Manicure Perfeita: Segredos para Unhas que Duram Mais',
  'manicure-perfeita-unhas-duravel',
  'Esmaltação que descasca em dois dias? Aprenda os segredos das nossas manicures profissionais para garantir unhas impecáveis por muito mais tempo, seja em casa ou no salão.',
  'Quem nunca se frustrou com o esmalte descascando no dia seguinte à manicure? A boa notícia é que alguns passos simples fazem toda a diferença na durabilidade do esmalte e na saúde das unhas.

**Preparação é Tudo**

Antes de qualquer esmalte, a preparação correta é o segredo:
- Higienize bem as unhas com removedor para eliminar óleos e resíduos.
- Lixe apenas as pontas (não a superfície) para definir o formato.
- Cuticulas amolecidas com produto específico devem ser empurradas com cuidado — nunca cortadas demais.
- Aplique uma base niveladora que vai proteger a unha e dar aderência ao esmalte.

**Aplicação Correta**

- Aplique em camadas finas: três camadas finas são muito mais duráveis que duas grossas.
- Sele as pontas: passe o esmalte na borda da ponta da unha para proteger de lascas.
- Espere 2 minutos entre cada camada.
- Finalize com um top coat de qualidade — ele é responsável pelo brilho e pela durabilidade.

**Cuidados Pós-Manicure**

- Evite contato com água por pelo menos 1 hora após a esmaltação.
- Use luvas para lavar louça ou limpar a casa.
- Hidrate as cutículas com óleo de amêndoas ou argan diariamente.
- Reaplique o top coat a cada 2 dias para prolongar o brilho.

**Gel vs. Esmalte Convencional**

O esmalte em gel dura de 2 a 3 semanas com brilho intacto, mas precisa de remoção profissional para não danificar a unha. Para eventos especiais, vale muito a pena.

Na Serenity, utilizamos produtos profissionais de alta performance que garantem resultados superiores. Agende sua manicure e experimente a diferença!',
  'Dicas',
  'Ethan Brooks',
  'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=800',
  4,
  now() - interval '25 days'
)
ON CONFLICT (slug) DO NOTHING;
