import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.Content}>
            <div className={classes.HeroPhoto}>
                <img src="https://www.mountain-forecast.com/images/mtn_home.jpg" alt="hero" />
            </div>
            <div>
                Avatar + description
            </div>
            <div>
                My posts
            <div>
                New posts
            </div>
            </div>
            <div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
            </div>
      </div>
    )
}

export default Profile
