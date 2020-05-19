import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './MyPostsForm'

function MyPosts(props) {

    const postElement = props.posts.map( p => 
    <Post message={p.message}
        likecount={p.likecount}
    /> )

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (formData) => {
        let text = formData.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <PostReduxForm 
                newPostText={props.newPostText}
                onSubmit={onPostChange}
                onAddPost={onAddPost}/>
            {postElement}
        </div>
    )
}

export default MyPosts
