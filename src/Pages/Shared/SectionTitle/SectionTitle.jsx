import React from 'react';

function SectionTitle({ title, subtitle }) {
    return (
        <div className=" mx-auto text-center md:w-4/12 my-8">
            <h1 className="text-3xl lg:text-3xl uppercase font-bold dark:text-white text-dark-grey  ">
                {title}
            </h1>
            <p className="text-xl mt-1 text-slate-600 dark:text-gray-300 border-b-8 py-4">{subtitle}</p>
            
        </div>
    );
}

export default SectionTitle;
