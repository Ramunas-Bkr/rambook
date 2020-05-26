import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import Button from '../../../utils/Button/Button'

const maxLenght50 = maxLengthCreator(50)

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="addMyPost"
                    placeholder="Pranešimo laukas"
                    validate={[required, maxLenght50]}
                    className={classes.textArea}
                />
            </div>
            <div>
                <Button name="Išsaugoti pranešimą" />
                {/* <button className={classes.postButton}>Išsaugoti pranešimą</button> */}
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm)

export default PostReduxForm
