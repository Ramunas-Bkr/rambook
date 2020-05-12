import React from 'react';
import styles from './App.module.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <NavbarContainer
        store={props.store} />
      <div className={styles.content}>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
        <Route path='/dialogs' render={() => <DialogsContainer/>} />
        <Route path='/login' render={() => <Login/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/users' render={() => <UsersContainer/>} />
        <Route path='/settings' component={Settings} />

      </div>
    </div>
  );
}

export default App;
