import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm, Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

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
                />
            </div>
            <div>
                <button className={classes.postButton}>Išsaugoti pranešimą</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm)

export default PostReduxForm
