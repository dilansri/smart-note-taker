import React from 'react'
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


const HeaderBar = () => (
  <div>
    <AppBar
        title={<span style={styles.title}>Smart Note Taker</span>}
        onTitleTouchTap={handleTouchTap}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
    />
    <FloatingActionButton style={{marginLeft:20,marginTop:20}}>
        <ContentAdd />
    </FloatingActionButton>
  </div>
)


export default HeaderBar;