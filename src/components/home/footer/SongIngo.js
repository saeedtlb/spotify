import React, { useState } from 'react';

import { useSongStateValue } from '../../DataLayer';

import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { ARTIST, SONG } from '../../../Actions/types';
import Song from '../../utils/context-menu/Song';

// ICONS
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const SongIngo = () => {
    const [{ song }] = useSongStateValue();
    const [expand, setExpand] = useState(false);
    const [like, setLike] = useState(false);

    const expandImage = () => {
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
                        <MenuProvider id={SONG} style={{ display: 'flex' }}>
                            <span>{song.name}</span>
                            {like ? (
                                <FavoriteIcon
                                    style={{ color: '#46db70' }}
                                    onClick={() => setLike(prev => !prev)}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    onClick={() => setLike(prev => !prev)}
                                />
                            )}
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
