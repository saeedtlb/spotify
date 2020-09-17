import React from 'react';

import '../../Resources/Css/home.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LeftSideBar from './sidebar/LeftSideBar';
import Player from './footer/Player';
import Main from './main';
import Playlist from './main/Playlist';

const Body = () => {
    return (
        <div className='home'>
            <LeftSideBar />
            <Player />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route
                        exact
                        path='/playlist/:play_id'
                        component={Playlist}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Body;
