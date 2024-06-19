import React from 'react';

const Banner = ({image, title}) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold mb-4 uppercase">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;