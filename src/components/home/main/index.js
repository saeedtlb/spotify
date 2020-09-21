import React, { useState, useEffect } from 'react';

import Card from '../../utils/Card';

import '../../../Resources/Css/main.css';

import { useSongStateValue } from '../../DataLayer';

import { get_Home_Playlists } from '../../../Actions/song';

import CircularProgress from '@material-ui/core/CircularProgress';

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
    }, [featured.length]);

    const renderCards = () =>
        featured.length > 0
            ? featured.map(playlist => (
                  <Card
                      key={playlist.id}
                      id={playlist.id}
                      name={playlist.name}
                      description={playlist.description}
                      url={playlist.image}
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
                <div className='loading'>
                    <CircularProgress thickness={7} />
                </div>
            )}
        </div>
    );
};

export default Main;
