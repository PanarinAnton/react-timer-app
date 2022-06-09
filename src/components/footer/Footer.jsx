import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = function() {

    return (
        <div className={styles.footerBox}>
            <h4 className={styles.footerTxt}>Panarin Anton. 2022</h4>
        </div>
    )
}

export default Footer;