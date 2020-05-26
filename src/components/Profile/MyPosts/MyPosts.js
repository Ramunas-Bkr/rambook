import React, { PureComponent } from 'react'
import classes from './MyPosts.module.css'
import PostReduxForm from './MyPostsForm'
import Post from './Post/Post'
export class MyPosts extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {

        const postElement = this.props.posts.map(p =>
            <Post message={p.message}
                likecount={p.likecount}
            />)

        let addPost = (value) => {
            this.props.addPost(value.addMyPost);
        }

        return (
            <div className={classes.MyPosts}>
                <h3 className={classes.postHeader}> My posts </h3>
                <PostReduxForm
                    onSubmit={addPost} />
                {postElement}
            </div>
        )
    }
}

export default MyPosts
