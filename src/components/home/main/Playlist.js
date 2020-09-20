import React, { useEffect, useState } from 'react';

import '../../../Resources/Css/playlist.css';

import SongTable from './SongTable';

import spotifyWebApi from 'spotify-web-api-js';

const spotify = new spotifyWebApi();

// import songs from './songs.json';

const Playlist = props => {
    const [playlist_detail, setPlaylist] = useState({});

    useEffect(() => {
        spotify
            .getPlaylist(props.match.params.play_id)
            .then(res => {
                const { name, tracks, images } = res;
                setPlaylist(prev => ({
                    ...prev,
                    name,
                    images,
                    tracks: tracks.items.map(_track => ({
                        id: _track.track.id,
                        added: _track.added_at,
                        name: _track.track.name,
                        artists: _track.track.artists.map(
                            artist => artist.name
                        ),
                    })),
                }));
            })
            .catch(err => console.log(2222, err));
        // setPlaylist(songs);
    }, []);

    return (
        <div className='playlist'>
            <div className='playlist__detail'>
                <div className='cover'>
                    {playlist_detail.images ? (
                        <img
                            src={playlist_detail.images[0].url}
                            alt='playlist cover'
                        />
                    ) : (
                        <img src='/Images/no_image.png' alt='playlist cover' />
                    )}
                </div>
                <div className='info'>
                    <h3>playlist</h3>
                    <h1>{playlist_detail.name}</h1>
                    <p>{playlist_detail.description}</p>
                    <div className='btns'>
                        <button className='play'>play</button>
                        <button className='follow'>follow</button>
                    </div>
                </div>
            </div>
            <div className='playlist__songs'>
                <SongTable tracks={playlist_detail.tracks} />
            </div>
        </div>
    );
};

export default Playlist;
