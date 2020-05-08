import React, { Component } from 'react'
import Users from './Users';
import { connect } from "react-redux"
import { follow, unfollow, setUsers, setCurentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducers";
import Preloader from '../../hoc/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.curentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }
    
    onPageChange = (pageNumber) => {
        this.props.setCurentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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

