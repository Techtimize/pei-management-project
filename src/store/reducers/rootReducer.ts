import authReducer from './authSlice'
import moduleReducer from './moduleSlice'

const rootReducer = {
  module: moduleReducer,
  auth: authReducer
}

export default rootReducer
