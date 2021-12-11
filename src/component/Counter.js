import React from 'react';

import bgimage from '../assets/images/banner/about-bg.jpg';

function Counter() {
    return (
        <section class="counterSection" style={{ backgroundImage: `url(${bgimage})` }}>
         <div class="container">
            <div class="row">
                <div class="col-md-3 wow fadeInDown animated" data-wow-delay="0.3s">
                    <div class="counter-cont">
                        <span>20</span>
                        <em>Years of Experience</em>
                    </div>
                </div>

                <div class="col-md-3 wow fadeInDown animated" data-wow-delay="0.5s">
                    <div class="counter-cont">
                        <span>346</span>
                        <em>Number of Consultants</em>
                    </div>
                </div>

                <div class="col-md-3 wow fadeInDown animated" data-wow-delay="0.7s">
                    <div class="counter-cont">
                        <span>130</span>
                        <em>Awards Winning</em>
                    </div>
                </div>

                <div class="col-md-3 wow fadeInDown animated" data-wow-delay="0.9s">
                    <div class="counter-cont">
                        <span>95</span>
                        <em>Satisfied Clients</em>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Counter
