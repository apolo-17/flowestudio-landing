import { APP_NAME, LANDING_URL } from '../config/env'

export const SITE_NAME = APP_NAME
export const SITE_URL = LANDING_URL.replace(/\/+$/, '')

export const DEFAULT_KEYWORDS =
  'software para estudios de pilates, software fitness, automatizar whatsapp gimnasio, sistema de reservas fitness, app para estudios de pilates'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/favicon-flowestudio.png`

export function normalizePath(path: string): string {
  if (!path) return '/'

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`

  if (withLeadingSlash !== '/' && withLeadingSlash.endsWith('/')) {
    return withLeadingSlash.slice(0, -1)
  }

  return withLeadingSlash
}

export function buildCanonical(path: string): string {
  const normalizedPath = normalizePath(path)
  return `${SITE_URL}${normalizedPath}`
}
