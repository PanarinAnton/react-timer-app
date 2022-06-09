import React, {useState, useEffect} from 'react';
import styles from './Main.module.css';
import Counter from "../timer/Counter";

const Main = function() {

    return (
        <div className={styles.mainBox}>
            <Counter/>
        </div>
    )
}

export default Main;