<script setup lang="ts">
import HeroSection from '../components/landing/HeroSection.vue'
import WhatsAppSection from '../components/landing/WhatsAppSection.vue'
import ProblemSection from '../components/landing/ProblemSection.vue'
import BenefitsSection from '../components/landing/BenefitsSection.vue'
import PricingSection from '../components/landing/PricingSection.vue'
import HowItWorksSection from '../components/landing/HowItWorksSection.vue'
import CTASection from '../components/landing/CTASection.vue'
import FAQSection from '../components/landing/FAQSection.vue'
import SeoContentSection from '../components/landing/SeoContentSection.vue'
import { homeFaqs } from '../content/faqs'
import { createFaqPageSchema, createOrganizationSchema, createSoftwareApplicationSchema } from '../seo/schema'
import { usePageSeo } from '../seo/usePageSeo'

const homeDescription =
  'FlowEstudio es un software para estudios de pilates y fitness que automatiza reservas, pagos y WhatsApp desde un solo lugar.'

usePageSeo({
  title: 'Software para estudios de pilates | FlowEstudio',
  description: homeDescription,
  path: '/',
  schema: [
    createOrganizationSchema(),
    createSoftwareApplicationSchema({
      description: homeDescription,
      path: '/',
    }),
    createFaqPageSchema('/', homeFaqs),
  ],
})
</script>

<template>
  <HeroSection />
  <WhatsAppSection />
  <ProblemSection />
  <BenefitsSection />
  <SeoContentSection />
  <PricingSection />
  <HowItWorksSection />
  <CTASection />
  <FAQSection />
</template>
