import authReducer from './authSlice'
import draftReducer from './draftSlice'
import moduleReducer from './moduleSlice'

const rootReducer = {
  module: moduleReducer,
  auth: authReducer,
  draft: draftReducer
}

export default rootReducer
