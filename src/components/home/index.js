import React from 'react';

import '../../Resources/Css/home.css';

import LeftSideBar from './sidebar/LeftSideBar';
import Player from './footer/Player';
import Main from './main/Main';

const Body = () => {
    return (
        <div className='home'>
            <LeftSideBar />
            <Main />
            <Player />
        </div>
    );
};

export default Body;
