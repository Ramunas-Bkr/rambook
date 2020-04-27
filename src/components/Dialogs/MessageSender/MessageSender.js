import React from 'react'
import classes from './MessageSender.module.css'

const MessageSender = (props) => {

    let addMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.updateMessageBody(text)
    }
    
    return (
        <div>
            <div>
                <textarea 
                    onChange={onMessageChange}
                    placeholder="Įveskite savo pranešimą čia"
                    value={props.newOwnerMessage} 
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
