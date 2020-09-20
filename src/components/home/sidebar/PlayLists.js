import React from 'react';

import Options from '../../utils/Options';

import { useStateValue } from '../../DataLayer';

const PlayLists = () => {
    const [{ playlists }] = useStateValue();

    return <Options title='playlists' options={playlists} />;
};

export default PlayLists;
