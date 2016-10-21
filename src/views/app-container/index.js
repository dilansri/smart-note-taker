import { connect } from 'react-redux'
import App from '../app'


const mapStateToProps = (state) => {
    return{
        notes : state.notes
    }
}


const AppContainer = connect(mapStateToProps)(App)
export default AppContainer