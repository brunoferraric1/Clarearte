import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'
import Image from 'next/image'

const pageMetadata = {
  es: {
    title: 'Super Mamas Mail Club',
    description: 'Ilustración y palabras reales, una vez al mes en tu buzón. Suscripción con envío a España e Internacional.',
  },
  pt: {
    title: 'Super Mamas Mail Club',
    description: 'Ilustração e palavras reais, uma vez por mês na tua caixa de correio. Envio para Espanha e Internacional.',
  },
  en: {
    title: 'Super Mamas Mail Club',
    description: 'Real illustration and real words, once a month in your mailbox. Spain and International shipping plans.',
  },
}

const copy = {
  es: {
    tagline: 'No solo una postal',
    headline: 'Un abrazo mensual en tu buzón',
    cta: 'Únete al club',
    ctaNote: '(próximamente)',
    intro: {
      lines: [
        'En un mundo donde casi todo está automatizado…',
        'donde los textos los genera la IA…',
        'donde la mayoría de cartas se han convertido en facturas…',
      ],
      highlight: 'Recibirás arte real y palabras reales.',
      closing: [
        'Creado por una madre.',
        'Escrito para madres.',
        'Enviado con cariño, desde Europa, a cualquier lugar del mundo.',
      ],
    },
    whatIsTitle: '¿Qué es el Super Mamas Mail Club?',
    whatIsBody: [
      'Super Mamas Mail Club es una suscripción mensual abierta a todo el mundo.',
      'Cualquiera que sienta atracción por el correo lento, la ilustración y las palabras con intención es bienvenida aquí.',
      'Aun así, este club fue creado especialmente para madres y futuras madres.',
      'Cada mes recibes en tu buzón ilustraciones impresas exclusivas y una carta personal.',
      'Las ilustraciones y las cartas están profundamente inspiradas por el embarazo, el posparto y el paisaje emocional de la maternidad.',
      'Si esta etapa de tu vida resuena contigo, estás en el lugar correcto.',
    ],
    howTitle: 'Cómo funciona',
    howSteps: [
      {
        title: 'Únete al club en Patreon',
        body: 'Serás redirigida a Patreon, donde vive Super Mama\'s Mail Club. Allí podrás crear una cuenta rápida (o iniciar sesión), hacerte miembro mensual y disfrutar de la libertad de cancelar cuando quieras. (Sin compromiso a largo plazo. Solo un ritual mensual muy suave.)',
      },
      {
        title: 'Elige tu plan',
        body: 'Elige la suscripción que mejor te va: 📍 España (correo nacional) o 🌍 Internacional (cualquier otro lugar del mundo).',
      },
      {
        title: 'Espera tu correo',
        body: 'A principios de cada mes, tu sobre es preparado, sellado y enviado. Luego viene la mejor parte… abrir tu buzón y encontrar algo que no es una factura 💌 Correo lento. Papel de verdad. Hecho con cariño.',
      },
    ],
    receiveTitle: 'Qué recibirás en el correo',
    receiveItems: [
      {
        title: 'Postal A6 ilustrada',
        body: 'Creada por mí, impresa con cariño — una pequeña pieza de arte para pausar, respirar y guardar.',
        color: 'orange',
      },
      {
        title: 'Una carta personal escrita por mí',
        body: 'Compartiendo reflexiones, pensamientos y momentos de la maternidad, inspirados por la ilustración de ese mes.',
        color: 'yellow',
      },
      {
        title: 'Una mini postal A7',
        body: 'Con arte hecho por mi hija pequeña, acompañada de una frase escrita a mano por mí — un recordatorio silencioso de creatividad, ternura y crecimiento.',
        color: 'sage',
      },
    ],
    valuesTitle: 'Nada genérico. Nada automatizado. Nada copiado.',
    values: [
      { title: 'Humano', body: 'Creado con manos reales, inspirado por sentimientos reales, escrito con intención y cariño reales.', color: 'yellow' },
      { title: 'Hecho con tiempo', body: 'En un mundo rápido, esto es lento. Con sentido. Algo que puedes sostener y atesorar.', color: 'orange' },
      { title: 'Intencional', body: 'Cada ilustración cuenta una historia. Cada palabra está elegida con cuidado para llegar a tu corazón.', color: 'sage' },
    ],
    plansTitle: 'Elige tu plan',
    plansNote: 'Cancela cuando quieras.',
    planSpain: {
      title: 'España (envío nacional)',
      price: '€X/mes',
      bullets: ['Incluye envío dentro de España', 'Preparado y enviado a principio de mes'],
    },
    planIntl: {
      title: 'Internacional (fuera de España)',
      price: '€Y/mes',
      bullets: ['Incluye envío internacional', 'Preparado y enviado a principio de mes'],
    },
    whyTitle: '¿Por qué existe esto?',
    whyBody: 'Porque la maternidad puede ser preciosa… pero también solitaria. Especialmente si te sientes abrumada por el día a día, echas de menos momentos solo para ti, amas el arte pero rara vez compras algo solo para ti, o ansías conexión más allá de las pantallas.',
    whyClosing: 'El Super Mamas Mail Club fue creado para ser una pausa mensual. Un recordatorio físico de que no estás sola.',
    quote: 'Este club es mi manera de atravesar el ruido y decir: Te veo. Te siento. Importas.',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Cuándo se envía?', a: 'A principio de mes.' },
      { q: '¿Puedo cancelar?', a: 'Sí, en cualquier momento.' },
      { q: '¿A qué países envías?', a: 'A cualquier país (según el plan Internacional).' },
      { q: '¿Es solo para madres?', a: 'No. Si te resuena, eres bienvenida.' },
    ],
    signoffTitle: 'Hecho por mí, para ti.',
    signoffBy: 'Paola',
  },
  pt: {
    tagline: 'Não é só uma postal',
    headline: 'Um abraço mensal na tua caixa de correio',
    cta: 'Entra no clube',
    ctaNote: '(em breve)',
    intro: {
      lines: [
        'Num mundo onde quase tudo é automatizado…',
        'onde os textos são gerados por IA…',
        'onde a maioria das cartas se transformou em contas…',
      ],
      highlight: 'Vais receber arte real e palavras reais.',
      closing: [
        'Criado por uma mãe.',
        'Escrito para mães.',
        'Enviado com carinho, desde a Europa, para qualquer lugar do mundo.',
      ],
    },
    whatIsTitle: 'O que é o Super Mamas Mail Club?',
    whatIsBody: [
      'O Super Mamas Mail Club é uma subscrição mensal aberta a toda a gente.',
      'Qualquer pessoa que se sinta atraída por slow mail, ilustração e palavras com intenção é bem-vinda aqui.',
      'Ainda assim, este clube foi criado especialmente para mães e futuras mães.',
      'Todos os meses recebes na tua caixa de correio impressões ilustradas exclusivas e uma carta pessoal.',
      'As ilustrações e as cartas são profundamente inspiradas pela gravidez, pelo pós-parto e pela paisagem emocional da maternidade.',
      'Se esta fase da vida faz sentido para ti, estás no lugar certo.',
    ],
    howTitle: 'Como funciona',
    howSteps: [
      {
        title: 'Entra no clube no Patreon',
        body: 'Serás redirecionada para o Patreon, onde vive o Super Mama\'s Mail Club. Lá podes criar uma conta rápida (ou entrar), tornares-te membro mensal e desfrutar da liberdade de cancelar quando quiseres. (Sem compromisso a longo prazo. Apenas um ritual mensal suave.)',
      },
      {
        title: 'Escolhe o teu plano',
        body: 'Escolhe a subscrição que melhor te serve: 📍 Espanha (correio nacional) ou 🌍 Internacional (qualquer outro lugar do mundo).',
      },
      {
        title: 'Espera pelo teu correio',
        body: 'No início de cada mês, o teu envelope é preparado, selado e enviado. Depois vem a melhor parte… abrir a tua caixa de correio e encontrar algo que não é uma conta 💌 Slow mail. Papel de verdade. Feito com carinho.',
      },
    ],
    receiveTitle: 'O que vais receber no correio',
    receiveItems: [
      {
        title: 'Postal A6 ilustrado',
        body: 'Criado por mim, impresso com carinho — uma pequena peça de arte para pausar, respirar e guardar.',
        color: 'orange',
      },
      {
        title: 'Uma carta pessoal escrita por mim',
        body: 'Partilhando reflexões, pensamentos e momentos da maternidade, inspirados pela ilustração desse mês.',
        color: 'yellow',
      },
      {
        title: 'Um mini postal A7',
        body: 'Com arte feita pela minha filha pequena, acompanhada de uma frase escrita à mão por mim — um lembrete silencioso de criatividade, ternura e crescimento.',
        color: 'sage',
      },
    ],
    valuesTitle: 'Nada genérico. Nada automatizado. Nada copiado.',
    values: [
      { title: 'Humano', body: 'Criado com mãos reais, inspirado por sentimentos reais, escrito com intenção e carinho reais.', color: 'yellow' },
      { title: 'Feito com tempo', body: 'Num mundo rápido, isto é lento. Com sentido. Algo que podes segurar e guardar.', color: 'orange' },
      { title: 'Intencional', body: 'Cada ilustração conta uma história. Cada palavra foi escolhida com cuidado para chegar ao teu coração.', color: 'sage' },
    ],
    plansTitle: 'Escolhe o teu plano',
    plansNote: 'Cancela quando quiseres.',
    planSpain: {
      title: 'Espanha (envio nacional)',
      price: '€X/mês',
      bullets: ['Inclui envio dentro de Espanha', 'Preparado e enviado no início do mês'],
    },
    planIntl: {
      title: 'Internacional (fora de Espanha)',
      price: '€Y/mês',
      bullets: ['Inclui envio internacional', 'Preparado e enviado no início do mês'],
    },
    whyTitle: 'Porque é que isto existe?',
    whyBody: 'Porque a maternidade pode ser linda… mas também solitária. Especialmente se te sentes sobrecarregada pelo dia a dia, sentes falta de momentos só para ti, amas arte mas raramente compras algo só para ti, ou anseias por conexão para além dos ecrãs.',
    whyClosing: 'O Super Mamas Mail Club foi criado para ser uma pausa mensal. Um lembrete físico de que não estás sozinha.',
    quote: 'Este clube é a minha forma de atravessar o ruído e dizer: Vejo-te. Sinto-te. Importas.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'Quando é enviado?', a: 'No início de cada mês.' },
      { q: 'Posso cancelar?', a: 'Sim, a qualquer momento.' },
      { q: 'Para que países envias?', a: 'Para qualquer país (plano Internacional).' },
      { q: 'É só para mães?', a: 'Não. Se fizer sentido para ti, és bem-vinda.' },
    ],
    signoffTitle: 'Feito por mim, para ti.',
    signoffBy: 'Paola',
  },
  en: {
    tagline: 'Not just a print',
    headline: 'A monthly hug delivered to your mailbox',
    cta: 'Join the club',
    ctaNote: '(coming soon)',
    intro: {
      lines: [
        'In a world where almost everything is automated…',
        'where texts are generated by AI…',
        'where most letters have turned into bills…',
      ],
      highlight: 'You will receive real art and real words.',
      closing: [
        'Created by a mother.',
        'Written for mothers.',
        'Sent with care, from Europe, to anywhere in the world.',
      ],
    },
    whatIsTitle: 'What is the Super Mamas Mail Club?',
    whatIsBody: [
      'Super Mamas Mail Club is a monthly subscription open to everyone.',
      'Anyone who feels drawn to slow mail, illustration, and thoughtful words is welcome here.',
      'That said, this club was created especially for mothers and mothers-to-be.',
      'Every month, you receive in your mailbox exclusive illustrated prints and a personal letter.',
      'The illustrations and letters are deeply inspired by pregnancy, postpartum, and the emotional landscape of motherhood.',
      'If this season of life resonates with you, you\'re in the right place.',
    ],
    howTitle: 'How it works',
    howSteps: [
      {
        title: 'Join the club on Patreon',
        body: 'You\'ll be redirected to Patreon, where Super Mama\'s Mail Club lives. There, you\'ll create a quick account (or log in), become a monthly member, and enjoy the freedom to cancel anytime. (No long-term commitment. Just a gentle monthly ritual.)',
      },
      {
        title: 'Choose your plan',
        body: 'Pick the subscription that feels right for you: 📍 Spain-based (national mail) or 🌍 International (anywhere else in the world).',
      },
      {
        title: 'Wait for your mail',
        body: 'At the beginning of each month, your envelope is prepared, stamped, and sent. Then comes the best part… opening your mailbox and finding something that isn\'t a bill 💌 Slow mail. Real paper. Made with care.',
      },
    ],
    receiveTitle: 'What you\'ll receive in the mail',
    receiveItems: [
      {
        title: 'An illustrated A6 postcard',
        body: 'Created by me, printed with care — a small piece of art to pause, breathe, and keep.',
        color: 'orange',
      },
      {
        title: 'A personal letter written by me',
        body: 'Sharing reflections, thoughts, and moments from motherhood, inspired by that month\'s illustration.',
        color: 'yellow',
      },
      {
        title: 'A mini A7 postcard',
        body: 'Featuring artwork made by my baby daughter, paired with a hand-lettered phrase created by me — a quiet reminder of creativity, tenderness, and growth.',
        color: 'sage',
      },
    ],
    valuesTitle: 'Nothing generic. Nothing automated. Nothing copied.',
    values: [
      { title: 'Human', body: 'Created by real hands, inspired by real feelings, written with real intention and care.', color: 'yellow' },
      { title: 'Made with time', body: 'In a fast world, this is slow. Meaningful. Something you can hold and treasure.', color: 'orange' },
      { title: 'Intentional', body: 'Every illustration tells a story. Every word is chosen thoughtfully to reach your heart.', color: 'sage' },
    ],
    plansTitle: 'Choose your plan',
    plansNote: 'Cancel anytime.',
    planSpain: {
      title: 'Spain (national shipping)',
      price: '€X/month',
      bullets: ['Includes shipping within Spain', 'Packed and shipped at the beginning of the month'],
    },
    planIntl: {
      title: 'International (outside Spain)',
      price: '€Y/month',
      bullets: ['Includes international shipping', 'Packed and shipped at the beginning of the month'],
    },
    whyTitle: 'Why does this exist?',
    whyBody: 'Because motherhood can be beautiful… but also lonely. Especially if you feel overwhelmed by daily life, miss moments just for yourself, love art but rarely buy something only for you, or crave connection beyond screens.',
    whyClosing: 'The Super Mamas Mail Club was created to be a monthly pause. A physical reminder that you are not alone.',
    quote: 'This club is my way of reaching through the noise and saying: I see you. I feel you. You matter.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'When does it ship?', a: 'At the beginning of each month.' },
      { q: 'Can I cancel?', a: 'Yes, anytime.' },
      { q: 'Where do you ship?', a: 'Worldwide (International plan).' },
      { q: 'Is it only for moms?', a: 'No. If it resonates, you\'re welcome here.' },
    ],
    signoffTitle: 'Made by me, for you.',
    signoffBy: 'Paola',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const meta = pageMetadata[lang as keyof typeof pageMetadata] || pageMetadata.es

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    path: 'supermamasclub',
    lang,
  })
}

export default async function SuperMamasClubPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = copy[lang as keyof typeof copy] || copy.es

  const colorClasses = {
    orange: 'text-[#E8976C]',
    yellow: 'text-[#D4A84B]',
    sage: 'text-[#7BB5A3]',
    purple: 'text-[#B896C6]',
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Full bleed with background image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
          <SuperMamasLogo className="flex justify-center mb-6" size="lg" />
          
          <p
            className="text-xl md:text-2xl text-white/90 mb-3 italic"
            style={{ fontFamily: 'var(--font-billion-miracles)' }}
          >
            {t.tagline}
          </p>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-8 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.1 }}
          >
            {t.headline}
          </h1>

          <Button
            variant="primary"
            size="lg"
            disabled
            aria-disabled="true"
            className="cursor-not-allowed text-lg px-10 py-6 rounded-full shadow-xl"
          >
            {t.cta} <span className="opacity-70 ml-1">{t.ctaNote}</span>
          </Button>
        </div>
      </section>

      {/* INTRO - "In a world where..." with image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-1">
                {t.intro.lines.map((line, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-snug">
                    {line}
                  </p>
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-foreground leading-snug">
                {t.intro.highlight}
              </p>
              
              <div className="space-y-0.5 pt-2">
                {t.intro.closing.map((line, idx) => (
                  <p key={idx} className="text-lg text-foreground leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                alt="Hand holding illustrated postcard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.15 }}
            >
              {t.whatIsTitle}
            </h2>

            <div className="space-y-4">
              {t.whatIsBody.map((line, idx) => (
                <p key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Peach background */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display mb-12"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.15 }}
          >
            {t.howTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {t.howSteps.map((step, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/90 leading-relaxed text-base">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.15 }}
            >
              {t.receiveTitle}
            </h2>

            <div className="space-y-10">
              {t.receiveItems.map((item, idx) => (
                <div key={idx}>
                  <h3 className={`text-lg md:text-xl font-semibold mb-2 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic' }}>
                <span className={colorClasses.yellow}>Nothing generic.</span>
                <br />
                <span className={colorClasses.orange}>Nothing automated.</span>
                <br />
                <span className={colorClasses.sage}>Nothing copied.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {t.values.slice(0, 2).map((val, idx) => (
                <div key={idx}>
                  <h3 className={`text-sm font-bold uppercase tracking-wide mb-2 ${colorClasses[val.color as keyof typeof colorClasses]}`}>
                    {val.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{val.body}</p>
                </div>
              ))}
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className={`text-sm font-bold uppercase tracking-wide mb-2 ${colorClasses[t.values[2].color as keyof typeof colorClasses]}`}>
                  {t.values[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">{t.values[2].body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.15 }}
            >
              {t.whyTitle}
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.whyBody}
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                {t.whyClosing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
            style={{ fontFamily: 'var(--font-billion-miracles)' }}
          >
            {t.quote}
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-display text-foreground mb-3"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
            >
              {t.plansTitle}
            </h2>
            <p className="text-muted-foreground">{t.plansNote}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {t.planSpain.title}
                </h3>
                <p className="text-2xl font-mono text-foreground">
                  {t.planSpain.price}
                </p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {t.planSpain.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-base">
                    <span className="text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {t.planIntl.title}
                </h3>
                <p className="text-2xl font-mono text-foreground">
                  {t.planIntl.price}
                </p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {t.planIntl.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-base">
                    <span className="text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-display text-foreground mb-10"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, textDecoration: 'underline', textDecorationColor: 'var(--primary)', textUnderlineOffset: '8px' }}
          >
            {t.faqTitle}
          </h2>

          <div className="space-y-4">
            {t.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-white p-5"
              >
                <summary className="cursor-pointer text-lg font-medium text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="text-primary transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN-OFF */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}
          >
            {t.signoffTitle}
          </p>
          <p className="text-xl text-muted-foreground">{t.signoffBy}</p>
        </div>
      </section>
    </div>
  )
}
