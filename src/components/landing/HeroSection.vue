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
            Acceso anticipado · Gratis por 6 meses
          </div>

          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Automatiza tu WhatsApp y atiende mejor
            <span class="text-indigo-600"> a tus alumnos</span>
            desde una sola plataforma.
          </h1>

          <p class="text-xl text-slate-600 leading-relaxed mb-8">
            FlowEstudio centraliza tus conversaciones de WhatsApp, automatiza
            respuestas y te ayuda a dar seguimiento a cada interesado sin
            esfuerzo extra.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a
              :href="SIGNUP_URL"
              class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-base"
              style="box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);"
            >
              Probar gratis 6 meses
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#how-it-works"
              class="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-base"
            >
              <svg class="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Ver cómo funciona
            </a>
          </div>

          <!-- Trust line -->
          <p class="text-sm text-slate-400 mt-5">
            Sin tarjeta de crédito · Configuración guiada · Cancela cuando quieras
          </p>
        </div>

        <!-- Right: mock UI -->
        <div class="relative">
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
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <div class="w-8 h-8 bg-slate-700 rounded-lg"></div>
              </div>

              <!-- Conversation list -->
              <div class="w-32 bg-slate-800 rounded-xl p-2 flex flex-col gap-1 overflow-hidden flex-shrink-0">
                <div class="text-slate-400 text-xs px-2 py-1 font-medium">Conversaciones</div>
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

              <!-- Chat area -->
              <div class="flex-1 bg-slate-800 rounded-xl p-3 flex flex-col gap-2.5 overflow-hidden min-w-0">
                <!-- Incoming -->
                <div class="flex gap-2">
                  <div class="w-5 h-5 rounded-full bg-violet-500 flex-shrink-0 mt-0.5"></div>
                  <div class="bg-slate-700 text-slate-200 text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-full">
                    Hola, ¿tienen clases de Pilates para principiantes?
                  </div>
                </div>
                <!-- Outgoing -->
                <div class="flex gap-2 justify-end">
                  <div class="bg-indigo-600 text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-xs">
                    ¡Hola! Sí, contamos con grupos para todos los niveles. ¿Gustas ver los horarios disponibles?
                  </div>
                </div>
                <!-- Incoming -->
                <div class="flex gap-2">
                  <div class="w-5 h-5 rounded-full bg-violet-500 flex-shrink-0 mt-0.5"></div>
                  <div class="bg-slate-700 text-slate-200 text-xs rounded-xl rounded-bl-sm px-3 py-2">
                    Sí, me interesa mucho
                  </div>
                </div>
                <!-- Outgoing auto -->
                <div class="flex gap-2 justify-end">
                  <div class="bg-indigo-600 text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-xs">
                    Perfecto, te mando el horario y precios ahora mismo 📅
                  </div>
                </div>
                <!-- Auto-response indicator -->
                <div class="flex items-center gap-1.5 mt-auto pt-1 border-t border-slate-700">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
                  ></div>
                  <span class="text-emerald-400 text-xs font-medium">Respuesta automática activa</span>
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
                <p class="text-xs font-semibold text-slate-900">Respuesta enviada</p>
                <p class="text-xs text-slate-500">En menos de 1 segundo</p>
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
              <p class="text-xs font-semibold text-slate-700">Bot activo 24/7</p>
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
