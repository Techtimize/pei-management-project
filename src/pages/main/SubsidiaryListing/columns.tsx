import { ColumnDef } from '@tanstack/react-table'
import { DataTableCommon } from '@/components/dataTable/common'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ICompany {
  id: string
  company: string
  type: string
  vendor: string
  inStock: number
  unitCost: number
  material: string
  color: string
}

const dataTableCommon = new DataTableCommon<ICompany>()

export const columns: ColumnDef<ICompany>[] = [
  {
    header: '#',
    cell: dataTableCommon.indexCell
  },
  {
    accessorKey: 'company',
    header: ({ column }) =>
      dataTableCommon.styledHeader(
        'Company',
        column,
        '!bg-primary-1 !text-white'
      ),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'vendor',
    header: 'Vendor',
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'inStock',
    header: () => dataTableCommon.centerHeader('In Stock'),
    cell: dataTableCommon.centerCell
  },
  {
    accessorKey: 'unitCost',
    header: () => dataTableCommon.centerHeader('Unit Cost'),
    cell: dataTableCommon.centerCell
  },
  {
    accessorKey: 'material',
    header: 'Material',
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'color',
    header: 'Color',
    cell: dataTableCommon.leftCell
  }
]
