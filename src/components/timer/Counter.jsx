import React, {useState, useEffect, useRef} from 'react';
import styles from './Counter.module.css';
import ItemList from "../itemList/ItemList";
import axios from 'axios';

const Counter = function() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post 1', body: 'Description'},
    ])
    const [data, setData] = useState([])
    const [dateValue, setDateValue] = useState(new Date(0));
    const [count, setCount] = useState('00:00');
    const [btnStartTxt] = useState('Start');
    const btnStartValue = useRef();

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
            wikiRequest();
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

    async function wikiRequest() {
        const fetchData = async () => {
            try {
                let url =
                    'https://en.wikipedia.org/w/api.php?origin=*&action=parse&pageid=4335&format=json&prop=wikitext&section=0'
                //generateUrl();
                const {data} = await axios.get(url)

                const newPost = {id: Date.now(), title: data.parse.title, body: ''}
                setPosts([...posts, newPost])
                console.log(data.parse)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }

    function generateUrl() {
        //'https://en.wikipedia.org/w/api.php?origin=*&action=parse&pageid=4335&format=json&prop=wikitext&section=0'
        let rand = Math.floor(Math.random() * (5000 - 1000)) + 1000
        return 'https://en.wikipedia.org/w/api.php?origin=*&action=parse&pageid=' + rand + '&format=json&prop=wikitext&section=0'
    }

    return (
        <div className={styles.mainBox}>
            <div className={styles.timerBox}>
                <h1>Timer: {count}</h1>
                <button ref={btnStartValue} onClick={btnStart} id="btnStartId">{btnStartTxt}</button>
                <button onClick={btnReset} id="btnResetId">Reset</button>
            </div>
            <div className={styles.itemList}>
                <ItemList posts={posts}/>
            </div>
        </div>
    )
}

export default Counter;