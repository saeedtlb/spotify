import React, { useState } from 'react';

import '../../../Resources/Css/player.css';

import CustomSlider from './Volume';
import Controls from './Controls';
import SongIngo from './SongIngo';

import Grid from '@material-ui/core/Grid';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const Player = () => {
    const [volume, setVolume] = useState(40);

    return (
        <footer>
            <Grid
                container
                alignItems='center'
                justify='space-around'
                style={{ height: '100%', padding: 15 }}
            >
                <Grid item md={2}>
                    <SongIngo />
                </Grid>

                <Grid item md={7}>
                    <Controls volume={volume} />
                </Grid>

                <Grid item md={2}>
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <PlaylistPlayIcon />
                        </Grid>

                        <Grid item md={2}>
                            {volume === 0 ? (
                                <VolumeOffIcon />
                            ) : volume < 40 ? (
                                <VolumeDownIcon />
                            ) : (
                                <VolumeUpIcon />
                            )}
                        </Grid>

                        <Grid item md={5}>
                            <CustomSlider
                                value={volume}
                                changeValue={value => setVolume(value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Player;
