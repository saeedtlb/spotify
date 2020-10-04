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
    // const resume = () => {
    //     setIsActive(true);
    // }
    const reset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setTimer(0);
    };

    return { timer, isActive, start, pause, setTimer };
};

export default useTimer;
