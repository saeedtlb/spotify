import React from 'react';

import SettingsInputAntennaSharpIcon from '@material-ui/icons/SettingsInputAntennaSharp';

const SidebarElement = ({ Icon = null, txt }) => {
    return (
        <div className='side_option'>
            {Icon ? <Icon /> : null}
            <span>{txt}</span>
        </div>
    );
};

export default SidebarElement;
