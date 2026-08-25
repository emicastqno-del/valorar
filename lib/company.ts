/**
 * Datos oficiales y editables de la empresa.
 * Complete los campos de contacto con la información real cuando esté disponible.
 * No rellene con datos inventados.
 */

export const company = {
  name: 'Valorar Eficaz S.A.S.',
  shortName: 'Valorar Eficaz',
  nit: '901091528-4',
  legalType: 'Sociedad por Acciones Simplificada (S.A.S.)',
  chamber: 'Cámara de Comercio de Medellín para Antioquia',
  registrationDate: '23 de junio de 2017',
  economicActivity:
    '6820 – Actividades inmobiliarias realizadas a cambio de una retribución o por contrata',
  city: 'Medellín, Antioquia',
  website: 'https://valorareficaz.com/',

  // Datos de contacto: complete con la información oficial cuando esté disponible.
  phone: '+57 317 512 2455',
  email: 'info@valorareficazsas.com',
  address: 'Medellín, Antioquia',
}

// Configuración de canales de contacto directo.
// No inventar números. Deje "PENDIENTE_DE_CONFIGURAR" hasta contar con el dato oficial.
export const WHATSAPP_NUMBER: string = '573175122455' // formato internacional sin signos, ej: "573000000000"
export const PHONE_NUMBER: string = '+573175122455' // ej: "+573000000000"

export const WHATSAPP_MESSAGE =
  'Hola, me gustaría solicitar información sobre un avalúo con Valorar Eficaz.'

export const WHATSAPP_MESSAGE_NATALIA =
  'Hola Natalia, me gustaría recibir acompañamiento para una decisión inmobiliaria. ¿Podríamos conversar?'

export function whatsappHref(message: string = WHATSAPP_MESSAGE) {
  if (WHATSAPP_NUMBER === 'PENDIENTE_DE_CONFIGURAR') return '#contacto'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function phoneHref() {
  if (PHONE_NUMBER === 'PENDIENTE_DE_CONFIGURAR') return '#contacto'
  return `tel:${PHONE_NUMBER}`
}

export const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Avalúos', href: '#avaluos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    title: 'Avalúos',
    image: '/images/service-avaluos.png',
    description:
      'Valoración de inmuebles orientada a entregar información clara y detallada que sirva como referencia para diferentes decisiones patrimoniales, financieras o legales.',
  },
  {
    title: 'Venta de propiedad raíz',
    image: '/images/service-venta.png',
    description:
      'Acompañamiento en procesos relacionados con la comercialización de casas, apartamentos, terrenos y locales, con análisis de aspectos físicos, legales y de mercado.',
  },
  {
    title: 'Seguros de vida y vehículos',
    image: '/images/service-seguros.png',
    description:
      'Información orientada a la valoración de bienes para respaldar decisiones de aseguramiento, considerando estado, condiciones y referencias de mercado.',
  },
]

// Tipos de avalúos que realiza Valorar Eficaz a nivel nacional.
export const appraisalTypes = [
  'Avalúos de inmuebles urbanos',
  'Avalúos de inmuebles rurales',
  'Avalúos de maquinaria fija, equipos y maquinaria móvil',
  'Avalúos de maquinaria y equipos especiales (naves, aeronaves, trenes, locomotoras)',
  'Avalúos de activos operacionales y establecimientos de comercio',
  'Avalúos de intangibles (marcas, patentes, derechos de autor, fondo de comercio, títulos mineros)',
  'Avalúos especiales (hoteles, colegios, hospitales, clínicas, avance de obra)',
  'Avalúos de intangibles especiales (daño emergente, lucro cesante, daño moral, servidumbres, litigios)',
]

// Certificaciones y afiliaciones oficiales.
export const certifications = [
  {
    title: 'Registro Abierto de Avaluadores (R.A.A.)',
    text: 'Nuestros avaluadores cuentan con el Registro Abierto de Avaluadores, que certifica su calidad y profesionalismo.',
  },
  {
    title: 'Lonja de Propiedad Raíz de Medellín y Antioquia',
    text: 'Somos afiliados a la Lonja de Propiedad Raíz de Medellín y Antioquia.',
  },
]

// Empresas con las que se tiene experiencia en la realización de avalúos.
export const clientExperience = [
  'Coltefinanciera S.A.',
  'Distrileche S.A.',
  'Montoya López Asociados',
  'Antioquia GOLD',
  'Pronto Good and Services',
]

// Documentos necesarios para realizar los avalúos.
export const requiredDocuments = [
  'Certificado de libertad vigente de cada inmueble en proceso de avalúo (no mayor a 30 días)',
  'Copia de escritura pública de los inmuebles objeto de avalúo',
  'Norma de uso de suelos de los lotes (cuando se trate de avaluar lotes en zona urbana o rural)',
  'Visita al predio o predios objeto de avalúo',
]

export const useCases = [
  {
    title: 'Compra',
    description:
      'Obtenga información sobre el inmueble antes de tomar una decisión de compra.',
  },
  {
    title: 'Venta',
    description:
      'Cuente con información que le ayude a analizar el valor de su propiedad.',
  },
  {
    title: 'Patrimonio',
    description: 'Conozca mejor el valor de uno de sus principales activos.',
  },
  {
    title: 'Decisiones inmobiliarias',
    description:
      'Obtenga información para respaldar diferentes procesos relacionados con su inmueble.',
  },
]

export const properties = [
  {
    location: 'Santa Fe de Antioquia',
    region: 'Antioquia',
    type: 'Casa-finca',
    image: '/images/prop-santafe.png',
    features: ['Casa-finca', 'Zona campestre', 'Amplias áreas'],
  },
  {
    location: 'La Estrella',
    region: 'Antioquia',
    type: 'Casa de lujo',
    image: '/images/prop-laestrella.png',
    features: ['Casa de lujo', 'Vista al valle', 'Arquitectura moderna'],
  },
  {
    location: 'Caldas',
    region: 'Antioquia',
    type: 'Casa-finca',
    image: '/images/prop-caldas.png',
    features: ['Casa-finca', 'Entorno natural', 'Terraza y jardín'],
  },
  {
    location: 'La Ceja',
    region: 'Antioquia',
    type: 'Casa-finca',
    image: '/images/prop-laceja.png',
    features: ['Casa-finca', 'Zona de altiplano', 'Amplios exteriores'],
  },
  {
    location: 'Coveñas',
    region: 'Sucre',
    type: 'Lote frente al mar',
    image: '/images/prop-covenas.png',
    features: ['Lote', 'Frente al mar', 'Zona costera'],
  },
]

export const whyUs = [
  {
    title: 'Enfoque inmobiliario',
    description:
      'Una empresa vinculada directamente al sector de los inmuebles.',
  },
  {
    title: 'Atención',
    description:
      'Un proceso pensado para entender las necesidades de cada cliente.',
  },
  {
    title: 'Información',
    description: 'Presentamos la información de manera clara y organizada.',
  },
  {
    title: 'Confianza',
    description:
      'Buscamos construir relaciones profesionales basadas en transparencia.',
  },
]

export const processSteps = [
  { step: '01', text: 'Cuéntenos qué necesita.' },
  { step: '02', text: 'Analizamos su solicitud.' },
  { step: '03', text: 'Le orientamos sobre el proceso.' },
  { step: '04', text: 'Avanzamos con la solución correspondiente.' },
]

export const faqs = [
  {
    q: '¿Qué es un avalúo inmobiliario?',
    a: 'Es un proceso mediante el cual se analiza un inmueble para establecer una estimación de su valor de acuerdo con criterios de valoración.',
  },
  {
    q: '¿Por qué debería realizar un avalúo?',
    a: 'Conocer el valor de un inmueble puede ayudarle a contar con mayor información antes de tomar diferentes decisiones relacionadas con su propiedad.',
  },
  {
    q: '¿Qué tipo de inmuebles pueden valorar?',
    a: 'Realizamos avalúos de inmuebles urbanos y rurales, maquinaria fija y móvil, activos operacionales, establecimientos de comercio, intangibles (marcas, patentes, fondo de comercio) y avalúos especiales como hoteles, colegios, hospitales y clínicas.',
  },
  {
    q: '¿Qué documentos necesito para solicitar un avalúo?',
    a: 'En general se requiere el certificado de libertad vigente del inmueble (no mayor a 30 días), copia de la escritura pública, la norma de uso de suelos del lote (cuando aplique) y realizar la visita al predio.',
  },
  {
    q: '¿Cómo puedo solicitar un avalúo?',
    a: 'Puede comunicarse con Valorar Eficaz mediante los canales de contacto disponibles o completar el formulario de solicitud.',
  },
  {
    q: '¿Dónde presta servicios Valorar Eficaz?',
    a: 'Estamos en la capacidad de realizar encargos valuatorios a nivel nacional. Consulte con el equipo la cobertura disponible para su solicitud específica.',
  },
]
