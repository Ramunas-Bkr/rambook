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
        props.dispatch({ type: 'ADD_POST' });
    }

    let onPostChange = () => {
        let text = newPageElement.current.value;
        props.dispatch({
            type: 'UPDATE_NEW_POST_TEXT',
            newText: text
        });
    }

    return (
        <div className={classes.MyPosts}>
            <h3 className={classes.postHeader}> My posts </h3>
            <div>
                <textarea 
                    onChange={onPostChange}
                    ref={newPageElement}
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
