import React from 'react'
import classes from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.owner}>
                <div className={classes.avatar}>
                    <img src={props.ownersAwatar} alt="avatar" />
                </div>
                <p>{props.ownersMessage}</p>
            </div>
            <div className={classes.friend}>
                
                <div className={classes.avatar}>
                    <img src={props.friendsAwatar} alt="avatar" />
                </div>
                <p>{props.friendsMessage}</p>
            </div>
        </div>
    )
}

export default MessageItem
