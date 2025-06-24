import axios from 'axios'
import { redirect } from 'react-router'
import { conf } from '.'

const axiosInstance = axios.create({
  baseURL: conf.API_URL
})

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
    const originalRequest = error.config

    if (error.response.status === 401) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      redirect('/auth/login')
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refresh_token')
      return axiosInstance
        .post('/auth/token', {
          refresh_token: refreshToken
        })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem('access_token', res.data.access_token)
            axiosInstance.defaults.headers.common['Authorization'] =
              'Bearer ' + localStorage.getItem('access_token')
            return axiosInstance(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  }
)

export { axiosInstance }
