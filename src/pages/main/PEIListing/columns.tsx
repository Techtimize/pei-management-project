import { ColumnDef } from '@tanstack/react-table'
import { DataTableCommon } from '@/components/dataTable/common'
import { ActionTypes } from '@/components/dataTable/types'

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

function handleView(id: string, type: ActionTypes) {
  console.log(`View ${id} with type ${type}`)
}

function handleEdit(id: string, type: ActionTypes) {
  console.log(`View ${id} with type ${type}`)
}

function handleRelationship(id: string, type: ActionTypes) {
  console.log(`View ${id} with type ${type}`)
}

export const columns: ColumnDef<ICompany>[] = [
  {
    header: '#',
    cell: dataTableCommon.indexCell
  },
  {
    accessorKey: 'id'
  },
  {
    accessorKey: 'company',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Company', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'type',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Type', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'vendor',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Vendor', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'inStock',
    header: ({ column }) =>
      dataTableCommon.styledHeader(
        'In Stock',
        column,
        '!bg-transparent',
        'd-flex justify-center'
      ),
    cell: dataTableCommon.centerCell
  },
  {
    accessorKey: 'unitCost',
    header: ({ column }) =>
      dataTableCommon.styledHeader(
        'Unit Cost',
        column,
        '!bg-transparent !text-center',
        'd-flex justify-center'
      ),
    cell: dataTableCommon.centerCell
  },
  {
    accessorKey: 'material',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Material', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'color',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Color', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },
  {
    accessorKey: 'actions',
    header: () => dataTableCommon.centerHeader('Actions'),
    cell: (ctx) =>
      dataTableCommon.actionCell(
        ctx,
        handleView,
        handleEdit,
        handleRelationship
      )
  }
]
