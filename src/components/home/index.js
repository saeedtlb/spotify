import React, { useMemo } from 'react';

import '../../Resources/Css/home.css';

import { BrowserRouter } from 'react-router-dom';

import { SongDataLayerProvider } from '../DataLayer';

import Routes from './Routes';
import LeftSideBar from './sidebar/left/LeftSideBar';
import Player from './footer/Player';
import Qrcode from '../utils/Qrcode';

const Body = () => {
    const leftSideBar = useMemo(() => <LeftSideBar />, []);

    return (
        <SongDataLayerProvider>
            <div className='home'>
                <BrowserRouter>
                    {leftSideBar}
                    <Routes />
                    <Player />
                    <Qrcode />
                </BrowserRouter>
            </div>
        </SongDataLayerProvider>
    );
};

export default Body;
