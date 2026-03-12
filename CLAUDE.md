# CLAUDE.md — Contexto de FlowEstudio Landing

Este archivo contiene el contexto necesario para que Claude trabaje correctamente
en este repositorio en futuras conversaciones.

---

## ¿Qué es este proyecto?

Landing pública de **FlowEstudio**: sitio comercial para explicar el producto,
generar interés y convertir visitantes en registros.

**NO es el dashboard ni la app.**

---

## Producto

FlowEstudio es una plataforma SaaS para estudios de Pilates, fitness y negocios
similares que desean:
- Automatizar la atención por WhatsApp
- Centralizar conversaciones
- Dar seguimiento a interesados
- Preparar flujos de respuesta automáticos

**Etapa actual:** Validación temprana. La plataforma es funcional pero sigue
evolucionando. Los primeros usuarios tienen acceso gratuito por 6 meses.

---

## Público objetivo

- Estudios de Pilates y yoga
- Gimnasios pequeños y medianos
- Negocios fitness con atención activa por WhatsApp

---

## Mensaje principal

> "Automatiza tu WhatsApp y atiende mejor a tus alumnos desde una sola plataforma."

## CTA principal

> "Probar gratis 6 meses" → `/signup`

## CTA secundaria

> "Ver cómo funciona" → `/#how-it-works`

---

## Stack

- Vue 3 + TypeScript
- Vite
- Vue Router 5
- TailwindCSS v4 (via `@tailwindcss/vite`, sin archivo de config separado)

---

## Estructura de archivos

```
src/
  components/landing/   ← secciones de la landing
  pages/                ← páginas (HomePage, PrivacyPage, TermsPage, NotFoundPage)
  router/index.ts       ← rutas
  App.vue               ← layout raíz (Navbar + RouterView + Footer)
  main.ts               ← entry point
  style.css             ← @import "tailwindcss" + reset base
```

---

## Rutas existentes

| Ruta | Componente |
|---|---|
| `/` | `HomePage.vue` |
| `/privacy` | `PrivacyPage.vue` |
| `/terms` | `TermsPage.vue` |
| `/*` | `NotFoundPage.vue` |

Los botones `/signup` y `/login` redirigen a la app externa (aún no existe en este repo).

---

## Diseño y estilo

- **Color primario:** indigo-600 (`#4f46e5`)
- **Tipografía:** Inter (Google Fonts, cargado en `index.html`)
- **Fondos alternados:** blanco y slate-50 por sección
- **Footer:** slate-900 oscuro
- **CTA intermedio:** gradiente indigo oscuro a indigo claro
- Diseño responsive: mobile-first, breakpoints `sm`, `md`, `lg`
- Iconos: SVGs inline (no hay librería de iconos)

### Tono del copy

- Claro, profesional, cercano, directo
- Honesto sobre la etapa temprana del producto
- Sin exageraciones ni promesas imposibles

---

## Reglas importantes para Claude en este repositorio

1. **No construyas el dashboard aquí.** Este repo es solo la landing pública.
2. **No agregues lógica de autenticación real.** Los botones de signup/login son enlaces simples.
3. **No inventes integraciones** (WhatsApp API, pagos, etc.) dentro de este frontend.
4. **No mezcles módulos internos de la app** con este sitio público.
5. **No uses librerías de componentes externas** (Vuetify, PrimeVue, etc.) sin consultarlo primero.
6. **Mantén el stack limpio:** Vue 3 + TypeScript + Vite + TailwindCSS v4 + Vue Router.
7. **TypeScript estricto:** `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` están activos. No uses enums.
8. **Tailwind v4:** No hay `tailwind.config.js`. Usa `@theme` en CSS si necesitas personalizar. El plugin es `@tailwindcss/vite`.
9. **No crees archivos innecesarios.** Prefiere editar los existentes.
10. **El copy está en español.** Toda la UI debe estar en español.

---

## Secciones de la landing (HomePage)

| Componente | ID de anchor | Propósito |
|---|---|---|
| `HeroSection` | — | Headline + CTAs + mockup UI |
| `ProblemSection` | — | 4 pain points |
| `BenefitsSection` | `#features` | 6 características/beneficios |
| `HowItWorksSection` | `#how-it-works` | 4 pasos de onboarding |
| `CTASection` | — | CTA intermedio con gradiente indigo |
| `FAQSection` | `#faq` | 5 preguntas frecuentes (accordion) |

---

## Próximas mejoras posibles

- Mockups reales del dashboard en el hero
- Sección de testimonios o casos de uso
- Analítica de producto (Plausible / Posthog)
- SEO: og:image, meta dinámicos, sitemap
- Animaciones de entrada (scroll-reveal)
- Formulario de lista de espera si aplica
