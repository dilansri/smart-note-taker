import { connect } from 'react-redux'
import HeaderBar from '../../components/header-bar'
import { startLogout } from '../../../core/actions'
const mapStateToProps = function(state){
    return {

    }
}

const mapDispatchToProps = function(dispatch){
    return {
        handleLogout : () => {
            dispatch(startLogout())
        }
    }
}

const HeaderBarContainer = connect(mapStateToProps,mapDispatchToProps)(HeaderBar)

export default HeaderBarContainer