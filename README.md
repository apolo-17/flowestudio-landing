# FlowEstudio — Landing pública

Landing pública del producto **FlowEstudio**: plataforma SaaS para estudios de Pilates, fitness y negocios similares que desean automatizar su atención por WhatsApp.

---

## ¿Qué es este proyecto?

Este repositorio contiene **únicamente el sitio público/comercial** de FlowEstudio.

Su función es:
- Explicar qué hace el sistema
- Generar confianza e interés
- Invitar al usuario a probarlo
- Redirigir al signup/login de la app

**No es el dashboard, ni el backend, ni el sistema de automatización.**

---

## CTA principal

> "Probar gratis 6 meses"

Los primeros estudios tienen acceso completo gratuito durante 6 meses en la etapa de validación temprana.

---

## Stack

| Tecnología | Versión |
|---|---|
| Vue 3 | ^3.5 |
| TypeScript | ~5.9 |
| Vite | ^7 |
| Vue Router | ^5 |
| TailwindCSS | ^4.2 (vía @tailwindcss/vite) |

---

## Instalación

```bash
git clone <repo-url>
cd flowestudio-landing
npm install
```

## Variables de entorno

El proyecto usa un archivo central en `src/config/env.ts` para manejar todas las URLs configurables.

**Para desarrollo local:**

```bash
cp .env.example .env.local
```

Edita `.env.local` con los valores de tu entorno (puertos, URLs locales, etc.).

**Para producción (Firebase u otro hosting):**

Crea un archivo `.env.production` con los valores reales antes de hacer build:

```bash
# .env.production (no commitear)
VITE_APP_NAME=FlowEstudio
VITE_ENVIRONMENT=production
VITE_LANDING_URL=https://flowestudio.com
VITE_DASHBOARD_URL=https://app.flowestudio.com
VITE_API_BASE_URL=https://api.flowestudio.com
VITE_LOGIN_URL=https://app.flowestudio.com/login
VITE_SIGNUP_URL=https://app.flowestudio.com/signup
VITE_SUPPORT_EMAIL=hola@flowestudio.com
```

Variables disponibles:

| Variable | Descripción | Ejemplo local |
|---|---|---|
| `VITE_APP_NAME` | Nombre de la app | `FlowEstudio` |
| `VITE_ENVIRONMENT` | Entorno | `development` |
| `VITE_LANDING_URL` | URL de esta landing | `http://localhost:5173` |
| `VITE_DASHBOARD_URL` | URL del dashboard | `http://localhost:5174` |
| `VITE_API_BASE_URL` | URL base del API | `http://localhost:8000` |
| `VITE_LOGIN_URL` | URL de login | `http://localhost:5174/login` |
| `VITE_SIGNUP_URL` | URL de signup | `http://localhost:5174/signup` |
| `VITE_SUPPORT_EMAIL` | Email de soporte | `hola@flowestudio.com` |

> Regla de Vite: solo las variables que empiezan con `VITE_` son accesibles desde el frontend.

## Desarrollo

```bash
npm run dev
```

El proyecto se abre en: `http://localhost:5173`

## Build

```bash
npm run build
npm run preview   # preview local del build
```

---

## Estructura

```
src/
├── components/
│   └── landing/
│       ├── NavbarSection.vue      # Barra de navegación fija
│       ├── HeroSection.vue        # Hero con headline + mockup
│       ├── ProblemSection.vue     # Pain points del usuario
│       ├── BenefitsSection.vue    # Características/beneficios (id="features")
│       ├── HowItWorksSection.vue  # Pasos de onboarding (id="how-it-works")
│       ├── CTASection.vue         # CTA intermedio
│       ├── FAQSection.vue         # Preguntas frecuentes (id="faq")
│       └── FooterSection.vue      # Footer con links legales
├── pages/
│   ├── HomePage.vue               # /
│   ├── PrivacyPage.vue            # /privacy
│   ├── TermsPage.vue              # /terms
│   └── NotFoundPage.vue           # catch-all 404
├── router/
│   └── index.ts
├── App.vue
├── main.ts
└── style.css
```

---

## Rutas

| Ruta | Página |
|---|---|
| `/` | Landing principal |
| `/privacy` | Política de privacidad |
| `/terms` | Términos de uso |
| `/signup` | Registro (app externa) |
| `/login` | Login (app externa) |
| `/*` | 404 Not Found |

---

## Proyectos relacionados

```
flowestudio-landing   ← este repositorio (sitio público)
flowestudio-dashboard → aplicación frontend/dashboard
flowestudio-backend   → API y lógica del sistema
```

---

## Público objetivo

- Estudios de Pilates y yoga
- Gimnasios pequeños y medianos
- Negocios fitness con atención por WhatsApp

## Próximos pasos sugeridos

- Agregar mockups reales del dashboard en el hero
- Añadir sección de testimonios / casos de uso
- Implementar analítica (Plausible, Posthog, etc.)
- Mejorar SEO (meta tags, og:image, sitemap)
- Conectar formulario de waitlist si aplica
