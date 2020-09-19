import React from 'react';

import Card from '../../utils/Card';

import '../../../Resources/Css/main.css';

import { useStateValue } from '../../DataLayer';

const Main = () => {
    const [{ featured }] = useStateValue();

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
            <div className='featured'>
                <div className='featured__title'>
                    <h3>featured playlist</h3>
                </div>
                <div className='featured__playlists'>{renderCards()}</div>
            </div>
        </div>
    );
};

export default Main;
