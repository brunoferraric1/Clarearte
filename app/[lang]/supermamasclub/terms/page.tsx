import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { SuperMamasLogo } from '@/components/supermamasclub/super-mamas-logo'

const pageMetadata = {
  es: {
    title: 'Términos y Condiciones - Super Mamas Mail Club',
    description: 'Términos y condiciones del servicio Super Mamas Mail Club.',
  },
  pt: {
    title: 'Termos e Condições - Super Mamas Mail Club',
    description: 'Termos e condições do serviço Super Mamas Mail Club.',
  },
  en: {
    title: 'Terms and Conditions - Super Mamas Mail Club',
    description: 'Terms and conditions for Super Mamas Mail Club service.',
  },
}

const content = {
  es: {
    title: 'Términos y Condiciones',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Última actualización: Diciembre 2024',
    intro: 'Al suscribirte al Super Mamas Mail Club, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente.',
    sections: [
      {
        title: '1. Descripción del servicio',
        content: 'Super Mamas Mail Club es un servicio de suscripción mensual que incluye:',
        items: [
          'Una postal A6 ilustrada original',
          'Una carta personal escrita por Paola',
          'Una mini postal A7 con arte creado por mi hija',
          'Envío mensual a la dirección proporcionada',
        ],
      },
      {
        title: '2. Suscripción y pagos',
        content: 'Al suscribirte, aceptas:',
        items: [
          'El cobro mensual recurrente según el plan elegido (España: €8/mes, Internacional: €10/mes)',
          'Los pagos se procesan de forma segura a través de Stripe',
          'El primer pago se realiza al momento de la suscripción',
          'Los pagos posteriores se cobran mensualmente en la misma fecha',
        ],
      },
      {
        title: '3. Envíos',
        content: 'Sobre los envíos de tu correo mensual:',
        items: [
          'Los envíos se preparan y envían a principios de cada mes',
          'El tiempo de entrega depende del servicio postal de tu país',
          'No nos hacemos responsables de retrasos causados por servicios postales o aduanas',
          'Es tu responsabilidad proporcionar una dirección de envío válida y actualizada',
        ],
      },
      {
        title: '4. Cancelación',
        content: 'Puedes cancelar tu suscripción en cualquier momento:',
        items: [
          'La cancelación es efectiva al final del período de facturación actual',
          'No hay penalizaciones por cancelar',
          'No se realizan reembolsos por meses parciales',
          'Puedes gestionar tu suscripción a través del portal de Stripe',
        ],
      },
      {
        title: '5. Propiedad intelectual',
        content: 'Respecto al contenido que recibes:',
        items: [
          'Todas las ilustraciones y textos son propiedad de Paola Ferrari / Clarearte',
          'El contenido es para uso personal únicamente',
          'No está permitida la reproducción comercial sin autorización',
          'Puedes compartir fotos de tu correo en redes sociales (¡nos encanta!)',
        ],
      },
      {
        title: '6. Limitación de responsabilidad',
        content: 'Super Mamas Mail Club:',
        items: [
          'Se proporciona "tal cual" sin garantías expresas o implícitas',
          'No nos hacemos responsables de pérdidas o daños durante el envío postal',
          'Nos reservamos el derecho de modificar el contenido o formato del servicio',
          'Cualquier cambio significativo será comunicado con antelación',
        ],
      },
      {
        title: '7. Modificaciones',
        content: 'Nos reservamos el derecho de modificar estos términos. Los cambios significativos serán notificados por email. El uso continuado del servicio después de los cambios implica la aceptación de los nuevos términos.',
      },
      {
        title: '8. Contacto',
        content: 'Para cualquier pregunta sobre estos términos, contáctanos en: hello@clarearte.com',
      },
    ],
    backLink: '← Volver al Super Mamas Mail Club',
    privacyLink: 'Ver Política de Privacidad',
  },
  pt: {
    title: 'Termos e Condições',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Última atualização: Dezembro 2024',
    intro: 'Ao subscreveres o Super Mamas Mail Club, aceitas os seguintes termos e condições. Por favor, lê-os com atenção.',
    sections: [
      {
        title: '1. Descrição do serviço',
        content: 'O Super Mamas Mail Club é um serviço de subscrição mensal que inclui:',
        items: [
          'Um postal A6 ilustrado original',
          'Uma carta pessoal escrita pela Paola',
          'Um mini postal A7 com arte criada pela minha filha',
          'Envio mensal para a morada fornecida',
        ],
      },
      {
        title: '2. Subscrição e pagamentos',
        content: 'Ao subscreveres, aceitas:',
        items: [
          'A cobrança mensal recorrente segundo o plano escolhido (Espanha: €8/mês, Internacional: €10/mês)',
          'Os pagamentos são processados de forma segura através do Stripe',
          'O primeiro pagamento é feito no momento da subscrição',
          'Os pagamentos seguintes são cobrados mensalmente na mesma data',
        ],
      },
      {
        title: '3. Envios',
        content: 'Sobre os envios do teu correio mensal:',
        items: [
          'Os envios são preparados e enviados no início de cada mês',
          'O tempo de entrega depende do serviço postal do teu país',
          'Não somos responsáveis por atrasos causados por serviços postais ou alfândegas',
          'É tua responsabilidade fornecer uma morada de envio válida e atualizada',
        ],
      },
      {
        title: '4. Cancelamento',
        content: 'Podes cancelar a tua subscrição a qualquer momento:',
        items: [
          'O cancelamento é efetivo no final do período de faturação atual',
          'Não há penalizações por cancelar',
          'Não são feitos reembolsos por meses parciais',
          'Podes gerir a tua subscrição através do portal do Stripe',
        ],
      },
      {
        title: '5. Propriedade intelectual',
        content: 'Relativamente ao conteúdo que recebes:',
        items: [
          'Todas as ilustrações e textos são propriedade de Paola Ferrari / Clarearte',
          'O conteúdo é para uso pessoal apenas',
          'Não é permitida a reprodução comercial sem autorização',
          'Podes partilhar fotos do teu correio nas redes sociais (adoramos!)',
        ],
      },
      {
        title: '6. Limitação de responsabilidade',
        content: 'O Super Mamas Mail Club:',
        items: [
          'É fornecido "tal como está" sem garantias expressas ou implícitas',
          'Não somos responsáveis por perdas ou danos durante o envio postal',
          'Reservamo-nos o direito de modificar o conteúdo ou formato do serviço',
          'Qualquer alteração significativa será comunicada com antecedência',
        ],
      },
      {
        title: '7. Modificações',
        content: 'Reservamo-nos o direito de modificar estes termos. As alterações significativas serão notificadas por email. O uso continuado do serviço após as alterações implica a aceitação dos novos termos.',
      },
      {
        title: '8. Contacto',
        content: 'Para qualquer pergunta sobre estes termos, contacta-nos em: hello@clarearte.com',
      },
    ],
    backLink: '← Voltar ao Super Mamas Mail Club',
    privacyLink: 'Ver Política de Privacidade',
  },
  en: {
    title: 'Terms and Conditions',
    subtitle: 'Super Mamas Mail Club',
    lastUpdated: 'Last updated: December 2024',
    intro: 'By subscribing to Super Mamas Mail Club, you agree to the following terms and conditions. Please read them carefully.',
    sections: [
      {
        title: '1. Service description',
        content: 'Super Mamas Mail Club is a monthly subscription service that includes:',
        items: [
          'An original illustrated A6 postcard',
          'A personal letter written by Paola',
          'A mini A7 postcard with art created by my daughter',
          'Monthly delivery to the provided address',
        ],
      },
      {
        title: '2. Subscription and payments',
        content: 'By subscribing, you agree to:',
        items: [
          'Recurring monthly billing according to your chosen plan (Spain: €8/month, International: €10/month)',
          'Payments are securely processed through Stripe',
          'The first payment is made at the time of subscription',
          'Subsequent payments are charged monthly on the same date',
        ],
      },
      {
        title: '3. Shipping',
        content: 'About your monthly mail deliveries:',
        items: [
          'Shipments are prepared and sent at the beginning of each month',
          'Delivery time depends on your country\'s postal service',
          'We are not responsible for delays caused by postal services or customs',
          'It is your responsibility to provide a valid and up-to-date shipping address',
        ],
      },
      {
        title: '4. Cancellation',
        content: 'You can cancel your subscription at any time:',
        items: [
          'Cancellation is effective at the end of the current billing period',
          'There are no penalties for canceling',
          'No refunds are provided for partial months',
          'You can manage your subscription through the Stripe portal',
        ],
      },
      {
        title: '5. Intellectual property',
        content: 'Regarding the content you receive:',
        items: [
          'All illustrations and texts are property of Paola Ferrari / Clarearte',
          'Content is for personal use only',
          'Commercial reproduction is not permitted without authorization',
          'You may share photos of your mail on social media (we love it!)',
        ],
      },
      {
        title: '6. Limitation of liability',
        content: 'Super Mamas Mail Club:',
        items: [
          'Is provided "as is" without express or implied warranties',
          'We are not responsible for loss or damage during postal delivery',
          'We reserve the right to modify the content or format of the service',
          'Any significant changes will be communicated in advance',
        ],
      },
      {
        title: '7. Modifications',
        content: 'We reserve the right to modify these terms. Significant changes will be notified by email. Continued use of the service after changes implies acceptance of the new terms.',
      },
      {
        title: '8. Contact',
        content: 'For any questions about these terms, contact us at: hello@clarearte.com',
      },
    ],
    backLink: '← Back to Super Mamas Mail Club',
    privacyLink: 'View Privacy Policy',
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
    path: 'supermamasclub/terms',
    lang,
  })
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = content[lang as keyof typeof content] || content.es

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A4A4A] font-sans selection:bg-[#E8976C]/30">
      {/* Header */}
      <header className="bg-[#D4A84B] py-12 md:py-16">
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
              <section key={idx}>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-stone-600">
                        <span className="mt-2 w-2 h-2 bg-[#D4A84B] rounded-full shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Footer Links */}
          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link 
              href={`/${lang}/supermamasclub`}
              className="inline-flex items-center text-[#D4A84B] hover:text-[#E8976C] transition-colors font-medium"
            >
              {t.backLink}
            </Link>
            <Link 
              href={`/${lang}/supermamasclub/privacy`}
              className="inline-flex items-center text-stone-500 hover:text-[#E8976C] transition-colors text-sm"
            >
              {t.privacyLink} →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

