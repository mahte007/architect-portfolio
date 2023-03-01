import React, { useEffect, useState } from 'react';
import Burger from '../hamburger/Burger';
import CustomLink from './CostumLink';
import DropDown from './DropDown';
import Logo from './Logo';

export default function Navbar(props){
    const [isActive, setIsActive] = useState(false);
    const [isWidth, setIsWidth] = useState(false);

    const toggleHamburger = () => {
        setIsActive(!isActive);
    }
    
    const handleScreenWidth = () => {
        if(window.innerWidth > 991){
            setIsWidth(true);
        }else{
            setIsWidth(false);
        }
    }

    useEffect(() => {
        handleScreenWidth();
    }, [])

    return(
        <nav className={props.class}>
            <Logo to="/" text="KŐSZEGI KATICA" />
            
            <ul className={isActive ? 'active' : ''}>
                <CustomLink to="/" text="HOME" />
                <CustomLink to="/portfolio" text="PORTFOLIO" />
                <CustomLink to="/gallery" text="GALLERY" />
                {isWidth ? <CustomLink to="#" text="|" /> : ''}
                <span className='dropdown'>
                        <span className='dropdown-link'>ABOUT</span>
                        <div className='dropdown-content'>
                            <DropDown />
                        </div>
                </span>                
            </ul>
            <Burger toggle={toggleHamburger} />
        </nav>
    );
}