import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/main/Layout'
import Homepage from './pages/main/Homepage'
import AuthLayout from './layouts/auth/Layout'
import Login from './pages/auth/Login'

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
