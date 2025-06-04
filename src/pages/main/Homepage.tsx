import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Select, { CSSObjectWithLabel, OnChangeValue } from 'react-select'
import { useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum } from '@/store/reducers/moduleSlice'
import { companies } from '@/config/constants'

interface IFilteredItems {
  value: string
  id: string
}

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
  const [companyValue, setCompanyValue] = useState<typeof companies>([
    companies[0]
  ])
  const [filteredItems, setFilteredItems] = useState<IFilteredItems[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [values] = useState<IFilteredItems[]>([
    { id: '1', value: 'Golden Crust' },
    { id: '2', value: 'Classic Slice' },
    { id: '3', value: 'Crust Corner' },
    { id: '4', value: 'Slice Haven, Pie Palace' },
    { id: '11', value: 'Pie Palace' },
    { id: '12', value: 'Pizza Paradise' },
    { id: '5', value: 'Dough Dynasty' },
    { id: '6', value: 'Crust & Co.' },
    { id: '7', value: 'Pepperoni Place' },
    { id: '8', value: 'Margherita Masters' },
    { id: '9', value: 'Cheesy Corner' },
    { id: '10', value: 'Pizza Planet' }
  ])

  const moduleType = useAppSelector((state) => state.module.moduleType)

  const onChange = (newValue: OnChangeValue<(typeof companies)[0], true>) => {
    setCompanyValue(newValue as typeof companies)
  }

  useEffect(() => {
    if (moduleType === ModuleTypeEnum.USPE)
      setCompanyValue((companyValue) =>
        companyValue.filter((company) => company.isUS)
      )
  }, [moduleType])

  useEffect(() => {
    setFilteredItems(
      values.filter((val) =>
        val.value.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
      )
    )
  }, [searchTerm, values])

  return (
    <div className='flex h-[100%] justify-center items-center p-4 md:px-10 bg-white'>
      <div className='relative w-full flex flex-col md:flex-row gap-2'>
        <div className='relative lg:flex-2 md:flex-1 h-[38px]'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
          <Input
            className='w-full pl-10 h-[38px]'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          {searchTerm && !!filteredItems.length && (
            <div className='absolute w-full bg-white border-2 border-gray-300 rounded-lg mt-2 max-h-[200px] overflow-y-auto z-10 text-start shadow-lg'>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className='px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0'
                  onClick={() => {
                    setFilteredItems([])
                  }}
                >
                  {item.value}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='w-full flex-1'>
          <Select
            value={companyValue}
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
