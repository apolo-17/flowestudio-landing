<script setup lang="ts">
import { ref } from 'vue'
import { SUPPORT_EMAIL } from '../../config/env'
import { homeFaqs as faqs } from '../../content/faqs'

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
            v-show="openIndex === index"
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
