'use client'

import { CellContext, ColumnDef } from '@tanstack/react-table'

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

function indexCell(row: CellContext<ICompany, unknown>) {
  return <div style={{ textAlign: 'left' }}>{row.row.index + 1}</div>
}

function cell(row: CellContext<ICompany, unknown>) {
  return <div style={{ textAlign: 'left' }}>{row.getValue() as string}</div>
}

function centerCell(row: CellContext<ICompany, unknown>) {
  return <div style={{ textAlign: 'center' }}>{row.getValue() as string}</div>
}

function centerHeader(headerName: string) {
  return <div style={{ textAlign: 'center' }}>{headerName}</div>
}

export const columns: ColumnDef<ICompany>[] = [
  {
    // accessorKey: 'id',
    header: '#',
    cell: indexCell
    // accessorFn:row=>row.
  },
  {
    accessorKey: 'company',
    header: 'Company',
    cell
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell
  },
  {
    accessorKey: 'vendor',
    header: 'Vendor',
    cell
  },
  {
    accessorKey: 'inStock',
    header: () => centerHeader('In Stock'),
    cell: centerCell
  },
  {
    accessorKey: 'unitCost',
    header: () => centerHeader('Unit Cost'),
    cell: centerCell
  },
  {
    accessorKey: 'material',
    header: 'Material',
    cell
  },
  {
    accessorKey: 'color',
    header: 'Color',
    cell
  }
]
