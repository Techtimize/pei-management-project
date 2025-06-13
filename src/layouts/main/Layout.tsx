import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import TopBar from './components/Topbar'
import Sidebar from './components/Sidebar'
import { useAppSelector } from '@/hooks/storeHooks'
import BottomSheet from './components/BottomSheet'

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const auth = useAppSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) navigate('/auth/login', { replace: true })
  }, [auth])

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
            showSidebar ? (layout === 'desktop' ? 'w-1/5' : 'w-2/5') : 'w-0'
          }`}
          id='side-bar'
        >
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            layout={layout}
          />
        </div>
        <div
          className={`flex flex-col h-[100vh] transition-all duration-300 ease-in-out ${
            showSidebar && layout === 'desktop' ? 'w-4/5' : 'w-screen'
          }`}
          id='main-layout'
        >
          <TopBar toggleSidebar={toggleSidebar} layout={layout} />
          <div className='h-7/8 w-full overflow-y-auto bg-tertiary-3'>
            <Outlet />
          </div>
        </div>
      </div>

      <div className='fixed bottom-0 right-0 left-0 transition-all duration-100 ease-in-out bg-primary-3 hover:bg-primary-2 cursor-pointer h-5 text-white text-sm'>
        <BottomSheet />
      </div>
    </>
  )
}

export default MainLayout
