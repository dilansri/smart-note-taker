import React,{ Component } from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NoteText from '../note-text'
import NoteActions from '../note-actions'
class Note extends Component{    

    constructor(props){
        super(props) 
        this.state ={isEditing : false} 

        this.handleEditClick = this.handleEditClick.bind(this) 
        this.handleSaveClick = this.handleSaveClick.bind(this)
    }

    handleEditClick(){
        this.setState({
            isEditing : true
        })
    }

    handleSaveClick(){
        this.setState({
            isEditing : false
        })
    }

    render(){
        return(
            <Card>
                <CardHeader />
                <NoteText isEditing={this.state.isEditing} note={this.props.note.note}/>
                <NoteActions isEditing={this.state.isEditing} 
                             handleEditClick={this.handleEditClick}
                             handleSaveClick={this.handleSaveClick} />                
            </Card>
        )
    }
}


export default Note
