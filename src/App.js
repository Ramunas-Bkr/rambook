import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styles from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store'

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className={styles.App}>
        <HeaderContainer />
        <NavbarContainer />
        <div className={styles.content}>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' component={Settings} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const AppMain = (props) => {
 return <BrowserRouter>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </BrowserRouter>
}

export default AppMain