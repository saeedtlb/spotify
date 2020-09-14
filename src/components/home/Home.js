import React from 'react';

import '../../Resources/Css/home.css';

import LeftSideBar from './LeftSideBar';
import Player from './Player';
import Main from './Main';

const Home = () => {
    return (
        <div className='home'>
            <section>
                <LeftSideBar />
                <Main />
            </section>
            <Player />
        </div>
    );
};

export default Home;
