import React from 'react';

const abc = `${window.location.origin.toString()}/`;

function AboutCard({img, tbt}) {
    return (
        <div class="col-md-3 wow fadeInDown animated" data-wow-delay="0.3s">
            <div class="about-card">
                <div class="aboutCard-img">
                    <img src={abc+img} alt=""/>
                </div>

                <p>
                    {tbt}
                </p>
            </div>
        </div>
    )
}

export default AboutCard
