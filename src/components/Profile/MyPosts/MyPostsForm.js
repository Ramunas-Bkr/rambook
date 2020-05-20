import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm, Field } from 'redux-form'

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="addMyPost"
                    placeholder="Pranešimo laukas"
                    className={classes.postTextArea}
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
