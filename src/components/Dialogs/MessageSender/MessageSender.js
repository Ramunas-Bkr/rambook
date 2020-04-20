import React from 'react'
import classes from './MessageSender.module.css'

const MessageSender = () => {
    return (
        <div>
            <div>
                <textarea className={classes.postTextArea}></textarea>
            </div>
            <div>
                <button className={classes.postButton}>Išsiųsti pranešimą</button>
            </div>
        </div>
    )
}

export default MessageSender
