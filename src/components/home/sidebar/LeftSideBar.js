import React from 'react';

import '../../../Resources/Css/leftSideBar.css';

import SidebarElement from '../../utils/SidebarElement';
import Library from './Library';
import PlayLists from './PlayLists';

import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import WifiTetheringSharpIcon from '@material-ui/icons/WifiTetheringSharp';

const LeftSideBar = () => {
    const original = [
        { icon: HomeIcon, txt: 'home' },
        { icon: ComputerIcon, txt: 'browse' },
        { icon: WifiTetheringSharpIcon, txt: 'radio' },
    ];

    const renderMainItems = () =>
        original.map((item, i) => (
            <SidebarElement
                key={i}
                txt={item.txt}
                Icon={item.icon}
                style={{ textTransform: 'uppercase', marginLeft: '10px' }}
                id={i}
            />
        ));

    return (
        <div className='left_bar'>
            <div className='logo'>
                <img src='/Images/SpotifyGreen.png' alt='logo' />
            </div>
            <div className='navigation'>
                <div className='original'>{renderMainItems()}</div>
                <Library />
                <PlayLists />
            </div>
        </div>
    );
};

export default LeftSideBar;
