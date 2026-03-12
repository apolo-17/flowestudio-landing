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
    title: 'Centraliza todas tus conversaciones',
    description:
      'Todas las conversaciones de WhatsApp en un solo lugar. Sin perder mensajes, sin desorden, sin cambiar de app.',
  },
  {
    bgClass: 'bg-emerald-50',
    iconColorClass: 'text-emerald-600',
    icon: 'bot',
    title: 'Automatiza respuestas comunes',
    description:
      'Configura respuestas para las preguntas más frecuentes y atiende 24/7 sin estar siempre disponible.',
  },
  {
    bgClass: 'bg-violet-50',
    iconColorClass: 'text-violet-600',
    icon: 'flow',
    title: 'Prepara flujos de atención',
    description:
      'Define cómo quieres que tu estudio responda, paso a paso. Sin conocimientos técnicos ni programación.',
  },
  {
    bgClass: 'bg-blue-50',
    iconColorClass: 'text-blue-600',
    icon: 'target',
    title: 'Da seguimiento a interesados',
    description:
      'Registra y sigue cada conversación relevante. No dejes ir a ningún prospecto por falta de seguimiento.',
  },
  {
    bgClass: 'bg-amber-50',
    iconColorClass: 'text-amber-600',
    icon: 'lightning',
    title: 'Ahorra tiempo real',
    description:
      'Menos tiempo respondiendo mensajes significa más energía para tus alumnos y para hacer crecer tu estudio.',
  },
  {
    bgClass: 'bg-rose-50',
    iconColorClass: 'text-rose-600',
    icon: 'gift',
    title: 'Acceso gratuito por 6 meses',
    description:
      'Únete ahora como parte de la etapa de acceso anticipado y prueba FlowEstudio completo sin costo.',
  },
]
</script>

<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Una plataforma pensada para estudios como el tuyo
        </h2>
        <p class="text-lg text-slate-600">
          FlowEstudio reúne todo lo que necesitas para atender mejor a tus
          alumnos e interesados sin trabajar más horas.
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
