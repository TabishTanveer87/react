import React from 'react';
import AboutCard from './AboutCard';


import Img1 from '../assets/images/img1.jpg';
import Img2 from '../assets/images/img2.jpg';
import Map from '../assets/images/map.png';


const aboutCard = [
    {img:"assets/images/logo1.png", text:"Funding the medical expenses and bills of unfortunate families."},
    {img:"assets/images/logo2.png", text:"Aiding people in finding the righteous proposals in compliance with Islamic sharia."},
    {img:"assets/images/logo3.png", text:"Help spread accurate knowledge and educating people about the teachings of Islam."},
    {img:"assets/images/logo4.png", text:"Providing resources and raising funds for the less fortunate and underprivileged."},
    {img:"assets/images/logo5.png", text:"Assisting people with free legal advice and helping them win legal battles."},
    {img:"assets/images/logo6.png", text:"We believe in free basic education and have been helping several children get it."},
    
];




function about() {
    return (
        <section class="aboutSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="about-cont about-cont1 mn-btn wow fadeInLeft animated" data-wow-delay="0.3s">
                            <h5>About Us</h5>
                            <h6>Helping people to pursue <br/> their dreams</h6>
                            <p>We have a noble cause to solve people’s monetary and domestic issues by educating, assisting, and serving people.</p>

                            <a href="#">Contact Now</a>
                        </div>
                    </div>

                    <div class="col-md-3 pr-2 wow fadeInDown animated" data-wow-delay="0.3s">
                        <div class="aboutTop-img">
                            <img src={Img1} alt=""/>

                            <div class="aboutTop-img-hd">
                                <h6>We’re here to support humanity every step of the way.</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 pl-2 wow fadeInDown animated" data-wow-delay="0.7s">
                        <div class="aboutTop-img">
                            <img src={Img2} alt=""/>

                            <div class="aboutTop-img-hd">
                                <h6>We’re here to support humanity every step of the way.</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 wow zoomIn animated" data-wow-delay="0.6s">
                        <div class="aboutCenter-img">
                            <img src={Map} alt=""/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="about-cont about-cont-center wow fadeInRight animated" data-wow-delay="0.3s">
                            <h5>Mision & Vision</h5>
                            <h6>Aiding humanity as much as possible has and will be our mission.</h6>
                            <p>Our vision is to reduce suffering in society. We are driven by motivation and passion for eliminating the problems of people. The key points of our vision are:</p>

                            <ul>
                                <li>Spread the right knowledge of Islam</li>
                                <li>Remove illiteracy from the society</li>
                                <li>Financial and medical aid for everyone</li>
                                <li>Free legal assistance for people in dire situations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="about-cont aboutBottom-hd text-center wow bounceInDown animated" data-wow-delay="0.5s">
                            <h5>About Us</h5>
                            <span>Working to provide maximum relief to the society</span>
                            <h5>Our Humanitarian Services</h5>
                        </div>
                    </div>
                    
                    {
                        aboutCard.map((txt, i)=>{
                            return (
                                <AboutCard img={txt.img} tbt={txt.text}/>
                            );
                        })
                    }

                    <div class="col wow zoomIn animated" data-wow-delay="0.3s">
                        <div class="aboutlastCard">
                            <img src="assets/images/img3.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about
