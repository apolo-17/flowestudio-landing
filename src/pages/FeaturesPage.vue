<script setup lang="ts">
import FeaturesSection from '../components/landing/FeaturesSection.vue'
import HowItWorksSection from '../components/landing/HowItWorksSection.vue'
import CTASection from '../components/landing/CTASection.vue'
import { createOrganizationSchema, createSoftwareApplicationSchema } from '../seo/schema'
import { usePageSeo } from '../seo/usePageSeo'

const featuresDescription =
  'Explora las funciones de FlowEstudio para estudios de pilates y fitness: reservas, seguimiento de alumnos y automatización de WhatsApp en una sola plataforma.'

usePageSeo({
  title: 'Funciones de software fitness y reservas | FlowEstudio',
  description: featuresDescription,
  path: '/features',
  schema: [
    createOrganizationSchema(),
    createSoftwareApplicationSchema({
      description: featuresDescription,
      path: '/features',
    }),
  ],
})
</script>

<template>
  <section class="pt-28 pb-14 md:pt-36 md:pb-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-3">Features</p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
        Funciones del software para estudios de pilates y fitness
      </h1>
      <p class="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        Desde una sola plataforma puedes gestionar clases, asistencia, seguimiento de alumnos y
        automatización de mensajes para operar con más control y menos carga manual.
      </p>
    </div>
  </section>

  <FeaturesSection />
  <HowItWorksSection />

  <section class="py-16 bg-white border-y border-slate-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        Funcionalidades pensadas para dueños de estudios
      </h2>
      <p class="text-slate-600 leading-relaxed mb-4">
        FlowEstudio combina agenda, conversaciones, recordatorios y seguimiento en un mismo flujo operativo.
        Eso elimina tareas repetitivas y evita que el control de tu estudio dependa de hojas de cálculo
        o mensajes sueltos.
      </p>
      <p class="text-slate-600 leading-relaxed">
        Para revisar costos por volumen consulta
        <a href="/pricing" class="text-indigo-600 hover:text-indigo-700 font-medium">/pricing</a>,
        y para ver el detalle del flujo por mensajería visita
        <a href="/whatsapp" class="text-indigo-600 hover:text-indigo-700 font-medium">/whatsapp</a>.
      </p>
    </div>
  </section>

  <CTASection />
</template>
