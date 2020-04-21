import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <MyPosts 
                state={props.state}
                addPost={props.addPost}    
            />
      </div>
    )
}
 
export default Profile
