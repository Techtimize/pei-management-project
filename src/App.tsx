import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import './App.css'
import MainLayout from './layouts/main/Layout'
import AuthLayout from './layouts/auth/Layout'
import { mainRoutes, publicRoutes } from './config/routes'
import { useAppSelector } from './hooks/storeHooks'
import { ModuleTypeEnum } from './store/reducers/moduleSlice'
import { setNavigateRef } from './lib/utils'

function App() {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setNavigateRef(navigate)
  }, [navigate])

  useEffect(() => {
    if (
      moduleType === ModuleTypeEnum.USPE &&
      (location.pathname.includes('local-companies') ||
        location.pathname.includes('subsidiary-companies'))
    )
      navigate('/', { replace: true })
  }, [moduleType])

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/auth' element={<AuthLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* Protected Routes*/}
      <Route path='/' element={<MainLayout />}>
        {mainRoutes.map((route) =>
          (moduleType === ModuleTypeEnum.USPE && route.isUs) ||
          moduleType === ModuleTypeEnum.GPE ? (
            <Route key={route.path} path={route.path} element={route.element} />
          ) : null
        )}
      </Route>
    </Routes>
  )
}

export default App
