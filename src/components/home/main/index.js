import React, { useState, useEffect } from 'react';

import Card from '../../utils/Card';

import '../../../Resources/Css/main.css';

import { useSongStateValue } from '../../DataLayer';

import { get_Home_Playlists } from '../../../Actions/song';

import Loading from '../../utils/Loading';

const Main = () => {
    const [{ featured }, dispatch] = useSongStateValue();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (featured.length > 0) {
            setLoading(false);
        } else {
            get_Home_Playlists()
                .then(data => dispatch(data))
                .catch(err => console.log('err in main home', err));
        }
    }, [featured.length, dispatch]);

    const renderCards = () =>
        featured.length > 0
            ? featured.map(playlist => (
                  <Card
                      key={playlist.id}
                      name={playlist.name}
                      description={playlist.description}
                      url={playlist.image}
                      linkTo={`/playlist/${playlist.id}`}
                      type='playlist'
                  />
              ))
            : null;

    return (
        <div className='main'>
            {!loading ? (
                <div className='featured'>
                    <div className='featured__title'>
                        <h3>featured playlist</h3>
                    </div>
                    <div className='featured__playlists'>{renderCards()}</div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Main;
