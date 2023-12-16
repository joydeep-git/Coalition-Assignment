import React, { useState } from 'react';
import { Link } from 'react-scroll';

// CSS
import "../CSS/Team.css";

// IMAGE
import img1 from "../assets/img7.jpg";
import img2 from "../assets/img5.jpg";
import LOGO from "../assets/logo.jpg";

// ICONS
import { FaSquare, FaRegCopyright } from 'react-icons/fa';

const Team = () => {

    const [selected, setSelected] = useState(1);

    return (
        <div id="team-section" className='Team'>

            <div className='top-part'>

                <div className='top-left' >
                    <p className='left'>02</p>

                    <div className='right'>
                        <p>CLIMB</p>
                        <FaSquare />
                    </div>
                </div>

                <p className='top-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cupiditate eaque maiores odit impedit possimus velit atque accusamus nulla,</p>

            </div>


            <div className='bottom-part'>

                <div className='bottom-top'>

                    <div className='link-containers'>
                        <p
                            className={selected === 1 ? "selected" : null}
                            onClick={() => setSelected(1)}>MOUNTAIN 1
                        </p>

                        <p
                            className={selected === 2 ? "selected" : null}
                            onClick={() => setSelected(2)}>
                            MOUNTAIN 2
                        </p>
                    </div>

                </div>

                <div
                    className='bottom-mid'
                    style={
                        { backgroundImage: `URL(${selected === 1 ? img1 : img2})` }}>
                    <div className="schedule">
                        <div className="schedule-header">
                            Schedule
                        </div>

                        <div className="event-group first-group">

                            <div className="event">
                                <div className="event-date">
                                    {selected === 1 ? '25 NOV 2016' : null}
                                    {selected === 2 ? '29 DEC 2016' : null}
                                </div>
                                <div className="event-description">
                                    {selected === 1 ? 'Vestibulam Vierra' : null}
                                    {selected === 2 ? 'Lorem Ipsum' : null}
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">
                                    {selected === 1 ? '25 NOV 2016' : null}
                                    {selected === 2 ? '29 DEC 2016' : null}
                                </div>
                                <div className="event-description">
                                    {selected === 1 ? 'Vestibulam Vierra' : null}
                                    {selected === 2 ? 'Lorem Ipsum' : null}
                                </div>
                            </div>
                        </div>

                        <div className="event-group second-group">

                            <div className="event">
                                <div className="event-date">
                                    {selected === 1 ? '25 NOV 2016' : null}
                                    {selected === 2 ? '29 DEC 2016' : null}
                                </div>
                                <div className="event-description">
                                    {selected === 1 ? 'Vestibulam Vierra' : null}
                                    {selected === 2 ? 'Lorem Ipsum' : null}
                                </div>
                            </div>

                            <div className="event">
                                <div className="event-date">
                                    {selected === 1 ? '25 NOV 2016' : null}
                                    {selected === 2 ? '29 DEC 2016' : null}
                                </div>
                                <div className="event-description">
                                    {selected === 1 ? 'Vestibulam Vierra' : null}
                                    {selected === 2 ? 'Lorem Ipsum' : null}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bottom-last">
                    <Link to="Home" className='logo-holder' smooth={true} duration={500}>

                        <img src={LOGO} alt="LOGO" className='logo' style={{ width: "2rem" }} />

                        <p className='text'>
                            <span className='la'>LOSANGELES</span>
                            <span className='mn'>MOUNTAINS</span>
                        </p>

                    </Link>

                    <p className='copyright'><FaRegCopyright /> COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>

            </div>

        </div>
    );
}

export default Team;