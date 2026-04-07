<script setup lang="ts">
import { SIGNUP_URL } from '../../config/env'

interface Plan {
  name: string
  price: string
  conversations: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$699 MXN',
    conversations: '200 conversaciones',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$1,199 MXN',
    conversations: '600 conversaciones',
    highlighted: true,
    badge: 'Más popular',
  },
  {
    name: 'Pro',
    price: '$1,999 MXN',
    conversations: '1500 conversaciones',
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
          Con recuperar 3–5 alumnos al mes, el sistema se paga solo
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
          <div class="mb-2">
            <span
              class="text-4xl font-extrabold leading-none"
              :class="plan.highlighted ? 'text-white' : 'text-slate-900'"
            >
              {{ plan.price }}
            </span>
          </div>

          <p
            class="text-base leading-relaxed mb-6"
            :class="plan.highlighted ? 'text-indigo-100' : 'text-slate-600'"
          >
            {{ plan.conversations }}
          </p>

          <!-- CTA -->
          <a
            :href="SIGNUP_URL"
            class="block text-center font-semibold px-5 py-3 rounded-xl transition-colors text-sm mb-6"
            :class="plan.highlighted
              ? 'bg-white text-indigo-700 hover:bg-slate-50'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'"
          >
            Probar gratis 7 días
          </a>

          <!-- Divider -->
          <div
            class="border-t mb-5"
            :class="plan.highlighted ? 'border-indigo-500' : 'border-slate-100'"
          ></div>

          <div class="space-y-3">
            <div class="flex items-start gap-2.5 text-sm">
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
                Incluye automatización de reservas y recordatorios
              </span>
            </div>
            <div class="flex items-start gap-2.5 text-sm">
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
                Dashboard centralizado para tu operación diaria
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <p class="text-center text-slate-500 text-sm mt-10">
        Conversaciones extra desde $1 MXN
      </p>

    </div>
  </section>
</template>
