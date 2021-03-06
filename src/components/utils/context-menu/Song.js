import React, { useRef } from 'react';

import '../../../Resources/Css/menu.css';

import { SONG, ARTIST } from '../../../Actions/types';
import { qrCode } from '../../../Actions/song';
import { useSongStateValue } from '../../DataLayer';

import {
    Menu,
    Item,
    Separator,
    Submenu,
    theme,
    animation,
} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

import songItem from './json/song.json';
import artistItem from './json/artist.json';
import share from './json/share.json';

const Song = ({ id }) => {
    const [{ song }, dispatch] = useSongStateValue();
    const copyText = useRef(null);

    const handleClick = ({ props }) => {
        console.log(props);
        if (props.txt === 'spotify code') {
            const txt = props.ref.innerText ? props.ref.innerText : '';
            dispatch(qrCode(true, txt));
        }
        switch (props.txt) {
            case 'spotify code':
                const txt = props.ref.innerText ? props.ref.innerText : '';
                dispatch(qrCode(true, txt));
                break;
            case 'copy song link':
                const input = copyText.current;
                input.focus();
                input.select();
                navigator.clipboard
                    .writeText(input.value)
                    .then(() => console.log('coppied successfully'))
                    .catch(() => console.log('Failed to copied'));
                break;
            default:
                console.log('not implemented yet');
                break;
        }
    };

    const render_items = arr =>
        arr
            ? arr.map((item, i) => (
                  <React.Fragment key={i}>
                      <Item onClick={handleClick} data={{ txt: item.key }}>
                          {item.txt}
                      </Item>
                      {id === SONG && i === 4 ? <Separator /> : null}
                      {id === ARTIST && (i === 0 || i === 2) ? (
                          <Separator />
                      ) : null}
                  </React.Fragment>
              ))
            : null;

    const render_share_items = () =>
        share
            ? share.map((item, i) => (
                  <Item key={i} onClick={handleClick} data={{ txt: item.txt }}>
                      <i>{item.url ? <img src={item.url} alt='' /> : null}</i>
                      <span>{item.txt}</span>
                  </Item>
              ))
            : null;

    return (
        <>
            <Menu
                id={id}
                theme={theme.dark}
                animation={animation.flip}
                className='context-menu'
            >
                {id === SONG
                    ? render_items(songItem)
                    : id === ARTIST
                    ? render_items(artistItem)
                    : null}

                {id === SONG ? (
                    <>
                        <Submenu label='add to playlist'>
                            <Item
                                onClick={handleClick}
                                data={{ txt: 'new playlist' }}
                            >
                                new playlist
                            </Item>
                        </Submenu>
                        <Separator />
                    </>
                ) : null}

                <Submenu label='share' className='context-menu__share'>
                    {render_share_items()}
                </Submenu>
            </Menu>
            <input
                type='hidden'
                value={song.link ? song.link : 'No url provided'}
                ref={copyText}
            />
        </>
    );
};

export default Song;
