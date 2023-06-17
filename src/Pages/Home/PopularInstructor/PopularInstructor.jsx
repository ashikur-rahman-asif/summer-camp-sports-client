import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Container from '../../../Components/Container/Container';
import Spinner from '../../../Components/Spinner/Spinner';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import PopularInstructorCard from './PopularInstructorCard';

function PopularInstructor() {
    const [popularInstructor, setPopularInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://12-server-virid.vercel.app/popular-instructor').then((res) => {
            setPopularInstructor(res.data);
            setLoading(false);
        });
    }, []);
    return (
        <div className="my-16">
            <Container>
                <div>
                    <SectionTitle
                        title="Our popular Instructors"
                        subtitle="Encounter our popular instructor, a beacon of brilliance and charisma, guiding us to transcend the ordinary and discover the extraordinary."
                    />
                    {loading ? (
                        <Spinner />
                    ) : (
                        
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 my-10">
                                {popularInstructor?.map((instructor) => (
                                    <PopularInstructorCard key={instructor._id}
                                    instructor={instructor}
                                    />
                                    
                                ))}
                            </div>
                        
                    )}
                </div>
            </Container>
        </div>
    );
}

export default PopularInstructor;
