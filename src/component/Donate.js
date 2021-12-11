import React from 'react';
import Bgimg from '../assets/images/banner/donate-bg.jpg';

function Donate() {
    return (
        <section class="donateSection" style={{backgroundImage: `url(${Bgimg})`}}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 wow fadeInLeft animated" data-wow-delay="0.3s">
                        <div class="donate-cont text-left">
                            <h5>Donate</h5>
                            <em>Working to provide maximum relief to the society</em>
                            <h6>Let’s join hands to save humanity</h6>

                            <p>Your donation can help someone in need. Even a small amount can make a big change. Connect with our organization for details Have any question about donation?</p>

                            <div class="donate-call">
                                <span><i class="fas fa-phone-volume"></i></span>
                                <strong>
                                Have any question about donation?
                                <br/>
                                Call us now: 
                                <a href="Tel:0515170729">(051) 5170729</a>
                                </strong>                     
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 wow fadeInRight animated" data-wow-delay="0.5s">
                        <div class="donate-form">
                            <div class="donateForm-hd">
                                <h6>Start donating now</h6>
                            </div>
                            <form>
                                <div class="donateForm-feild">
                                <input type="text" placeholder="Your Name"/>
                                </div>

                                <div class="donateForm-feild">
                                <input type="email" placeholder="Your Email"/>
                                </div>

                                <div class="donateForm-feild">
                                <input type="number" placeholder="Your Number"/>
                                </div>

                                <div class="donateForm-feild">
                                <input type="text" placeholder="Desired Donation"/>
                                </div>

                                <div class="donateForm-feild-btn">
                                <a href="Tel:0515170729">
                                    <em>Call us now:</em>
                                    (051) 5170729
                                </a>

                                <button type="submit">Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>                  
                </div>
            </div>   
        </section>
    )
}

export default Donate
