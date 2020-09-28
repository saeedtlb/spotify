import React from 'react';

import '../../../Resources/Css/menu.css';

import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';

import Divider from '@material-ui/core/Divider';

const song = ({ id }) => {
    const handleClick = (e, data) => console.log(data.item);

    return (
        <ContextMenu
            id={id}
            style={{
                background: '#000',
                color: '#fff',
            }}
            onShow={e => console.log('show', e, this)}
            className='menu'
        >
            <MenuItem onClick={handleClick} data={{ item: 'add to queue' }}>
                add to queue
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'go to song radio' }}>
                go to song radio
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleClick} data={{ item: 'go to artist' }}>
                go to artist
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'go to album' }}>
                go to album
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'show credits' }}>
                show credits
            </MenuItem>

            <Divider />

            <MenuItem
                onClick={handleClick}
                data={{ item: 'save to your liked songs' }}
            >
                save to your liked songs
            </MenuItem>

            <SubMenu title='add to playlist'>
                <MenuItem onClick={handleClick} data={{ item: 'new playlist' }}>
                    new playlist
                </MenuItem>
            </SubMenu>

            <Divider />

            {/*<SubMenu title='share'>
                <MenuItem onClick={handleClick} data={{ item: 'facebook' }}>
                    facebook
                </MenuItem>
                <MenuItem onClick={handleClick} data={{ item: 'twitter' }}>
                    twitter
                </MenuItem>
                <MenuItem onClick={handleClick} data={{ item: 'telegram' }}>
                    telegram
                </MenuItem>
                <MenuItem onClick={handleClick} data={{ item: 'skype' }}>
                    skype
                </MenuItem>
                <MenuItem
                    onClick={handleClick}
                    data={{ item: 'copy song link' }}
                >
                    copy song link
                </MenuItem>
                <MenuItem
                    onClick={handleClick}
                    data={{ item: 'copy spotify uri' }}
                >
                    copy spotify uri
                </MenuItem>
            </SubMenu> */}
        </ContextMenu>
    );
};

export default song;

/*
add to queue
go to song radio
**************
go to artist
go to album
show credits
**************
save to your liked songs
add to playlist > new playlist
***************
share > facebook
        twitter
        telegram
        skype
        copy song link
        copy spotify uri
*/
