import React, { useEffect, useState } from 'react'
import { columns, ICompany } from './columns'
import { DataTable } from '../../../components/dataTable/data-table'

function PEIListingPage() {
  const [data, setData] = useState<ICompany[]>([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    // Fetch data from your API here.
    setData([
      {
        id: '728ed52f1',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f2',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f3',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f4',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f5',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f6',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f7',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f8',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f9',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f10',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f11',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f12',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f13',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f14',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f15',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      }
    ])
  }

  return (
    <div className='w-full py-10 px-2 bg-tertiary-2'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PEIListingPage
