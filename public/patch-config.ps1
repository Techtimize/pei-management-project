$config = @{
  VITE_API_URL = $env:VITE_API_URL
  VITE_APP_URL = $env:VITE_APP_URL
  GPE_ENABLED = $env:GPE_ENABLED
  VITE_AZURE_TENANT_ID = $env:VITE_AZURE_TENANT_ID
  VITE_AZURE_CLIENT_ID = $env:VITE_AZURE_CLIENT_ID
}
$config | ConvertTo-Json -Depth 10 | Set-Content -Encoding UTF8 "$env:HOME\site\wwwroot\config.json"
