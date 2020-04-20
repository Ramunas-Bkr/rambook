import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    const id = "/dialogs/" + props.id

    return (
        <div className={classes.user}>
            <NavLink to={id} activeClassName={classes.active}>
                <div className={classes.person}>
                    <div className={classes.personAvatar}>
                        <img src={props.avatar} alt="avatar" />
                    </div>
                    <p>{props.name}</p>
                </div>
                
            </NavLink>
        </div>
    )
}

export default DialogItem
