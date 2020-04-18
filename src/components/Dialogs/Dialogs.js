import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = () => {
    return (
        <div className={classes.Dialogs}>
            <div className={classes.users}>
                <DialogItem name="Ramūnas" id="1" />
                <DialogItem name="Živilė" id="2" />
                <DialogItem name="Elzė" id="3" />
                <DialogItem name="Monmorensis" id="4" />
            </div>
            <div className={classes.messages}>
                <MessageItem message="Labas, kaip tu laikais" />
                <MessageItem message="Ką tu? Ką vakare?" />
                <MessageItem message="Nieko visai" />
            </div>
        </div>
    )
}

export default Dialogs
