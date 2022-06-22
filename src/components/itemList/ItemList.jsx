import React from 'react';
import styles from './ItemList.module.css';
import ItemPost from './ItemPost';

const ItemList = function({posts}) {
    return (
        <div className={styles.itemList}>
            {posts.map((post) =>
                <ItemPost post={post} key={post.id}/>
            )}
        </div>
    )
}

export default ItemList;