import React from 'react';

import { useSongStateValue } from '../../DataLayer';

const SongIngo = () => {
    const [{ song }] = useSongStateValue();

    return (
        <div className='song'>
            <div className='cover'>
                {song.cover ? (
                    <img
                        src={song.cover.url}
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
                        <span>{song.name}</span>
                        <br />
                        {song.artists ? song.artists.join(', ') : ''}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SongIngo;
