<script setup lang="ts">
interface PainPoint {
  title: string
  description: string
  icon: 'clock' | 'user-x' | 'chat' | 'phone'
}

const painPoints: PainPoint[] = [
  {
    icon: 'clock',
    title: 'Tu WhatsApp se volvió el centro del negocio',
    description:
      'Cada reserva, cambio y confirmación pasa por ti. El estudio avanza a la velocidad de tus respuestas.',
  },
  {
    icon: 'user-x',
    title: 'Pierdes alumnos sin darte cuenta',
    description:
      'Sin seguimiento claro, no ves quién dejó de venir hasta que ya se fue.',
  },
  {
    icon: 'chat',
    title: 'Las clases se vacían por falta de timing',
    description:
      'Sin confirmaciones y recordatorios a tiempo, aparecen huecos que ya no recuperas.',
  },
  {
    icon: 'phone',
    title: 'Si tú no contestas, la operación se frena',
    description:
      'No falta otra agenda. Falta un sistema trabajando por ti mientras atiendes el negocio.',
  },
]
</script>

<template>
  <section class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          El problema no es WhatsApp. Es que el estudio depende de ti.
        </h2>
        <p class="text-lg text-slate-600">
          Cuando reservas, cambios y seguimiento pasan por tu celular,
          no falta un chatbot ni una agenda: falta un sistema.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(point, index) in painPoints"
          :key="index"
          class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4">
            <!-- Clock -->
            <svg
              v-if="point.icon === 'clock'"
              class="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <!-- User X -->
            <svg
              v-else-if="point.icon === 'user-x'"
              class="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2"
              />
            </svg>
            <!-- Chat -->
            <svg
              v-else-if="point.icon === 'chat'"
              class="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <!-- Phone -->
            <svg
              v-else
              class="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
              />
            </svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-2">{{ point.title }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">{{ point.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
