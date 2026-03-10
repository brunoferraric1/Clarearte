import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { SuperMamasClubContent } from '@/components/supermamasclub/page-content'

const pageMetadata = {
  es: {
    title: 'Super Mamas Mail Club',
    description: 'Ilustración y palabras reales, una vez al mes en tu buzón. Suscripción con envío a España e Internacional.',
  },
  pt: {
    title: 'Super Mamas Mail Club',
    description: 'Ilustração e palavras reais, uma vez por mês na sua caixa de correio. Planos com envio para a Espanha e Internacional.',
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
    menu: {
      whatIsIt: '¿Qué es?',
      howItWorks: 'Cómo funciona',
      plans: 'Planes',
      faq: 'FAQ',
      subscribe: 'Únete al club',
    },
    intro: {
      items: [
        { prefix: 'En un mundo donde casi ', highlight: 'todo es digital.', color: 'pink' },
        { prefix: 'Donde los textos son ', highlight: 'generados por IA.', color: 'pink' },
        { prefix: 'Donde las cartas son solo ', highlight: 'facturas.', color: 'pink' },
        { prefix: 'Vas a recibir arte y ', highlight: 'palabras reales.', color: 'yellow' },
      ],
      closing: [
        'Creado por una madre.',
        'Escrito para madres.',
        'Enviado con cariño.',
      ],
    },
    whatIsTitle: '¿Qué es el Super Mamas Mail Club?',
    whatIsBody: [
      'Super Mamas Mail Club es una suscripción mensual abierta a todo el mundo.',
      'Cualquiera que sienta atracción por el correo lento, la ilustración y las palabras con intención es bienvenida aquí.',
      'Aun así, este club fue creado especialmente para madres y futuras madres.',
      'Existe porque la maternidad puede ser preciosa… pero también solitaria — especialmente cuando te sientes abrumada por el día a día o echas de menos conexión más allá de las pantallas.',
      'Este club es una pausa mensual: algo real que puedes sostener, leer despacio y guardar cerca.',
      'Si esta etapa de tu vida resuena contigo, estás en el lugar correcto.',
    ],
    howTitle: 'Cómo funciona',
    howSteps: [
      {
        title: 'Elige tu plan',
        body: 'Elige la suscripción que mejor te va: 📍 España (correo nacional) o 🌍 Internacional (cualquier otro lugar del mundo).',
      },
      {
        title: 'Suscríbete con Stripe',
        body: 'Completa el pago seguro con Stripe para activar tu suscripción mensual. Recibirás un email de confirmación y podrás gestionarla o cancelarla cuando quieras.',
      },
      {
        title: 'Espera tu correo',
        body: 'A principios de cada mes, tu sobre es preparado, sellado y enviado. Luego viene la mejor parte… abrir tu buzón y encontrar algo que no es una factura 💌 Correo lento. Papel de verdad. Hecho con cariño.',
      },
    ],
    receiveTitle: 'Qué recibirás en el correo',
    receiveSubtitle: 'Cada sobre es una experiencia cuidadosamente creada.',
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
    planCta: 'Seleccionar',
    pricingNote: '🔒 Paga de forma segura con Stripe. Cancela cuando quieras.',
    planSpain: {
      title: '🇪🇸 España',
      price: '€9/mes',
      bullets: ['Envío dentro de España', 'Preparado y enviado con cariño a principios de mes'],
    },
    planIntl: {
      title: '🌎 Internacional',
      price: '€12/mes',
      bullets: ['Envío internacional (fuera de España)', 'Preparado y enviado con cariño a principios de mes'],
    },
    quote: 'El Super Mamas Mail Club fue creado para ser una pausa y un abrazo mensual en tu buzón.',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Cuándo se envía?', a: 'A principio de mes.' },
      { q: '¿Puedo cancelar?', a: 'Sí, en cualquier momento.' },
      { q: '¿A qué países envías?', a: 'A cualquier país (según el plan Internacional).' },
      { q: '¿Es solo para madres?', a: 'No. Si te resuena, eres bienvenida.' },
    ],
    signoffTitle: 'Hecho por mí, para ti.',
    signoffBy: 'Paola Ferrari - Estudio Clarearte',
    signoffBio: 'Ilustradora, diseñadora y madre',
    signoffTagline: 'con amor desde mi estudio',
  },
  pt: {
    tagline: 'Não é só um postal',
    headline: 'Um abraço mensal na sua caixa de correio',
    cta: 'Entre no clube',
    ctaNote: '(em breve)',
    menu: {
      whatIsIt: 'O que é?',
      howItWorks: 'Como funciona',
      plans: 'Planos',
      faq: 'FAQ',
      subscribe: 'Entre no clube',
    },
    intro: {
      items: [
        { prefix: 'Num mundo onde quase ', highlight: 'tudo é digital.', color: 'pink' },
        { prefix: 'Onde os textos são ', highlight: 'gerados por IA.', color: 'pink' },
        { prefix: 'Onde cartas são apenas ', highlight: 'boletos.', color: 'pink' },
        { prefix: 'Você vai receber arte e ', highlight: 'palavras reais.', color: 'yellow' },
      ],
      closing: [
        'Criado por uma mãe.',
        'Escrito para mães.',
        'Enviado com carinho.',
      ],
    },
    whatIsTitle: 'O que é o Super Mamas Mail Club?',
    whatIsBody: [
      'O Super Mamas Mail Club é uma assinatura mensal aberta para todo mundo.',
      'Qualquer pessoa que se sinta atraída por slow mail, ilustração e palavras com intenção é bem-vinda aqui.',
      'Ainda assim, este clube foi criado especialmente para mães e futuras mães.',
      'Existe porque a maternidade pode ser linda… mas também solitária — especialmente quando o dia a dia pesa ou quando você sente falta de conexão além das telas.',
      'Este clube é uma pausa mensal: algo real que você pode segurar, ler devagar e guardar.',
      'Se esta fase da vida faz sentido para você, você está no lugar certo.',
    ],
    howTitle: 'Como funciona',
    howSteps: [
      {
        title: 'Escolha seu plano',
        body: 'Escolha a assinatura que mais combina com você: 📍 Espanha (correio nacional) ou 🌍 Internacional (qualquer outro lugar do mundo).',
      },
      {
        title: 'Assine com Stripe',
        body: 'Conclua o pagamento seguro com Stripe para ativar a sua assinatura mensal. Você vai receber um email de confirmação e pode gerenciar ou cancelar quando quiser.',
      },
      {
        title: 'Espere pelo seu correio',
        body: 'No início de cada mês, seu envelope é preparado, selado e enviado. Depois vem a melhor parte… abrir a sua caixa de correio e encontrar algo que não é um boleto 💌 Slow mail. Papel de verdade. Feito com carinho.',
      },
    ],
    receiveTitle: 'O que você vai receber no correio',
    receiveSubtitle: 'Cada envelope é uma experiência cuidadosamente criada.',
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
      { title: 'Feito com tempo', body: 'Em um mundo rápido, isto é lento. Com sentido. Algo que você pode segurar e guardar.', color: 'orange' },
      { title: 'Intencional', body: 'Cada ilustração conta uma história. Cada palavra foi escolhida com cuidado para chegar ao seu coração.', color: 'sage' },
    ],
    plansTitle: 'Escolha seu plano',
    plansNote: 'Cancele quando quiser.',
    planCta: 'Selecionar',
    pricingNote: '🔒 Pague com segurança com Stripe. Cancele quando quiser.',
    planSpain: {
      title: '🇪🇸 Espanha',
      price: '€9/mês',
      bullets: ['Envio dentro de Espanha', 'Preparado e enviado com carinho no início do mês'],
    },
    planIntl: {
      title: '🌎 Internacional',
      price: '€12/mês',
      bullets: ['Envio internacional (fora de Espanha)', 'Preparado e enviado com carinho no início do mês'],
    },
    quote: 'O Super Mamas Mail Club foi criado para ser uma pausa e um abraço mensal na sua caixa de correio.',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      { q: 'Quando é enviado?', a: 'No início de cada mês.' },
      { q: 'Posso cancelar?', a: 'Sim, a qualquer momento.' },
      { q: 'Para que países envias?', a: 'Para qualquer país (plano Internacional).' },
      { q: 'É só para mães?', a: 'Não. Se fizer sentido para você, você é bem-vinda.' },
    ],
    signoffTitle: 'Feito por mim, para você.',
    signoffBy: 'Paola Ferrari - Estúdio Clarearte',
    signoffBio: 'Ilustradora, designer e mãe',
    signoffTagline: 'com amor do meu estúdio',
  },
  en: {
    tagline: 'Not just a print',
    headline: 'A monthly hug delivered to your mailbox',
    cta: 'Join the club',
    ctaNote: '(coming soon)',
    menu: {
      whatIsIt: 'What is it?',
      howItWorks: 'How it works',
      plans: 'Plans',
      faq: 'FAQ',
      subscribe: 'Join the club',
    },
    intro: {
      items: [
        { prefix: 'In a world where almost ', highlight: 'everything is digital.', color: 'pink' },
        { prefix: 'Where texts are ', highlight: 'generated by AI.', color: 'pink' },
        { prefix: 'Where letters are just ', highlight: 'bills.', color: 'pink' },
        { prefix: 'You will receive art and ', highlight: 'real words.', color: 'yellow' },
      ],
      closing: [
        'Created by a mother.',
        'Written for mothers.',
        'Sent with care.',
      ],
    },
    whatIsTitle: 'What is the Super Mamas Mail Club?',
    whatIsBody: [
      'Super Mamas Mail Club is a monthly subscription open to everyone.',
      'Anyone who feels drawn to slow mail, illustration, and thoughtful words is welcome here.',
      'That said, this club was created especially for mothers and mothers-to-be.',
      'It exists because motherhood can be beautiful… but also lonely — especially when daily life feels overwhelming or you crave connection beyond screens.',
      'This club is a monthly pause: something real you can hold, read slowly, and keep close.',
      'If this season of life resonates with you, you\'re in the right place.',
    ],
    howTitle: 'How it works',
    howSteps: [
      {
        title: 'Pick your plan',
        body: 'Pick the subscription that feels right for you: 📍 Spain-based (national mail) or 🌍 International (anywhere else in the world).',
      },
      {
        title: 'Subscribe',
        body: 'Complete secure checkout with Stripe to start your monthly subscription. You’ll get an email confirmation, and you can manage or cancel anytime.',
      },
      {
        title: 'Wait for your mail',
        body: 'At the beginning of each month, your envelope is prepared, stamped, and sent. Then comes the best part… opening your mailbox and finding something that isn\'t a bill 💌 Slow mail. Real paper. Made with care.',
      },
    ],
    receiveTitle: 'What you\'ll receive in the mail',
    receiveSubtitle: 'Each envelope is a curated experience.',
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
    planCta: 'Select',
    pricingNote: '🔒 Pay securely with Stripe. Cancel anytime',
    planSpain: {
      title: '🇪🇸 Spain',
      price: '€9/month',
      bullets: ['Shipping within Spain', 'Packed and shipped with love at the beginning of the month'],
    },
    planIntl: {
      title: '🌎 International',
      price: '€12/month',
      bullets: ['International shipping (outside Spain)', 'Packed and shipped with love at the beginning of the month'],
    },
    quote: 'El Super Mamas Mail Club fue creado para ser una pausa y un abrazo mensual en tu buzón.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'When does it ship?', a: 'At the beginning of each month.' },
      { q: 'Can I cancel?', a: 'Yes, anytime.' },
      { q: 'Where do you ship?', a: 'Worldwide (International plan).' },
      { q: 'Is it only for moms?', a: 'No. If it resonates, you\'re welcome here.' },
    ],
    signoffTitle: 'Made by me, for you.',
    signoffBy: 'Paola Ferrari - Clarearte Studio',
    signoffBio: 'Illustrator, designer, and mother',
    signoffTagline: 'with love from my studio',
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
    image: {
      url: '/assets/supermamasclub-og.jpg',
      width: 1200,
      height: 630,
      alt: meta.title,
    },
  })
}

export default async function SuperMamasClubPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = copy[lang as keyof typeof copy] || copy.es

  return <SuperMamasClubContent copy={t} />
}
