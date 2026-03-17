<script setup lang="ts">
import { ref } from 'vue'
import { SUPPORT_EMAIL } from '../../config/env'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: '¿Para qué tipo de negocio es FlowEstudio?',
    answer:
      'FlowEstudio está diseñado para estudios de pilates, coaches de fitness y entrenadores que gestionan grupos de alumnos. Si hoy operas con WhatsApp, Excel o una agenda manual, FlowEstudio te da el control y el orden que necesitas para operar como un negocio real.',
  },
  {
    question: '¿Puedo probarlo gratis?',
    answer:
      'Sí. Estamos en una etapa de acceso anticipado y los primeros estudios que se registren tienen acceso completo de forma gratuita durante 6 meses. No pedimos tarjeta de crédito ni ningún compromiso previo.',
  },
  {
    question: '¿Necesito conocimientos técnicos para configurarlo?',
    answer:
      'No. FlowEstudio te guía con un proceso paso a paso desde el primer día. Puedes cargar tus clases, registrar alumnos y empezar a operar el mismo día, sin experiencia previa en software de gestión. Si tienes dudas, estamos disponibles para apoyarte.',
  },
  {
    question: '¿Qué pasa después de los 6 meses?',
    answer:
      'Al finalizar el período de acceso anticipado, te presentaremos los planes disponibles. Si decides no continuar, respetamos tu decisión sin complicaciones. Nuestro objetivo es que sientas el valor real de la plataforma antes de cualquier cobro.',
  },
  {
    question: '¿Puedo empezar a usarlo esta semana?',
    answer:
      'Sí. Agenda una demo, te la mostramos en vivo, y si decides seguir adelante puedes empezar a cargar tus clases y clientes el mismo día. La plataforma es funcional y la mejoramos continuamente. Los primeros meses son completamente gratis, sin ningún compromiso.',
  },
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Preguntas frecuentes
        </h2>
        <p class="text-lg text-slate-600">
          Todo lo que necesitas saber antes de empezar.
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="font-semibold text-slate-900 text-base">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="openIndex === index"
            class="px-6 pb-5"
          >
            <p class="text-slate-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <div class="mt-10 text-center">
        <p class="text-slate-500 text-sm">
          ¿Tienes otra pregunta?
          <a :href="`mailto:${SUPPORT_EMAIL}`" class="text-indigo-600 hover:text-indigo-700 font-medium">
            {{ SUPPORT_EMAIL }}
          </a>
        </p>
      </div>

    </div>
  </section>
</template>
