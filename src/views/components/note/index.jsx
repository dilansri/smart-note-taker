import React,{ Component } from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NoteText from '../note-text'
import NoteActions from '../note-actions'
class Note extends Component{    

    constructor(props){
        super(props) 
        this.state ={isEditing : false,text:this.props.note.note} 

        this.handleEditClick = this.handleEditClick.bind(this) 
        this.handleSaveClick = this.handleSaveClick.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleDeleteNote = this.handleDeleteNote.bind(this)
    }

    handleEditClick(){
        this.setState({
            isEditing : true
        })
    }

    handleSaveClick(){
        this.props.updateNote({id:this.props.note.id,note:this.state.text})
        this.setState({
            isEditing : false
        })
    }

    handleTextChange(event){        
        this.setState({
            text:event.target.value
        })
    }

    handleDeleteNote(){
        this.props.deleteNote({id:this.props.note.id})
    }

    render(){
        return(
            <Card>
                <CardHeader />
                <NoteText isEditing={this.state.isEditing} 
                          note={this.state.text}
                          handleTextChange={this.handleTextChange} />

                <NoteActions isEditing={this.state.isEditing} 
                             handleEditClick={this.handleEditClick}
                             handleSaveClick={this.handleSaveClick}
                             handleDeleteNote={this.handleDeleteNote}/>                
            </Card>
        )
    }
}


export default Note
