import { axiosInstance } from '@/config/axiosConfig'
import { useAppDispatch } from '@/hooks/storeHooks'
import { login } from '@/store/reducers/authSlice'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Spinner from '@/components/ui/spinner'

function Callback() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (window.location.hash) {
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const accessToken = hashParams.get('access_token')
      if (accessToken) {
        console.log('🚀 ~ handleMicrosoftLogin ~ accessToken:', accessToken)
        verifyToken(accessToken)
      } else {
        console.log('🚀 ~ No access token found.')
      }
    }
  }, [])

  async function verifyToken(token?: string) {
    try {
      if (!token) return
      const res = await axiosInstance.post(`/auth/login`, {
        access_token: token
      })
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem('access_token', res.data.data.accessToken)
        localStorage.setItem('refresh_token', res.data.data.refreshToken)
        dispatch(login())
        navigate('/')
      } else throw new Error('Token verification failed')
    } catch (error) {
      console.error('Error verifying token:', error)
      navigate('/auth/login')
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <Spinner size='lg' />
    </div>
  )
}

export default Callback
