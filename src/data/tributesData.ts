import { Tribute, FaqItem } from '../types';

export const INITIAL_TRIBUTES: Tribute[] = [
  {
    id: 't-1',
    babyName: 'Liam Andrés',
    dateOrMonth: 'Octubre 2024',
    message: 'Nuestra mariposa más hermosa. En cada brisa suave sentimos tus alas abrazándonos. Mamá y papá te amarán por siempre.',
    parentsName: 'Valeria & Carlos',
    symbol: 'mariposa',
    candlesCount: 24,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: 't-2',
    babyName: 'Sofía Valentina',
    dateOrMonth: 'Mayo 2024',
    message: 'Nuestra estrella en el cielo. Aunque estuviste poco tiempo en mis brazos, vivirás eternamente en cada latido de mi corazón.',
    parentsName: 'Mamá Mariana',
    symbol: 'estrella',
    candlesCount: 38,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 12,
  },
  {
    id: 't-3',
    babyName: 'Mateo',
    dateOrMonth: 'Diciembre 2023',
    message: 'Hijo mío, me enseñaste la fuerza del amor incondicional. Nombrarte es mi forma de abrazarte todos los días.',
    parentsName: 'Papá David',
    symbol: 'corazon',
    candlesCount: 19,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 25,
  },
  {
    id: 't-4',
    babyName: 'Emma Lucía',
    dateOrMonth: 'Agosto 2024',
    message: 'Floreciste en mi vientre con tanta dulzura. Te recordamos siempre llena de luz y amor infinito.',
    parentsName: 'Familia Quispe Morales',
    symbol: 'flor',
    candlesCount: 31,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 40,
  },
  {
    id: 't-5',
    babyName: 'Joaquín',
    dateOrMonth: 'Enero 2025',
    message: 'Tu paso por este mundo dejó una huella imborrable. Gracias por hacernos padres, mi angelito.',
    parentsName: 'Lucía y Fernando',
    symbol: 'vela',
    candlesCount: 15,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 60,
  },
  {
    id: 't-6',
    babyName: 'Camila Esperanza',
    dateOrMonth: 'Noviembre 2024',
    message: 'Hasta volvernos a encontrar, mi pequeño amor. Siempre serás nuestra primogénita amada.',
    parentsName: 'Mamá Andrea',
    symbol: 'mariposa',
    candlesCount: 42,
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 80,
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: '¿Quién puede unirse al círculo?',
    answer: 'Madres, padres y familiares que hayan perdido a un bebé durante el embarazo, el parto, los primeros días de vida o la infancia temprana, sin importar cuánto tiempo haya pasado.',
    category: 'Comunidad',
  },
  {
    question: '¿Tiene algún costo?',
    answer: 'Unirse al grupo de apoyo es gratuito. Somos una comunidad sin fines de lucro guiada por familias pares.',
    category: 'Comunidad',
  },
  {
    question: '¿Tengo que hablar si me uno?',
    answer: 'No. Puedes leer y acompañar en silencio hasta que te sientas lista o listo. Cada proceso y cada ritmo es sagrado y respetado.',
    category: 'Acompañamiento',
  },
  {
    question: '¿Cómo puedo acompañar a alguien que perdió a su bebé?',
    answer: 'Nombra a su bebé, pregúntale cómo está y escucha sin intentar arreglar su dolor. Evita frases como “ya tendrás otro” o “por algo pasan las cosas”. Tu presencia respetuosa vale más que cualquier consejo.',
    category: 'Familias y Amigos',
  },
  {
    question: '¿Ustedes reemplazan la atención psicológica?',
    answer: 'No. Somos acompañamiento mutuo entre pares que hemos vivido la misma experiencia. Si lo necesitas o te sientes abrumada, te orientamos para buscar apoyo profesional en salud mental perinatal.',
    category: 'Salud',
  },
];
