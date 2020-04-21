import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.PostBlock}>
                <div className={classes.Avatar}>
                    <img src="https://ets2.lt/wp-content/uploads/2018/04/Funny-Avatar-Mr-Bean-Smiling-Photoshop-Image.jpg?x46304" alt="avatar" />
                </div>
                <p>
                    {props.message}
                </p>
            </div>
            <div className={classes.icons}>
                <i className="fas fa-thumbs-up"></i>
                <i className="fas fa-laugh"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-sad-tear"></i>
                <i className="fas fa-angry"></i>
                <span>{props.likecount}</span>
            </div>
            
        </div>
    )
}

export default Post
