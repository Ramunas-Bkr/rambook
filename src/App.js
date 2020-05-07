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


function App(props) {
  return (
      <div className={styles.App}>
        <HeaderContainer />
        <NavbarContainer
          store={props.store}/>
        <div className={styles.content}>
          <Route
            path='/profile/:userId?' 
            render={ () => <ProfileContainer
              store={props.store} />}
          />
          <Route 
            path='/dialogs' 
            render={ () => <DialogsContainer
              store={props.store} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route 
            path='/users' 
            render={ () => <UsersContainer
              store={props.store} />}
          />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
