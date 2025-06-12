import { IPeiFields } from '@/pages/main/PEIListing/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IDraftSlice {
  pei?: IPeiFields
  portfolio?: object
  subsidiary?: object
  local?: object
}

const initialState: IDraftSlice = {}

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
