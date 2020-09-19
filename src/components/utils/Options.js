import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarElement from './SidebarElement';

const Options = ({ title, options }) => {
    const [show, setShow] = useState(true);

    const renderLists = () =>
        options
            ? options.map(row => (
                  <SidebarElement
                      txt={row.name ? row.name : row}
                      id={row.id ? row.id : row.txt}
                      key={row.id ? row.id : row.txt}
                  />
              ))
            : null;
    return (
        <div className='option'>
            <div className='title' onClick={() => setShow(prev => !prev)}>
                <h3>{title}</h3>
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <div className='scroll'>
                <Collapse in={show} timeout='auto' unmountOnExit>
                    {renderLists()}
                </Collapse>
            </div>
        </div>
    );
};

export default Options;
