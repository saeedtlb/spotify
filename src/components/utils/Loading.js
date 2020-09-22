import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => (
    <div className='loading'>
        <CircularProgress thickness={7} />
    </div>
);

export default Loading;
