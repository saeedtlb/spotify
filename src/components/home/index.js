import React, { useMemo } from 'react';

import '../../Resources/Css/home.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SongDataLayerProvider } from '../DataLayer';

import LeftSideBar from './sidebar/left/LeftSideBar';
import Freind from './sidebar/right/Freind';
import Player from './footer/Player';
import Main from './main';
import Playlist from './main/Playlist';
import Categories from './main/category';
import Category from './main/category/Category';
import Qrcode from '../utils/Qrcode';

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
                        <Route exact path='/browse' component={Categories} />
                        <Route
                            exact
                            path='/category/:category_id'
                            component={Category}
                        />
                    </Switch>
                    <Freind />
                    <Qrcode />
                </BrowserRouter>
            </div>
        </SongDataLayerProvider>
    );
};

export default Body;
