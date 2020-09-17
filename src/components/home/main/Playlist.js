import React, { useEffect, useState } from 'react';

// import spotifyWebApi from 'spotify-web-api-js';

// const spotify = new spotifyWebApi();

const Playlist = props => {
    const [playlist_detail, setPlaylist] = useState({});

    useEffect(() => {
        // spotify
        //     .getPlaylist(props.play_id)
        //     .then(res => {
        //         const { name, tracks, images } = res;
        //         setPlaylist(prev => ({
        //             ...prev,
        //             name,
        //             images,
        //             tracks: tracks.items.map(_track => ({
        //                 added: _track.added_at,
        //                 name: _track.track.name,
        //                 artists: _track.track.artists.map(
        //                     artist => artist.name
        //                 ),
        //             })),
        //         }));
        //     })
        //     .catch(err => console.log(2222, err));
        fetch('./songs.json')
            .then(res => res.json())
            // .then(data => console.log(22, data))
            .catch(err => console.log(err));
    }, []);

    console.log(999999, playlist_detail);

    return (
        <div>
            <h2>playlist</h2>
        </div>
    );
};

export default Playlist;
