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
    tagline: 'Para estudios que están empezando',
    price: '$699',
    priceContext: 'Un alumno recuperado ya lo paga',
    conversations: 'Hasta 150 conversaciones mensuales',
    highlighted: false,
    features: [
      'Confirma reservas automáticamente',
      'Envía recordatorios para reducir faltas',
      'Responde mensajes fuera de horario',
      'Dashboard para gestionar tu operación',
    ],
    cta: 'Empieza a automatizar hoy',
  },
  {
    label: 'Growth',
    tagline: 'Para estudios que quieren crecer',
    price: '$1,299',
    priceContext: 'Menos de lo que pierdes con 3 ausencias',
    conversations: 'Hasta 500 conversaciones mensuales',
    highlighted: true,
    badge: 'Más popular',
    features: [
      'Todo lo del plan Starter',
      'Recupera alumnos que dejaron de asistir',
      'Llena clases sin intervención manual',
      'Seguimiento automático de interesados',
      'Soporte prioritario',
    ],
    cta: 'Activa tu sistema en minutos',
  },
  {
    label: 'Pro',
    tagline: 'Para estudios con operación consolidada',
    price: '$2,499',
    priceContext: 'Diseñado para estudios de alto volumen',
    conversations: 'Hasta 1,200 conversaciones mensuales',
    highlighted: false,
    features: [
      'Todo lo del plan Growth',
      'Automatización avanzada de flujos',
      'Reportes y métricas de operación',
      'Múltiples números de WhatsApp',
      'Soporte dedicado',
    ],
    cta: 'Escala tu operación hoy',
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
          Planes diseñados para llenarte clases,<br class="hidden sm:block" /> no para contar mensajes
        </h2>
        <p class="text-lg text-slate-600">
          Con recuperar 3–5 alumnos al mes, el sistema se paga solo. Lo demás es ganancia.
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
        ¿Necesitas más volumen? Conversaciones adicionales desde $2 MXN c/u.
      </p>

      <!-- ROI Section -->
      <div class="mt-16 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
        <div class="text-center mb-8">
          <p class="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-2">El cálculo es simple</p>
          <h3 class="text-2xl font-bold text-slate-900">¿Por qué se paga solo?</h3>
          <p class="text-slate-500 mt-2 text-sm">
            No necesitas que funcione para 100 alumnos. Solo para 3 o 4.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6 text-center mb-8">
          <div class="bg-slate-50 rounded-xl p-5">
            <p class="text-3xl font-extrabold text-slate-900 mb-1">$250</p>
            <p class="text-sm text-slate-500">Ingreso promedio por alumno al mes</p>
          </div>
          <div class="bg-slate-50 rounded-xl p-5">
            <p class="text-3xl font-extrabold text-indigo-600 mb-1">×3</p>
            <p class="text-sm text-slate-500">Alumnos recuperados o confirmados</p>
          </div>
          <div class="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <p class="text-3xl font-extrabold text-emerald-600 mb-1">$750</p>
            <p class="text-sm text-slate-500">Ingreso extra. El sistema ya está pagado.</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            Cada alumno que no se presenta y no confirma es ingreso que no entra. FlowEstudio lo evita.
          </div>
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            El tiempo que ahorras respondiendo WhatsApps equivale a horas de trabajo al mes. Horas que puedes dedicar a tu negocio.
          </div>
          <div class="flex items-start gap-3 text-sm text-slate-600">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            No pagas por mensajes. Pagas para que tu negocio funcione aunque no estés en el teléfono.
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
