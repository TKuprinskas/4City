import React, { useState } from 'react';
import { menuItems } from './MenuItems';
import './Navbar.css';
import { Image } from 'components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((clicked) => !clicked);
    };

    return (
        <div className="navContainer">
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <div className="logo">
                        <Link to="/">
                            {' '}
                            <Image src="logo" alt="logo"></Image>
                        </Link>
                    </div>
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked ? <IoMdClose color="white" /> : <GiHamburgerMenu color="white" />}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
