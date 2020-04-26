import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    const postElement = props.posts.map( p => 
    <Post message={p.message}
        likecount={p.likecount}
    /> )

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <div>
                <textarea 
                    onChange={onPostChange}
                    placeholder="Pranešimo laukas"
                    value={props.newPostText} 
                    className={classes.postTextArea}
                />
            </div>
            <div>
                <button onClick={onAddPost} className={classes.postButton}>Išsaugoti pranešimą</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
