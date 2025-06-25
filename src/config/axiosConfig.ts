import axios from 'axios'
import { conf } from '.'
import { getNavigateRef } from '@/lib/utils'

const axiosInstance = axios.create({
  baseURL: conf.API_URL
})

const navigate = getNavigateRef()
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      if (navigate) navigate('/auth/login')
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export { axiosInstance }
