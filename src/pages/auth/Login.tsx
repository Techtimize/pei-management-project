import React, { useEffect } from 'react'
import ModuleSelector from '@/components/moduleSelector/ModuleSelector'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum, setModuleType } from '@/store/reducers/moduleSlice'
import { useNavigate } from 'react-router'
import { conf } from '@/config'

function Login() {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  function handleModuleChange(moduleType: ModuleTypeEnum) {
    dispatch(setModuleType(moduleType))
  }

  function handleMicrosoftLogin() {
    // Implement Microsoft OAuth login logic here
    console.log('Microsoft login clicked')
    const clientId = conf.AZURE_CLIENT_ID
    const tenantId = conf.AZURE_TENANT_ID

    const redirectUri = `${conf.APP_URL}/auth/callback`
    const scope =
      'openid profile email https://graph.microsoft.com/User.ReadBasic.All'
    const authUrl =
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
      `?client_id=${clientId}` +
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&response_mode=fragment`
    window.location.href = authUrl
  }

  return (
    <div className='min-w-screen min-h-screen flex flex-col items-center justify-center bg-tertiary-2 space-y-10 pb-2'>
      <div>
        <div className='h-2/5 flex justify-center items-center'>
          <img src='/logo.png' alt='deloitte-logo' className='h-full' />
        </div>

        <h2 className='text-3xl text-center h-1/5'>
          PEI Database Management System
        </h2>
      </div>

      <form className='flex flex-col items-center w-2/7 mb-5 h-2/5'>
        <ModuleSelector
          handleModuleChange={handleModuleChange}
          moduleType={moduleType}
        />

        <div className='mt-4'>
          <button
            type='button'
            onClick={handleMicrosoftLogin}
            className='flex items-center justify-center gap-2 !bg-[#2F2F2F] !text-white px-4 py-2 rounded-md hover:bg-[#404040] transition-colors w-64'
          >
            <img
              src='/microsoft-logo.png'
              alt='Microsoft'
              className='w-5 h-5'
            />
            Sign in with Microsoft
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
