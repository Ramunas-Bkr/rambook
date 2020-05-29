import React from 'react'
import classes from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

    return (
        <div className={classes.Userpage}>
            <Paginator currentPage={props.currentPage} onPageChange={props.onPageChange}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                portionSize={10} />
            {
                props.users.map(u =>
                    <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow} follow={props.follow} />
                )
            }
        </div>
    )
}

export default Users