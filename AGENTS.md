# AGENTS.md — flowestudio-landing

Guía de contexto para agentes de IA (Codex, Claude Code, etc.) trabajando
en este repositorio.

---

## Qué es este proyecto

Landing pública de **FlowEstudio**: sitio de marketing para explicar el
producto, generar confianza y convertir visitantes en registros.

**NO es el dashboard ni la app.** No tiene autenticación, ni backend, ni
lógica de negocio. Es un sitio estático de marketing.

**Stack:** Vue 3 · TypeScript · Vite · Vue Router · Tailwind CSS v4
(via `@tailwindcss/vite`, sin `tailwind.config.js`)

---

## Comandos esenciales

```bash
# Instalar dependencias
npm install

# Dev server
npm run dev

# Verificar tipos TypeScript
npm run type-check

# Build producción
npm run build
```

### Después de cualquier cambio

```bash
npm run type-check   # no debe haber errores
npm run build        # verificar que el build no falla
```

---

## Estructura de archivos

```
src/
├── components/landing/     ← Secciones de la página principal
│   ├── NavbarSection.vue
│   ├── HeroSection.vue
│   ├── ProblemSection.vue
│   ├── BenefitsSection.vue
│   ├── HowItWorksSection.vue
│   ├── CTASection.vue
│   ├── FAQSection.vue
│   └── FooterSection.vue
├── pages/                  ← Páginas completas
│   ├── HomePage.vue        ← Compone todas las secciones
│   ├── PrivacyPage.vue
│   ├── TermsPage.vue
│   └── NotFoundPage.vue
├── router/index.ts         ← Rutas: /, /privacy, /terms
├── App.vue                 ← Layout raíz (Navbar + RouterView + Footer)
├── main.ts
└── style.css               ← @import "tailwindcss" + reset base
```

---

## Rutas

| Ruta | Componente |
|---|---|
| `/` | `HomePage.vue` |
| `/privacy` | `PrivacyPage.vue` |
| `/terms` | `TermsPage.vue` |
| `/*` | `NotFoundPage.vue` |

---

## Identidad visual

- **Color primario:** indigo-600 (`#4f46e5`)
- **Tipografía:** Inter (Google Fonts, cargado en `index.html`)
- **Fondos alternados:** blanco y slate-50 por sección
- **Footer:** slate-900 oscuro
- **CTA intermedio:** gradiente indigo oscuro a indigo claro
- **Iconos:** SVGs inline (no hay librería de iconos)
- Diseño responsive: mobile-first con breakpoints `sm`, `md`, `lg`

---

## CTA principal

El botón principal dice **"Probar gratis 6 meses"** y dirige a:
`https://app.flowestudio.com/signup`

---

## Público objetivo

Dueños de estudios de Pilates, yoga, gimnasios pequeños y negocios fitness
que atienden clientes por WhatsApp.

**Mensaje principal:**
> "Automatiza tu WhatsApp y atiende mejor a tus alumnos desde una sola plataforma."

---

## Tailwind CSS v4

- No hay `tailwind.config.js`
- Usa `@theme` en `style.css` para personalizar tokens si es necesario
- Plugin: `@tailwindcss/vite`

---

## Reglas TypeScript

- **No uses `enum`** — usa string literals
- `noUnusedLocals` y `noUnusedParameters` activos
- `erasableSyntaxOnly` activo
- Todos los componentes usan `<script setup>`

---

## Todo el copy debe estar en español

Labels, textos, tooltips, mensajes — todo en español.
Tono: claro, profesional, directo, cercano. Sin exageraciones.

---

## Lo que NUNCA debes hacer

- Agregar lógica de backend o autenticación real
- Conectar APIs de WhatsApp, pagos u otras integraciones
- Mezclar componentes o lógica del dashboard en este repo
- Instalar librerías de componentes externas (Vuetify, PrimeVue, etc.)
  sin consultar primero
- Agregar rutas que no sean `/`, `/privacy`, `/terms`
- Crear archivos CSS separados — todo va en `style.css` o en el `<style>` del componente
- Modificar `index.html` salvo para cambios de metadatos o fuentes
