import React, { useState } from 'react';

// STYLE
import "../CSS/History.css";

// ICONS
import { FaSquare } from "react-icons/fa";

// IMAGES
import mainBG from "../assets/img2.jpg";
import img1 from "../assets/img3.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img5.jpg";
import img4 from "../assets/img6.jpg";

const History = () => {

    const imgArry = [mainBG, img1, img2, img3, img4];

    const [image, setImage] = useState(img1);

    const silderImages = imgArry.filter((img) => img !== image);

    return (
        <div id="history-section" className='History'>

            <div className='background-image' style={{  backgroundImage: `URL(${image})` }} >

                <div className='text'>

                    <div className='top-text'>
                        <p className='num'>01</p>

                        <div className='texts'>
                            <p>History</p>
                            <FaSquare />
                        </div>
                    </div>

                    <p className='bottom-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque et beatae dignissimos dolorem quia fugiat labore aspernatur exercitationem totam ea neque quis ad eveniet quibusdam explicabo, quisquam incidunt consequuntur ab impedit eum deserunt a. Sed provident beatae facere cum dolorem maiores harum? Facilis tempore ex aut. Itaque.
                    </p>

                </div>

                <div className='images'>

                    {
                        silderImages.map((img) => {
                            return <img
                                onClick={() => setImage(img)}
                                className='slider-images'
                                src={img} alt='IMAGE' />
                        })
                    }

                </div>

            </div>
        </div>
    );
}

export default History;