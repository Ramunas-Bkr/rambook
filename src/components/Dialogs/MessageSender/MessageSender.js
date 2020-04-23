import React from 'react'
import classes from './MessageSender.module.css'
import { addMessageCreator, onMessageChangeCreator } from '../../../state/state'

const MessageSender = (props) => {


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeCreator(text))
    }

    return (
        <div>
            <div>
                <textarea 
                    onChange={onMessageChange}
                    ref={newMessageElement}
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
