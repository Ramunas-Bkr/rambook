import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}


const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
