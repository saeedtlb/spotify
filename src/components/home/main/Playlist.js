import React, { useEffect, useState } from 'react';

import '../../../Resources/Css/playlist.css';

import SongTable from './SongTable';

import { useSongStateValue } from '../../DataLayer';
import { get_Playlist_info } from '../../../Actions/song';

import CircularProgress from '@material-ui/core/CircularProgress';

// import songs from './songs.json';

const Playlist = props => {
    const initial = { status: true, msg: '', err: false };
    const [loading, setLoading] = useState(initial);
    const [{ playlist_info }, dispatch] = useSongStateValue();

    useEffect(() => {
        get_Playlist_info(props.match.params.play_id)
            .then(data => {
                dispatch(data);
                setLoading(prev => ({ ...prev, ...initial, status: false }));
            })
            .catch(err => {
                console.log(err);
                setLoading({
                    status: false,
                    err: true,
                    msg:
                        'Somthing in requesting for data went wrong, please try later',
                });
            });
        // setPlaylist(songs);
    }, []);

    return (
        <div className='playlist'>
            {loading.status ? (
                <div className='loading'>
                    <CircularProgress thickness={7} />
                </div>
            ) : loading.err ? (
                <div className='err'>
                    <h2>{loading.msg}</h2>
                </div>
            ) : (
                <>
                    <div className='playlist__detail'>
                        <div className='cover'>
                            {playlist_info.images ? (
                                <img
                                    src={playlist_info.images[0].url}
                                    alt='playlist cover'
                                />
                            ) : (
                                <img
                                    src='/Images/no_image.png'
                                    alt='playlist cover'
                                />
                            )}
                        </div>
                        <div className='info'>
                            <h3>playlist</h3>
                            <h1>{playlist_info.name}</h1>
                            <p>{playlist_info.description}</p>
                            <div className='btns'>
                                <button className='play'>play</button>
                                <button className='follow'>follow</button>
                            </div>
                        </div>
                    </div>
                    <div className='playlist__songs'>
                        <SongTable tracks={playlist_info.tracks} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Playlist;
