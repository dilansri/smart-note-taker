import React,{ Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'

class NewNoteDialog extends Component{
    constructor(props){
        super(props)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.state = {
            open: false,
            newNote : ''
        }
    }

    handleTextChange(event){
        this.setState({
            newNote : event.target.value
        })
    }

    handleOpen() {
        this.setState({open:true})
    }

    handleClose() {
        this.setState({open:false})
    }

    handleSave(){
        this.props.handleSave({note:this.state.newNote})
        this.handleClose()
    }
    
    render(){
        const actions = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
            <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleSave}/>

        ]
        return(
            <div>
                <FloatingActionButton onClick={this.handleOpen} backgroundColor="#E53935" style={{position:'absolute',top:'50px',left:'10px',zDepth:3,zIndex:5555}}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="New Note"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                > <TextField id="newNote" onChange={this.handleTextChange} fullWidth={true} multiLine={true} rows={3} />
                </Dialog>
            </div>
        )
    }
}

export default NewNoteDialog