import React from 'react';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Slider from '../Slider/Slider';
import HeroPart from '../HeroPart/HeroPart';

function Home() {
    return (
        <div>
            <Slider/>
            <PopularClasses />
            <PopularInstructor />
            <HeroPart/>
        </div>
    );
}

export default Home;
