import React from 'react';

import { Link } from 'react-router-dom';

const SidebarElement = ({ Icon = null, txt, style, id }) => {
    return (
        <div className='side_option' key={id}>
            {Icon ? (
                <Link to='/browse'>
                    <Icon />
                    <span style={style}>{txt}</span>
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
