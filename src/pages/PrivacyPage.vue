<script setup lang="ts">
import { SUPPORT_EMAIL } from '../config/env'
</script>

<template>
  <div class="pt-24 pb-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Política de privacidad
        </h1>
        <p class="text-slate-500 text-sm">Última actualización: marzo de 2026</p>
      </div>

      <div class="prose-custom space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">1. Quiénes somos</h2>
          <p>
            FlowEstudio es una plataforma SaaS diseñada para estudios de Pilates, fitness y
            negocios similares que desean automatizar su atención por WhatsApp. Estamos en
            etapa de validación temprana y operamos bajo estrictos criterios de privacidad
            y manejo de datos.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">2. Datos que recopilamos</h2>
          <p>Al usar FlowEstudio podemos recopilar:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Nombre y correo electrónico al registrarte</li>
            <li>Información del estudio que configures dentro de la plataforma</li>
            <li>Conversaciones de WhatsApp gestionadas a través del sistema</li>
            <li>Datos de uso de la plataforma para mejorar el servicio</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">3. Cómo usamos tus datos</h2>
          <p>Usamos tu información exclusivamente para:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Proveer y mejorar el servicio de FlowEstudio</li>
            <li>Enviarte comunicaciones relacionadas con tu cuenta</li>
            <li>Soporte técnico cuando lo solicites</li>
            <li>Análisis de uso interno para mejorar la plataforma</li>
          </ul>
          <p class="mt-3">
            No vendemos ni compartimos tus datos personales con terceros para fines
            comerciales.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">4. Conversaciones de WhatsApp</h2>
          <p>
            Las conversaciones gestionadas a través de FlowEstudio son de tu propiedad.
            FlowEstudio accede a ellas únicamente para operar el servicio de automatización
            que tú configuraste. No leemos ni analizamos conversaciones de forma manual
            salvo para soporte técnico cuando tú lo solicites expresamente.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">5. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas razonables para proteger tu información. Sin embargo,
            ningún sistema es 100% seguro. Te recomendamos usar contraseñas seguras y
            mantener tus credenciales privadas.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">6. Tus derechos</h2>
          <p>Puedes en cualquier momento:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Solicitar acceso a tus datos personales</li>
            <li>Solicitar la corrección o eliminación de tus datos</li>
            <li>Cancelar tu cuenta</li>
          </ul>
          <p class="mt-3">
            Para ejercer cualquiera de estos derechos escríbenos a
            <a :href="`mailto:${SUPPORT_EMAIL}`" class="text-indigo-600 hover:text-indigo-700">
              hola@flowestudio.com
            </a>
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">7. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política en cualquier momento. Te notificaremos por correo
            si los cambios son relevantes para el uso de tu cuenta. El uso continuo de la
            plataforma después de los cambios implica su aceptación.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política o sobre el manejo de tus datos, contáctanos
            en
            <a :href="`mailto:${SUPPORT_EMAIL}`" class="text-indigo-600 hover:text-indigo-700">
              hola@flowestudio.com
            </a>
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
