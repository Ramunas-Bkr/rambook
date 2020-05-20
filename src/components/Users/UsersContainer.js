import React, { Component } from 'react'
import Users from './Users';
import { connect } from "react-redux"
import {
  follow, unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
} from "../../redux/usersReducers";
import Preloader from '../../assets/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
          currentPage={this.props.currentPage}
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
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers}),
  withAuthRedirect
)(UsersContainer)