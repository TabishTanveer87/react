import React from 'react';
import Banner from './Banner';
import About from './About';
import Counter from './Counter';
import Changes from './Changes';
import Donate from './Donate';
import Client from './Client';

function Home() {
    return (
        <div>
            <Banner/>
            <About/>
            <Counter/>
            <Changes/>
            <Donate/>
            <Client/>
        </div>
    )
}

export default Home
