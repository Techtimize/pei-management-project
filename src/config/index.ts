export const conf = {
  GPE_ENABLED: parseInt(import.meta.env.VITE_GPE_ENABLED ?? '0'),
  API_URL: import.meta.env.VITE_API_URL,
  APP_URL: import.meta.env.VITE_APP_URL,
  AZURE_TENANT_ID: import.meta.env.VITE_AZURE_TENANT_ID,
  AZURE_CLIENT_ID: import.meta.env.VITE_AZURE_CLIENT_ID
}
