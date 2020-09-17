import React from 'react';

import '../../Resources/Css/card.css';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Card = ({ url, name, description, id }) => {
    return (
        <div className='card' key={id}>
            <section className='cover'>
                {url ? (
                    <img src={url} alt='playlist cover' />
                ) : (
                    <img src='/Images/no_image.png' alt='playlist cover' />
                )}
                <div className='mask'>
                    <FavoriteBorderIcon />
                    <PlayCircleOutlineIcon />
                    <MoreHorizIcon />
                </div>
            </section>
            <div className='details'>
                <p className='name'>{name}</p>
                {description ? (
                    <p className='description'>{description}</p>
                ) : null}
            </div>
        </div>
    );
};

export default Card;
