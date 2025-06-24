import { Column, Table } from '@tanstack/react-table'

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  buttonClass?: string
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>
  showSelectedRowsText?: boolean
}

export interface DataTableProps<T> {
  table: Table<T>
  highlightedItem?: string
}
