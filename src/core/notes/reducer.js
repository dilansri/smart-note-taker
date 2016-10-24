let initialState = [
    {id:1,note:'sample note 1'},
    {id:2,note:'sample note 2'},
    {id:3,note:'sample note 3'},
    {id:4,note:'sample note 4'}
]

export default function notesReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_NOTE':
            return [
                ...state,
                action.payload
            ]
        case 'ADD_NOTES':
            return state.concat(action.payload)
        case 'DELETE_NOTE':
            return state.filter(note=> note.id !== action.payload.id)
        case 'UPDATE_NOTE':
            return [
                {id:action.payload.id,note:action.payload.note},
                ...state.filter(note=> note.id !== action.payload.id )
            ]
        default:
            return state
    }
}