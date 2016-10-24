import { combineReducers } from 'redux'
import  notesReducer from './notes/reducer'
import authReducer from './auth/reducer'


let reducer = combineReducers({
    notes:notesReducer,
    auth:authReducer
})

export default reducer