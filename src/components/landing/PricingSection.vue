<script setup lang="ts">
import { SIGNUP_URL } from '../../config/env'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$699',
    period: 'MXN / mes',
    description: 'Para estudios pequeños que quieren empezar a automatizar.',
    features: [
      'Hasta 300 conversaciones/mes',
      '1 número de WhatsApp',
      'Agenda y gestión de clases',
      'Registro de alumnos y asistencia',
      'Soporte por email',
    ],
    cta: 'Empezar gratis',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$1,199',
    period: 'MXN / mes',
    description: 'Para estudios en crecimiento que quieren llenar clases automáticamente.',
    features: [
      'Hasta 1,000 conversaciones/mes',
      '1 número de WhatsApp',
      'Confirmaciones y reservas automáticas',
      'Seguimiento de cobros y pagos',
      'Recordatorios automáticos',
      'Soporte prioritario',
    ],
    cta: 'Empezar gratis',
    highlighted: true,
    badge: 'Más popular',
  },
  {
    name: 'Pro',
    price: '$1,999',
    period: 'MXN / mes',
    description: 'Para estudios con alto volumen que necesitan control total.',
    features: [
      'Conversaciones ilimitadas',
      'Hasta 2 números de WhatsApp',
      'Automatizaciones avanzadas',
      'Reportes y analítica',
      'Exportación de datos',
      'Soporte dedicado',
    ],
    cta: 'Empezar gratis',
    highlighted: false,
  },
]
</script>

<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Planes diseñados para pagarse solos
        </h2>
        <p class="text-lg text-slate-600">
          Con recuperar 3–5 alumnos al mes, el sistema se paga solo.
        </p>
      </div>

      <!-- Plans grid -->
      <div class="grid sm:grid-cols-3 gap-6 items-start">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="rounded-2xl p-7 border transition-all relative"
          :class="plan.highlighted
            ? 'border-indigo-500 shadow-xl shadow-indigo-100 bg-indigo-600 text-white'
            : 'border-slate-200 hover:border-slate-300 hover:shadow-md bg-white'"
        >
          <!-- Badge -->
          <div
            v-if="plan.badge"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-indigo-500 text-white text-xs font-semibold px-3.5 py-1 rounded-full border border-indigo-400"
          >
            {{ plan.badge }}
          </div>

          <!-- Plan name -->
          <p
            class="text-sm font-semibold mb-1"
            :class="plan.highlighted ? 'text-indigo-200' : 'text-indigo-600'"
          >
            {{ plan.name }}
          </p>

          <!-- Price -->
          <div class="flex items-end gap-1.5 mb-1">
            <span
              class="text-4xl font-extrabold leading-none"
              :class="plan.highlighted ? 'text-white' : 'text-slate-900'"
            >
              {{ plan.price }}
            </span>
            <span
              class="text-sm mb-1 leading-tight"
              :class="plan.highlighted ? 'text-indigo-200' : 'text-slate-400'"
            >
              {{ plan.period }}
            </span>
          </div>

          <p
            class="text-sm leading-relaxed mb-6"
            :class="plan.highlighted ? 'text-indigo-100' : 'text-slate-500'"
          >
            {{ plan.description }}
          </p>

          <!-- CTA -->
          <a
            :href="SIGNUP_URL"
            class="block text-center font-semibold px-5 py-3 rounded-xl transition-colors text-sm mb-6"
            :class="plan.highlighted
              ? 'bg-white text-indigo-700 hover:bg-slate-50'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'"
          >
            {{ plan.cta }}
          </a>

          <!-- Divider -->
          <div
            class="border-t mb-5"
            :class="plan.highlighted ? 'border-indigo-500' : 'border-slate-100'"
          ></div>

          <!-- Features -->
          <ul class="space-y-3">
            <li
              v-for="(feature, fi) in plan.features"
              :key="fi"
              class="flex items-start gap-2.5 text-sm"
            >
              <svg
                class="w-4 h-4 flex-shrink-0 mt-0.5"
                :class="plan.highlighted ? 'text-indigo-200' : 'text-indigo-500'"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span :class="plan.highlighted ? 'text-indigo-100' : 'text-slate-600'">
                {{ feature }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer note -->
      <p class="text-center text-slate-400 text-sm mt-10">
        Todos los planes incluyen 7 días gratis · Sin tarjeta de crédito · Cancela cuando quieras
      </p>

    </div>
  </section>
</template>
