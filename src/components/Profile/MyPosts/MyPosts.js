import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    const postElement = props.state.posts.map( p => 
    <Post message={p.message}
        image={p.image}
        likecount={p.likecount}
        key={p.id}
    /> )
    

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <div>
                <textarea className={classes.postTextArea}></textarea>
            </div>
            <div>
                <button className={classes.postButton}>Išsaugoti pranešimą</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
