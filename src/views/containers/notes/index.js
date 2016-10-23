import { connect } from 'react-redux'
import Notes from '../../components/notes'
import { updateNote, deleteNote} from '../../../core/actions'

const mapStateToProps = function(state){
    return {
        notes : state.notes
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        updateNote : (payload) => {
            dispatch(updateNote(payload))
        },
        deleteNote : (payload) => {
            dispatch(deleteNote(payload))
        }
    }
}

const NotesContainer = connect(mapStateToProps,mapDispatchToProps)(Notes)

export default NotesContainer