import Navbar from './navbar/Navbar'
import React, { useEffect, useState } from 'react';



function Header(){

/* const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if(window.pageYOffset > 0) {
      setIsSticky(true);
    }else{
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) */


    return(
        <div>
            <Navbar class='nav' />
        </div>
    );
}

export default Header;