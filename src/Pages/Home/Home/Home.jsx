import React from 'react';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Slider from '../Slider/Slider';

function Home() {
    return (
        <div>
            <Slider/>
            <PopularClasses />
            <PopularInstructor />
        </div>
    );
}

export default Home;
