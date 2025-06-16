import { CellContext, Column } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { Link } from 'react-router'
import { ActionTypes } from '@/pages/main/PEIListing/types'

export class DataTableCommon<T> {
  public indexCell(row: CellContext<T, unknown>) {
    return <div style={{ textAlign: 'left' }}>{row.row.index + 1}</div>
  }

  public leftCell(row: CellContext<T, unknown>) {
    return <div style={{ textAlign: 'left' }}>{row.getValue() as string}</div>
  }

  public centerCell(row: CellContext<T, unknown>) {
    return <div style={{ textAlign: 'center' }}>{row.getValue() as string}</div>
  }

  public actionCell(row: CellContext<T, unknown>, route: string) {
    return (
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center'
        }}
      >
        <Link
          to={route}
          state={{
            pb_id: row.row.getValue('pb_id'),
            actionType: ActionTypes.VIEW
          }}
        >
          <div className='cursor-pointer hover:opacity-50'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          </div>
        </Link>

        <Link
          to={route}
          state={{
            pb_id: row.row.getValue('pb_id'),
            actionType: ActionTypes.EDIT
          }}
        >
          <div className='cursor-pointer hover:opacity-50'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
              <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
            </svg>
          </div>
        </Link>

        <Link
          to={route}
          state={{
            pb_id: row.row.getValue('pb_id'),
            actionType: ActionTypes.RELATIONSHIP
          }}
        >
          <div className='cursor-pointer hover:opacity-50'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M8 18H21' />
              <path d='M12 22L8 18L12 14' />
              <path d='M3 6H16' />
              <path d='M16 10L20 6L16 2' />
            </svg>
          </div>
        </Link>
      </div>
    )
  }

  public centerHeader(headerName: string) {
    return <div style={{ textAlign: 'center' }}>{headerName}</div>
  }

  public styledHeader(
    headerName: string,
    column: Column<T, unknown>,
    buttonClass?: string,
    className?: string,
    outerClassName?: string
  ) {
    return (
      <div className={outerClassName}>
        <DataTableColumnHeader
          buttonClass={buttonClass}
          column={column}
          title={headerName}
          className={className}
        />
      </div>
    )
  }
}
