import firebase,{ firebaseRef,githubProvider,googleAuthProvider } from '../firebase'

export const addNote = (payload) => {
    return {
        type : 'ADD_NOTE',
        payload
    }
}

export const startAddNote = (payload) => {
    return (dispatch,getState) => {
        var userNotesRef = firebaseRef.child(`${getState().auth.uid}/notes`).push(payload)

        return userNotesRef.then(()=>{
            dispatch(addNote({
                ...payload,
                id : userNotesRef.key
            }))
        })
    }
}

export const addNotes = (payload) => {
    return {
        type : 'ADD_NOTES',
        payload
    }
}

export const deleteNote = (payload) => {
    return {
        type : 'DELETE_NOTE',
        payload
    }
}

export const startDeleteNote = (payload) => {
    return (dispatch,getState) =>{
        return firebaseRef.child(`${getState().auth.uid}/notes/${payload.id}`).remove().then(()=>{
            dispatch(deleteNote({id:payload.id}))
        })
    }
}

export const updateNote = (payload) => {
    return {
        type : 'UPDATE_NOTE',
        payload
    }
}

export const startUpdateNote = (payload) => {
    return (dispatch,getState) => {
        return firebaseRef.child(`${getState().auth.uid}/notes/${payload.id}`).update({note:payload.note}).then(()=>{
            dispatch(updateNote(payload))
        })
    }
}

export const login = (payload) => {
    return {
        type : 'LOGIN',
        payload
    }
}

export const logout = (payload) => {
    return {
        type : 'LOGOUT',
        payload
    }
}


export const startLogin = (provider) =>{
    return (dispatch,getState) => {
        var loginInProvider

        switch(provider){
            case 'github':
                loginInProvider = githubProvider
                break
            case 'google':
                loginInProvider = googleAuthProvider
                break
            default :
                loginInProvider = googleAuthProvider
        }
        
        return firebase.auth().signInWithPopup(loginInProvider).then((result) => {
            console.log("auth worked",result)
        },(error) => {
            console.log("auth error")
        })
    }
}

export const startLogout = () => {
    return (dispatch,getState) => {
        return firebase.auth().signOut().then(()=>{
            console.log('successfully signed out')
        })
    }
}

export const startGetNotes = () => {
    return(dispatch,getState) => {
        var notesRef =  firebaseRef.child(`${getState().auth.uid}/notes`)

        return notesRef.once('value').then((snapshot)=>{
            var notes = snapshot.val() || {}
            var notesHolder = []

            Object.keys(notes).forEach((noteKey)=>{
                notesHolder.push({
                    id:noteKey,
                    ...notes[noteKey]
                })
            })
            dispatch(addNotes(notesHolder))

        })
    }
}