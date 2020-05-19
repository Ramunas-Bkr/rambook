import React from 'react'
import classes from './MessageSender.module.css'
import { Field, reduxForm } from 'redux-form'

const MessageSender = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component="textarea" 
                    name="newOwnerMessage" 
                    placeholder="Įveskite savo pranešimą čia" 
                    className={classes.postTextArea}/>
            </div>
            <div>
                <button className={classes.postButton}> Išsiųsti pranešimą </button>
            </div>
        </form>
    )
}

const MessageSenderRedux = reduxForm({
    form: "dialogAddMessageForm"
})(MessageSender)


export default MessageSenderRedux
