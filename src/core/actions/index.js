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