import React from 'react';

// MATERIAL UI ICONS
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';

const ControlsBtn = ({ playing, toggle }) => {
    return (
        <div className='control'>
            <ShuffleIcon />
            <SkipPreviousIcon />
            {playing ? (
                <PauseCircleOutlineIcon
                    className='play_pause'
                    onClick={() => toggle(false)}
                />
            ) : (
                <PlayCircleOutlineIcon
                    className='play_pause'
                    onClick={() => toggle(true)}
                />
            )}
            <SkipNextIcon />
            <LoopIcon />
        </div>
    );
};

export default ControlsBtn;
