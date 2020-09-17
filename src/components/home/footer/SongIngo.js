import React from 'react';

import { useStateValue } from '../../DataLayer';

const SongIngo = () => {
    const [{ latest_song }] = useStateValue();

    return (
        <div className='song'>
            <div className='cover'>
                {latest_song.cover ? (
                    <img
                        src={latest_song.cover.url}
                        width='64px'
                        height='64px'
                        alt='song cover'
                    />
                ) : (
                    <img
                        src='/Images/no_image.png'
                        width='64px'
                        height='64px'
                        alt='song cover'
                    />
                )}
            </div>
            <div className='info'>
                <div className='texts'>
                    <p>
                        <span>{latest_song.name}</span>
                        <br />
                        {latest_song.artists
                            ? latest_song.artists.join(', ')
                            : ''}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SongIngo;
