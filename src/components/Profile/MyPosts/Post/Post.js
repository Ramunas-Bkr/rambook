import React from 'react'
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.Post}>
            <div className={classes.PostBlock}>
                <div className={classes.Avatar}>
                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000108/1584036216000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="avatar" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
                    explicabo reprehenderit optio amet ab temporibus asperiores quasi
                    cupiditate.
                    Voluptatum ducimus voluptates voluptas?
            </p>
            </div>
            <div className={classes.icons}>
                <i className="fas fa-thumbs-up"></i>
                <i className="fas fa-laugh"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-sad-tear"></i>
                <i className="fas fa-angry"></i>
            </div>
        </div>
    )
}

export default Post
