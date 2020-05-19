import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../hoc/Preloader/Preloader'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    
    if (!props.profile) {
       return <Preloader />
    } 
    
    return (
        <div>
            <div className={classes.HeroPhoto}>
                <img src="https://www.mountain-forecast.com/images/mtn_home.jpg" alt="hero" />
            </div>
            <div className={classes.description}>
                <div className={classes.profilePicture}>
                    <img src={props.profile.photos.large} alt="profile" />
                </div>
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
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )}

export default ProfileInfo
