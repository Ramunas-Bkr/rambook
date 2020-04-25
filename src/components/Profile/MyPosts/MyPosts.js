import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostCreator, onPostChangeCreator } from '../../../redux/profileReducer'

function MyPosts(props) {

    const postElement = props.state.posts.map( p => 
    <Post message={p.message}
        likecount={p.likecount}
        key={p.id}
    /> )

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(onPostChangeCreator(text));
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <div>
                <textarea 
                    onChange={onPostChange}
                    placeholder="Pranešimo laukas"
                    value={props.state.newPostText} 
                    className={classes.postTextArea}
                />
            </div>
            <div>
                <button onClick={addPost} className={classes.postButton}>Išsaugoti pranešimą</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
