import React, { Component } from 'react'
import Axios from 'axios';
import Users from './Users';
import { connect } from "react-redux"
import { followAC, unfollowAC, setUsersAC, setCurentPageAC, setTotalUsersCountAC } from "../../redux/usersReducers";

class UsersContainer extends Component {

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
      
        return <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            curentPage={this.props.curentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurentPage: (curentPage) => {
            dispatch(setCurentPageAC(curentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)