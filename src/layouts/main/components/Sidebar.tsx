import React, { SetStateAction } from 'react'
import { Link, useLocation } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum, setModuleType } from '@/store/reducers/moduleSlice'
import ModuleSelector from '@/components/moduleSelector/ModuleSelector'
import { mainRoutes } from '@/config/routes'

interface ISidebarProps {
  showSidebar?: boolean
  setShowSidebar: React.Dispatch<SetStateAction<boolean>>
  layout: 'mobile' | 'desktop'
}

const Sidebar = ({
  showSidebar = true,
  setShowSidebar,
  layout
}: ISidebarProps) => {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const dispatch = useAppDispatch()
  const location = useLocation()

  function handleModuleChange(moduleType: ModuleTypeEnum) {
    dispatch(setModuleType(moduleType))
  }

  return (
    <div className='relative top-0 left-0 flex flex-col justify-center w-[100%] h-screen bg-tertiary-1 text-white'>
      <div className='h-1/4 flex justify-center items-center'>
        <img src='/logo.png' alt='deloitte-logo' className='h-[100px]' />
      </div>
      <div className='h-3/4 space-y-10'>
        <nav>
          <ul className='space-y-2'>
            {mainRoutes.map((route) =>
              (moduleType === ModuleTypeEnum.USPE && route.isUs) ||
              moduleType === ModuleTypeEnum.GPE ? (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    onClick={() =>
                      layout &&
                      layout === 'mobile' &&
                      setShowSidebar(!showSidebar)
                    }
                    className={`flex items-center px-6 py-3 text-gray-300 hover:bg-tertiary-2 hover:text-black transition-colors ${
                      location.pathname === route.path && showSidebar
                        ? 'bg-tertiary-3'
                        : ''
                    }`}
                  >
                    {route.svg}
                    <span className='overflow-hidden'>{route.label}</span>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </nav>

        <ModuleSelector
          handleModuleChange={handleModuleChange}
          moduleType={moduleType}
          dark={false}
        />
      </div>
    </div>
  )
}

export default Sidebar
