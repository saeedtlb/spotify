import React, { useState, useEffect } from 'react';

import '../../../../Resources/Css/category.css';

import { get_category_playlists } from '../../../../Actions/song';
import { useSongStateValue } from '../../../DataLayer';

import Loading from '../../../utils/Loading';
import Card from '../../../utils/Card';

const Category = props => {
    const [load, setLoad] = useState([true, null]);
    const [{ cat_playlists }, dispatch] = useSongStateValue();

    useEffect(() => {
        get_category_playlists(props.match.params.category_id)
            .then(data => {
                dispatch(data);
                setLoad([false, null]);
            })
            .catch(err => {
                console.log('category' + err);
                setLoad([
                    false,
                    'somthing went wrong on getting category playlists',
                ]);
            });
    }, [props.match.params.category_id, dispatch]);

    const render_cat_playlists = () =>
        cat_playlists
            ? cat_playlists.map(playlist => (
                  <Card
                      key={playlist.id}
                      url={playlist.image}
                      name={playlist.name}
                      description={playlist.description}
                      linkTo={`/playlist/${playlist.id}`}
                      type='playlist'
                  />
              ))
            : null;

    return (
        <div className='cat_playlists'>
            {load[0] ? (
                <Loading />
            ) : load[1] ? (
                <div className='err'>
                    <h1>{load[1]}</h1>
                </div>
            ) : (
                <>
                    <div className='cat_playlists__header'>
                        <h2>{props.match.params.category_id}</h2>
                    </div>
                    <div className='cat_playlists__items'>
                        {render_cat_playlists()}
                    </div>
                </>
            )}
        </div>
    );
};

export default Category;
