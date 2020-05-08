import React from 'react'
import classes from './Users.module.css'
import profileImage from '../../assets/images/empty_avatar.jpg'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.Userpage}>
            <div className={classes.pages}>
                {pages.map(p => {
                    return <span className={props.curentPage === p && classes.active}
                        onClick={() => { props.onPageChange(p) }}>
                        {p}
                    </span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.Users}>
                        <div className={classes.left}>
                            <div className={classes.avatar}>
                                <NavLink to={'/profile/' + u.id }>
                                    <img src={u.photos.small != null ? u.photos.small : profileImage} alt='profile' />
                                </NavLink>
                            </div>
                            {u.isFrend
                                ? <button onClick={() => {
                                    Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9bdf44fd-2ece-425b-8078-fce4c541d9df"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)}
                                        }
                                    )} 
                                } >Unfollow</button>
                                : <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9bdf44fd-2ece-425b-8078-fce4c541d9df"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)}
                                        }
                                    )} 
                                } >Follow</button>
                            }
                        </div>
                        <div className={classes.right}>
                            <NavLink to={'/profile/' + u.id }>
                                <div className={classes.nickname}>{u.name}</div>
                            </NavLink>
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
