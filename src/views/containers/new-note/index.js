import { connect } from 'react-redux'
import NewNoteDialog from '../../components/new-note'
import { startAddNote } from '../../../core/actions'

const mapStateToProps = function(state){
    return {

    }
}

const mapDispatchToProps = function(dispatch){
    return {
        handleSave : (payload) => {
            dispatch(startAddNote(payload))
        }
    }
}

const NewNoteDialogContainer = connect(mapStateToProps,mapDispatchToProps)(NewNoteDialog)

export default NewNoteDialogContainer