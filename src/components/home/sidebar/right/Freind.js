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
        backgroundColor: '#182131',
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
        // const main = document.querySelector('.main');
        // if (!show) {
        //     ref.current.style.gridColumn = '3/4';
        //     main.style.gridColumn = '2/3';
        // } else {
        //     ref.current.style.gridColumn = 'auto';
        //     main.style.gridColumn = '2/4';
        // }

        // console.log(ref.current.style.gridColumn);
        setShow(prev => !prev);
    };

    return (
        <Drawer
            anchor='right'
            open={show}
            variant='persistent'
            className='drawer'
        >
            {show ? (
                <DoubleArrowRoundedIcon
                    style={drawer_button.close}
                    onClick={() => handleClick()}
                />
            ) : (
                <DoubleArrowRoundedIcon
                    style={drawer_button.open}
                    onClick={() => handleClick()}
                />
            )}
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

        // <div className='freind' ref={ref}>
        //     {show ? (
        //         <DoubleArrowRoundedIcon
        //             style={drawer_button.close}
        //             onClick={() => handleClick()}
        //         />
        //     ) : (
        //         <DoubleArrowRoundedIcon
        //             style={drawer_button.open}
        //             onClick={() => handleClick()}
        //         />
        //     )}
        //     <Drawer
        //         anchor='right'
        //         open={show}
        //         variant='persistent'
        //         className='drawer'
        //     >
        //         <div className='user'>
        //             {image ? (
        //                 <Avatar src={image.url} alt={display_name} />
        //             ) : display_name ? (
        //                 <Avatar style={{ backgroundColor: '#46DB70' }}>
        //                     {display_name.slice(0, 2).toUpperCase()}
        //                 </Avatar>
        //             ) : null}
        //             <span>{display_name}</span>
        //         </div>

        //         <div className='activity'>
        //             <h3>freind activity</h3>
        //             <div className='find_user'>
        //                 <p>see what your freinds are playing</p>
        //                 <button onClick={() => console.log('click')}>
        //                     find freinds
        //                 </button>
        //             </div>
        //         </div>
        //     </Drawer>
        // </div>
    );
};

export default Freind;
