import { ColumnDef } from '@tanstack/react-table'
import { DataTableCommon } from '@/components/dataTable/common'
import { IPeiFields } from './types'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const dataTableCommon = new DataTableCommon<IPeiFields>()

export const columns: ColumnDef<IPeiFields>[] = [
  {
    header: '#',
    cell: dataTableCommon.indexCell
  },

  {
    accessorKey: 'pei_pb_id',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Pitchbook ID', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'pei_pb_name',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Pitchbook Name', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'pei_duns_number',
    header: ({ column }) =>
      dataTableCommon.styledHeader('DUNS', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'pei_swift_client_name',
    header: ({ column }) =>
      dataTableCommon.styledHeader(
        'Swift Client Name',
        column,
        '!bg-transparent'
      ),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'contact_email',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Contact Email', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'fy_period_added',
    header: ({ column }) =>
      dataTableCommon.styledHeader('FY Period', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'reporting_team',
    header: ({ column }) =>
      dataTableCommon.styledHeader('Reporting Team', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'tableau_inclusion_status',
    header: ({ column }) =>
      dataTableCommon.styledHeader(
        'Tableau Inclusion',
        column,
        '!bg-transparent'
      ),
    cell: dataTableCommon.leftCell
  },

  {
    accessorKey: 'view_type',
    header: ({ column }) =>
      dataTableCommon.styledHeader('View', column, '!bg-transparent'),
    cell: dataTableCommon.leftCell
  },

  // {
  //   accessorKey: 'inStock',
  //   header: ({ column }) =>
  //     dataTableCommon.styledHeader(
  //       'In Stock',
  //       column,
  //       '!bg-transparent',
  //       'd-flex justify-center'
  //     ),
  //   cell: dataTableCommon.centerCell
  // },

  {
    accessorKey: 'actions',
    header: () => dataTableCommon.centerHeader('Actions'),
    cell: (ctx) => dataTableCommon.actionCell(ctx, '/pei-companies')
  }
]
