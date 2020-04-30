import React from 'react'
import classes from './Users.module.css'
import Axios from 'axios';
import profileImage from '../../assets/images/empty_avatar.jpg'


const Users = (props) => {

    if (props.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.Users}>
                        <div className={classes.left}>
                            <div className={classes.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : profileImage} alt='profile' />
                            </div>
                            {u.isFrend
                                ? <button onClick={() => props.unfollow(u.id)} >Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                        <div className={classes.right}>
                            <div className={classes.nickname}>{u.name}</div>
                            <div className={classes.city}>{"u.location.city"}</div>
                            <div className={classes.name}>{"u.firstName"} {"u.lastName"}</div>
                            <div className={classes.country}>{"u.location.country"}</div>
                            <div className={classes.status}>{u.status}</div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Users
