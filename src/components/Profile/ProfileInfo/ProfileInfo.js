import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../hoc/Preloader/Preloader'

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
                <p>{props.profile.aboutMe}</p>
                <h5>{props.profile.lookingForAJobDescription}</h5>
                {/* <img src={props.profile.photos.large} alt="profile"></img> */}
                Avatar + description
            </div>
        </div>
    )}

export default ProfileInfo
