import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import Button from '../../../utils/Button/Button'

const maxLenght10 = maxLengthCreator(10)

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="addMyPost"
                    placeholder="Pranešimo laukas"
                    validate={[required, maxLenght10]}
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
