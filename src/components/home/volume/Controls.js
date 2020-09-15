import React from 'react';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LoopIcon from '@material-ui/icons/Loop';

const Controls = () => {
    return (
        <div className='song'>
            <div className='control'>
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleOutlineIcon className='play_pause' />
                <SkipNextIcon />
                <LoopIcon />
            </div>
        </div>
    );
};

export default Controls;
