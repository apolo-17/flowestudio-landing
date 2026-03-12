<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarSection from './components/landing/NavbarSection.vue'
import FooterSection from './components/landing/FooterSection.vue'
</script>

<template>
  <NavbarSection />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>
