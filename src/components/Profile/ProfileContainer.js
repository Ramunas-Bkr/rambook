import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainer extends Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        };
        usersAPI.getUserProfile(userId).then(data => {
                 this.props.setUserProfile(data.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataComponenet = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataComponenet)
