/**
 * Configuración central de variables de entorno.
 *
 * Todas las URLs y valores configurables de la landing se leen desde aquí.
 * Para cambiar entre entornos, edita .env.local (desarrollo) o .env.production.
 * Nunca hardcodees estas URLs directamente en los componentes.
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'FlowEstudio'

export const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'development'

export const LANDING_URL = import.meta.env.VITE_LANDING_URL || 'http://localhost:5173'

export const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174'

const DASHBOARD_BASE_URL = DASHBOARD_URL.replace(/\/+$/, '')

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || `${DASHBOARD_BASE_URL}/login`

export const SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL || `${DASHBOARD_BASE_URL}/signup`

export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL || 'hola@flowestudioapp.com'
