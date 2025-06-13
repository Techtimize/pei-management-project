export interface ISearchByOption {
  value: string
  label: string
}

export const searchByOptions = [
  // PEI & Portfolio Options
  { value: 'pb_name', label: 'Pitchbook Name' },
  { value: 'duns_number', label: 'DUNS Number' },
  { value: 'swift_client_number', label: 'Swift Client Number' },
  { value: 'pb_id', label: 'Pitchbook ID' },
  { value: 'gmdm_id', label: 'GMDM ID' },
  { value: 'dgmf_id', label: 'DGMF ID' }

  // Portfolio Options
  // { value: 'name', label: 'Name' },
  // { value: 'duns', label: 'DUNS' },
  // { value: 'name', label: 'Name' },
  // { value: 'duns', label: 'DUNS' },
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
