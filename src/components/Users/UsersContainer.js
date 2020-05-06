import React, { Component } from 'react'
import Axios from 'axios';
import Users from './Users';
import { connect } from "react-redux"
import { follow, unfollow, setUsers, setCurentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducers";
import Preloader from '../../hoc/Preloader/Preloader';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    curentPage={this.props.curentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, 
    {
    follow, unfollow, setUsers, 
    setTotalUsersCount, setCurentPage, toggleIsFetching})
    (UsersContainer)