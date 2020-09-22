import React, { useEffect, useState, useRef } from 'react';

import { useSongStateValue } from '../../DataLayer';

import { toggle_play_status } from '../../../Actions/song';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

const Controls = ({ volume }) => {
    const [{ playing, song }, dispatch] = useSongStateValue();
    const [err, setErr] = useState(false);
    const ref = useRef();

    const SlideTransition = props => <Slide {...props} direction='left' />;

    const togglePlay = status => {
        dispatch(toggle_play_status(status));
        status ? ref.current.play() : ref.current.pause();

        if (song.url) {
            if (status) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
            dispatch(toggle_play_status(status));
            err && setErr(false);
        } else {
            setErr(true);
        }
    };

    useEffect(() => {
        ref.current.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
        if (!song.url) {
            setErr(true);
        }
    }, [song.name, song.url, dispatch]);

    return (
        <div>
            <audio ref={ref} src={song.url ? song.url : ''}></audio>
            <Snackbar
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                autoHideDuration={3000}
                TransitionComponent={SlideTransition}
                open={err}
                onClose={() => setErr(false)}
            >
                <Alert variant='filled' severity='error'>
                    this song does not have preview
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
        </div>
    );
};

export default Controls;
