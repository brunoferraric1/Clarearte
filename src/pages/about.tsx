import { Navbar } from '@/components/navbar'
import { AboutHero } from '@/components/about-hero'
import { AboutContentSection } from '@/components/about-content-section'

export function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <AboutHero />

      {/* Mi lenguaje más auténtico */}
      <AboutContentSection
        title="Mi lenguaje más auténtico"
        content="Fue en la ilustración donde encontré mi voz más personal. La acuarela, el trazo, las formas orgánicas... me permiten dar vida a historias únicas con una sensibilidad que va más allá de lo estético. Esa versatilidad me acompaña en cada proyecto y me recuerda que crear es, en esencia, un acto de emoción."
        imagePlaceholder="Imagen de ilustraciones en acuarela"
        reverse={false}
      />

      {/* La magia de la papelería de bodas */}
      <div className="bg-muted/20">
        <AboutContentSection
          title="La magia de la papelería de bodas"
          content="Entre todos los universos creativos, la papelería de bodas ocupa un lugar especial en mi corazón. Un convite no es solo un papel: es el primer suspiro de lo que está por venir, la promesa de un día irrepetible. Ilustrar y diseñar estas piezas significa acompañar a cada pareja en uno de los capítulos más importantes de su vida."
          imagePlaceholder="Imagen de papelería de bodas"
          reverse={true}
        />
      </div>

      {/* Diseñar con alma */}
      <AboutContentSection
        title="Diseñar con alma"
        content="Me entrego con alma y corazón a cada diseño. Escucho la esencia de cada pareja, sus símbolos, sus recuerdos, sus sueños. Porque sé que cuando los invitados reciben esa invitación, sienten algo especial: entienden que cada detalle también ha sido pensado para ellos. Y ese instante de emoción compartida es, para mí, la verdadera razón de lo que hago."
        imagePlaceholder="Imagen trabajando en diseños"
        reverse={false}
      />
      </div>
    </>
  )
}
