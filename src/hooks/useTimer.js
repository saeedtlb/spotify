import { useRef, useState } from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const countRef = useRef(null);

    const start = () => {
        setIsActive(true);
        countRef.current = setInterval(() => setTimer(prev => ++prev), 1000);
    };
    const pause = () => {
        clearInterval(countRef.current);
        setIsActive(false);
    };
    const reset = (time = 0) => {
        clearInterval(countRef.current);
        setIsActive(false);
        setTimer(time);
        start();
    };

    return { timer, isActive, start, pause, reset };
};

export default useTimer;
