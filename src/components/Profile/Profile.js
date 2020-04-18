import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={classes.HeroPhoto}>
                <img src="https://www.mountain-forecast.com/images/mtn_home.jpg" alt="hero" />
            </div>
            <div>
                Avatar + description
            </div>
            <MyPosts />
      </div>
    )
}

export default Profile
