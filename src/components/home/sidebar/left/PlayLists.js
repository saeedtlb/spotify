import React from 'react';

import Options from '../../../utils/Options';

import { useSongStateValue } from '../../../DataLayer';

const PlayLists = () => {
    const [{ playlists }] = useSongStateValue();

    return <Options title='playlists' options={playlists} />;
};

export default PlayLists;
