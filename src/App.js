import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
      <div className={styles.App}>
        <Header />
        <NavbarContainer
          store={props.store}/>
        <div className={styles.content}>
          <Route
            path='/profile' 
            render={ () => <Profile
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
