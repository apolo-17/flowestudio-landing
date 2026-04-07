<script setup lang="ts">
import { SIGNUP_URL } from '../../config/env'
</script>

<template>
  <section class="pt-28 pb-20 md:pt-36 md:pb-28 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: copy -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3.5 py-1.5 rounded-full mb-6 border border-indigo-100">
            <span class="w-2 h-2 bg-indigo-500 rounded-full" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></span>
            Pilates · Fitness · Coaches · 7 días gratis
          </div>

          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Llena tus clases automáticamente
            <span class="text-indigo-600"> desde WhatsApp</span>
          </h1>

          <p class="text-xl text-slate-600 leading-relaxed mb-8">
            Tus alumnos reservan, confirman y reciben recordatorios sin que tengas que escribirles uno por uno.
            Todo desde una sola pantalla.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a
              :href="SIGNUP_URL"
              class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-base"
              style="box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);"
            >
              Probar gratis 7 días
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              class="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-base"
            >
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver cómo funciona
            </a>
          </div>

          <!-- Trust line -->
          <p class="text-sm text-slate-400 mt-5">
            Sin tarjeta · Configuración en minutos
          </p>
        </div>

        <!-- Right: mock UI -->
        <!-- TODO: reemplazar por captura real del dashboard (vista de agenda o clientes) -->
        <div class="relative">
          <!-- Microcopy mockup -->
          <p class="text-xs font-medium text-slate-400 text-center mb-3 tracking-wide uppercase">
            Así se llenan tus clases automáticamente
          </p>
          <!-- Main card -->
          <div class="bg-slate-900 rounded-2xl p-4 shadow-2xl">
            <!-- Browser chrome -->
            <div class="flex items-center gap-1.5 mb-3">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div class="flex-1 mx-3 bg-slate-700 rounded h-5 flex items-center px-3">
                <span class="text-slate-400 text-xs">app.flowestudioapp.com</span>
              </div>
            </div>

            <!-- App layout -->
            <div class="flex gap-3" style="height: 300px;">
              <!-- Icon sidebar -->
              <div class="w-12 bg-slate-800 rounded-xl flex flex-col items-center py-3 gap-3 flex-shrink-0">
                <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
              </div>

              <!-- Class list panel -->
              <div class="w-32 bg-slate-800 rounded-xl p-2 flex flex-col gap-1 overflow-hidden flex-shrink-0">
                <div class="text-slate-400 text-xs px-2 py-1 font-medium">Clases de mañana</div>
                <div
                  v-for="i in 4"
                  :key="i"
                  class="flex items-center gap-2 px-2 py-2 rounded-lg"
                  :class="i === 1 ? 'bg-indigo-600' : ''"
                >
                  <div
                    class="w-6 h-6 rounded-full flex-shrink-0"
                    :class="i === 1 ? 'bg-indigo-300' : 'bg-slate-600'"
                  ></div>
                  <div class="flex-1 min-w-0 space-y-1">
                    <div
                      class="h-2 rounded"
                      :class="i === 1 ? 'bg-indigo-300' : 'bg-slate-600'"
                    ></div>
                    <div
                      class="h-1.5 w-2/3 rounded"
                      :class="i === 1 ? 'bg-indigo-400' : 'bg-slate-700'"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Detail panel -->
              <div class="flex-1 bg-slate-800 rounded-xl p-3 flex flex-col gap-2.5 overflow-hidden min-w-0">
                <!-- Alumno pide lugar -->
                <div class="flex gap-2">
                  <div class="w-5 h-5 rounded-full bg-emerald-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-bold">L</div>
                  <div class="bg-slate-700 text-slate-200 text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-full">
                    Hola! ¿hay lugar en la clase de 9am?
                  </div>
                </div>
                <!-- Bot confirma -->
                <div class="flex gap-2 justify-end">
                  <div class="bg-indigo-600 text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-xs">
                    ¡Hola Laura! Sí hay lugar. Te reservo ahora mismo. ✓
                  </div>
                </div>
                <!-- Segundo alumno -->
                <div class="flex gap-2">
                  <div class="w-5 h-5 rounded-full bg-violet-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-bold">S</div>
                  <div class="bg-slate-700 text-slate-200 text-xs rounded-xl rounded-bl-sm px-3 py-2">
                    ¿Confirmas mi clase de mañana?
                  </div>
                </div>
                <!-- Bot responde -->
                <div class="flex gap-2 justify-end">
                  <div class="bg-indigo-600 text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-xs">
                    Confirmada, Sofía. Nos vemos a las 9am. ✓
                  </div>
                </div>
                <!-- Status indicator -->
                <div class="flex items-center gap-1.5 mt-auto pt-1 border-t border-slate-700">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
                  ></div>
                  <span class="text-emerald-400 text-xs font-medium">Bot activo · clase 8/8 ✓</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating badge bottom-left -->
          <div
            class="absolute -bottom-5 -left-5 bg-white rounded-xl px-4 py-3 border border-slate-100"
            style="box-shadow: 0 8px 24px rgba(0,0,0,0.10);"
          >
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-900">Clase llena</p>
                <p class="text-xs text-slate-500">8/8 confirmados automáticamente</p>
              </div>
            </div>
          </div>

          <!-- Floating badge top-right -->
          <div
            class="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 border border-slate-100 hidden sm:block"
            style="box-shadow: 0 8px 24px rgba(0,0,0,0.10);"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-indigo-500" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
              <p class="text-xs font-semibold text-slate-700">Confirmado automáticamente</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>
