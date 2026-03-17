<script setup lang="ts">
interface Feature {
  bgClass: string
  iconColorClass: string
  icon: 'inbox' | 'bot' | 'flow' | 'target' | 'lightning' | 'gift'
  title: string
  description: string
}

const features: Feature[] = [
  {
    bgClass: 'bg-indigo-50',
    iconColorClass: 'text-indigo-600',
    icon: 'inbox',
    title: 'Agenda de clases organizada',
    description:
      'Crea, edita y organiza tus clases desde un solo lugar. Horarios claros, sin confusiones, sin doble booking y sin depender de conversaciones por WhatsApp.',
  },
  {
    bgClass: 'bg-emerald-50',
    iconColorClass: 'text-emerald-600',
    icon: 'bot',
    title: 'Control de asistencia',
    description:
      'Registra quién asistió a cada clase y lleva el historial sin papeles. Sabe en segundos qué alumno falta y detecta quién se está desconectando.',
  },
  {
    bgClass: 'bg-violet-50',
    iconColorClass: 'text-violet-600',
    icon: 'flow',
    title: 'Gestión de clientes',
    description:
      'Todos tus alumnos organizados: datos de contacto, historial de clases, estado de membresía y pagos pendientes en un solo perfil.',
  },
  {
    bgClass: 'bg-blue-50',
    iconColorClass: 'text-blue-600',
    icon: 'target',
    title: 'Comunicación centralizada',
    description:
      'Avisa cambios de horario, confirma clases y coordina con tus alumnos sin saltar entre apps. Menos WhatsApp, más control.',
  },
  {
    bgClass: 'bg-amber-50',
    iconColorClass: 'text-amber-600',
    icon: 'lightning',
    title: 'Menos errores, más tiempo',
    description:
      'Con procesos claros y datos en orden, los errores de coordinación y cobro desaparecen solos. Recuperas horas de tu semana.',
  },
  {
    bgClass: 'bg-rose-50',
    iconColorClass: 'text-rose-600',
    icon: 'gift',
    title: 'Acceso anticipado gratuito',
    description:
      'Los primeros estudios que se sumen tienen acceso completo sin costo durante 6 meses. Sin tarjeta de crédito, sin letra chica.',
  },
]
</script>

<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Una plataforma pensada para la operación real de tu estudio
        </h2>
        <p class="text-lg text-slate-600">
          FlowEstudio reúne todo lo que necesitas para gestionar tu estudio
          sin depender de WhatsApp, Excel ni de tu memoria.
        </p>
      </div>

      <!-- Feature grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all"
        >
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
            :class="feature.bgClass"
          >
            <!-- Inbox -->
            <svg
              v-if="feature.icon === 'inbox'"
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <!-- Bot -->
            <svg
              v-else-if="feature.icon === 'bot'"
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <!-- Flow -->
            <svg
              v-else-if="feature.icon === 'flow'"
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <!-- Target -->
            <svg
              v-else-if="feature.icon === 'target'"
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <!-- Lightning -->
            <svg
              v-else-if="feature.icon === 'lightning'"
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <!-- Gift -->
            <svg
              v-else
              class="w-5 h-5"
              :class="feature.iconColorClass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
