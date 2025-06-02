import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/main/Layout'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
