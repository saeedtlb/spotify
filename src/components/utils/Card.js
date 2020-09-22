import React from 'react';

import '../../Resources/Css/card.css';

import { Link } from 'react-router-dom';

// import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Card = ({ url, name, description = null, linkTo }) => {
    return (
        <div className='card'>
            <Link to={linkTo} className='cover'>
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
            </Link>
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
