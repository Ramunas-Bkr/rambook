import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook'
import profileImage from '../../../assets/images/empty_avatar.jpg'

const ProfileInfo = (props) => {
    
    if (!props.profile) {
       return <Preloader />
    } 
    
    const onProfilePictureSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.HeroPhoto}>
                <img src="https://www.mountain-forecast.com/images/mtn_home.jpg" alt="hero" />
            </div>
            <div className={classes.description}>
                <div className={classes.profilePicture}>
                    <img src={props.profile.photos.large || profileImage} alt="profile" />
                </div>
                {props.isOwner && <input type="file" onChange={onProfilePictureSelected} />}
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
            </div>
            <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )}

export default ProfileInfo
