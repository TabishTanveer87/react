import React from 'react';
import Bgimg from '../assets/images/banner/contact-bg.jpg';

import svg1 from '../assets/images/svg/1.svg';
import svg2 from '../assets/images/svg/2.svg';
import svg3 from '../assets/images/svg/3.svg';

function ContactUs() {
    return (
        <div>
            <section class="innerBanner" style={{backgroundImage: `url(${Bgimg})`}}>
                <div class="container wow zoomIn animated" data-wow-delay="0.5s">
                    <h3>Contact Us</h3>
                </div>
            </section>

            <section class="contactSectionInner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 wow fadeInLeft animated" data-wow-delay="0.6s">
                            <div class="conSecInner-cont">
                                <h5>Get in touch with us</h5>

                                <span>Write A Message</span>

                                <p>
                                    Aliq is notm hendr erit a augue insu image pellen tes que id erat quis sollicitud. Lorem ipsum is simply free text dolor sit amet, consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 wow fadeInRight animated" data-wow-delay="0.7s">
                            <div class="conSecInner-form">
                                <div class="conSecInnerForm-head">
                                    <ul>
                                    <li class="current" data-targetit="box-contactUs">
                                        <a href="#">Contact Us</a>
                                    </li>

                                    <li data-targetit="box-volunteer">
                                        <a href="#">Become A volunteer</a>
                                    </li>
                                    </ul>
                                </div>

                                <div class="conSecInnerForm-body">
                                    <div class="box-contactUs showfirst">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="conSecInnerForm-feild">
                                                <input type="text" placeholder="Full Name"/>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="conSecInnerForm-feild">
                                                <input type="email" placeholder="Email Address"/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <input type="number" placeholder="Phone Number"/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <textarea placeholder="Write a Message"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div class="box-volunteer">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="conSecInnerForm-feild">
                                                <input type="text" placeholder="Full Name"/>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="conSecInnerForm-feild">
                                                <input type="email" placeholder="Email Address"/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <input type="number" placeholder="Phone Number"/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <textarea placeholder="Write a Message"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="conSecInnerForm-feild">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>                           
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contactSectionInner-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-4 wow fadeInDown animated" data-wow-delay="0.8s">
                                <div class="contactSectionInner-card" style={{backgroundImage: `url(${svg1})`}}>
                                    <h6>About</h6>

                                    <p>
                                    Lorem ipsum is simply free text dolor sit amet, consectetur adipiscing ullam 
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 wow fadeInDown animated" data-wow-delay="0.9s">
                                <div class="contactSectionInner-card" style={{backgroundImage: `url(${svg2})`}}>
                                    <h6>Address</h6>

                                    <p>
                                    <em><i class="fas fa-map-marker-alt"></i></em>
                                    660 broklyn street , 88 new york, United states of america
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 wow fadeInDown animated" data-wow-delay="1.1s">
                                <div class="contactSectionInner-card" style={{backgroundImage: `url(${svg3})`}}>
                                    <h6>Contact</h6>

                                    <a href="mailto:needhelp@oxpitan.com"> <em><i class="fas fa-envelope"></i></em> needhelp@oxpitan.com</a>
                                    <strong></strong>
                                    <a href="Tel:666888000"> <em><i class="fas fa-phone-alt"></i></em> +666 888 000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
