import React from 'react'
import { FiBell, FiSettings, FiUser, FiMenu } from 'react-icons/fi'
import type { ITopBarProps } from '../types'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'

const TopBar = ({ toggleSidebar }: ITopBarProps) => {
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  // function handleModuleChange(moduleType: ModuleTypeEnum) {
  //   dispatch(setModuleType(moduleType))
  // }

  return (
    <div className='w-full flex items-center justify-between px-6 py-4 shadow-sm bg-primary-3'>
      <div className='w-52 flex items-center gap-4 z-50'>
        <FiMenu
          className='w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-800'
          onClick={toggleSidebar}
        />
        <h1 className='text-xl font-bold text-gray-300'>Logo</h1>
      </div>

      <div className='flex-1 flex justify-center'>
        <span className='text-white text-lg'>PEI Management Platform</span>
      </div>

      <div className='w-52 flex items-center justify-end space-x-6'>
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
