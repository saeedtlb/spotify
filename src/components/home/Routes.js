import React from 'react';

import { Route, Switch } from 'react-router-dom';

// ROUTES
import Main from './main';
import Playlist from './main/Playlist';
import Categories from './main/category';
import Category from './main/category/Category';
import Recently from './main/Recently';

// STATIC
import Freind from './sidebar/right/Freind';

const Routes = () => {
    return (
        <div className='main'>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/playlist/:play_id' component={Playlist} />
                <Route exact path='/recently-played' component={Recently} />
                <Route exact path='/browse' component={Categories} />
                <Route
                    exact
                    path='/category/:category_id'
                    component={Category}
                />
            </Switch>
            <Freind />
        </div>
    );
};

export default Routes;
