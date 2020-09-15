import React from 'react';

import Options from '../../utils/Options';

import { useStateValue } from '../../DataLayer';

const PlayList = () => {
    const [{ playlists }] = useStateValue();
    return <Options title='playlists' options={playlists} />;
};

export default PlayList;
