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
        title: 'Escolhe o teu plano',
        body: 'Escolhe a subscrição que melhor te serve: 📍 Espanha (correio nacional) ou 🌍 Internacional (qualquer outro lugar do mundo).',
      },
      {
        title: 'Subscreve com Stripe',
        body: 'Conclui o pagamento seguro com Stripe para ativar a tua subscrição mensal. Vais receber um email de confirmação e podes gerir ou cancelar quando quiseres.',
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
      "If this season of life resonates with you, you're in the right place.",
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

  return <SuperMamasClubContent copy={t} />
}
