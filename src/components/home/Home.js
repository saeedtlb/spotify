import React from 'react';

import '../../Resources/Css/home.css';

import LeftSideBar from './sidebar/LeftSideBar';
import Player from './Player';
import Main from './Main';

const Home = () => {
    return (
        <div className='home'>
            <LeftSideBar />
            <Main />
            <Player />
        </div>
    );
};

export default Home;
