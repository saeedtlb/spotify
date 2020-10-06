import React from 'react';

import { Link } from 'react-router-dom';

const SidebarElement = ({ Icon = null, txt, style, id }) => {
    const regex = /^(recently played|podcasts|local files)$/i;
    return (
        <div className='side_option' key={id}>
            {Icon ? (
                <Link to={txt === 'home' ? '/' : `/${txt}`}>
                    <Icon />
                    <span style={style}>{txt}</span>
                </Link>
            ) : regex.test(txt) ? (
                <Link to={`/${txt.replace(' ', '-')}`}>
                    <p style={style}>{txt}</p>
                </Link>
            ) : (
                <Link to={`/playlist/${id}`}>
                    <p style={style}>{txt}</p>
                </Link>
            )}
        </div>
    );
};

export default SidebarElement;
