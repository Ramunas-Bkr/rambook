import React from 'react'
import classes from './MessageSender.module.css'

const MessageSender = (props) => {

    let addMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (text) => {
        props.updateMessageBody(text)
    }
    
    return (
        <div>
            <div>
                <textarea 
                    onChange={onMessageChange}
                    placeholder="Įveskite savo pranešimą čia"
                    value={props.dialogsPage.newOwnerMessage} 
                    className={classes.postTextArea} 
                    
                />
            </div>
            <div>
                <button 
                    onClick={addMessage} 
                    className={classes.postButton}>
                        Išsiųsti pranešimą
                </button>
            </div>
        </div>
    )
}

export default MessageSender
