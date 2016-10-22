import React from 'react'
import TextField from 'material-ui/TextField'
import {CardText} from 'material-ui/Card'

const NoteText = function(props){
    if(props.isEditing){
        return (
            <CardText>
                <TextField value={props.note} />
            </CardText>
        )
    }

    return (
        <CardText>
           {props.note}
        </CardText>
    )
}

export default NoteText