import React,{ Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


function handleTouchTap(){

}

const styles = {
    title : {
        cursor : 'pointer',
    },
}

class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        this.props.handleLogout()
    }
    render(){
        return(
            <div>
                <AppBar
                    title={<span style={styles.title}>Smart Note Taker</span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementRight={<FlatButton onClick={this.handleLogout} label="Logout" />}
                />
            </div>
        )
    }
}


export default HeaderBar;