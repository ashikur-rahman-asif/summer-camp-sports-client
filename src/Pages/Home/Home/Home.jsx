import React from 'react';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Slider from '../Slider/Slider';
import HeroPart from '../HeroPart/HeroPart';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import About from '../About/About';

function Home() {
    return (
        <div>
            <PageTitle title="Home"/>
            <Slider/>
            <PopularClasses />
            <PopularInstructor />
            <HeroPart />
            <About/>
        </div>
    );
}

export default Home;
