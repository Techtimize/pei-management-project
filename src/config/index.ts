const env = import.meta.env.VITE_ENV
export const conf = {
  GPE_ENABLED: parseInt(import.meta.env.VITE_GPE_ENABLED ?? '0'),
  API_URL:
    env === 'dev'
      ? import.meta.env.VITE_API_URL
      : window.__RUNTIME_CONFIG__?.VITE_API_URL,
  APP_URL:
    env === 'dev'
      ? import.meta.env.VITE_APP_URL
      : window.__RUNTIME_CONFIG__?.VITE_APP_URL,
  AZURE_TENANT_ID:
    env === 'dev'
      ? import.meta.env.VITE_AZURE_TENANT_ID
      : window.__RUNTIME_CONFIG__?.VITE_AZURE_TENANT_ID,
  AZURE_CLIENT_ID:
    env === 'dev'
      ? import.meta.env.VITE_AZURE_CLIENT_ID
      : window.__RUNTIME_CONFIG__?.VITE_AZURE_CLIENT_ID
}
