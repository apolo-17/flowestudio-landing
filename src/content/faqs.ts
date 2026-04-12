export interface FaqItem {
  question: string
  answer: string
}

export const homeFaqs: FaqItem[] = [
  {
    question: '¿Para qué tipo de negocio es FlowEstudio?',
    answer:
      'FlowEstudio está diseñado para estudios de pilates, coaches de fitness y entrenadores que gestionan grupos de alumnos. Si hoy operas con WhatsApp, Excel o una agenda manual, FlowEstudio te da el control y el orden que necesitas para operar como un negocio real.',
  },
  {
    question: '¿Puedo probarlo gratis?',
    answer:
      'Sí. Actualmente ofrecemos una prueba gratis de 14 días con acceso completo para que valides el impacto real en reservas, confirmaciones y seguimiento.',
  },
  {
    question: '¿Necesito conocimientos técnicos para configurarlo?',
    answer:
      'No. FlowEstudio te guía con un proceso paso a paso desde el primer día. Puedes cargar tus clases, registrar alumnos y empezar a operar el mismo día, sin experiencia previa en software de gestión.',
  },
  {
    question: '¿Qué pasa después de la prueba?',
    answer:
      'Al finalizar la prueba eliges el plan que mejor se adapta a tu operación. Si decides no continuar, puedes cancelar sin penalizaciones.',
  },
  {
    question: '¿Cómo funciona la integración con WhatsApp?',
    answer:
      'Conectas tu número de WhatsApp Business al sistema. Desde el dashboard puedes ver conversaciones centralizadas, activar respuestas automáticas y dar seguimiento a tus alumnos sin salir de FlowEstudio.',
  },
]

export const pricingFaqs: FaqItem[] = [
  {
    question: '¿Los precios incluyen IVA?',
    answer:
      'Los precios se muestran en MXN y pueden variar según la configuración fiscal aplicable. Durante el proceso de alta se muestran los importes finales antes de confirmar.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer:
      'Sí. Puedes subir o bajar de plan según el volumen de conversaciones y la operación de tu estudio.',
  },
  {
    question: '¿Qué pasa si supero las conversaciones mensuales incluidas?',
    answer:
      'Puedes adquirir conversaciones adicionales sin detener la operación. El sistema te muestra el consumo para que tomes decisiones a tiempo.',
  },
]

export const whatsappFaqs: FaqItem[] = [
  {
    question: '¿Necesito un número nuevo para automatizar WhatsApp?',
    answer:
      'No necesariamente. Puedes conectar tu número de WhatsApp Business si cumple los requisitos de la integración.',
  },
  {
    question: '¿FlowEstudio responde solo o también puedo intervenir?',
    answer:
      'FlowEstudio automatiza reservas, confirmaciones y recordatorios, pero puedes tomar la conversación manualmente cuando lo necesites.',
  },
  {
    question: '¿Se guardan las conversaciones de alumnos?',
    answer:
      'Sí. Las conversaciones quedan organizadas en el dashboard para seguimiento operativo y continuidad de atención.',
  },
]
