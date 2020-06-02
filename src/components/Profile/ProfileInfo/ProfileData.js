import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileData = (props) => {

    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
            <div className={classes.profileInfo}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p>
                <h5>Looking for a Job?</h5>
                <div className={classes.icons}>
                    {props.profile.lookingForAJob
                        ? <i className="fab fa-react"></i>
                        : <i className="fas fa-times-circle"></i>}
                </div>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        {contactValue ? <b>{contactTitle}: </b> : null} {contactValue}</div>
}

export default ProfileData
