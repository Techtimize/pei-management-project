import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import TopBar from './components/Topbar'
import Sidebar from './components/Sidebar'

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [layout, setLayout] = useState<'mobile' | 'desktop'>(
    viewportWidth < 768 ? 'mobile' : 'desktop'
  )

  useEffect(() => {
    setLayout(viewportWidth < 768 ? 'mobile' : 'desktop')
  }, [viewportWidth])

  useEffect(() => {
    if (layout === 'mobile') setShowSidebar(false)
    else setShowSidebar(true)
  }, [layout])

  return (
    <>
      <div
        className='flex flex-row min-h-screen min-w-screen'
        id='main-container'
      >
        <div
          className={`flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            layout === 'desktop' ? '' : 'fixed left-0 top-0 h-screen z-30'
          } ${
            showSidebar ? (layout === 'desktop' ? 'w-1/5' : 'w-1/3') : 'w-0'
          }`}
          id='side-bar'
        >
          <Sidebar />
        </div>
        <div
          className={` flex flex-col h-100vh transition-all duration-300 ease-in-out ${
            showSidebar && layout === 'desktop' ? 'w-4/5' : 'w-full'
          }`}
          id='main-layout'
        >
          <TopBar toggleSidebar={toggleSidebar} layout={layout} />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
