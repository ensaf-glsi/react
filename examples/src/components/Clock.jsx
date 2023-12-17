import { useEffect, useState } from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("load clock with hooks");
        const timerID = setInterval(() => {
            console.log("tick");
            setDate(new Date());
        }, 1000);
        // fonction de cleanup
        return () => {
            clearInterval(timerID);
        };
    }, []); // [] signifie traitement executé une fois au chargement de composant

    return (
        <div>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    );
}