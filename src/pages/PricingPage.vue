<script setup lang="ts">
import PricingSection from '../components/landing/PricingSection.vue'
import CTASection from '../components/landing/CTASection.vue'
import { pricingFaqs } from '../content/faqs'
import { createFaqPageSchema, createOrganizationSchema, createSoftwareApplicationSchema } from '../seo/schema'
import { usePageSeo } from '../seo/usePageSeo'

const pricingDescription =
  'Conoce los precios de FlowEstudio, software para estudios de pilates y fitness que automatiza reservas, confirmaciones y seguimiento por WhatsApp.'

usePageSeo({
  title: 'Precios del software para estudios de pilates | FlowEstudio',
  description: pricingDescription,
  path: '/pricing',
  schema: [
    createOrganizationSchema(),
    createSoftwareApplicationSchema({
      description: pricingDescription,
      path: '/pricing',
    }),
    createFaqPageSchema('/pricing', pricingFaqs),
  ],
})
</script>

<template>
  <section class="pt-28 pb-14 md:pt-36 md:pb-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-3">Pricing</p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        Precios de software para estudios de pilates y fitness
      </h1>
      <p class="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        Elige el plan de FlowEstudio según el volumen de tu operación. Automatiza reservas, reduce faltas y
        centraliza WhatsApp con un costo mensual claro en MXN.
      </p>
    </div>
  </section>

  <PricingSection />

  <section class="py-16 bg-white border-y border-slate-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        ¿Cómo elegir tu plan de FlowEstudio?
      </h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        Si estás empezando, el plan Starter cubre la operación base para automatizar WhatsApp y confirmaciones.
        Si tu estudio maneja más alumnos o más seguimiento comercial, Growth y Pro te dan mayor volumen y funciones
        de operación avanzada.
      </p>
      <p class="text-slate-600 leading-relaxed">
        También puedes revisar las funcionalidades completas en
        <a href="/features" class="text-indigo-600 hover:text-indigo-700 font-medium">/features</a>
        o la automatización de mensajería en
        <a href="/whatsapp" class="text-indigo-600 hover:text-indigo-700 font-medium">/whatsapp</a>.
      </p>
    </div>
  </section>

  <section class="py-16 bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Preguntas frecuentes sobre precios
      </h2>
      <div class="space-y-5">
        <article
          v-for="faq in pricingFaqs"
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
