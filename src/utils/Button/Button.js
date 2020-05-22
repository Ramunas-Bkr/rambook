import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button className={classes.myButton}>{props.name}</button>
        </div>
    )
}

export default Button
