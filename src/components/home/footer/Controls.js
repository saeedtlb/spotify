import React from 'react';

import { useStateValue } from '../../DataLayer';

import { toggle_play_status } from '../../../Actions/user';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';

const Controls = () => {
    const [{ playing }, dispatch] = useStateValue();

    const togglePlay = () => dispatch(toggle_play_status(!playing));

    return (
        // <div className='song'>
        <div>
            <div className='control'>
                <ShuffleIcon />
                <SkipPreviousIcon />
                {playing ? (
                    <PauseCircleOutlineIcon
                        className='play_pause'
                        onClick={togglePlay}
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        className='play_pause'
                        onClick={togglePlay}
                    />
                )}
                <SkipNextIcon />
                <LoopIcon />
            </div>
        </div>
    );
};

export default Controls;
