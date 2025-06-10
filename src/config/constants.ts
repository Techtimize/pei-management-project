export interface ISearchByOption {
  value: string
  label: string
}

export const searchByOptions = [
  { value: 'name', label: 'Name' },
  { value: 'duns', label: 'DUNS' }
]

export interface ICompany extends ISearchByOption {
  isUS: boolean
}

export const companies: ICompany[] = [
  { value: 'pei', label: 'PEI', isUS: true },
  { value: 'portfolio', label: 'Portfolio', isUS: true },
  { value: 'local', label: 'Local', isUS: false },
  { value: 'subsidiary', label: 'Subsidiary', isUS: false }
]
