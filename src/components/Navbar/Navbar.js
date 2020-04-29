import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends.js/Friends'

const Navbar = (props) => {
    const friendElements = props.friends.map(p =>
        <Friends name={p.name}
            avatar={p.avatar}
        />)


    return (
        <nav className={classes.Navbar}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <div className={classes.friendBlock}>Friends</div>
                {friendElements}
            </div>
        </nav>
    )
}

export default Navbar
