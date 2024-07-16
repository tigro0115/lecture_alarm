import React from 'react'
import Logo from '../header/Logo';
import headerImage from '../../assets/img/Clouds-Wallpaper.jpg';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <img src={headerImage} alt="header background" className="header__img" />
            <Logo />
        </header>
    )
}

export default Header