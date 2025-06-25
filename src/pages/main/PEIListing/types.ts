export interface IPeiFields {
  id?: string
  pei_pb_id: string
  pei_swift_client_number: string
  pei_swift_client_name: string
  pei_gmdm_id: string
  pei_dgmf_id: string
  pei_duns_number: string
  view_type: string
  tableau_inclusion_status: string
  requested_by_team: string
  contact_email: string
  priority_for_feedback: string
  fy_period_added: string
  reporting_team: string
  pei_gmdm_legal_name: string
  pei_pb_name: string
  sources: string
}

export enum ActionTypes {
  VIEW,
  EDIT,
  RELATIONSHIP,
  DRAFT,
  CLOSE,
  SEARCH
}
