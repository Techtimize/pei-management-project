import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
      <div
        className='flex flex-row min-h-screen min-w-screen'
        id='main-container'
      >
        <div
          className='flex flex-col w-1/5 bg-black justify-center items-center'
          id='side-bar'
        >
          <p>SideBar</p>
        </div>
        <div className='flex flex-col w-full h-100vh' id='main-layout'>
          <div className='w-full flex flex-row h-15 bg-black'>
            <p>MainLayout</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
