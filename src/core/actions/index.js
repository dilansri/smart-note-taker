import firebase,{ firebaseRef,githubProvider } from '../firebase'

export const addNote = (payload) => {
    return {
        type : 'ADD_NOTE',
        payload
    }
}

export const deleteNote = (payload) => {
    return {
        type : 'DELETE_NOTE',
        payload
    }
}

export const updateNote = (payload) => {
    return {
        type : 'UPDATE_NOTE',
        payload
    }
}


export const startLogin = () =>{
    return (dispatch,getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log("auth worked",result)
        },(error) => {
            console.log("auth error")
        })
    }
}