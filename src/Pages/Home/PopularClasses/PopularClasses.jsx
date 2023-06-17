import React, { useEffect, useState } from 'react';
import Container from '../../../Components/Container/Container';

import Spinner from '../../../Components/Spinner/Spinner';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ClassCard from './ClassCard';

function PopularClasses() {
    const [popularClasses, setPopularClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/popular-class')
            .then((res) => res.json())
            .then((data) => {
                setPopularClasses(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mt-14">
            <Container>
                <SectionTitle
                    title="Popular Classes"
                    subtitle="Explore our classes"
                />
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {popularClasses?.map((classes) => (
                            <ClassCard key={classes._id} classes={classes} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default PopularClasses;
