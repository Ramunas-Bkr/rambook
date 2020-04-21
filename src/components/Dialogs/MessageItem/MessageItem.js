import React from 'react'
import classes from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.owner}>
                <div className={classes.avatar}>
                    <img src="https://www.bestfunnies.com/wp-content/uploads/2015/05/Funny-Dog-faces-27.jpg" alt="avatar" />
                </div>
                <p>{props.ownersMessage}</p>
            </div>
            <div className={classes.friend}>
                
                <div className={classes.avatar}>
                    <img src="https://thumbs.dreamstime.com/z/cartoon-monster-face-vector-halloween-happy-monster-square-avatar-funny-monster-mask-blue-design-t-shirt-sticker-print-97157979.jpg" alt="avatar" />
                </div>
                <p>{props.friendsMessage}</p>
            </div>
        </div>
    )
}

export default MessageItem
