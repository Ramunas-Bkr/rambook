import React, { Component } from 'react'
import classes from './Users.module.css'
import Axios from 'axios';
import profileImage from '../../assets/images/empty_avatar.jpg'

class Users extends Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={classes.Userpage}>
                <div className={classes.pages}>
                    {pages.map(p => {
                        return <span className={this.props.curentPage === p && classes.active}
                            onClick={() => {this.onPageChange(p)}}>
                            {p}
                        </span>
                    })}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={classes.Users}>
                            <div className={classes.left}>
                                <div className={classes.avatar}>
                                    <img src={u.photos.small != null ? u.photos.small : profileImage} alt='profile' />
                                </div>
                                {u.isFrend
                                    ? <button onClick={() => this.props.unfollow(u.id)} >Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users
