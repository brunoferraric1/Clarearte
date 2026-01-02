import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'

const pageMetadata = {
  es: {
    title: 'Política de Privacidad - Super Mamas Mail Club',
    description: 'Política de privacidad del Super Mamas Mail Club. Tu información está segura con nosotros.',
  },
  pt: {
    title: 'Política de Privacidade - Super Mamas Mail Club',
    description: 'Política de privacidade do Super Mamas Mail Club. Suas informações estão seguras com a gente.',
  },
  en: {
    title: 'Privacy Policy - Super Mamas Mail Club',
    description: 'Privacy policy for Super Mamas Mail Club. Your information is safe with us.',
  },
}

const content = {
  es: {
    title: 'Política de Privacidad',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Última actualización: Diciembre 2024',
    intro: 'En Super Mamas Mail Club, valoramos profundamente tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.',
    sections: [
      {
        title: '1. Información que recopilamos',
        content: 'Recopilamos únicamente la información necesaria para brindarte nuestro servicio:',
        items: [
          'Nombre completo',
          'Dirección postal (para el envío de tu correo mensual)',
          'Dirección de correo electrónico',
          'Información de pago (procesada de forma segura por Stripe)',
        ],
      },
      {
        title: '2. Cómo usamos tu información',
        content: 'Tu información se utiliza exclusivamente para:',
        items: [
          'Enviarte tu correo mensual del Super Mamas Mail Club',
          'Comunicaciones relacionadas con tu suscripción (confirmaciones, avisos de envío)',
          'Marketing digital por email (solo si has dado tu consentimiento)',
        ],
      },
      {
        title: '3. Compartir información con terceros',
        content: 'NO compartimos tu información personal con NADIE. Nunca. Tu información es privada y permanece privada.',
        highlight: true,
        items: [
          'No vendemos tus datos',
          'No compartimos tu información con terceros para marketing',
          'No cedemos tus datos a ninguna empresa o individuo',
        ],
      },
      {
        title: '4. Seguridad de los datos',
        content: 'Tomamos medidas apropiadas para proteger tu información personal:',
        items: [
          'Los pagos son procesados de forma segura por Stripe',
          'Tu información se almacena de forma segura',
          'Solo accedemos a tus datos cuando es necesario para el servicio',
        ],
      },
      {
        title: '5. Tus derechos',
        content: 'Tienes derecho a:',
        items: [
          'Acceder a tu información personal',
          'Solicitar la corrección de tus datos',
          'Solicitar la eliminación de tus datos',
          'Cancelar tu suscripción en cualquier momento',
        ],
      },
      {
        title: '6. Contacto',
        content: 'Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, visita nuestra página de soporte.',
        link: { text: 'Ir a soporte', href: '/supermamasclub/support' },
      },
    ],
    backLink: '← Volver al Super Mamas Mail Club',
  },
  pt: {
    title: 'Política de Privacidade',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Última atualização: Dezembro 2024',
    intro: 'No Super Mamas Mail Club, valorizamos profundamente a sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.',
    sections: [
      {
        title: '1. Informações que coletamos',
        content: 'Coletamos apenas as informações necessárias para prestar o nosso serviço:',
        items: [
          'Nome completo',
          'Endereço (para o envio do seu correio mensal)',
          'E-mail',
          'Informações de pagamento (processadas de forma segura pelo Stripe)',
        ],
      },
      {
        title: '2. Como usamos suas informações',
        content: 'Suas informações são utilizadas exclusivamente para:',
        items: [
          'Enviar o seu correio mensal do Super Mamas Mail Club',
          'Comunicações relacionadas com a sua assinatura (confirmações, avisos de envio)',
          'Marketing digital por e-mail (apenas se você deu o seu consentimento)',
        ],
      },
      {
        title: '3. Partilha de informação com terceiros',
        content: 'NÃO compartilhamos suas informações pessoais com NINGUÉM. Nunca. Suas informações são privadas e permanecem privadas.',
        highlight: true,
        items: [
          'Não vendemos os seus dados',
          'Não compartilhamos suas informações com terceiros para marketing',
          'Não cedemos seus dados a nenhuma empresa ou indivíduo',
        ],
      },
      {
        title: '4. Segurança dos dados',
        content: 'Tomamos medidas apropriadas para proteger suas informações pessoais:',
        items: [
          'Os pagamentos são processados de forma segura pelo Stripe',
          'Suas informações são armazenadas de forma segura',
          'Só acessamos seus dados quando necessário para o serviço',
        ],
      },
      {
        title: '5. Seus direitos',
        content: 'Você tem direito a:',
        items: [
          'Acessar suas informações pessoais',
          'Solicitar a correção dos seus dados',
          'Solicitar a exclusão dos seus dados',
          'Cancelar a sua assinatura a qualquer momento',
        ],
      },
      {
        title: '6. Contacto',
        content: 'Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, visite a nossa página de suporte.',
        link: { text: 'Ir para suporte', href: '/supermamasclub/support' },
      },
    ],
    backLink: '← Voltar ao Super Mamas Mail Club',
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Last updated: December 2024',
    intro: 'At Super Mamas Mail Club, we deeply value your privacy. This policy explains how we collect, use, and protect your personal information.',
    sections: [
      {
        title: '1. Information we collect',
        content: 'We only collect information necessary to provide our service:',
        items: [
          'Full name',
          'Postal address (for sending your monthly mail)',
          'Email address',
          'Payment information (securely processed by Stripe)',
        ],
      },
      {
        title: '2. How we use your information',
        content: 'Your information is used exclusively for:',
        items: [
          'Sending your monthly Super Mamas Mail Club mail',
          'Communications related to your subscription (confirmations, shipping notices)',
          'Digital marketing by email (only with your consent)',
        ],
      },
      {
        title: '3. Sharing information with third parties',
        content: 'We do NOT share your personal information with ANYONE. Ever. Your information is private and stays private.',
        highlight: true,
        items: [
          'We do not sell your data',
          'We do not share your information with third parties for marketing',
          'We do not give your data to any company or individual',
        ],
      },
      {
        title: '4. Data security',
        content: 'We take appropriate measures to protect your personal information:',
        items: [
          'Payments are securely processed by Stripe',
          'Your information is stored securely',
          'We only access your data when necessary for the service',
        ],
      },
      {
        title: '5. Your rights',
        content: 'You have the right to:',
        items: [
          'Access your personal information',
          'Request correction of your data',
          'Request deletion of your data',
          'Cancel your subscription at any time',
        ],
      },
      {
        title: '6. Contact',
        content: 'If you have questions about this privacy policy or want to exercise your rights, visit our support page.',
        link: { text: 'Go to support', href: '/supermamasclub/support' },
      },
    ],
    backLink: '← Back to Super Mamas Mail Club',
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
    path: 'supermamasclub/privacy',
    lang,
  })
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = content[lang as keyof typeof content] || content.es

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A4A4A] font-sans selection:bg-[#E8976C]/30">
      {/* Header */}
      <header className="bg-[#E8976C] py-12 md:py-16">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <SuperMamasLogo size="sm" className="mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {t.title}
          </h1>
          <p className="text-white/70 text-sm">{t.lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-12">
            {t.intro}
          </p>

          <div className="space-y-12">
            {t.sections.map((section, idx) => (
              <section key={idx} className={`${section.highlight ? 'bg-[#EAB308]/10 p-6 md:p-8 rounded-2xl border-l-4 border-[#EAB308]' : ''}`}>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-4">
                  {section.title}
                </h2>
                <p className={`text-lg leading-relaxed mb-4 ${section.highlight ? 'text-stone-800 font-medium' : 'text-stone-600'}`}>
                  {section.content}
                </p>
                {section.link && (
                  <Link 
                    href={`/${lang}${section.link.href}`}
                    className="inline-flex items-center gap-2 text-[#E8976C] hover:text-[#D4A84B] transition-colors font-medium mb-4"
                  >
                    {section.link.text} →
                  </Link>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-stone-600">
                        <span className="mt-2 w-2 h-2 bg-[#E8976C] rounded-full shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <Link 
              href={`/${lang}/supermamasclub`}
              className="inline-flex items-center text-[#E8976C] hover:text-[#D4A84B] transition-colors font-medium"
            >
              {t.backLink}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
