import React from 'react';

import { useStateValue } from '../../DataLayer';

const SongIngo = () => {
    const [{ latest_song }] = useStateValue();
    console.log(888, latest_song);

    const render_Artists = () => {
        let artists = '';
        latest_song.artists.forEach(artist => (artists += artist + ', '));
        // latest_song.artists?.forEach(artist => (artists += artist.name + ', '));
        return artists.trim().slice(0, -1);
    };

    return (
        <div className='song'>
            <div className='cover'>
                <object data='/Images/spotify.jpg' type='image/jpg'>
                    <img
                        src={latest_song?.cover[2].url}
                        width={latest_song?.cover[2].width}
                        height={latest_song?.cover[2].height}
                        alt='song cover'
                    />
                </object>
            </div>
            <div className='info'>
                <p>{latest_song.name}</p>
                <p>{render_Artists()}</p>
            </div>
        </div>
    );
};

export default SongIngo;
