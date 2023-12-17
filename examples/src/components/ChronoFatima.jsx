'use client'

import React from 'react';
import styles from './page.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

//let id = {current: undefined}; // X error

function App() {
    const [time, setTime] = useState(0);
    //let id = {current: undefined}; // X error
    const id = useRef();

    console.log('Fatima - render chrono ', time, id)

    useEffect(() => {
        console.log('Fatima - chargment du composant');
        return () => {
            console.log('Fatima - dechargment du composant');
            clearInterval(id.current);
        }
    }, []);

    function handelTime() {
        if (!id.current) {
            id.current = setInterval(() => {
                setTime((prev) => {
                    console.log('Fatima - tick : ', prev, time);
                    return prev + 1;
                });
            }, 1000);    
        }
    }
    function pause() {
        if (id.current) {
            clearTimeout(id.current);
            id.current = null;    
        }
    }
    function reset() {
        pause();
        setTime(0);
    }

    return (
        <div className={styles.App}>
            <h1>{time}</h1>
            <div className={styles.cardspan}>
                <button onClick={handelTime}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default App;