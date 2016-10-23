import React,{ Component } from 'react'
import Note from '../note'

class Notes extends Component{

    render(){
        return (
            <div>
                {this.props.notes.map(note=> ( 
                <Note key={note.id} 
                        id={note.id}
                        note={note}
                        updateNote={this.props.updateNote}
                        deleteNote={this.props.deleteNote}/>
                ))}
            </div>
        )
    }

}


export default Notes