import React from 'react'

const ProfileDataForm = (props) => {

    const onProfilePictureSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <input type="file" onChange={onProfilePictureSelected} />
            </div>
             Edit Forms
        </div>
    )
}

export default ProfileDataForm
