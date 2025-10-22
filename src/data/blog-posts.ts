import { BlogPost } from '@/types/blog';
import heroImage from '@/images/home-sections-coleciones.webp';
import contentImage from '@/images/paola-sobre-mi.webp';

export const sampleBlogPost: BlogPost = {
  id: 'el-arte-de-las-invitaciones',
  title: 'El Arte de las Invitaciones Personalizadas',
  subtitle: 'Creando momentos inolvidables desde el primer detalle',
  heroImage: heroImage,
  author: 'Paola',
  date: '22 de octubre, 2025',
  content: [
    {
      type: 'paragraph',
      text: 'Las invitaciones son mucho más que un simple anuncio de un evento. Son el primer contacto que tus invitados tendrán con la celebración, y establecen el tono y la atmósfera de lo que está por venir.',
    },
    {
      type: 'heading',
      level: 2,
      text: '¿Por qué elegir invitaciones personalizadas?',
    },
    {
      type: 'paragraph',
      text: 'En un mundo donde la comunicación digital domina, una invitación física y personalizada se convierte en un objeto especial que tus invitados querrán conservar. Aquí te comparto las razones principales:',
    },
    {
      type: 'bulletList',
      items: [
        'Reflejan la personalidad única de tu evento',
        'Crean anticipación y emoción en tus invitados',
        'Se convierten en un recuerdo tangible de momentos especiales',
        'Demuestran atención al detalle y cuidado personal',
        'Establecen el tema y estilo de tu celebración',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'El proceso de creación',
    },
    {
      type: 'paragraph',
      text: 'Crear una invitación perfecta implica varios pasos importantes que aseguran que el resultado final sea exactamente lo que imaginas:',
    },
    {
      type: 'numberedList',
      items: [
        'Consulta inicial: Hablamos sobre tu visión y el estilo del evento',
        'Desarrollo de conceptos: Creo varios diseños preliminares basados en tus preferencias',
        'Revisión y refinamiento: Ajustamos cada detalle hasta lograr la perfección',
        'Selección de materiales: Elegimos papeles, texturas y acabados especiales',
        'Producción: Llevo tu diseño a la realidad con técnicas artesanales',
        'Entrega: Recibes tus invitaciones listas para sorprender a tus invitados',
      ],
    },
    {
      type: 'image',
      src: contentImage,
      alt: 'Proceso creativo de diseño de invitaciones',
      caption: 'Cada invitación es creada con dedicación y atención al detalle',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Elementos que hacen la diferencia',
    },
    {
      type: 'paragraph',
      text: 'Al diseñar invitaciones personalizadas, presto especial atención a varios elementos clave que elevan el resultado final:',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Tipografía',
    },
    {
      type: 'paragraph',
      text: 'La elección de la tipografía establece el tono: elegante, moderno, lúdico o clásico. Cada fuente cuenta una historia diferente.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Paleta de colores',
    },
    {
      type: 'paragraph',
      text: 'Los colores evocan emociones y crean conexiones. Selecciono cuidadosamente cada tono para complementar tu evento.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Acabados especiales',
    },
    {
      type: 'paragraph',
      text: 'Detalles como relieve, foil dorado, cintas o sellos de cera añaden una dimensión táctil que hace que cada invitación sea una experiencia sensorial.',
    },
    {
      type: 'quote',
      text: 'Los detalles no son detalles. Ellos hacen el diseño.',
      author: 'Charles Eames',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Consejos para tu proyecto',
    },
    {
      type: 'paragraph',
      text: 'Si estás considerando invitaciones personalizadas para tu próximo evento, aquí algunos consejos que te ayudarán:',
    },
    {
      type: 'bulletList',
      items: [
        'Comienza con anticipación: El proceso creativo lleva tiempo, especialmente para eventos grandes',
        'Ten claro tu presupuesto: Esto ayuda a seleccionar materiales y técnicas apropiadas',
        'Reúne inspiración: Pinterest, revistas o fotos de cosas que te gustan',
        'Piensa en el sobre: El exterior es tan importante como el interior',
        'Considera la coherencia: Las invitaciones deben complementar otros elementos del evento',
      ],
    },
    {
      type: 'paragraph',
      text: 'Cada invitación que creo es única, al igual que cada evento y cada persona. Mi objetivo es traducir tu visión en un diseño tangible que emocione a tus invitados desde el momento en que abren el sobre.',
    },
    {
      type: 'paragraph',
      text: '¿Listo para empezar tu proyecto? Me encantaría escuchar tus ideas y ayudarte a crear invitaciones que reflejen la magia de tu celebración.',
    },
  ],
};

export const allBlogPosts: BlogPost[] = [sampleBlogPost];
