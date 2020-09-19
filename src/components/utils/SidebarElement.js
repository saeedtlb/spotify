import React from 'react';

import { Link } from 'react-router-dom';

const SidebarElement = ({ Icon = null, txt, style, id }) => {
    return (
        <div className='side_option' key={id}>
            {Icon ? <Icon /> : null}
            {Icon ? (
                <span style={style}>{txt}</span>
            ) : (
                <Link to={`/playlist/${id}`}>
                    <p style={style}>{txt}</p>
                </Link>
            )}
        </div>
    );
};

export default SidebarElement;
