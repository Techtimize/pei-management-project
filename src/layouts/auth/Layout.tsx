import React from 'react'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthLayout
