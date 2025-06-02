import React from 'react'
import { Link } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum, setModuleType } from '@/store/reducers/moduleSlice'

const Sidebar = () => {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const dispatch = useAppDispatch()

  function handleModuleChange(moduleType: ModuleTypeEnum) {
    dispatch(setModuleType(moduleType))
  }

  return (
    <div className='flex flex-col justify-center w-[100%] h-screen bg-primary-3 text-white'>
      <nav>
        <ul className='space-y-2'>
          <li>
            <Link
              to='/'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span className='overflow-hidden'>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>

              <span className='overflow-hidden'>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to='/profile'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>

              <span className='overflow-hidden'>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to='/settings'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>

              <span className='overflow-hidden'>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              to='/messages'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                />
              </svg>

              <span className='overflow-hidden'>Messages</span>
            </Link>
          </li>
          <li>
            <Link
              to='/help'
              className='flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors'
            >
              <svg
                className='w-5 h-5 mr-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span className='overflow-hidden'>Help</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='px-6 py-4 overflow-hidden'>
        <div className='flex gap-4 overflow-hidden'>
          <label className='flex items-center text-lg'>
            <input
              type='radio'
              value={ModuleTypeEnum.GPE}
              checked={moduleType === ModuleTypeEnum.GPE}
              onChange={(e) =>
                handleModuleChange(e.target.value as unknown as ModuleTypeEnum)
              }
              className='mr-2 appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-secondary-1 checked:bg-clip-content checked:p-[2px]'
            />
            GPE
          </label>

          <label className='flex items-center text-lg'>
            <input
              type='radio'
              value={ModuleTypeEnum.USPE}
              checked={moduleType === ModuleTypeEnum.USPE}
              onChange={(e) =>
                handleModuleChange(e.target.value as unknown as ModuleTypeEnum)
              }
              className='mr-2 appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-secondary-1 checked:bg-clip-content checked:p-[2px]'
            />
            USPE
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
