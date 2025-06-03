import React, { useState } from 'react'
import { FiBell, FiSettings, FiUser, FiMenu } from 'react-icons/fi'
import type { ITopBarProps } from '../types'
import { useAppSelector } from '@/hooks/storeHooks'

const TopBar = ({ toggleSidebar, layout }: ITopBarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(layout === 'mobile')
  const auth = useAppSelector((state) => state.auth)

  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 shadow-sm bg-primary-3'>
      <div className='w-full md:w-52 flex items-center justify-between md:justify-start gap-4 z-50'>
        <div className='flex items-center gap-4'>
          <FiMenu
            className='w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-800'
            onClick={toggleSidebar}
          />
          <h1 className='text-xl font-bold text-gray-300'>Logo</h1>
        </div>
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
        <FiBell className='w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-800' />
        <FiSettings className='w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-800' />
        <div className='flex items-center cursor-pointer'>
          <FiUser className='w-8 h-8 p-1 rounded-full bg-white text-gray-300' />
          <span className='ml-2 font-medium text-gray-300'>{auth.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
