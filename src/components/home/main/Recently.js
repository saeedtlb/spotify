import React, { useState, useEffect } from 'react';

import '../../../Resources/Css/recently.css';

import { recently_played } from '../../../Actions/song';
import { useSongStateValue } from '../../DataLayer';

import Card from '../../utils/Card';
import Loading from '../../utils/Loading';

const Recently = () => {
    const [loading, setLoading] = useState([true, null]);
    const [{ recently }, dispatch] = useSongStateValue();

    useEffect(() => {
        if (recently.length > 0) {
            setLoading([false, null]);
        } else {
            recently_played()
                .then(data => dispatch(data))
                .catch(err => {
                    console.log('Recently' + err);
                    setLoading([false, 'somthing went wrong in getting data']);
                });
        }

        return () =>
            recently_played(true).catch(err =>
                console.log('unmount recently' + err)
            );
    }, [recently.length]);

    const renderCards = () =>
        recently.map(song => (
            <Card
                key={song.id}
                url={song.image}
                name={song.name}
                type='song'
                song_type={song.type}
                linkTo=''
                artists={song.artists.join(', ')}
            />
        ));

    return (
        <>
            {loading[0] ? (
                <Loading />
            ) : loading[1] ? (
                <div className='error'>
                    <h1>{loading[1]}</h1>
                </div>
            ) : (
                <div className='recently_played'>{renderCards()}</div>
            )}
        </>
    );
};

export default Recently;
