import React from 'react';
import CustomLink from './CostumLink';
import DropDown from './DropDown';
import Logo from './Logo';

export default function Navbar(){
    return(
        <nav className='nav'>
        <Logo to="/" text="KŐSZEGI KATICA" />
            <ul className=''>
                <CustomLink to="/" text="HOME" />
                <CustomLink to="/portfolio" text="PORTFOLIO" />
                <CustomLink to="/gallery" text="GALLERY" />
                <CustomLink to="#" text="|" />
                <span className='dropdown'>
                        <span className='dropdown-link'>ABOUT</span>
                    <div className='dropdown-content'>
                        <DropDown />
                    </div>
                </span>                
            </ul>
        </nav>
    );
}