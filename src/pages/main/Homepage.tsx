import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Select, { CSSObjectWithLabel, OnChangeValue } from 'react-select'
import { useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum } from '@/store/reducers/moduleSlice'
import { companies } from '@/config/constants'

const selectStyle = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    height: '100%'
  }),
  option: (styles: CSSObjectWithLabel) => ({
    ...styles,
    textAlign: 'start' as CSSObjectWithLabel['textAlign']
  })
}

function Homepage() {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const [value, setValue] = useState<typeof companies>([companies[0]])

  const onChange = (newValue: OnChangeValue<(typeof companies)[0], true>) => {
    setValue(newValue as typeof companies)
  }

  useEffect(() => {
    if (moduleType === ModuleTypeEnum.USPE)
      setValue(value.filter((company) => company.isUS))
  }, [moduleType])

  return (
    <div className='flex h-[100%] justify-center items-center p-4 md:px-10 bg-white'>
      <div className='relative w-full flex flex-col md:flex-row gap-2'>
        <div className='relative lg:flex-2 md:flex-1 h-[38px]'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
          <Input className='w-full pl-10 h-[38px]' />
        </div>

        <div className='w-full flex-1'>
          <Select
            value={value}
            isMulti
            name='companies'
            options={companies.filter((company) =>
              (moduleType === ModuleTypeEnum.USPE && company.isUS) ||
              moduleType === ModuleTypeEnum.GPE
                ? true
                : false
            )}
            className='basic-multi-select'
            classNamePrefix='select'
            styles={selectStyle}
            onChange={onChange}
          />
        </div>

        <input
          type='button'
          className='h-[38px] w-full md:w-auto bg-secondary-1 hover:bg-secondary-1/90 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          value='Search'
        />
      </div>
    </div>
  )
}

export default Homepage
