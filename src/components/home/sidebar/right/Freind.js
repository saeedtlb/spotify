import React, { useState, useRef } from 'react';

import '../../../../Resources/Css/freind.css';

import { useUserStateValue } from '../../../DataLayer';

import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

const drawer_button = {
    open: {
        transform: 'rotate(180deg) translate(80%, -30%)',
        backgroundColor: '#fff',
        borderRadius: '0 50% 50% 0',
        cursor: 'pointer',
    },
    close: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '0 50% 50% 0',
        cursor: 'pointer',
    },
};

const Freind = () => {
    const ref = useRef();
    const [show, setShow] = useState(true);
    const [{ display_name, image }] = useUserStateValue();

    const handleClick = () => {
        ref.current.classList.toggle('close');
        setShow(prev => !prev);
    };

    return (
        <div className='freind' ref={ref}>
            <div
                className='right_side_icon'
                data-status={show ? 'open' : 'close'}
            >
                {show ? (
                    <DoubleArrowRoundedIcon onClick={() => handleClick()} />
                ) : (
                    <DoubleArrowRoundedIcon onClick={() => handleClick()} />
                )}
            </div>
            <Drawer
                anchor='right'
                open={show}
                variant='persistent'
                className='drawer'
            >
                <div className='user'>
                    {image ? (
                        <Avatar src={image.url} alt={display_name} />
                    ) : display_name ? (
                        <Avatar style={{ backgroundColor: '#46DB70' }}>
                            {display_name.slice(0, 2).toUpperCase()}
                        </Avatar>
                    ) : null}
                    <span>{display_name}</span>
                </div>

                <div className='activity'>
                    <h3>freind activity</h3>
                    <div className='find_user'>
                        <p>see what your freinds are playing</p>
                        <button onClick={() => console.log('click')}>
                            find freinds
                        </button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Freind;
