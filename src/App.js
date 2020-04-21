import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
      <div className={styles.App}>
        <Header />
        <Navbar state={props.state.navbar}/>
        <div className={styles.content}>
          <Route path='/profile' render={ () => 
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}  
            />} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
