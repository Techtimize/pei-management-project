import React from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Checked = DropdownMenuCheckboxItemProps['checked']

export function DropdownMenuCheckboxes() {
  const [PEI, setPEI] = React.useState<Checked>(true)
  const [portfolio, setPortfolio] = React.useState<Checked>(false)
  const [local, setLocal] = React.useState<Checked>(false)
  const [subsidiary, setSubsidiary] = React.useState<Checked>(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <input
          value='Select type'
          type='button'
          className='text-white bg-primary-1 hover:bg-primary-1/90 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Companies</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={PEI} onCheckedChange={setPEI}>
          PEI
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={portfolio}
          onCheckedChange={setPortfolio}
        >
          Portfolio
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={subsidiary}
          onCheckedChange={setSubsidiary}
        >
          Subsidiary
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={local} onCheckedChange={setLocal}>
          Local
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Homepage() {
  return (
    <div className='flex h-[100%] justify-center items-center px-10'>
      <div className='relative w-full flex gap-2'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
          <Input className='w-full pl-10 h-[100%]' />
        </div>

        <DropdownMenuCheckboxes />

        <input
          type='button'
          className='bg-secondary-1 hover:bg-secondary-1/90 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          value='Search'
        />
      </div>
    </div>
  )
}

export default Homepage
