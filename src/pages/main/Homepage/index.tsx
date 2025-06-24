import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Select, { CSSObjectWithLabel, SingleValue } from 'react-select'
import { useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum } from '@/store/reducers/moduleSlice'
import {
  companies,
  ICompany,
  ISearchByOption,
  searchByOptions
} from '@/config/constants'
import { ActionTypes, IPeiFields } from '../PEIListing/types'
import { useNavigate } from 'react-router'
import { axiosInstance } from '@/config/axiosConfig'

const selectStyle = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    height: '100%',
    textAlign: 'start' as CSSObjectWithLabel['textAlign'],
    fontSize: '14px'
  }),
  option: (styles: CSSObjectWithLabel) => ({
    ...styles,
    textAlign: 'start' as CSSObjectWithLabel['textAlign'],
    fontSize: '14px'
  })
}

function Homepage() {
  const [companyValue, setCompanyValue] = useState<ICompany>(companies[0])
  const [searchByValue, setSearchByValue] = useState<ISearchByOption>(
    searchByOptions[0]
  )
  const [filteredItems, setFilteredItems] = useState<IPeiFields[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const navigate = useNavigate()

  const moduleType = useAppSelector((state) => state.module.moduleType)

  const onCompanyChange = (newValue: SingleValue<ICompany>) => {
    setCompanyValue(newValue as ICompany)
  }

  const onSearchByChange = (newValue: SingleValue<ISearchByOption>) => {
    setSearchByValue(newValue as ISearchByOption)
  }

  useEffect(() => {
    if (moduleType === ModuleTypeEnum.USPE)
      setCompanyValue((companyValue) =>
        companyValue.isUS ? companyValue : companies[0]
      )
  }, [moduleType])

  useEffect(() => {
    if (searchTerm != '') searchCompany(searchByValue.value, searchTerm)
  }, [searchTerm, searchByValue])

  async function searchCompany(searchBy: string, searchTerm: string) {
    const res = await axiosInstance.get('/pei-company/searchPieCompany', {
      params: {
        pageNo: 1,
        limit: 10000,
        searchField: `${searchBy}`,
        searchText: searchTerm
      }
    })
    if (res.status === 200) setFilteredItems(res.data.data)
  }

  return (
    <div className='flex h-[100%] justify-center items-center p-4 md:px-10'>
      <div className='relative w-full flex flex-col md:flex-row gap-2'>
        <div className='relative lg:flex-2 md:flex-1 h-[38px]'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 bg-white' />
          <Input
            className='w-full pl-10 h-[38px] !bg-white'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {searchTerm &&
            isSearchFocused &&
            !!filteredItems &&
            !!filteredItems.length && (
              <div className='absolute w-full bg-white border-2 border-gray-300 rounded-lg mt-2 max-h-[200px] overflow-y-auto z-10 text-start shadow-lg'>
                {filteredItems.map((item) => (
                  <div
                    key={item.pei_pb_id}
                    className='px-4 py-3 hover:bg-tertiary-2 cursor-pointer border-b border-tertiary-2 last:border-b-0'
                    onMouseDown={() => {
                      // setFilteredItems([])
                      // setSearchTerm(item[searchByValue.value as keyof IPeiFields])
                      // setIsSearchFocused(false)
                      navigate(`/${companyValue.value}-companies`, {
                        state: {
                          actionType: ActionTypes.SEARCH,
                          pei_pb_id: item.pei_pb_id
                        }
                      })
                    }}
                  >
                    {searchByValue.value !== 'pei_pb_name' && (
                      <span className='text-gray-500 text-sm mr-2'>
                        {item[searchByValue.value as keyof IPeiFields]}
                      </span>
                    )}
                    <span className=''>{item.pei_pb_name}</span>
                  </div>
                ))}
              </div>
            )}
        </div>

        <div className='w-full flex-1'>
          <Select
            value={companyValue}
            name='companies'
            options={companies.filter((company) =>
              (moduleType === ModuleTypeEnum.USPE && company.isUS) ||
              moduleType === ModuleTypeEnum.GPE
                ? true
                : false
            )}
            styles={selectStyle}
            onChange={onCompanyChange}
          />
        </div>
        <div className='w-full flex-1'>
          <Select
            value={searchByValue}
            name='searchBy'
            options={searchByOptions}
            styles={selectStyle}
            onChange={onSearchByChange}
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
