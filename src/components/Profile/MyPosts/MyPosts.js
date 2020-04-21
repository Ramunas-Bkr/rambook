import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    const postElement = props.state.posts.map( p => 
    <Post message={p.message}
        likecount={p.likecount}
        key={p.id}
    /> )
    
    let newPageElement = React.createRef()

    let addPost = () => {
        let text = newPageElement.current.value;
        props.addPost(text);
        newPageElement.current.value = '';
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <div>
                <textarea ref={newPageElement} className={classes.postTextArea}></textarea>
            </div>
            <div>
                <button onClick={addPost} className={classes.postButton}>Išsaugoti pranešimą</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts
