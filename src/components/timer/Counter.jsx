import React, {useState, useEffect} from 'react';
import styles from './Counter.module.css';

const Counter = function() {
    const [dateValue, setDateValue] = useState(new Date(0));
    const [count, setCount] = useState('00:00');
    const [btnStartTxt] = useState('Start');

    useEffect(() => {
        const timerId = setTimeout(timer, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [count]);

    function timer() {
        let btn = document.getElementById('btnStartId');
        if (btn.innerText == "Stop") {
            let tempDate = dateValue;
            tempDate.setSeconds(tempDate.getSeconds() + 1);
            setDateValue(tempDate);
            setCount(timeFormat());
            console.log(tempDate.getMinutes()*60+tempDate.getSeconds());
        }
    }

    function timeFormat() {
        let minutes = ("0" + dateValue.getMinutes().toString()).slice(-2);
        let seconds = ("0" + dateValue.getSeconds().toString()).slice(-2);
        return minutes + ':' + seconds;
    }

    function btnStart() {
        let btn = document.getElementById('btnStartId');
        if (btn.innerText == "Start") {
            btn.innerText = "Stop"
            timer();
        } else {
            btn.innerText = "Start"
        }
    }

    function btnReset() {
        setDateValue(new Date(0))
        setCount('00:00')

        let btn = document.getElementById('btnStartId');
        btn.innerText = "Start"
    }

    return (
        <div className={styles.timerBox}>
            <h1>Timer: {count}</h1>
            <button onClick={btnStart} id="btnStartId">{btnStartTxt}</button>
            <button onClick={btnReset} id="btnResetId">Reset</button>
        </div>
    )
}

export default Counter;