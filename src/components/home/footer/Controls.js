import React, { useEffect, useState, useRef } from 'react';

import { useSongStateValue } from '../../DataLayer';

import { toggle_play_status } from '../../../Actions/song';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';

const Controls = ({ volume }) => {
    const [{ playing, song }, dispatch] = useSongStateValue();
    const ref = useRef();

    const togglePlay = status => {
        dispatch(toggle_play_status(status));
        status ? ref.current.play() : ref.current.pause();
    };

    useEffect(() => {
        ref.current.volume = volume / 100;
    }, [volume]);

    return (
        <div>
            <audio ref={ref} src={song.url ? song.url : ''}></audio>
            <div className='control'>
                <ShuffleIcon />
                <SkipPreviousIcon />
                {playing ? (
                    <PauseCircleOutlineIcon
                        className='play_pause'
                        onClick={() => togglePlay(false)}
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        className='play_pause'
                        onClick={() => togglePlay(true)}
                    />
                )}
                <SkipNextIcon />
                <LoopIcon />
            </div>
        </div>
    );
};

export default Controls;
