import React from 'react';

import Options from '../../utils/Options';

const Library = () => {
    const element_txt = ['recently played', 'podcasts', 'local files'];

    return <Options title='your library' options={element_txt} />;
};

export default Library;
