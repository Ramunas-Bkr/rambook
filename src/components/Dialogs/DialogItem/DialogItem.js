import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    const id = "/dialogs/" + props.id

    return (
        <div className={classes.user}> 
            <NavLink to={id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
