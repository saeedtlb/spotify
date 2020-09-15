import React from 'react';

const SidebarElement = ({ Icon = null, txt, style }) => {
    return (
        <div className='side_option'>
            {Icon ? <Icon /> : null}
            {Icon ? (
                <span style={style}>{txt}</span>
            ) : (
                <p style={style}>{txt}</p>
            )}
        </div>
    );
};

export default SidebarElement;
