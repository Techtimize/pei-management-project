import { ModuleTypeEnum } from '@/store/reducers/moduleSlice'
import React from 'react'

interface IModuleSelectorProps {
  moduleType: ModuleTypeEnum
  handleModuleChange: (moduleType: ModuleTypeEnum) => void
  dark?: boolean
}
function ModuleSelector({
  moduleType,
  handleModuleChange,
  dark = true
}: IModuleSelectorProps) {
  return (
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
            className={`${
              dark ? 'border-black' : 'border-white'
            } mr-2 appearance-none w-4 h-4 border-2 rounded-full checked:bg-secondary-1 checked:bg-clip-content checked:p-[2px]`}
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
            className={`${
              dark ? 'border-black' : 'border-white'
            } mr-2 appearance-none w-4 h-4 border-2 rounded-full checked:bg-secondary-1 checked:bg-clip-content checked:p-[2px]`}
          />
          USPE
        </label>
      </div>
    </div>
  )
}

export default ModuleSelector
