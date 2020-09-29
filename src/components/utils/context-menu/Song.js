import React from 'react';

import '../../../Resources/Css/menu.css';

import {
    Menu,
    Item,
    Separator,
    Submenu,
    theme,
    animation,
} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

const Song = ({ id }) => {
    const handleClick = (e, data) => console.log(e, data);

    return (
        <Menu
            id={id}
            theme={theme.dark}
            animation={animation.flip}
            // style={style}
        >
            <Item onClick={handleClick}>add to queue</Item>
            <Item onClick={handleClick}>go to song radio</Item>
            <Item onClick={handleClick}>go to artist</Item>
            <Item onClick={handleClick}>go to album</Item>
            <Item onClick={handleClick}>show credits</Item>

            <Separator />

            <Item onClick={handleClick}>save to your liked songs</Item>

            <Submenu label='add to playlist'>
                <Item onClick={handleClick}>new playlist</Item>
            </Submenu>

            <Separator />

            <Submenu label='share' className='share'>
                <Item onClick={handleClick}>
                    <i>
                        <img
                            src='/Images/social-media/Facebook.png'
                            alt='facebook'
                        />
                    </i>
                    <span>facebook</span>
                </Item>
                <Item onClick={handleClick}>
                    <i>
                        <img
                            src='/Images/social-media/Messenger.png'
                            alt='messenger'
                        />
                    </i>
                    <span>messenger</span>
                </Item>
                <Item onClick={handleClick}>
                    <i>
                        <img
                            src='/Images/social-media/Twitter.png'
                            alt='twitter'
                        />
                    </i>
                    <span>twitter</span>
                </Item>
                <Item onClick={handleClick}>
                    <i>
                        <img
                            src='/Images/social-media/Telegram.png'
                            alt='telegram'
                        />
                    </i>
                    <span>telegram</span>
                </Item>
                <Item onClick={handleClick}>
                    <i>
                        <img src='/Images/social-media/Skype.png' alt='skype' />
                    </i>
                    <span>skype</span>
                </Item>
                <Item onClick={handleClick}>
                    <i>
                        <img
                            src='/Images/social-media/Tumblr.png'
                            alt='Tumblr'
                        />
                    </i>
                    <span>Tumblr</span>
                </Item>
                <Item onClick={handleClick}>
                    <i></i>
                    spotify code
                </Item>
                <Item onClick={handleClick}>
                    <i></i>
                    copy song link
                </Item>
                <Item onClick={handleClick}>
                    <i></i>
                    copy spotify uri
                </Item>
            </Submenu>
        </Menu>
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
share > 
        facebook
        twitter
        telegram
        skype
        copy song link
        copy spotify uri
*/
