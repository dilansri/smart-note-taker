import { connect } from 'react-redux'
import Notes from '../../components/notes'
import { updateNote,startUpdateNote,startDeleteNote} from '../../../core/actions'

const mapStateToProps = function(state){
    return {
        notes : state.notes
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        updateNote : (payload) => {
            dispatch(startUpdateNote(payload))
        },
        deleteNote : (payload) => {
            dispatch(startDeleteNote(payload))
        }
    }
}

const NotesContainer = connect(mapStateToProps,mapDispatchToProps)(Notes)

export default NotesContainer