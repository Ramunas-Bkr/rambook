import React, { Component } from 'react'
import Users from './Users';
import { connect } from "react-redux"
import {
  follow, unfollow,
  setCurentPage,
  toggleIsFollowingProgress,
  getUsers
} from "../../redux/usersReducers";
import Preloader from '../../hoc/Preloader/Preloader';

class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.curentPage, this.props.pageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          followed={this.props.followed}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps,
  {
    follow, unfollow,
    setCurentPage, 
    toggleIsFollowingProgress, getUsers
  })
  (UsersContainer)