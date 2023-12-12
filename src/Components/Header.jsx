import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

// CSS
import "../CSS/Header.css";

// IMAGE and LOGO
import LOGO from "../assets/logo.jpg";

function Header() {

    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsTextVisible(true)
            } else {
                setIsTextVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className='Header'>

            <Link to="Home" className='img-holder' smooth={true} duration={500}>

                <img src={LOGO} alt="LOGO" className='logo' />

                <p className='text' style={{opacity: isTextVisible ? "1" : 0}}>
                    <span className='la'>LOSANGELES</span>
                    <span className='mn'>MOUNTAINS</span>
                </p>

            </Link>

            <div className='links'>
                <Link to="history-section" className='history link' smooth={true} duration={500}>01.  History</Link>
                <Link to="team-section" className='team link' smooth={true} duration={500}>02.  Team</Link>
            </div>

        </nav>
    );
}

export default Header;