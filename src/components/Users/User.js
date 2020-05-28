import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import profileImage from '../../assets/images/empty_avatar.jpg'

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.Users}>
            <div className={classes.left}>
                <div className={classes.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : profileImage} alt='profile' />
                    </NavLink>
                </div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }
                    } >Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }
                    } >Follow</button>
                }
            </div>
            <div className={classes.right}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={classes.nickname}>{user.name}</div>
                </NavLink>
                <div className={classes.city}>{"user.location.city"}</div>
                <div className={classes.name}>{"user.firstName"} {"user.lastName"}</div>
                <div className={classes.country}>{"user.location.country"}</div>
                <div className={classes.status}>{user.status}</div>
            </div>

        </div>
    )
}

export default User
