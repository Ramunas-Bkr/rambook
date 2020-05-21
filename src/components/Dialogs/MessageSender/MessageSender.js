import React from 'react'
import classes from './MessageSender.module.css'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'

const maxLenght50 = maxLengthCreator(50)

const MessageSender = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Textarea}
                    name="newOwnerMessage" 
                    placeholder="Įveskite savo pranešimą čia" 
                    validate={[required, maxLenght50]}
                />
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
