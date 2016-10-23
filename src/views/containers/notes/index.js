import { connect } from 'react-redux'
import Notes from '../../components/notes'

const mapStateToProps = function(state){
    return {
        notes : state.notes
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        updateNote : (payload) => {
            dispatch({type:'UPDATE_NOTE',payload})
        },
        deleteNote : (payload) => {
            dispatch({type:'DELETE_NOTE',payload})
        }
    }
}

const NotesContainer = connect(mapStateToProps,mapDispatchToProps)(Notes)

export default NotesContainer