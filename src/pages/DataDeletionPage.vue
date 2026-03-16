<script setup lang="ts">
import { SUPPORT_EMAIL } from '../config/env'
</script>

<template>
  <div class="pt-24 pb-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Eliminación de datos
        </h1>
        <p class="text-slate-500 text-sm">Última actualización: marzo de 2026</p>
      </div>

      <div class="space-y-8 text-slate-700 leading-relaxed">

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">1. Tu derecho a la eliminación de datos</h2>
          <p>
            En FlowEstudio respetamos tu privacidad y reconocemos tu derecho a solicitar
            la eliminación de los datos personales asociados a tu cuenta o a las
            conversaciones gestionadas a través de nuestra plataforma.
          </p>
          <p class="mt-3">
            Esta página describe el proceso para ejercer ese derecho de forma clara y sencilla.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">2. Cómo solicitar la eliminación</h2>
          <p>
            Para solicitar la eliminación de tus datos, envíanos un correo electrónico a:
          </p>
          <p class="mt-3">
            <a
              :href="`mailto:${SUPPORT_EMAIL}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos`"
              class="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              {{ SUPPORT_EMAIL }}
            </a>
          </p>
          <p class="mt-3">
            con el asunto: <strong>"Solicitud de eliminación de datos"</strong>.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">3. Información que debes incluir</h2>
          <p>Para procesar tu solicitud correctamente, incluye en tu correo:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Tu nombre completo</li>
            <li>El correo electrónico con el que te registraste en FlowEstudio</li>
            <li>El nombre del estudio o negocio asociado a tu cuenta (si aplica)</li>
            <li>Descripción de los datos que deseas eliminar (cuenta completa, conversaciones
              específicas, datos de contacto, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">4. Tiempo de respuesta</h2>
          <p>
            Confirmaremos la recepción de tu solicitud dentro de las <strong>48 horas hábiles</strong>
            siguientes. La eliminación efectiva de tus datos se completará en un plazo
            máximo de <strong>30 días calendario</strong> desde la confirmación de la solicitud.
          </p>
          <p class="mt-3">
            Si tu solicitud requiere verificación adicional de identidad, te lo
            comunicaremos por el mismo medio.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">5. Alcance de la eliminación</h2>
          <p>Al procesar tu solicitud, eliminaremos:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Tu cuenta de usuario y credenciales de acceso</li>
            <li>Los datos de configuración de tu estudio dentro de la plataforma</li>
            <li>Las conversaciones y contactos almacenados en FlowEstudio</li>
            <li>Cualquier otra información personal asociada a tu perfil</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">6. Retención mínima de datos</h2>
          <p>
            En algunos casos podemos retener cierta información de forma limitada por
            razones técnicas o legales:
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>
              <strong>Registros de facturación y transacciones:</strong> Pueden retenerse
              hasta 5 años para cumplir con obligaciones fiscales o contables, según
              la legislación aplicable.
            </li>
            <li>
              <strong>Registros de seguridad:</strong> Logs técnicos mínimos pueden
              conservarse por un período corto (hasta 90 días) para prevenir fraudes o
              abusos, después de lo cual se eliminan automáticamente.
            </li>
            <li>
              <strong>Datos anonimizados:</strong> Información estadística que no permita
              identificarte puede conservarse para mejorar el servicio.
            </li>
          </ul>
          <p class="mt-3">
            Te informaremos explícitamente si alguna parte de tus datos no puede
            eliminarse de inmediato y la razón correspondiente.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">7. Datos en Meta / WhatsApp</h2>
          <p>
            FlowEstudio opera sobre la API de WhatsApp Business de Meta. Los datos
            procesados directamente por Meta (historial de mensajes en WhatsApp, número
            de teléfono vinculado) están sujetos a las políticas de privacidad de Meta.
            Para solicitar la eliminación de esos datos debes hacerlo directamente ante
            Meta a través de su
            <a
              href="https://www.facebook.com/help/contact/540977946302970"
              target="_blank"
              rel="noopener"
              class="text-indigo-600 hover:text-indigo-700"
            >
              formulario de solicitud de datos
            </a>.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-3">8. Contacto</h2>
          <p>
            Si tienes dudas sobre este proceso o necesitas asistencia, escríbenos a:
          </p>
          <p class="mt-2">
            <a
              :href="`mailto:${SUPPORT_EMAIL}`"
              class="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              {{ SUPPORT_EMAIL }}
            </a>
          </p>
        </section>

      </div>
    </div>
  </div>
</template>
