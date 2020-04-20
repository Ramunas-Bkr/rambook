import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {

    const item = props.state.dialogsItem.map(
        d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
    )

    const messageItem = props.state.messages.map(
        m => <MessageItem message={m.message} key={m.id} />
    )

    return (
        <div className={classes.Dialogs}>
            <div className={classes.users}>
                {item}
            </div>
            <div className={classes.messages}>
                {messageItem}
            </div>
        </div>
    )
}

export default Dialogs
