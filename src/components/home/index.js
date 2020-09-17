import React from 'react';

import '../../Resources/Css/home.css';

import { BrowserRouter, Switch } from 'react-router-dom';

import LeftSideBar from './sidebar/LeftSideBar';
import Player from './footer/Player';
import Main from './main/Main';

const Body = () => {
    return (
        <BrowserRouter>
            <Switch>
                <div className='home'>
                    <LeftSideBar />
                    <Main />
                    <Player />
                </div>
            </Switch>
        </BrowserRouter>
    );
};

export default Body;
