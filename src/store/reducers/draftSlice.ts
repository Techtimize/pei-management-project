import { IPeiFields } from '@/pages/main/PEIListing/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IDraftSlice {
  pei: IPeiFields
}

const initialState: IDraftSlice = {
  pei: {
    pb_id: '',
    swift_client_number: '',
    swift_client_name: '',
    gmdm_id: '',
    dgmf_id: '',
    duns_number: '',
    view_type: '',
    tableau_inclusion_status: '',
    requested_by_team: '',
    contact_email: '',
    priority_for_feedback: '',
    fy_period_added: '',
    reporting_team: '',
    gmdm_legal_name: '',
    pb_name: '',
    sources: ''
  }
}

export const draftSlice = createSlice({
  name: 'draft',
  initialState: initialState,
  reducers: {
    setPeiDraft: (state, action: PayloadAction<Pick<IDraftSlice, 'pei'>>) => {
      console.log(action.payload.pei)
      state.pei = action.payload.pei
      return state
    }
  }
})

export const { setPeiDraft } = draftSlice.actions
export default draftSlice.reducer
