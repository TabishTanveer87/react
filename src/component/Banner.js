import React from 'react';

import BgBanner from '../assets/images/banner/bg-banner.jpg';
import Logo1 from '../assets/images/logo1.png';
import Logo2 from '../assets/images/logo2.png';
import Logo3 from '../assets/images/logo3.png';
import Logo4 from '../assets/images/logo4.png';



function banner() {
    return (
        <section class="mainBanner" style={{ backgroundImage: `url(${BgBanner})` }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="banner-cont text-left mn-btn wow fadeInLeft animated" data-wow-delay="0.3s">
                            <h2>Serving the Society</h2>

                            <h1>
                                Committed to support the society & serve the humanity.
                            </h1>

                            <a href="#">Contact Now</a>
                        </div>
                    </div>
                </div>

                <div class="banner-icon wow_imgage wow zoomIn" data-wow-delay="0.6s">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Logo1} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo2} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo3} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Logo4} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>                
            </div>
        </section>
    )
}

export default banner;
