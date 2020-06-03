import React from 'react'
import classes from './ProfileInfo.module.css'
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'
import Button from '../../../utils/Button/Button'

const ProfileDataForm = (props) => {

    const onProfilePictureSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
        {props.error && <div className={classes.summaryError}>
                {props.error}
            </div>}
            <div>
                <input type="file" onChange={onProfilePictureSelected} />
            </div>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.profileInfo}>
                    {createField("Full name", "fullName", [], Input)}
                    <h5>About me: </h5>
                    {createField("About me", "aboutMe", [], Textarea)}
                    <h5>Looking for a Job?: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })} </h5>
                    <h5>My professional skils: </h5>{createField("My professional skils", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}> 
                        <b>{key}: </b>
                        {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
            </div>
                <div>
                    <Button name={"Save"} />
                </div>

            </form>
        </div>
    )
}

const ProfileDataFormRedux = reduxForm({ form: "editProfile" })(ProfileDataForm)

export default ProfileDataFormRedux
