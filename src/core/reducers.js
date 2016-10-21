import { combineReducers } from 'redux'
import  notesReducer from './notes/reducer'


let reducer = combineReducers({
    notes:notesReducer
})

export default reducer