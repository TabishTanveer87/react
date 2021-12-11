import React from 'react';
import '../App.css';

import logo from '../assets/images/logo.png';

function Header() {
    return (
        <div>
            <header class=" wow fadeIn animated" data-wow-delay="0.5s">
                <div class="main-header">
                    <div class="container">
                        <div class="menu-Bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                        <div class="row align-items-start">
                        <div class="col-md-3 text-left">
                            <a href="./" class="logo">
                            <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div class="col-md-9 text-right">
                            <div class="top-head">
                            <ul>
                                <li>
                                <a href="mailto:care@scope360.com">
                                    <span><i class="fas fa-envelope"></i></span>
                                    <em>care@Scope360.com</em>
                                </a>
                                </li>

                                <li>
                                <a href="Tel:0515170729">
                                    <span><i class="fas fa-phone-volume"></i></span>
                                    <em>(051) 5170729</em>
                                </a>
                                </li>
                            </ul>
                            </div>

                            <div class="menuWrap">
                            <ul class="menu">
                            <li class="active"><a href="./">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="what-we-do">We Help With</a></li>
                            {/* <!-- <li><a href="#">Donate Now</a></li> --> */}
                            <li><a href="#">Products</a></li>
                            <li><a href="contact-us">Contact Us</a></li>
                            <li class="menu-btn mn-btn"><a href="#">Donate Now</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
