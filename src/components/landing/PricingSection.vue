<script setup lang="ts">
import { SIGNUP_URL } from '../../config/env'

interface Plan {
  label: string
  tagline: string
  price: string
  priceContext: string
  conversations: string
  highlighted: boolean
  badge?: string
  features: string[]
  cta: string
}

const plans: Plan[] = [
  {
    label: 'Starter',
    tagline: 'Automatización básica',
    price: '$699',
    priceContext: 'Dejas de hacer lo repetitivo a mano',
    highlighted: false,
    conversations: 'Hasta 150 conversaciones · Sin IA agent',
    features: [
      'Confirma y recuerda automáticamente',
      'Mantiene orden básico de agenda y alumnos',
      'Reduce respuestas manuales del día a día',
      'Ideal para empezar sin caos',
    ],
    cta: 'Empieza 14 días gratis',
  },
  {
    label: 'Growth',
    tagline: 'Crecimiento automático',
    price: '$1,299',
    priceContext: 'Empieza a recuperar alumnos sin esfuerzo manual',
    conversations: 'Hasta 500 conversaciones · Sin IA agent',
    highlighted: false,
    features: [
      'Más volumen para operar sin fricción',
      'Seguimiento automático de interesados',
      'Ayuda a recuperar clases y alumnos',
      'Ideal para estudios en crecimiento',
    ],
    cta: 'Empieza 14 días gratis',
  },
  {
    label: 'Pro',
    tagline: 'Operación avanzada',
    price: '$2,499',
    priceContext: 'Te ayuda a responder mejor. No reemplaza la operación.',
    conversations: 'Hasta 1,200 conversaciones · IA ligera incluida',
    highlighted: false,
    features: [
      'Respuestas más inteligentes según contexto',
      'Clasifica conversaciones y prioridades',
      'Ordena mejor la operación del equipo',
      'Ideal para estudios con demanda constante',
    ],
    cta: 'Empieza 14 días gratis',
  },
  {
    label: 'Autopilot',
    tagline: 'Para estudios que quieren dejar de depender del celular para operar todos los días',
    price: '$3,499',
    priceContext: 'IA agent completa para mantener la operación en marcha',
    conversations: 'No es más automatización. Es que el sistema opere por ti todos los días.',
    highlighted: true,
    badge: '🔥 EL ESTUDIO FUNCIONA AUNQUE NO ESTÉS',
    features: [
      'Responde alumnos con contexto real',
      'Consulta disponibilidad antes de ofrecer',
      'Sugiere horarios cuando no hay lugar',
      'Da seguimiento sin que persigas a nadie',
      'Mantiene la operación en marcha todo el día',
    ],
    cta: 'Empieza 14 días gratis',
  },
]
</script>

<template>
  <section id="pricing" class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">Precios</p>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Elige cuánto quieres que el sistema opere por ti
        </h2>
        <p class="text-lg text-slate-600">
          No estás pagando mensajes. Estás comprando menos operación manual,
          más clases llenas y más control.
        </p>
      </div>

      <!-- Plans grid -->
      <div class="grid sm:grid-cols-3 gap-6 items-start">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="rounded-2xl p-7 border transition-all relative flex flex-col"
          :class="plan.highlighted
            ? 'border-indigo-500 shadow-2xl shadow-indigo-100 bg-indigo-600 text-white'
            : 'border-slate-200 hover:border-slate-300 hover:shadow-md bg-white'"
        >
          <!-- Badge -->
          <div
            v-if="plan.badge"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full"
          >
            {{ plan.badge }}
          </div>

          <!-- Plan label + tagline -->
          <div class="mb-5">
            <p
              class="text-xs font-bold uppercase tracking-widest mb-1.5"
              :class="plan.highlighted ? 'text-indigo-200' : 'text-indigo-600'"
            >
              {{ plan.label }}
            </p>
            <p
              class="text-base font-semibold leading-snug"
              :class="plan.highlighted ? 'text-white' : 'text-slate-800'"
            >
              {{ plan.tagline }}
            </p>
          </div>

          <!-- Price block -->
          <div class="mb-1">
            <div class="flex items-end gap-1">
              <span
                class="text-4xl font-extrabold leading-none"
                :class="plan.highlighted ? 'text-white' : 'text-slate-900'"
              >
                {{ plan.price }}
              </span>
              <span
                class="text-sm font-medium mb-1"
                :class="plan.highlighted ? 'text-indigo-200' : 'text-slate-500'"
              >
                MXN / mes
              </span>
            </div>
          </div>
          <p
            class="text-xs italic mb-6"
            :class="plan.highlighted ? 'text-indigo-300' : 'text-slate-400'"
          >
            {{ plan.priceContext }}
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
          <ul class="space-y-3 flex-1">
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

          <!-- Conversations (secondary) -->
          <p
            class="text-xs mt-5 pt-4 border-t"
            :class="plan.highlighted
              ? 'text-indigo-300 border-indigo-500'
              : 'text-slate-400 border-slate-100'"
          >
            {{ plan.conversations }}
          </p>
        </div>
      </div>

      <!-- Extra conversations note -->
      <p class="text-center text-slate-400 text-xs mt-6">
        Todos los planes incluyen 14 días reales · Sin tarjeta · Con tu operación real
      </p>

      <!-- ROI Section -->
      <div class="mt-16 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
        <div class="text-center mb-8">
          <p class="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-2">El cálculo es simple</p>
          <h3 class="text-2xl font-bold text-slate-900">Se paga con pocas clases recuperadas</h3>
          <p class="text-slate-500 mt-2 text-sm">
            Si el sistema evita algunas ausencias y mueve unos pocos alumnos al mes,
            ya cubre su costo.
          </p>
          <p class="text-slate-600 mt-3 text-sm font-medium">
            Algunos estudios ya recuperan 3-5 clases al mes sin intervención manual.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6 text-center mb-8">
          <div class="bg-slate-50 rounded-xl p-5">
            <p class="text-3xl font-extrabold text-slate-900 mb-1">$250</p>
            <p class="text-sm text-slate-500">Ingreso promedio por alumno al mes</p>
          </div>
          <div class="bg-slate-50 rounded-xl p-5">
            <p class="text-3xl font-extrabold text-indigo-600 mb-1">×3</p>
            <p class="text-sm text-slate-500">Alumnos recuperados o reacomodados</p>
          </div>
          <div class="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <p class="text-3xl font-extrabold text-emerald-600 mb-1">$750</p>
            <p class="text-sm text-slate-500">Ingreso protegido. El sistema ya se pagó.</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            El valor no está en automatizar mensajes.
          </div>
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Está en no perder ingresos por falta de seguimiento.
          </div>
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Si mueve pocas clases al mes, ya devuelve más de lo que cuesta.
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
