import React, { useMemo } from 'react';

import '../../Resources/Css/home.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SongDataLayerProvider } from '../DataLayer';

import LeftSideBar from './sidebar/LeftSideBar';
import Player from './footer/Player';
import Main from './main';
import Playlist from './main/Playlist';

const Body = () => {
    const leftSideBar = useMemo(() => <LeftSideBar />, []);

    return (
        <SongDataLayerProvider>
            <div className='home'>
                <BrowserRouter>
                    {leftSideBar}
                    <Player />
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
        </SongDataLayerProvider>
    );
};

export default Body;
