/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_ENVIRONMENT: string
  readonly VITE_LANDING_URL: string
  readonly VITE_DASHBOARD_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_LOGIN_URL: string
  readonly VITE_SIGNUP_URL: string
  readonly VITE_SUPPORT_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
