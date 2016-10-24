let initialState = {}


export default function authReducer(state=initialState,action){

    switch(action.type){
        case 'LOGIN':
            return {
                uid : action.payload.uid
            }

        case 'LOGOUT':    
            return {}

        default :
            return state
    }

}