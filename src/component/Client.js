// import React, { Component } from "react";
// import Slider from "react-slick";



// export default class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2
//     });
//   }

//   render() {

//     const settings = {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         asNavFor: '.slider-for',
//         dots: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             } 
//         ]
//     };

//     const settings1 = {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: false,
//         arrows: false,
//         asNavFor: '.slider-nav'
//     };

//     return (
//         <section class="clientSection" style={{backgroundImage: `url(${bgImg})`}}>
//             <div class="container">
//                 <Slider {...settings1}  className="slider-for wow zoomIn animated" data-wow-delay="0.3s" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} >
//                     {
//                         clientCardDate.map((data, i)=>{
//                             console.log(data);
//                             return(
//                                 <ClientCard img={data.image} text={data.text} text1={data.text1}/>
//                             );
//                         })
//                     }
//                 </Slider>              

//                 <div class="clientSec-nav wow zoomIn animated" data-wow-delay="0.3s">
//                     <Slider {...settings} className="slider-nav" asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={5} swipeToSlide={true} focusOnSelect={true}  centerMode={true} centerPadding={"20px"}>
//                         <li>
//                             <img src="assets/images/user1.png" alt=""/>
//                         </li>

//                         <li>
//                             <img src="assets/images/user2.png" alt=""/>
//                         </li>

//                         <li>
//                             <img src="assets/images/user3.png" alt=""/>
//                         </li>

//                         <li>
//                             <img src="assets/images/user4.png" alt=""/>
//                         </li>

//                         <li>
//                             <img src="assets/images/user5.png" alt=""/>
//                         </li>
//                         <li>
//                             <img src="assets/images/user1.png" alt=""/>
//                         </li>
//                     </Slider>
//                 </div>
//              </div>
//          </section>
//     );
//   }
// }

import React from 'react';
import ClientCard from './ClientCard';

import bgImg from '../assets/images/banner/tes-bg.jpg';

const clientCardDate = [
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
    {
        image:"/assets/images/icon.png", 
        text:"InSymbiosis is a strategic drug development partner for the biopharma industry. By combining uniquely structured investment deals, cutting-edge cost reduction strategies and a smart outsourcing platform, we help our partners advance their programs towards key clinical and financial milestones.", 
        text1:"Dantley Davis, ",
        text2:" Design Director at ",
        text3:" immentia"
    },
];

function Client() {
    return (
        <section class="clientSection" style={{backgroundImage: `url(${bgImg})`}}>
            <div class="container">
                <ul class="slider-for wow zoomIn animated" data-wow-delay="0.3s">
                    {
                        clientCardDate.map((data, i)=>{
                            console.log(data);
                            return(
                                <ClientCard img={data.image} text={data.text} text1={data.text1} text2={data.text2} text3={data.text3}/>
                            );
                        })
                    }
                </ul>                  

                <div class="clientSec-nav wow zoomIn animated" data-wow-delay="0.3s">
                <ul class="slider-nav">
                    <li>
                        <img src="assets/images/user1.png" alt=""/>
                    </li>

                    <li>
                        <img src="assets/images/user2.png" alt=""/>
                    </li>

                    <li>
                        <img src="assets/images/user3.png" alt=""/>
                    </li>

                    <li>
                        <img src="assets/images/user4.png" alt=""/>
                    </li>

                    <li>
                        <img src="assets/images/user5.png" alt=""/>
                    </li>
                    <li>
                        <img src="assets/images/user1.png" alt=""/>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Client
