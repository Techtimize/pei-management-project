import React, { useState } from 'react'
import { Outlet } from 'react-router'
import TopBar from './components/Topbar'
import Sidebar from './components/Sidebar'

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <div
        className='flex flex-row min-h-screen min-w-screen'
        id='main-container'
      >
        <div
          className={`flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            showSidebar ? 'w-1/5' : 'w-0'
          }`}
          id='side-bar'
        >
          <Sidebar />
        </div>
        <div
          className={`z-500 flex flex-col h-100vh transition-all duration-300 ease-in-out ${
            showSidebar ? 'w-4/5' : 'w-full'
          }`}
          id='main-layout'
        >
          <TopBar toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
