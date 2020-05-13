import React from 'react'
import classes from './Users.module.css'
import profileImage from '../../assets/images/empty_avatar.jpg'
import { NavLink } from 'react-router-dom';

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
                 
                    return <span className={props.currentPage === p && classes.active}
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
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : profileImage} alt='profile' />
                                </NavLink>
                            </div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }
                                } >Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }
                                } >Follow</button>
                            }
                        </div>
                        <div className={classes.right}>
                            <NavLink to={'/profile/' + u.id}>
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