import React, { useEffect, useRef } from 'react';

import { format_seconds } from '../../utils/misc';

const Timebar = ({ played, duration, timer, change, mouseUp }) => {
    const time_ref = useRef();

    useEffect(() => {
        const { value } = time_ref.current;
        time_ref.current.style.background = `linear-gradient(to right, #46db70 0%, #46db70 ${value}%, #3c3c3c ${value}%, #3c3c3c 100%)`;
    }, [played]);

    return (
        <div className='timebar'>
            <span>{timer ? format_seconds(timer) : ''}</span>
            <input
                type='range'
                onChange={() => change(time_ref.current.value)}
                onMouseUp={mouseUp}
                ref={time_ref}
                value={played}
            />
            <span>{duration ? format_seconds(duration) : ''}</span>
        </div>
    );
};

export default Timebar;
