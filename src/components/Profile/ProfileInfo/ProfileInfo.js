import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook'
import profileImage from '../../../assets/images/empty_avatar.jpg'
import ProfileDataForm from './ProfileDataForm'
import ProfileData from './ProfileData'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <div className={classes.description}>
                <div className={classes.profilePicture}>
                    <img src={props.profile.photos.large || profileImage} alt="profile" />
                </div>
                
                {editMode
                    ? <ProfileDataForm profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
            </div>
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />

        </div>
    )
}


export default ProfileInfo
