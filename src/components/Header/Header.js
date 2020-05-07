import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.AppHead}>
            <img src="https://i.pinimg.com/originals/d0/54/89/d054890aa6a20fe5273d24feff7acc79.jpg" alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? props.login
                : <NavLink to="/login">Login</NavLink> } 
            </div>
        </header>
    )
}

export default Header
