import React from 'react';

import { useStateValue } from '../../DataLayer';

const SongIngo = () => {
    const [{ latest_song }] = useStateValue();

    const render_Artists = () => {
        return latest_song.artists
            ? latest_song.artists.map(artist => artist.name).join(', ')
            : '';
    };

    return (
        <div className='song'>
            <div className='cover'>
                {latest_song.cover ? (
                    <img
                        src={latest_song.cover[2].url}
                        width={latest_song.cover[2].width}
                        height={latest_song.cover[2].height}
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
                        {render_Artists()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SongIngo;
