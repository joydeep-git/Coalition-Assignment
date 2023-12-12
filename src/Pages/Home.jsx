import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

// STYLE
import "../CSS/Home.css";

// COMPONENTS
import Team from './Team';
import History from './History';

// IMAGES
import img1 from "../assets/img1.jpg";

const Home = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldAnimate = scrollPosition < 100; // Adjust the threshold as needed

        controls.start({ opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? -50 : 0, scale: shouldAnimate ? 0.8 : 1 });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">

            <Link to="Home" smooth={true} duration={500}>

                <div
                    id="Home"
                    className="background-image"
                    style={{ backgroundImage: `url(${img1})` }}>

                    <motion.div
                        className="centered-text"
                        initial={{ opacity: 1, y: -50, scale: 0.8 }}
                        animate={controls} >

                        <span className='los'>LOSANGELES</span>

                        <span className='moun'>MOUNTAINS</span>

                    </motion.div>

                </div>
            </Link>

            <History />

            <Team />
        </div>
    );
}

export default Home;