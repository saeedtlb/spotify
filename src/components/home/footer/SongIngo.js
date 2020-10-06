import React, { useState, useEffect } from 'react';

import { useSongStateValue } from '../../DataLayer';

import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { ARTIST, SONG } from '../../../Actions/types';
import Song from '../../utils/context-menu/Song';

const SongIngo = () => {
    const [{ song }] = useSongStateValue();
    // const [image, setImage] = useState({expand: false});
    const [expand, setExpand] = useState(false);

    // useEffect(() => {
    //     setImage({
    //         url: song.cover[0].url
    //     });
    // }, [song.name]);

    const expandImage = () => {
        console.log('expand');
        setExpand(prev => !prev);
    };

    return (
        <div className={expand ? 'song_expand' : 'song'}>
            <div
                className={expand ? 'cover_expand' : 'cover'}
                onClick={expandImage}
            >
                {song.cover ? (
                    <img src={song.cover.url} alt='song cover' />
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
                    <div>
                        <MenuProvider id={SONG}>
                            <span>{song.name}</span>
                        </MenuProvider>
                        <Song id={SONG} />
                    </div>
                    {song.artists ? (
                        <div>
                            <MenuProvider id={ARTIST}>
                                <span>{song.artists.join(', ')}</span>
                            </MenuProvider>
                            <Song id={ARTIST} />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default SongIngo;
