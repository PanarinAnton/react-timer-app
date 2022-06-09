import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = function() {

    return (
        <div className={styles.headerBox}>
            <h1 className={styles.headerTxt}>React приложение: Таймер</h1>
        </div>
    )
}

export default Header;