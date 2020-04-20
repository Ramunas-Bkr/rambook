import React from 'react'
import classes from './Friends.module.css'

const Friends = (props) => {
  
    return (
        <div className={classes.Friends}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt="avatar" />
            </div>
            <p> {props.name} </p>
        </div>
    )
}

export default Friends
