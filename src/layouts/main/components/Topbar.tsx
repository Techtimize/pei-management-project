import React, { useState, useEffect, useRef } from 'react'
import {
  // FiBell,
  // FiSettings,
  FiUser,
  FiMenu,
  FiLogOut
} from 'react-icons/fi'
import type { ITopBarProps } from '../types'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { logout } from '@/store/reducers/authSlice'

const TopBar = ({ toggleSidebar, layout }: ITopBarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  // NOT Needed at the moment
  // const [showNotifications, setShowNotifications] = useState(false)

  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const auth = useAppSelector((state) => state.auth)

  // Not NOT Needed at the moment
  // const notificationsRef = useRef<HTMLDivElement>(null)

  const profileRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // NOT Needed at the moment
      // if (
      //   notificationsRef.current &&
      //   !notificationsRef.current.contains(event.target as Node)
      // ) {
      //   setShowNotifications(false)
      // }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    dispatch(logout())
  }

  return (
    <div
      className={`${
        layout === 'desktop'
          ? 'h-1/8 2xl:h-1/12'
          : !showMobileMenu
          ? 'h-1/10'
          : 'h-1/4'
      } w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 shadow-sm bg-tertiary-1`}
    >
      <div className='w-full h-full md:w-52 flex items-center justify-between md:justify-start gap-4 z-50'>
        <FiMenu
          className='w-6 h-6 text-gray-300 cursor-pointer hover:text-white'
          onClick={toggleSidebar}
        />
        <button
          className='md:hidden text-gray-300'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FiMenu className='w-6 h-6' />
        </button>
      </div>

      <div className='hidden md:flex flex-1 justify-center'>
        <span className='text-white text-lg'>PEI Management Platform</span>
      </div>

      <div
        className={`${
          showMobileMenu ? 'flex' : 'hidden'
        } md:flex w-full md:w-52 flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
      >
        {/* NOT Needed at the moment */}
        {/* <div className='relative' ref={notificationsRef}>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FiBell className='w-6 h-6 text-gray-300 cursor-pointer hover:text-white' />
            {showMobileMenu && (
              <span className='ml-2 font-medium text-gray-300 hover:text-white'>
                Notifications
              </span>
            )}
          </div>
          {showNotifications && (
            <div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50'>
              <div className='px-4 py-2 text-sm text-gray-700'>
                <div className='font-bold mb-2'>Notifications</div>
                <div className='space-y-2'>
                  <div className='text-xs'>No new notifications</div>
                </div>
              </div>
            </div>
          )}
        </div> */}

        {/* NOT Needed at the moment */}
        {/* <div className='relative'>
          <div
            className='flex items-center cursor-pointer'
            // onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <FiSettings className='w-6 h-6 text-gray-300 cursor-pointer hover:text-white' />
            {showMobileMenu && (
              <span className='ml-2 font-medium text-gray-300 hover:text-white'>
                Settings
              </span>
            )}
          </div>
        </div> */}

        <div className='relative' ref={profileRef}>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <FiUser className='w-8 h-8 p-1 rounded-full bg-white text-gray-300' />
            <span className='ml-2 font-medium text-gray-300 hover:text-white'>
              {auth.name}
            </span>
          </div>
          {showProfileMenu && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50'>
              <div
                className='w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer'
                onClick={handleLogout}
              >
                <FiLogOut className='mr-2' />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopBar
