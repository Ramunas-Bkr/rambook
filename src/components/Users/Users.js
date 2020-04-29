import React from 'react'
import classes from './Users.module.css'

const Users = (props) => {

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.Users}>
                        <div className={classes.left}>
                            <div className={classes.avatar}>
                                <img src={u.profilePicture} alt='profile' />
                            </div>
                            {u.isFrend
                                ? <button onClick={() => props.unfollow(u.id)} >Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                        <div className={classes.right}>
                            <div className={classes.nickname}>{u.nickName}</div>
                            <div className={classes.city}>{u.location.city}</div>
                            <div className={classes.name}>{u.firstName} {u.lastName}</div>
                            <div className={classes.country}>{u.location.country}</div>
                            <div className={classes.status}>{u.status}</div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Users
