import React, { Component } from 'react'
import { CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class NoteActions extends Component{
    render(){
        if(!this.props.isEditing){
            return(
                    <CardActions>
                        <FlatButton onClick={this.props.handleEditClick} label="Edit" />
                        <FlatButton label="Delete" />
                    </CardActions>
                )
        }
        return(
            <CardActions>
                <FlatButton onClick={this.props.handleSaveClick} label="Save" />
                <FlatButton label="Delete" />
            </CardActions>
        )

    }
}

export default NoteActions