import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export enum ModuleTypeEnum {
  USPE = 'USPE',
  GPE = 'GPE'
}

interface IModuleState {
  moduleType: ModuleTypeEnum
}

const initialState: IModuleState = {
  moduleType: ModuleTypeEnum.GPE
}

export const moduleSlice = createSlice({
  name: 'module',
  initialState: initialState,
  reducers: {
    setModuleType: (state, action: PayloadAction<ModuleTypeEnum>) => {
      state.moduleType = action.payload
    }
  }
})

export const { setModuleType } = moduleSlice.actions
export default moduleSlice.reducer
