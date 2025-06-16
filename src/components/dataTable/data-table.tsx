'use client'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
// import { Button } from '@/components/ui/button'
import { DataTablePagination } from './data-table-pagination'
import { DataTableProps } from './types'

export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div>
      <div className='rounded-md border overflow-auto bg-white px-2'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end py-4 space-x-4 mx-4'>
        {/* <div className='flex items-center justify-end space-x-2 py-4'> */}
        {/* <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button> */}
        {/* </div> */}
        {/* <p
          className={
            !table.getCanPreviousPage()
              ? 'text-gray-400 cursor-not-allowed'
              : 'cursor-pointer hover:text-secondary-1'
          }
          onClick={() => table.getCanPreviousPage() && table.previousPage()}
        >
          Prev
        </p>
        <p
          className={
            !table.getCanNextPage()
              ? 'text-gray-400 cursor-not-allowed'
              : 'cursor-pointer hover:text-secondary-1'
          }
          onClick={() => table.getCanNextPage() && table.nextPage()}
        >
          Next
        </p> */}
        <DataTablePagination table={table} showSelectedRowsText={false} />
      </div>
    </div>
  )
}
