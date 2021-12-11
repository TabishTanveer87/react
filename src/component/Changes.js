import React from 'react';

import Bgimg from '../assets/images/art.jpg';

function Changes() {
    return (
        <section class="changesSection">
            <div class="container">
                <div class="changes-hd wow bounceInDown animated" data-wow-delay="0.3s">
                    <h6>
                        We Help With
                    </h6>

                    <h5>
                        Changing lives and bringing happiness
                    </h5>
                </div>

                <div class="changes-nav wow fadeInLeft animated" data-wow-delay="0.4s">
                    <ul>
                        <li class="current" data-targetit="box1">
                            <a href="#">Adal o Insaf</a>
                        </li>
                        <li data-targetit="box2">
                            <a href="#">Free Medical</a>
                        </li>
                        <li data-targetit="box3">
                            <a href="#">Education for Poor children</a>
                        </li>
                        <li data-targetit="box4">
                            <a href="#">Helping Hands</a>
                        </li>
                        <li data-targetit="box5">
                            <a href="#">Islamic Leaders</a>
                        </li>
                        <li data-targetit="box6">
                            <a href="#">Islamic Match</a>
                        </li>
                    </ul>
                </div>

                <div class="changes-card text-left wow fadeInUp animated" data-wow-delay="0.3s" style={{backgroundImage: `url(${Bgimg})`}}>
                    <h6>Islamic Match</h6>

                    <p>
                        Your donation can help someone in need. Even a small amount can make a big change. Connect with our organization for details Have any question about donation?
                    </p>

                    <ul>
                        <li class="mn-btn">
                            <a href="#">
                                Contact Now
                            </a>
                        </li>
                        <li class="mn-btn">
                            <a href="#">
                                Become A Volunteer
                            </a>
                        </li>
                        <li class="calltoaction-btn">
                            <a href="Tel:0515170729">
                                <span><i class="fas fa-phone-volume"></i></span>
                                <em>(051) 5170729</em>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Changes
