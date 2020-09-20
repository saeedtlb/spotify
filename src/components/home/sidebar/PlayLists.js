import React, { useMemo } from 'react';

import Options from '../../utils/Options';

import { useStateValue } from '../../DataLayer';

const PlayLists = () => {
    console.log('playlist sidebar');
    const [{ playlists }] = useStateValue();

    return <Options title='playlists' options={playlists} />;
};

export default PlayLists;
