import React from "react";
import styles from './ItemPost.module.css';

const ItemPost = (props) => {
    return (
        <div className={styles.itemPost}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
    )
}

export default ItemPost;