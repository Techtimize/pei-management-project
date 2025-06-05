import React from 'react'
import { Link, useLocation } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum, setModuleType } from '@/store/reducers/moduleSlice'
import ModuleSelector from '@/components/moduleSelector/ModuleSelector'
import { mainRoutes } from '@/config/routes'

interface ISidebarProps {
  showSidebar?: boolean
}

const Sidebar = ({ showSidebar = true }: ISidebarProps) => {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const dispatch = useAppDispatch()
  const location = useLocation()

  function handleModuleChange(moduleType: ModuleTypeEnum) {
    dispatch(setModuleType(moduleType))
  }

  return (
    <div className='relative top-0 left-0 flex flex-col justify-center w-[100%] h-screen bg-primary-3 text-white'>
      <nav>
        <ul className='space-y-2'>
          {mainRoutes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`flex items-center px-6 py-3 text-gray-300 hover:bg-primary-1 transition-colors ${
                  location.pathname === route.path && showSidebar
                    ? 'bg-primary-1'
                    : ''
                }`}
              >
                {route.svg}
                <span className='overflow-hidden'>{route.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ModuleSelector
        handleModuleChange={handleModuleChange}
        moduleType={moduleType}
        dark={false}
      />
    </div>
  )
}

export default Sidebar
