import { combineReducer } from 'redux'
import { notesReducer } from './notes'


let reducer = combineReducer({
    notes:notesReducer
})

export default reducer