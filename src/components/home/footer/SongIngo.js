import React from 'react';

import { useSongStateValue } from '../../DataLayer';

import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import { SONG } from '../../../Actions/types';
import Song from '../../utils/context-menu/Song';

const SongIngo = () => {
    const [{ song }] = useSongStateValue();

    return (
        <div className='song'>
            <Song id={SONG} />
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
                        <ContextMenuTrigger id={SONG} holdToDisplay={1200}>
                            <span>{song.name}</span>
                        </ContextMenuTrigger>
                        {song.artists ? song.artists.join(', ') : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongIngo;
