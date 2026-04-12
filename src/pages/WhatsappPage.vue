<script setup lang="ts">
import WhatsAppSection from '../components/landing/WhatsAppSection.vue'
import CTASection from '../components/landing/CTASection.vue'
import { whatsappFaqs } from '../content/faqs'
import { createFaqPageSchema, createOrganizationSchema, createSoftwareApplicationSchema } from '../seo/schema'
import { usePageSeo } from '../seo/usePageSeo'

const whatsappDescription =
  'Automatiza WhatsApp para tu estudio de pilates o fitness con FlowEstudio: confirma reservas, envía recordatorios y centraliza conversaciones.'

usePageSeo({
  title: 'Automatizar WhatsApp gimnasio y estudio | FlowEstudio',
  description: whatsappDescription,
  path: '/whatsapp',
  schema: [
    createOrganizationSchema(),
    createSoftwareApplicationSchema({
      description: whatsappDescription,
      path: '/whatsapp',
    }),
    createFaqPageSchema('/whatsapp', whatsappFaqs),
  ],
})
</script>

<template>
  <section class="pt-28 pb-14 md:pt-36 md:pb-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-3">WhatsApp Automation</p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        Automatizar WhatsApp para estudios de pilates y fitness
      </h1>
      <p class="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        Responde más rápido, confirma más clases y reduce faltas con un flujo de atención centralizado.
        FlowEstudio conecta WhatsApp Business con tu operación diaria desde una sola pantalla.
      </p>
    </div>
  </section>

  <WhatsAppSection />

  <section class="py-16 bg-white border-y border-slate-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        Qué resuelve la automatización de WhatsApp
      </h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Cuando las reservas dependen de responder chats uno por uno, el estudio pierde tiempo y deja lugares
        vacíos. Con FlowEstudio, la atención repetitiva se automatiza y tu equipo conserva visibilidad de cada
        alumno, conversación y clase.
      </p>
      <p class="text-slate-600 leading-relaxed">
        Si quieres revisar funcionalidades completas ve a
        <a href="/features" class="text-indigo-600 hover:text-indigo-700 font-medium">/features</a>
        y para comparar planes revisa
        <a href="/pricing" class="text-indigo-600 hover:text-indigo-700 font-medium">/pricing</a>.
      </p>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Preguntas frecuentes de automatización por WhatsApp
      </h2>
      <div class="space-y-5">
        <article
          v-for="faq in whatsappFaqs"
          :key="faq.question"
          class="bg-white border border-slate-200 rounded-xl p-5"
        >
          <h3 class="text-base font-semibold text-slate-900 mb-2">{{ faq.question }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">{{ faq.answer }}</p>
        </article>
      </div>
    </div>
  </section>

  <CTASection />
</template>
