import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SidebarElement from '../../utils/SidebarElement';

const Library = () => {
    const [show, setShow] = useState(true);

    return (
        <div className='library'>
            <div className='title' onClick={() => setShow(prev => !prev)}>
                <h3>your library</h3>
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Collapse in={show} timeout='auto' unmountOnExit>
                <SidebarElement txt='recently played' />
                <SidebarElement txt='podcasts' />
                <SidebarElement txt='local files' />
            </Collapse>
        </div>
    );
};

export default Library;
