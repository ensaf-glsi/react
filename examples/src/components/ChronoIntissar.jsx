import React, { useEffect, useState } from 'react'

function convertNumberToTime(number) {
    const hours = Math.floor(number / 3600);
    const minutes = Math.floor((number % 3600) / 60);
    const seconds = number % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const Chrono = () => {
    const [isChronoRunning, setIsChronoRunning] = useState(false);
    const [counter, setCounter] = useState(0);
    console.log('Intissar - render chrono ', counter, isChronoRunning);
    useEffect(() => {
        console.log('Intissar - use effect chrono ', isChronoRunning);
        let timerId;
        if (isChronoRunning) {
            timerId = setInterval(() => {
                setCounter(prev => {
                    console.log('Intissar - tick ', prev);                    
                    return prev + 1;
                });
            }, 1000);
        } else {
            clearInterval(timerId);
        }
        return () => {
            console.log('Intissar - dechargment composant ');
            clearInterval(timerId);
        };
    }, [isChronoRunning]);
    const play = () => {
        setIsChronoRunning(true);
    }
    const stop = () => {
        isChronoRunning &&
            setIsChronoRunning(false);
    };
    const restart = () => {
        setIsChronoRunning(true);
        setCounter(0)
    };

    return (
        <div>
            <h1>Chronometer</h1>
            <div>{convertNumberToTime(counter)}</div>
            <button onClick={play}>Play</button>
            <button onClick={stop}>Stop</button>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default Chrono