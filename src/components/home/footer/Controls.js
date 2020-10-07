import React, { useEffect, useState, useRef } from 'react';

// STATE
import { useSongStateValue } from '../../DataLayer';

// CUSTOM FUNCTIONS
import { toggle_play_status, get_song } from '../../../Actions/song';
import useTimer from '../../../hooks/useTimer';
import Timebar from './Timebar';
import ControlsBtn from './ControlsBtn';
import Error from '../../utils/Error';

// PLAYER PACKAGE
import ReactPlayer from 'react-player';

const Controls = ({ volume }) => {
    const { timer, start: play, pause, reset, finish } = useTimer();
    const [{ playing, song }, dispatch] = useSongStateValue();
    const [err, setErr] = useState([false, null]);
    const [info, setInfo] = useState({ duration: 1, played: 0, seek: false });
    const seek_ref = useRef();

    const togglePlay = status => {
        if (song.url) {
            dispatch(toggle_play_status(status));
            err && setErr([false, null]);
        } else {
            setErr([true, 'this song does not have preview']);
        }
    };

    const changeTimeBar = value => {
        setInfo(prev => ({
            ...prev,
            played: parseInt(value),
            seek: parseInt(value),
        }));
    };

    useEffect(() => {
        setInfo(prev => ({
            ...prev,
            played: prev.seek
                ? prev.seek
                : ((timer / info.duration) * 100).toFixed(2),
        }));
    }, [timer, info.duration]);

    useEffect(() => {
        if (song.id) {
            get_song(song.id).then(data => dispatch(data));
        }
        if (!song.url) {
            setErr([true, 'this song does not have preview']);
        }
    }, [song.id, song.name, song.url, dispatch]);

    const handleClose = () => setErr([false, null]);

    const handleMouseUp = () => seek_ref.current.seekTo(info.seek / 100, '');

    const seekTo = e => {
        reset(e);
        setInfo(prev => ({
            ...prev,
            seek: false,
            played: e,
        }));
    };

    const start = () => {
        setInfo(prev => ({
            ...prev,
            played: 0,
            seek: false,
        }));
        finish();
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
                onStart={start}
                onPlay={play}
                onPause={pause}
                onSeek={seekTo}
                onEnded={() => togglePlay(false)}
                onError={() => setErr([true, 'somthing went wrong!!!'])}
            />

            <Error show={err[0]} txt={err[1]} handleClose={handleClose} />

            <ControlsBtn
                playing={playing}
                toggle={value => togglePlay(value)}
            />

            <Timebar
                timer={timer}
                played={info.played}
                duration={info.duration}
                change={value => changeTimeBar(value)}
                mouseUp={handleMouseUp}
            />
        </>
    );
};

export default Controls;
