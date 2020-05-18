import React, { Component } from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={classes.ProfileStatus}>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status} />
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
