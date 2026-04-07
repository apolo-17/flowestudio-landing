<template>
  <section class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: copy -->
        <div>
          <div class="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-3.5 py-1.5 rounded-full mb-6 border border-emerald-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp Business conectado
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Tus alumnos reservan por WhatsApp.<br />
            <span class="text-emerald-600">El sistema hace todo lo demás.</span>
          </h2>

          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            Confirma asistencia, envía recordatorios y llena tus clases automáticamente.
            Sin estar pegado al celular.
          </p>

          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Reservas automáticas</p>
                <p class="text-slate-600 text-sm mt-0.5">El alumno escribe, el sistema registra la reserva y tú ves la clase organizada en tu dashboard.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Confirmaciones sin intervención</p>
                <p class="text-slate-600 text-sm mt-0.5">FlowEstudio responde por ti para confirmar asistencia sin que tengas que contestar uno por uno.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Recordatorios que reducen faltas</p>
                <p class="text-slate-600 text-sm mt-0.5">Los recordatorios salen a tiempo para que más alumnos lleguen a clase y menos lugares se pierdan.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-slate-900 text-sm">Conversaciones organizadas</p>
                <p class="text-slate-600 text-sm mt-0.5">Todo queda centralizado para que sepas quién escribió, qué pidió y qué seguimiento necesita.</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: visual card -->
        <div class="relative">
          <p class="text-xs font-medium text-slate-400 text-center mb-3 tracking-wide uppercase">
            Conversaciones centralizadas en tu dashboard
          </p>
          <div class="bg-slate-900 rounded-2xl p-4 shadow-2xl">
            <!-- Browser chrome -->
            <div class="flex items-center gap-1.5 mb-3">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div class="flex-1 mx-3 bg-slate-700 rounded h-5 flex items-center px-3">
                <span class="text-slate-400 text-xs">app.flowestudioapp.com/conversaciones</span>
              </div>
            </div>

            <!-- Chat UI mock -->
            <div class="flex gap-3" style="height: 280px;">
              <!-- Conversation list -->
              <div class="w-36 bg-slate-800 rounded-xl p-2 flex flex-col gap-1 overflow-hidden flex-shrink-0">
                <div class="text-slate-400 text-xs px-2 py-1 font-medium">WhatsApp</div>
                <div
                  v-for="(item, i) in [
                    { name: 'Laura M.', msg: 'Hola! ¿hay lugar...', active: true },
                    { name: 'Sofía R.', msg: 'Para mañana 9am', active: false },
                    { name: 'Ana G.', msg: '¿Confirmas mi clase?', active: false },
                    { name: 'Paula V.', msg: 'Gracias! nos vemos', active: false },
                  ]"
                  :key="i"
                  class="flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer"
                  :class="item.active ? 'bg-emerald-700' : ''"
                >
                  <div
                    class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    :class="item.active ? 'bg-emerald-400' : 'bg-slate-600'"
                  >
                    {{ item.name[0] }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-medium truncate" :class="item.active ? 'text-white' : 'text-slate-300'">
                      {{ item.name }}
                    </div>
                    <div class="text-xs truncate" :class="item.active ? 'text-emerald-200' : 'text-slate-500'">
                      {{ item.msg }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Active chat -->
              <div class="flex-1 bg-slate-800 rounded-xl p-3 flex flex-col gap-2 overflow-hidden min-w-0">
                <!-- Header -->
                <div class="flex items-center gap-2 pb-2 border-b border-slate-700">
                  <div class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">L</div>
                  <div>
                    <p class="text-slate-100 text-xs font-semibold">Laura M.</p>
                    <div class="flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span class="text-emerald-400 text-xs">Alumna activa</span>
                    </div>
                  </div>
                </div>
                <!-- Messages -->
                <div class="flex gap-2">
                  <div class="bg-slate-700 text-slate-200 text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-full">
                    Hola! ¿Hay lugar en la clase de mañana 9am?
                  </div>
                </div>
                <div class="flex gap-2 justify-end">
                  <div class="bg-emerald-700 text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-xs">
                    ¡Hola Laura! Sí hay lugar. Te confirmo. ✓
                  </div>
                </div>
                <div class="flex gap-2">
                  <div class="bg-slate-600 text-slate-300 text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-full italic">
                    Respuesta automática enviada
                  </div>
                </div>
                <!-- Status -->
                <div class="flex items-center gap-1.5 mt-auto pt-1 border-t border-slate-700">
                  <div class="w-1.5 h-1.5 rounded-full bg-emerald-400" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
                  <span class="text-emerald-400 text-xs font-medium">Bot activo · 3 conversaciones hoy</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating badge -->
          <div
            class="absolute -bottom-5 -right-5 bg-white rounded-xl px-4 py-3 border border-slate-100 hidden sm:block"
            style="box-shadow: 0 8px 24px rgba(0,0,0,0.10);"
          >
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-900">Reserva confirmada</p>
                <p class="text-xs text-slate-500">Respondido automáticamente</p>
              </div>
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
