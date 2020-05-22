import React from 'react'
import classes from './MessageSender.module.css'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import Button from '../../../utils/Button/Button'

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
                    className={classes.postTextArea}
                />
            </div>
            <div>
                <Button name={"Išsiųsti pranešimą"} />
            </div>
        </form>
    )
}

const MessageSenderRedux = reduxForm({
    form: "dialogAddMessageForm"
})(MessageSender)


export default MessageSenderRedux
