import React, { useRef } from 'react';

import '../../../Resources/Css/menu.css';

import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';

import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/styles/withStyles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Song = ({ id }) => {
    const ref = useRef();
    const Seperate = withStyles({
        root: {
            backgroundColor: '#fff',
        },
    })(Divider);

    const showContext = e => {
        let x = 0;
        let y = 0;

        const availHeight = e.target.innerHeight;
        const availWidth = e.target.innerWidth;
        const posY = ref.current.state.y;
        const posX = ref.current.state.x;
        const width = ~~window
            .getComputedStyle(ref.current.menu)
            .width.replace(/px/g, '');
        const height = ~~window
            .getComputedStyle(ref.current.menu)
            .height.replace(/px/g, '');

        if (posY + height >= availHeight) {
            y = posY - height;
        } else {
            y = posY;
        }

        if (posX + width >= availWidth) {
            x = posX - width;
        } else {
            x = posX;
        }
        ref.current.menu.style.top = `${y}px`;
        ref.current.menu.style.left = `${x}px`;
    };

    const renderTitle = txt => `${txt} ${(<ChevronRightIcon />)}`;

    const handleClick = (e, data) => console.log(data.item);

    return (
        <ContextMenu id={id} ref={ref} onShow={showContext} className='menu'>
            <MenuItem onClick={handleClick} data={{ item: 'add to queue' }}>
                add to queue
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'go to song radio' }}>
                go to song radio
            </MenuItem>

            <Seperate />

            <MenuItem onClick={handleClick} data={{ item: 'go to artist' }}>
                go to artist
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'go to album' }}>
                go to album
            </MenuItem>
            <MenuItem onClick={handleClick} data={{ item: 'show credits' }}>
                show credits
            </MenuItem>

            <Seperate />

            <MenuItem
                onClick={handleClick}
                data={{ item: 'save to your liked songs' }}
            >
                save to your liked songs
            </MenuItem>

            <SubMenu
                // title={renderTitle('add to playlist')}
                title='add to playlist>'
                className='menu__sub'
            >
                <MenuItem onClick={handleClick} data={{ item: 'new playlist' }}>
                    new playlist
                </MenuItem>
            </SubMenu>

            <Divider />

            <SubMenu title='share>' className='menu__sub'>
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
            </SubMenu>
        </ContextMenu>
    );
};

export default Song;

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
