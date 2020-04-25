import React from 'react'
import classes from './MessageSender.module.css'
import { addMessageCreator, onMessageChangeCreator } from '../../../redux/dialogsReducer'

const MessageSender = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageCreator())
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(onMessageChangeCreator(text))
    }

    return (
        <div>
            <div>
                <textarea 
                    onChange={onMessageChange}
                    placeholder="Įveskite savo pranešimą čia"
                    value={props.state.newOwnerMessage} 
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
