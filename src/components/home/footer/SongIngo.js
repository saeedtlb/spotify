import React from 'react';

import { useSongStateValue } from '../../DataLayer';

import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { ARTIST, SONG } from '../../../Actions/types';
import Song from '../../utils/context-menu/Song';

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
                    <div>
                        <MenuProvider id={SONG}>
                            <span>{song.name}</span>
                        </MenuProvider>
                        <Song id={SONG} />
                    </div>
                    {song.artists ? (
                        <div>
                            <MenuProvider id={ARTIST}>
                                {song.artists.join(', ')}
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
