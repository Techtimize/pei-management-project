interface RuntimeConfig {
  VITE_GPE_ENABLED: 0
  VITE_API_URL: string
  VITE_API_URL: string
  VITE_APP_URL: string
  VITE_AZURE_TENANT_ID: string
  VITE_AZURE_CLIENT_ID: string
}

interface Window {
  __RUNTIME_CONFIG__?: RuntimeConfig
}
