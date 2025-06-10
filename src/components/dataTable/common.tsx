import { CellContext, Column } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'

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
