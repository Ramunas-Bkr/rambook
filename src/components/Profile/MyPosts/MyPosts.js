import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './MyPostsForm'

function MyPosts(props) {

    const postElement = props.posts.map( p => 
    <Post message={p.message}
        likecount={p.likecount}
    /> )

    let addPost = (value) => {
        props.addPost(value.addMyPost);
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <PostReduxForm 
                onSubmit={addPost}/>
            {postElement}
        </div>
    )
}

export default MyPosts
