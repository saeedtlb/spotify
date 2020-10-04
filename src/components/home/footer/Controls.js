import React, { useEffect, useState, useRef, useMemo } from 'react';

import { useSongStateValue } from '../../DataLayer';

import { toggle_play_status, get_song } from '../../../Actions/song';
import useTimer from '../../../hooks/useTimer';

import ReactPlayer from 'react-player';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Controls = ({ volume }) => {
    const { timer, isActive, start, pause, reset, setTimer } = useTimer();
    const [{ playing, song }, dispatch] = useSongStateValue();
    const [err, setErr] = useState([false, null]);
    const [info, setInfo] = useState({ duration: 1 });
    const time_ref = useRef();
    const seek_ref = useRef();

    const togglePlay = status => {
        if (song.url) {
            dispatch(toggle_play_status(status));
            err && setErr([false, null]);
        } else {
            setErr([true, 'this song does not have preview']);
        }
    };

    useEffect(() => {
        const { value } = time_ref.current;
        console.log(999, value);
        time_ref.current.style.background = `linear-gradient(to right, #46db70 0%, #46db70 ${value}%, #3c3c3c ${value}%, #3c3c3c 100%)`;
    }, [timer, isActive, start, pause, reset]);

    useEffect(() => {
        if (song.id) {
            get_song(song.id).then(data => dispatch(data));
        }
    }, [song.id, dispatch]);

    useEffect(() => {
        if (!song.url) {
            setErr([true, 'this song does not have preview']);
        }
    }, [song.name, song.url, dispatch]);

    const handleClose = () => setErr([false, null]);

    const calculateDuration = seconds =>
        Math.floor(seconds / 60) +
        ':' +
        ('0' + Math.floor(seconds % 60)).slice(-2);

    const timebar = () => {
        const value = parseInt(time_ref.current.value) / 100;
        seek_ref.current.seekTo(value);
        console.log(value * 100);
        setTimer(value * 100);
    };

    return (
        <>
            <ReactPlayer
                url={song.url ? song.url : ''}
                volume={volume / 100}
                playing={playing}
                ref={seek_ref}
                style={{ display: 'none' }}
                onDuration={e =>
                    setInfo(prev => ({
                        ...prev,
                        duration: e,
                    }))
                }
                onPlay={start}
                onPause={pause}
                // onSeek={e => console.log(46, e)}
                onError={() => setErr([true, 'somthing went wrong!!!'])}
            />
            <Snackbar
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                autoHideDuration={4000}
                open={err[0]}
                onClose={handleClose}
            >
                <Alert variant='filled' severity='error' onClose={handleClose}>
                    {err[1]}
                </Alert>
            </Snackbar>
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

            <div className='timebar'>
                <span>{timer ? calculateDuration(timer) : ''}</span>
                <input
                    type='range'
                    onChange={timebar}
                    ref={time_ref}
                    defaultValue='0'
                    value={((timer / info.duration) * 100).toFixed(2)}
                />
                <span>
                    {info.duration ? calculateDuration(info.duration) : ''}
                </span>
            </div>
        </>
    );
};

export default Controls;
