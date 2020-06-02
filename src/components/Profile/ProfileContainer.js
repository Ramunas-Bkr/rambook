import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

    refreshUser() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId
        };
            if (!userId) {
                this.props.history.push("/login")
            }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshUser()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshUser()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfileData={this.props.saveProfileData} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileData })
)(ProfileContainer)