<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
  icon: 'user-plus' | 'settings' | 'phone' | 'zap'
}

const steps: Step[] = [
  {
    number: '01',
    icon: 'user-plus',
    title: 'Crea tu cuenta',
    description:
      'Regístrate con tu correo en menos de un minuto. Sin tarjeta de crédito, sin compromisos previos.',
  },
  {
    number: '02',
    icon: 'settings',
    title: 'Carga tus clases y clientes',
    description:
      'Agrega tus horarios, crea tus clases y registra a tus alumnos. La plataforma te guía paso a paso desde el primer día.',
  },
  {
    number: '03',
    icon: 'phone',
    title: 'Conecta tu WhatsApp en minutos',
    description:
      'Vincula tu número al estudio con el método que más te acomode. Hay opciones para todos los niveles y te acompañamos si lo necesitas.',
  },
  {
    number: '04',
    icon: 'zap',
    title: 'Gestiona desde el primer día',
    description:
      'Controla asistencia, da seguimiento a cobros y organiza tu agenda desde una sola plataforma. Sin hojas, sin mensajes, sin caos.',
  },
]
</script>

<template>
  <section id="how-it-works" class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Empieza a operar con orden en minutos
        </h2>
        <p class="text-lg text-slate-600">
          FlowEstudio está diseñado para que cualquier estudio pueda
          configurarse rápido, sin conocimientos técnicos ni setup complicado.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative"
        >
          <!-- Connector line (hidden on mobile, last item) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden lg:block absolute top-6 left-full w-full h-px bg-slate-200 z-0"
            style="width: calc(100% - 48px); left: calc(50% + 24px);"
          ></div>

          <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative z-10 h-full flex flex-col">
            <!-- Step number -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <!-- User plus -->
                <svg
                  v-if="step.icon === 'user-plus'"
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <!-- Settings -->
                <svg
                  v-else-if="step.icon === 'settings'"
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <!-- Phone -->
                <svg
                  v-else-if="step.icon === 'phone'"
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <!-- Zap -->
                <svg
                  v-else
                  class="w-5 h-5 text-white"
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
              </div>
              <span class="text-3xl font-extrabold text-slate-100 select-none">{{ step.number }}</span>
            </div>
            <h3 class="font-semibold text-slate-900 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed flex-1">{{ step.description }}</p>
            <!-- Badge exclusivo del paso de conexión WhatsApp -->
            <div
              v-if="index === 2"
              class="mt-3 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-100 self-start"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
              Configuración automática disponible
            </div>
          </div>
        </div>
      </div>

      <!-- Microcopy de flexibilidad -->
      <div class="mt-10 text-center">
        <p class="text-sm text-slate-500">
          Nos adaptamos a tu nivel técnico ·
          <span class="text-slate-600 font-medium">Puedes configurarlo tú o nosotros te ayudamos</span>
        </p>
      </div>

    </div>
  </section>
</template>
