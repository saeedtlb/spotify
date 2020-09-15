import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const SpotifySlider = withStyles({
    root: {
        height: 3,
        padding: '13px 0',
        color: '#b3b3b3',
        transition: 'color 0.23s ease-in',
        '&:hover': { color: '#1DB954' },
    },
    thumb: {
        backgroundColor: '#b3b3b3',
        transform: 'scale(0)',
        transition: 'transform .16s ease',
    },
    active: {
        color: '#1DB954',
        transform: 'scale(1)',
    },
    track: {
        height: 3,
    },
    rail: {
        height: 3,
        color: '#b3b3b3',
    },
})(Slider);

const CustomSlider = ({ value: volume, changeValue }) => {
    return (
        <SpotifySlider
            valueLabelDisplay='off'
            defaultValue={40}
            value={typeof volume === 'number' ? volume : 0}
            aria-labelledby='input-slider'
            onChange={(e, newValue) => changeValue(newValue)}
        />
    );
};

export default CustomSlider;
