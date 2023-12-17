'use client';

import { useEffect, useRef, useState } from 'react';

function Timer() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);

    // const timer = useRef();

    useEffect(() => {
        let timerId;
        if (running) {
            timerId = setInterval(() => {
                setTime(prevTime => {
                    console.log('Youssef - tick : ', prevTime);
                    return prevTime + 1;
                });
            }, 1000)
        } else {
            clearInterval(timerId);
        }
        return () => {
            console.log('Youssef - dechargement composant');
            clearInterval(timerId);
        }
    }, [running])

    return (
        (
            <div className=''>
                <p className="timer" >{format2(time)}</p>
                <div className="action">
                    <button onClick={() => setTime(0)}>restart</button>
                    <button onClick=
                        {() => {
                            // if (running) clearInterval(timer.current)
                            setRunning(!running)
                        }
                        }>{running ? "Stop" : "Start"}</button>
                </div>
            </div>
        )
    );
}


const format = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};


const formatTimerNumber = number => `${String(number).padStart(2, '0')}`;

const format2 = (time) => {
    const seconds = time % 60;
    let totalMinutes = Math.floor(time / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${formatTimerNumber(hours)}:${formatTimerNumber(minutes)}:${formatTimerNumber(seconds)}`;
};

export default Timer;