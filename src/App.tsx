import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/main/Layout'
import AuthLayout from './layouts/auth/Layout'
import Login from './pages/auth/Login'
import { mainRoutes } from './config/routes'

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='/' element={<MainLayout />}>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
