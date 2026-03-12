<script setup lang="ts">
import { SUPPORT_EMAIL } from '../config/env'
</script>

<template>
  <div class="pt-24 pb-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Términos de uso
        </h1>
        <p class="text-slate-500 text-sm">Última actualización: marzo de 2026</p>
      </div>

      <div class="space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">1. Aceptación de los términos</h2>
          <p>
            Al registrarte y usar FlowEstudio, aceptas estos Términos de uso. Si no estás
            de acuerdo con alguna parte, te pedimos que no uses la plataforma.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">2. Descripción del servicio</h2>
          <p>
            FlowEstudio es una plataforma SaaS que permite a estudios de Pilates, fitness y
            negocios similares gestionar y automatizar conversaciones de WhatsApp Business.
            Actualmente nos encontramos en una etapa de validación temprana con acceso
            anticipado gratuito.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">3. Acceso anticipado gratuito</h2>
          <p>
            Durante el período de acceso anticipado, el uso de FlowEstudio es completamente
            gratuito por 6 meses desde la fecha de registro. Al finalizar este período,
            te informaremos sobre los planes de pago disponibles. Puedes cancelar en
            cualquier momento sin penalización.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">4. Uso aceptable</h2>
          <p>Te comprometes a usar FlowEstudio únicamente para fines legales y de buena fe. Está prohibido:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Enviar spam o mensajes masivos no solicitados</li>
            <li>Usar la plataforma para actividades fraudulentas o ilegales</li>
            <li>Compartir tu cuenta con terceros no autorizados</li>
            <li>Intentar vulnerar la seguridad del sistema</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">5. Propiedad de los datos</h2>
          <p>
            Los datos de tu estudio y las conversaciones de tus alumnos son de tu propiedad.
            FlowEstudio no reclamará propiedad sobre tu información. Para más detalles sobre
            cómo manejamos tus datos, consulta nuestra
            <a href="/privacy" class="text-indigo-600 hover:text-indigo-700">Política de privacidad</a>.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">6. Disponibilidad del servicio</h2>
          <p>
            Hacemos nuestro mejor esfuerzo para mantener la plataforma disponible, pero al
            ser un producto en etapa temprana, puede haber interrupciones o cambios. No
            garantizamos disponibilidad ininterrumpida del servicio.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">7. Limitación de responsabilidad</h2>
          <p>
            FlowEstudio no se hace responsable por pérdidas de negocio, ingresos o datos
            derivadas del uso o imposibilidad de uso de la plataforma. El servicio se ofrece
            "tal como está" durante la etapa de validación.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">8. Modificaciones</h2>
          <p>
            Podemos modificar estos términos en cualquier momento. Te notificaremos por
            correo si los cambios son relevantes. El uso continuo de la plataforma implica
            la aceptación de los términos actualizados.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">9. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos, escríbenos a
            <a :href="`mailto:${SUPPORT_EMAIL}`" class="text-indigo-600 hover:text-indigo-700">
              hola@flowestudio.com
            </a>
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
